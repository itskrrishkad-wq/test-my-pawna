"use client";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { CalendarDays, Gift, Users } from "lucide-react";
import { useState } from "react";
import { Badge } from "./ui/badge";

const phoneNumber = process.env.NEXT_PUBLIC_CALL_PHONE_NO;

const packages = [
  {
    name: "Regular Tent Stay",
    price: "₹999",
    amount: 999,
    originalPrice: "₹1200",
    savings: "₹201",
    includes: [
      "Cozy dome-style tent stay",
      "Panoramic lake & nature views",
      "Suitable for 2 guests",
      "Comfortable & scenic camping experience",
    ],
    description:
      "Immersive dome-style tent offering panoramic views and a cozy, relaxed stay perfect for couples or small groups.",
  },
  {
    name: "Triangle Tent Stay",
    price: "₹1500",
    amount: 1500,
    originalPrice: "₹2000",
    savings: "₹500",
    includes: [
      "Stylish triangle tent stay",
      "Warm lighting & romantic interiors",
      "Suitable for 4 guests",
      "Perfect for couples seeking comfort",
    ],
    description:
      "A stylish and cozy triangle tent with a serene lakeside view, ideal for couples who want a comfortable and romantic nature escape.",
  },
  {
    name: "Deluxe Cottage Experience",
    price: "₹2999",
    amount: 2999,
    originalPrice: "₹3600",
    savings: "₹601",
    includes: [
      "Luxurious cottage stay",
      "Elegant interiors & private washroom",
      "Modern amenities",
      "Perfect for couples & families",
    ],
    description:
      "Premium lakeside cottages with modern interiors, private washrooms, and a cozy, relaxing atmosphere for couples & families.",
  },
];

