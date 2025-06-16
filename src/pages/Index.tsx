
import { Hero } from "@/components/Hero";
import { ParkHighlights } from "@/components/ParkHighlights";
import { QuickBooking } from "@/components/QuickBooking";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <ParkHighlights />
      <QuickBooking />
    </div>
  );
};

export default Index;
