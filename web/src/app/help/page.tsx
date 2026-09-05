import type { Metadata } from "next";
import { APP_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: `Help | ${APP_NAME}`,
  alternates: { canonical: "/help/" },
};

export default function Help() {
  return (
    <div className="min-h-screen pt-16 pb-24">
      <div className="max-w-3xl mx-auto px-6 prose prose-lg">
        <h1>Help</h1>
        <p>Placeholder help content. Replace with real FAQs and troubleshooting once written.</p>
      </div>
    </div>
  );
}
