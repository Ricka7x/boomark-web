import type { Metadata } from "next";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Privacy Policy | ${APP_NAME}`,
  alternates: { canonical: "/privacy/" },
};

export default function Privacy() {
  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="max-w-3xl mx-auto px-6 prose prose-lg">
        <h1>Privacy Policy</h1>
        <p className="text-zinc-500">Last updated: placeholder date.</p>
        <p>Placeholder privacy policy. Replace with real content before shipping.</p>
      </div>
    </div>
  );
}
