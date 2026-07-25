import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Benefits from "@/components/Benefits";
import Process from "@/components/Process";
import Urgency from "@/components/Urgency";
import CTAForm from "@/components/CTAForm";

export const metadata: Metadata = {
  title: "Free AI Marketing Consultation",
  description:
    "Discover what's holding your marketing back and get a personalized action plan designed to help you generate more leads and sales.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen overflow-x-hidden">
      <Header />
      <Hero />
      <Problem />
      <Benefits />
      <Process />
      <Urgency />
      <CTAForm />
    </main>
  );
}
