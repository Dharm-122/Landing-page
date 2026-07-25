const steps = [
  {
    title: "Step 1",
    body: "Book your free consultation by completing the form below.",
  },
  {
    title: "Step 2",
    body: "Meet one-to-one to discuss your business, current marketing, and goals.",
  },
  {
    title: "Step 3",
    body: "Receive your customized AI marketing plan with practical recommendations for your business.",
  },
];

export default function Process() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-500">
          Consultation process
        </p>
        <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
          A simple three-step flow.
        </h2>
      </div>

      <div className="mt-8 grid gap-4 lg:grid-cols-3">
        {steps.map((step) => (
          <article
            key={step.title}
            className="rounded-[1.6rem] border border-white/70 bg-gradient-to-b from-white to-cream-50 p-6 shadow-sm"
          >
            <p className="font-serif text-2xl font-bold text-gold-500">
              {step.title}
            </p>
            <p className="mt-4 text-lg leading-8 text-ink-800">{step.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
