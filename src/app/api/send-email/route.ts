// app/api/send-booking-email/route.ts   (or pages/api/send-booking-email.ts for Pages Router)
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { format } from "date-fns";

// === Configure Nodemailer Transporter (once at module level) ===
const transporter = nodemailer.createTransport({
  service: "gmail",
  secure: process.env.NODE_ENV === "production",
  auth: {
    user: process.env.SMTP_USER, // your email
    pass: process.env.SMTP_PASS, // your password / app password / API key
  },
});

// Optional: verify connection on startup (good for dev/prod)
if (process.env.NODE_ENV !== "production") {
  transporter.verify().catch(console.error);
}

export async function POST(req: NextRequest) {
  try {
    const {
      name,
      lname,
      email,
      phone,
      checkIn,
      checkOut,
      guests,
      kids,
      selectedPackage,
      calculatedAmount,
    } = await req.json();

    // Basic validation (you can expand this)
    if (!name || !email || !phone || !checkIn || !checkOut) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const user_info = {
      name,
      lname,
      email,
      phone,
      checkIn,
      checkOut,
      guests,
      kids,
      selectedPackage,
      calculatedAmount,
    };

    const fixDate = (d: Date) => {
      const date = new Date(d);
      date.setDate(date.getDate() + 1); // force local date without timezone shift
      console.log({ date });
      return date;
    };
    const checkInDate = new Date(checkIn);
    const checkOutDate = new Date(checkOut);

    const fixedCheckIn = new Date(checkInDate.toDateString());
    const fixedCheckOut = new Date(checkOutDate.toDateString());

    const formattedCheckIn = format(
      fixDate(fixedCheckIn),
      "MMM dd yyyy - EEEE"
    );
    const formattedCheckOut = format(
      fixDate(fixedCheckOut),
      "MMM dd yyyy - EEEE"
    );

    console.log({ formattedCheckIn, formattedCheckOut });

    const packageName =
      typeof selectedPackage === "object"
        ? selectedPackage?.name
        : selectedPackage;

    const whatsappReadyText = `
New Booking Inquiry

Name: ${name} ${lname}
Email: ${email}
Phone: ${phone}

Package: ${packageName || "Not specified"} (${selectedPackage.price}/person)
Total Amount: ₹${calculatedAmount?.toLocaleString("en-IN") || "N/A"}

Check-In: ${formattedCheckIn}
Check-Out: ${formattedCheckOut}

Adults: ${guests}
Kids: ${kids}

Please confirm availability.
`.trim();

    const mailBody = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <style>
    * {box-sizing: border-box;}
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 10px; background: #f9f9f9; }
    h2 { color: #2c5282; }
    table { width: 100%; margin: 15px 0; }
    td { padding: 8px 0; }
    .label { font-weight: bold; width: 140px; }
    .copy-btn {
      background: #25d366;
      color: white;
      padding: 12px 20px;
      border: none;
      border-radius: 8px;
      font-size: 16px;
      cursor: pointer;
      margin: 20px 0;
      display: inline-block;
    }
    .copy-btn:hover { background: #1da851; }
    .footer { margin-top: 30px; font-size: 12px; color: #888; }
    .hidden { display: none; }
    .text-box {
    width: 100%;
    height: max-content;
    background: #f3f7ff;
    border: 1px solid #d0e2ff;
    padding: 15px;
    margin-top: 25px;
    border-radius: 10px;
    color: #1a2b4b;
    font-size: 14px;
    white-space: pre-wrap;
    word-break: break-word;
    overflow-y: auto;
    line-height: 1.5;
  }
  </style>
</head>
<body>
  <div class="container">
    <h2>New Booking Inquiry</h2>
    <table>
      <tr><td class="label">Name:</td><td>${name} ${lname}</td></tr>
      <tr><td class="label">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
      <tr><td class="label">Phone:</td><td><a href="tel:${phone}">${phone}</a></td></tr>
      <tr><td class="label">Package:</td><td>${
        packageName || "Not specified"
      } (${selectedPackage.price}/person)</td></tr>
      <tr><td class="label">Amount:</td><td><strong>₹${
        calculatedAmount?.toLocaleString("en-IN") || "N/A"
      }</strong></td></tr>
      <tr><td class="label">Check-In:</td><td>${formattedCheckIn}</td></tr>
      <tr><td class="label">Check-Out:</td><td>${formattedCheckOut}</td></tr>
      <tr><td class="label">Adults:</td><td>${guests}</td></tr>
      <tr><td class="label">Kids:</td><td>${kids}</td></tr>
    </table>

    <a class="copy-btn" href="https://wa.me/?text=${whatsappReadyText}">
      Copy WhatsApp Message
    </a>

    <p><em>Click the green button above → Open WhatsApp → Paste & Send!</em></p>

    <div class="footer">
      This message was sent from your website booking form.
      </div>
      <textarea id="whatsappText" class="text-box">${whatsappReadyText}</textarea>
  </div>

  <!-- Hidden textarea with WhatsApp-ready text -->


</body>
</html>
`.trim();

    // Send the email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to: process.env.SMTP_USER,
      subject: `New Booking – ${name} ${lname} For (${formattedCheckIn})`,
      html: mailBody,
      text: whatsappReadyText, // plain text fallback (also perfect for WhatsApp)
    });

    return NextResponse.json(
      { success: true, message: "Booking email sent successfully", user_info },
      { status: 200 }
    );
  } catch (error) {
    console.error("Nodemailer error:", error);

    return NextResponse.json(
      {
        success: false,
        error:
          process.env.NODE_ENV === "development"
            ? error
            : "Failed to send email",
      },
      { status: 500 }
    );
  }
}
