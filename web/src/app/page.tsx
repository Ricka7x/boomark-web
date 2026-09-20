import Hero from "@/components/Hero";
import Walkthrough from "@/components/Walkthrough";
// import Surfaces from "@/components/Surfaces"; // hidden for now, per request
import Faq from "@/components/Faq";
import ClosingCta from "@/components/ClosingCta";
import StickyCta from "@/components/StickyCta";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Walkthrough />
      {/* <Surfaces /> */}
      <Faq />
      <ClosingCta />
      <StickyCta />
    </div>
  );
}
