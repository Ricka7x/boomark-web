import type { Metadata } from "next";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Terms of Service | ${APP_NAME}`,
  alternates: { canonical: "/terms/" },
};

export default function Terms() {
  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="max-w-3xl mx-auto px-6 prose prose-lg">
        <h1>Terms of Service</h1>
        <p className="text-zinc-500">Last updated: placeholder date.</p>
        <p>Placeholder terms of service. Replace with real content before shipping.</p>
      </div>
    </div>
  );
}
