const benefits = [
  "Get a customized AI marketing plan for your business",
  "Identify marketing gaps that may be limiting your leads and sales",
  "Discover practical AI marketing opportunities for your business",
  "Receive clear next steps you can apply to your marketing",
  "Gain more clarity on how to improve your marketing strategy",
];

export default function Benefits() {
  return (
    <section className="mx-auto w-full max-w-6xl px-5 py-10 sm:px-6 lg:px-8 lg:py-14">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-500">
          How you benefit from this consultation
        </p>
        <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
          Clear value, simple next steps.
        </h2>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {benefits.map((benefit, index) => (
          <article
            key={benefit}
            className="rounded-[1.6rem] border border-white/70 bg-white/80 p-6 shadow-sm"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold-100 text-lg font-bold text-ink-950">
              {index + 1}
            </div>
            <p className="mt-5 text-lg leading-8 text-ink-800">{benefit}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
