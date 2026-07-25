export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 premium-grid opacity-40" />
      <div className="absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-gold-200/28 blur-3xl" />
      <div className="absolute right-[-8rem] top-24 h-72 w-72 rounded-full bg-white/80 blur-3xl" />

      <div className="relative mx-auto flex w-full max-w-6xl flex-col items-center px-5 pb-8 pt-14 text-center sm:px-6 sm:pt-20 lg:px-8 lg:pt-24">
        <div className="animate-rise max-w-3xl">
          <p className="mb-5 inline-flex rounded-full border border-gold-200 bg-white/90 px-4 py-2 text-sm font-semibold text-ink-900 shadow-sm">
            Free AI marketing consultation for small and medium business owners
          </p>

          <h1 className="font-serif text-5xl font-bold tracking-tight text-ink-950 sm:text-6xl lg:text-7xl">
            Get your free{" "}
            <span className="text-gold-500">AI marketing consultation</span> and
            receive a customized AI marketing plan for your business.
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-ink-700 sm:text-xl">
            Discover what&apos;s holding your marketing back and get a
            personalized action plan designed to help you generate more leads
            and sales.
          </p>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-ink-600">
            This consultation is for small and medium business owners who are
            struggling to sell their products or services.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#lead-form"
              className="inline-flex w-full items-center justify-center rounded-full bg-gold-300 px-8 py-4 text-base font-bold text-ink-950 shadow-glow transition hover:-translate-y-0.5 hover:bg-gold-200 sm:w-auto"
            >
              Book Free Consultation
            </a>
          </div>
        </div>

        <div className="mt-10 grid w-full gap-4 sm:mt-14 sm:grid-cols-3">
          {[
            "One-to-one consultation",
            "Customized AI marketing plan",
            "Practical recommendations you can use",
          ].map((item) => (
            <div
              key={item}
              className="rounded-[1.4rem] border border-white/70 bg-white/70 px-5 py-4 text-sm font-semibold text-ink-800 shadow-sm"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
