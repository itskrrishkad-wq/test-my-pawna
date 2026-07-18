export const metadata = {
  title: "Safety Guidelines | Camp Booking",
};

export default function SafetyGuidelinesPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <section className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow">
        <h1 className="text-2xl font-semibold mb-4">Safety Guidelines</h1>

        <ul className="list-disc pl-5 text-sm text-gray-700 space-y-3">
          <li>
            Guests must follow all campsite rules and staff instructions at all
            times.
          </li>
          <li>
            Any damage to property or unsafe behavior may result in immediate
            eviction without refund.
          </li>
          <li>
            Participation in activities is at the guest&apos;s own risk.
          </li>
          <li>
            Alcohol, smoking, or prohibited activities must follow campsite
            rules.
          </li>
          <li>
            <strong>
              Removal from the camp due to safety violations will not be eligible
              for any refund.
            </strong>
          </li>
        </ul>

        <p className="text-sm text-gray-600 mt-4">
          Safety compliance is mandatory. Failure to follow guidelines cancels
          eligibility for refunds of any kind.
        </p>
      </section>
    </main>
  );
}