const BookingWidget = () => {
  const [name, setName] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState(2);
  const [kids, setKids] = useState(0);
  const [selectedPackage, setSelectedPackage] = useState(packages[0]);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any

  const calculatedAmount = selectedPackage.amount
    ? selectedPackage.amount * guests
    : 6000;

  const send_whatsapp = async () => {
    try {
      // const priceBreakdown = [
      //   `Base Price: ₹${total_guest_price}`,
      //   kids5To12 && `Kids (5-12): ₹${kids5To12 * 1000}`,
      //   kidsAbove12 && `Kids (above 12): ₹${kidsAbove12 * 1750}`,
      // ]
      //   .filter(Boolean)
      //   .join("\n");

      const message_text = `
🌿 Availability Request - Pawna Lake Camping

👤 Guest Details
Name: ${name} ${lname}
Phone: ${phone}
Email: ${email}

📅 Stay Dates
Check-in: ${checkIn ? format(checkIn, "dd MMM yyyy") : "-"}
Check-out: ${checkOut ? format(checkOut, "dd MMM yyyy") : "-"}

👨‍👩‍👧 Guests
Adults: ${guests}
Kids (below 10): ${kids}




🏕️ Selected Package
Accommodations: ${selectedPackage.name}

💸 Price Breakdown
${calculatedAmount}



💰 Total Amount: ₹${calculatedAmount}

✨ Looking forward to hosting you!
`;

      window.open(
        `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message_text)}`,
        "_blank",
      );

      // reset
      setName("");
      setLname("");
      setEmail("");
      setPhone("");
      setGuests(2);
      setKids(0);
      setSelectedPackage(packages[0]);
    } catch (err) {
      console.log(err);
    }
  };

  const isDisabled =
    !name ||
    !lname ||
    !email ||
    !phone ||
    !guests ||
    !checkIn ||
    !checkOut ||
    !selectedPackage.name;
  return (
    <section id="bookings" className="py-20 px-6 lg:px-12 bg-secondary">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-playfair font-bold text-stone mb-6">
            Your Adventure Awaits
          </h2>
          <p className="text-xl text-stone/80 font-poppins">
            Book your perfect escape, and we&apos;ll get in touch with you soon.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <h3 className="text-2xl font-playfair font-bold text-stone mb-6">
              Choose Your Package
            </h3>
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`w-full cursor-pointer transition-all duration-300 rounded-3xl border-2 hover:shadow-xl p-0 ${
                  selectedPackage.name === pkg.name
                    ? "border-moss bg-[#4caf50]/5 shadow-lg scale-105"
                    : "border-gray-200 hover:border-moss/50"
                }`}
                onClick={() => setSelectedPackage(pkg)}
              >
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-xl font-playfair font-bold text-stone">
                        {pkg.name}
                      </h4>
                      {index !== 2 && (
                        <div className="flex items-center space-x-2 mt-2">
                          <Gift className="w-4 h-4 text-coral" />
                          <span className="text-coral font-semibold">
                            Save {pkg.savings}/per
                          </span>
                        </div>
                      )}
                    </div>
                    {index !== 2 ? (
                      <div className="text-right">
                        <div className="text-xl sm:text-2xl font-bold text-moss">
                          {pkg.price}/per
                        </div>
                        <div className="text-sm text-stone/60 line-through">
                          {pkg.originalPrice}/per
                        </div>
                      </div>
                    ) : (
                      <Badge>Booked</Badge>
                    )}
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {pkg.includes.map((item, idx) => (
                      <div
                        key={idx}
                        className="text-sm text-stone/80 font-poppins"
                      >
                        ✓ {item}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="rounded-3xl shadow-2xl border-0 bg-white gap-0">
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-playfair text-stone">
                Reserve Your Escape
              </CardTitle>
            </CardHeader>
            <CardContent className="w-full p-8 pt-0">
              <div className="grid max-sm:grid-cols-1 grid-cols-2 gap-4 mb-6">
                {/* Name */}
                <div className="w-full">
                  <label className="block text-sm font-semibold text-stone mb-2 font-poppins">
                    Name
                  </label>
                  <input
                    placeholder="Name"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition-colors"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                {/* Last Name */}
                <div className="w-full">
                  <label className="block text-sm font-semibold text-stone mb-2 font-poppins">
                    Last Name
                  </label>
                  <input
                    placeholder="Last Name"
                    value={lname}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition-colors"
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
                {/* E-Mail */}
                <div className="w-full">
                  <label className="block text-sm font-semibold text-stone mb-2 font-poppins">
                    E-mail
                  </label>
                  <input
                    placeholder="example@gmail.com"
                    type="email"
                    value={email}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition-colors"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="w-full">
                  <label className="block text-sm font-semibold text-stone mb-2 font-poppins">
                    Phone No.
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 1122334455"
                    value={phone}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition-colors"
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                {/* Check-in Date */}
                <div className="w-full">
                  <label className="block text-sm font-semibold text-stone mb-2 font-poppins">
                    Check-in
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal rounded-2xl h-12 border-2 hover:border-moss"
                      >
                        <CalendarDays className="mr-2 h-4 w-4 text-moss" />
                        {checkIn
                          ? format(checkIn, "MMM dd yyyy")
                          : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-white"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={checkIn}
                        onSelect={setCheckIn}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        disabled={(date: any) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0); // set to start of today
                          return date < today;
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>

                {/* Check-out Date */}
                <div className="w-full">
                  <label className="block text-sm font-semibold text-stone mb-2 font-poppins">
                    Check-out
                  </label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal rounded-2xl h-12 border-2 hover:border-moss"
                      >
                        <CalendarDays className="mr-2 h-4 w-4 text-moss" />
                        {checkOut
                          ? format(checkOut, "MMM dd yyyy")
                          : "Select date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent
                      className="w-auto p-0 bg-white"
                      align="start"
                    >
                      <Calendar
                        mode="single"
                        selected={checkOut}
                        onSelect={setCheckOut}
                        // eslint-disable-next-line @typescript-eslint/no-explicit-any
                        disabled={(date: any) => {
                          const today = new Date();
                          today.setHours(0, 0, 0, 0); // set to start of today
                          return date < today;
                        }}
                      />
                    </PopoverContent>
                  </Popover>
                </div>
              </div>

              {/* Guests */}
              <div className="mb-6">
                <label className="block text-sm font-semibold text-stone mb-2 font-poppins">
                  Adults
                </label>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setGuests(Math.max(1, guests - 1))}
                    className="rounded-full w-12 h-12 border-2 hover:border-moss select-none"
                  >
                    -
                  </Button>
                  <div className="flex-1 text-center font-semibold bg-gray-50 py-3 rounded-2xl border-2">
                    <Users className="inline mr-2 h-4 w-4 text-moss" />
                    {guests} Guests
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setGuests(guests + 1)}
                    className="rounded-full w-12 h-12 border-2 hover:border-moss select-none"
                  >
                    +
                  </Button>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-stone mb-2 font-poppins">
                  Kids (Bellow 10 years)
                </label>
                <div className="flex items-center space-x-3">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setKids(Math.max(0, kids - 1))}
                    className="rounded-full w-12 h-12 border-2 hover:border-moss select-none"
                  >
                    -
                  </Button>
                  <div className="flex-1 text-center font-semibold bg-gray-50 py-3 rounded-2xl border-2">
                    <Users className="inline mr-2 h-4 w-4 text-moss" />
                    {kids} Kids
                  </div>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setKids(kids + 1)}
                    className="rounded-full w-12 h-12 border-2 hover:border-moss select-none"
                  >
                    +
                  </Button>
                </div>
              </div>

              {/* Promo Code */}
              {/* <div className="mb-6">
                <label className="block text-sm font-semibold text-stone mb-2 font-poppins">
                  Discount Code (if available)
                </label>
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={""}
                    onChange={() => {}}
                    placeholder="Enter code"
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-2xl focus:outline-none focus:border-moss transition-colors"
                  />
                  <Button className="h-max bg-coral hover:bg-coral/90 text-white px-6 py-4 rounded-2xl">
                    Apply
                  </Button>
                </div>
              </div> */}

              <div className="bg-gradient-to-r from-skyblue/10 to-moss/10 rounded-2xl py-6 space-y-4">
                {/* Package Name + Price */}
                <div className="flex justify-between items-center">
                  <span className="font-poppins font-semibold  sm:text-lg">
                    {selectedPackage.name}
                  </span>
                  <span className="font-bold sm:text-lg text-moss">
                    {selectedPackage.price}/person
                  </span>
                </div>

                {/* Per Person Savings */}
                <div className="flex justify-between items-center">
                  <span className="font-poppins text-sm text-gray-700">
                    You Save (per person)
                  </span>
                  <span className="font-semibold text-green-600">
                    {selectedPackage.savings}
                  </span>
                </div>

                {/* Total Savings */}
                <div className="border-t border-gray-300 pt-4 flex justify-between items-center">
                  <span className="font-poppins font-semibold text-sm">
                    Total Savings ({guests} guests)
                  </span>
                  <span className="text-xl font-extrabold text-green-700">
                    ₹{parseInt(selectedPackage.savings.split("₹")[1]) * guests}
                  </span>
                </div>

                {/* Total Amount */}
                <div className="pt-1 flex justify-between items-center">
                  <span className="font-poppins font-bold text-base">
                    Your Total
                  </span>
                  <span className="text-3xl font-extrabold text-moss">
                    ₹{calculatedAmount}
                  </span>
                </div>

                {/* Highlighted Savings Banner */}
                <div className="bg-green-100 text-green-700 text-sm p-2 rounded-md font-poppins text-center font-semibold">
                  🎉 You&apos;re getting a steal! You saved ₹
                  {parseInt(selectedPackage.savings.split("₹")[1]) * guests} on
                  this package!
                </div>
              </div>

              {/* <p className="text-sm text-start text-stone/60 my-1.5 font-poppins">
                Please review all terms and guidelines before booking;
                confirmation indicates your agreement.
              </p> */}

              {/* Book Button */}
              <Button
                className="w-full h-max bg-moss hover:bg-[var(--color-moss)]/90 text-white text-base md:text-lg py-4 rounded-2xl shadow-xl font-bold cursor-pointer"
                onClick={send_whatsapp}
                disabled={
                  selectedPackage.name === "Deluxe Cottage Experience" ||
                  checkIn?.getDate() === 31 ||
                  isDisabled
                }
              >
                {`Send Inquiry – ₹${calculatedAmount}`}
              </Button>

              <p className="text-sm text-center text-stone/60 mt-4 font-poppins">
                We&apos;ll get in touch within 15 minutes.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;
