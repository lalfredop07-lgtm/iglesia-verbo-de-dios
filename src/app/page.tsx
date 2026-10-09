import { Hero } from "@/components/sections/Hero";
import { Welcome } from "@/components/sections/Welcome";
import { Mission } from "@/components/sections/Mission";
import { Leadership } from "@/components/sections/Leadership";
import { MinistriesGrid } from "@/components/sections/MinistriesGrid";
import { Experience } from "@/components/sections/Experience";
import { Sermons } from "@/components/sections/Sermons";
import { EventsPreview } from "@/components/sections/EventsPreview";
import { Schedule } from "@/components/sections/Schedule";
import { FinalCta } from "@/components/sections/FinalCta";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Welcome />
      <Mission />
      <Leadership />
      <MinistriesGrid />
      <Experience />
      <Sermons />
      <EventsPreview />
      <Schedule />
      <FinalCta />
    </>
  );
}
