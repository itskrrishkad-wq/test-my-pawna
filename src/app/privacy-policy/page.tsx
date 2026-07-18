export const metadata = {
  title: "Privacy Policy | Camp Booking",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-gray-50 px-4 py-12">
      <section className="mx-auto max-w-3xl rounded-xl bg-white p-6 shadow">
        <h1 className="text-2xl font-semibold mb-4">Privacy Policy</h1>

        <p className="text-sm text-gray-700 mb-4">
          We respect your privacy and are committed to protecting your personal
          information.
        </p>

        <p className="text-sm text-gray-700 mb-4">
          Any information collected during booking is used strictly for
          reservation and communication purposes only.
        </p>

        <p className="text-sm text-gray-700 mb-4">
          <strong>Payments & Cancellation:</strong> Payment-related information
          is handled securely. Please note that advance payments are strictly
          non-refundable in case of cancellation, regardless of the reason.
        </p>

        <p className="text-sm text-gray-600">
          By using our website and services, you agree to this privacy policy.
        </p>
      </section>
    </main>
  );
}
