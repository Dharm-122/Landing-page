import type { Metadata } from "next";
import Header from "@/components/Header";

const whatsappUrl = process.env.NEXT_PUBLIC_WHATSAPP_URL?.trim() ?? "";

export const metadata: Metadata = {
  title: "Thank You",
  description: "Your free AI marketing consultation request has been received.",
  openGraph: {
    title: "Thank You | Dharm-the digital room",
    description: "Your free AI marketing consultation request has been received.",
    url: "/thank-you",
    images: [
      {
        url: "/og-image.svg",
        width: 1200,
        height: 630,
        alt: "Dharm-the digital room",
      },
    ],
  },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <section className="mx-auto flex w-full max-w-4xl flex-col gap-8 px-5 pb-16 pt-10 sm:px-6 lg:px-8">
        <div className="glass-panel animate-rise rounded-[2rem] border border-white/70 p-8 shadow-soft sm:p-10">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 inline-flex rounded-full border border-gold-200 bg-gold-50 px-4 py-2 text-sm font-semibold text-ink-900">
              You are in
            </p>
            <h1 className="font-serif text-4xl font-bold tracking-tight text-ink-950 sm:text-6xl">
              Your free AI marketing consultation request has been received.
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-ink-700">
              Thank you for booking your consultation. Your request has been
              submitted successfully.
            </p>
          </div>

          <div className="mt-10 rounded-[1.75rem] border border-dashed border-ink-300 bg-white/80 p-5 shadow-sm">
            <p className="text-center text-sm font-semibold uppercase tracking-[0.24em] text-ink-500">
              Watch the video below
            </p>
            <div className="mt-5 overflow-hidden rounded-[1.5rem] border border-ink-200 bg-ink-950 shadow-soft">
              <div className="aspect-video bg-[radial-gradient(circle_at_top,_rgba(245,205,85,0.26),_transparent_40%),linear-gradient(135deg,_#0f172a_0%,_#111827_55%,_#1f2937_100%)] p-6 text-white">
                <div className="flex h-full items-center justify-center rounded-[1.2rem] border border-white/10 bg-white/5 text-center">
                  <div className="max-w-md">
                    <div className="mx-auto mb-4 flex h-18 w-18 items-center justify-center rounded-full border border-gold-200 bg-gold-300/95 text-ink-950 shadow-glow">
                      <span className="text-2xl font-black">▶</span>
                    </div>
                    <p className="text-lg font-semibold">
                      Dummy video placeholder
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/75">
                      Replace this block with your real video embed when you are
                      ready. For now, it shows the exact premium layout the page
                      will use.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <p className="mt-4 text-center text-sm text-ink-600">
              Before our consultation, please watch the short video above. It
              will help you understand how the consultation works, what we&apos;ll
              cover, and how to get the most value from our time together.
            </p>
          </div>
        </div>

        <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[1.8rem] border border-white/70 bg-white/75 p-7 shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-500">
              What you&apos;ll get during your consultation
            </p>
            <ul className="mt-5 space-y-4 text-lg text-ink-700">
              <li>• A one-to-one discussion about your business</li>
              <li>• A review of your current marketing</li>
              <li>
                • A customized AI marketing plan based on your business goals
              </li>
              <li>• Practical recommendations you can start using</li>
            </ul>
          </div>

          <div className="rounded-[1.8rem] border border-ink-200 bg-ink-950 p-7 text-white shadow-soft">
            <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-200">
              Have questions before the call?
            </p>
            <p className="mt-4 text-lg leading-8 text-white/80">
              If you&apos;d like to ask a question, share information about your
              business, or simply introduce yourself, send me a message on
              WhatsApp.
            </p>
            <p className="mt-4 text-lg leading-8 text-white/80">
              The more I know about your business beforehand, the more
              personalized your consultation will be.
            </p>

            {whatsappUrl ? (
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-gold-300 px-6 py-4 text-base font-bold text-ink-950 transition hover:bg-gold-200"
              >
                Chat on WhatsApp
              </a>
            ) : (
              <div className="mt-6 rounded-2xl border border-white/15 bg-white/6 p-4 text-sm text-white/70">
                Add your WhatsApp click-to-chat URL in
                <span className="font-semibold text-white">
                  {" "}
                  NEXT_PUBLIC_WHATSAPP_URL{" "}
                </span>
                to show the button here.
              </div>
            )}
          </div>
        </section>

        <div className="rounded-[1.8rem] border border-gold-200 bg-gold-50 p-7 text-center shadow-sm">
          <p className="font-serif text-3xl font-bold text-ink-950">
            See you soon.
          </p>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-7 text-ink-700">
            I&apos;m looking forward to learning about your business and helping
            you discover practical AI marketing opportunities. Thank you again
            for booking your free consultation.
          </p>
        </div>
      </section>
    </main>
  );
}
