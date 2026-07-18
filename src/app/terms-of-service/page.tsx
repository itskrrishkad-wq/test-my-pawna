export const metadata = {
  title: "Terms of Service | Camp Booking",
};

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <section className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow">
        <h1 className="text-2xl font-semibold mb-4">Terms of Service</h1>

        <p className="text-sm text-gray-700 mb-4">
          By confirming a booking, you agree to all the terms mentioned below.
        </p>

        <h2 className="font-medium text-lg mt-4 mb-2">
          Advance Payment & Cancellation
        </h2>

        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">
          <li>
            An advance payment is mandatory to confirm any booking.
          </li>
          <li>
            <strong>
              The advance amount once paid is strictly non-refundable under all
              circumstances.
            </strong>
          </li>
          <li>
            No refunds will be provided for cancellations, no-shows, or early
            departures.
          </li>
          <li>
            In case the guest is unable to attend, the booking amount will be
            forfeited.
          </li>
        </ul>

        <p className="text-sm text-gray-600 mt-4">
          Completing the booking confirms that you have read, understood, and
          accepted these terms.
        </p>
      </section>
    </main>
  );
}
