import Hero from "@/components/home/Hero";
import QuickNavigation from "@/components/home/QuickNavigation";

export default function Home() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      <Hero />
      <QuickNavigation />
    </div>
  );
}
