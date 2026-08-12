"use client";

import { useEffect, useRef } from "react";
import { useRouter } from "next/navigation";

declare global {
  interface Window {
    fd?: (...args: any[]) => void;
    FlodeskObject?: string;
  }
}

const FORM_ID = "6a7c7933a7eb185e80b45e68";
const ROOT_SELECTOR = `.ff-${FORM_ID}`;
const EMBED_PATH = "/flodesk-embed.html";
const REDIRECT_DELAY_MS = 1500;

function ensureFlodeskAssets() {
  if (!document.querySelector('link[data-flodesk-style="preload"]')) {
    const preload = document.createElement("link");
    preload.rel = "preload";
    preload.href = "https://assets.flodesk.com/flodesk-sans.css";
    preload.as = "style";
    preload.setAttribute("data-flodesk-style", "preload");
    document.head.append(preload);
  }

  if (!document.querySelector('link[data-flodesk-style="sheet"]')) {
    const stylesheet = document.createElement("link");
    stylesheet.rel = "stylesheet";
    stylesheet.href = "https://assets.flodesk.com/flodesk-sans.css";
    stylesheet.setAttribute("data-flodesk-style", "sheet");
    document.head.append(stylesheet);
  }

  if (!document.querySelector('script[data-flodesk-universal="module"]')) {
    const version = `?v=${Math.floor(Date.now() / (120 * 1000)) * 60}`;
    const moduleScript = document.createElement("script");
    moduleScript.async = true;
    moduleScript.type = "module";
    moduleScript.src = `https://assets.flodesk.com/universal.mjs${version}`;
    moduleScript.setAttribute("data-flodesk-universal", "module");
    document.head.append(moduleScript);
  }

  if (!document.querySelector('script[data-flodesk-universal="nomodule"]')) {
    const version = `?v=${Math.floor(Date.now() / (120 * 1000)) * 60}`;
    const legacyScript = document.createElement("script");
    legacyScript.async = true;
    legacyScript.noModule = true;
    legacyScript.src = `https://assets.flodesk.com/universal.js${version}`;
    legacyScript.setAttribute("data-flodesk-universal", "nomodule");
    document.head.append(legacyScript);
  }
}

function loadFlodesk(root: HTMLElement, onSuccess: () => void) {
  ensureFlodeskAssets();

  const start = () => {
    if (typeof window.fd !== "function") return false;

    window.fd("form:handle", {
      formId: FORM_ID,
      rootEl: ROOT_SELECTOR,
    });

    const observer = new MutationObserver(() => {
      if (root.getAttribute("data-ff-stage") === "success") {
        observer.disconnect();
        onSuccess();
      }
    });

    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-ff-stage"],
    });

    if (root.getAttribute("data-ff-stage") === "success") {
      observer.disconnect();
      onSuccess();
    }

    return true;
  };

  if (start()) return;

  const poll = window.setInterval(() => {
    if (start()) {
      window.clearInterval(poll);
    }
  }, 150);

  window.setTimeout(() => {
    window.clearInterval(poll);
  }, 10000);
}

export default function CTAForm() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    let cancelled = false;

    const run = async () => {
      const response = await fetch(EMBED_PATH, { cache: "no-store" });
      const html = await response.text();

      if (cancelled || !containerRef.current) return;

      containerRef.current.innerHTML = html;
      const root = containerRef.current.querySelector<HTMLElement>(ROOT_SELECTOR);

      if (!root) return;

      loadFlodesk(root, () => {
        if (timerRef.current) {
          window.clearTimeout(timerRef.current);
        }

        timerRef.current = window.setTimeout(() => {
          router.push("/thanks");
        }, REDIRECT_DELAY_MS);
      });
    };

    void run();

    return () => {
      cancelled = true;
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [router]);

  return (
    <section
      id="lead-form"
      className="mx-auto w-full max-w-4xl px-5 pb-20 pt-10 sm:px-6 lg:px-8"
    >
      <div className="rounded-[2rem] border border-white/70 bg-white/85 p-6 shadow-soft sm:p-8 lg:p-10">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-gold-500">
            Book the call
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold tracking-tight text-ink-950 sm:text-4xl">
            Complete the form below to book your free consultation.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-ink-600 sm:text-lg">
            Share a few details about your business so we can prepare a more
            useful conversation.
          </p>
        </div>

        <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-ink-200 bg-white shadow-sm">
          <div ref={containerRef} className="flodesk-shell" />
        </div>

        <p className="mt-4 text-center text-sm text-ink-600">
          We respect your privacy. No spam.
        </p>
      </div>
    </section>
  );
}
