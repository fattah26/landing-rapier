import {
  HomeSection,
  AboutUs,
  PeopleBehind,
  OurServices,
  OurClient,
  OurJourney,
  ContactUs,
  OurFootstep,
} from "./constants/index";

export default function Home() {
  return (
    <main>
      <HomeSection />
      <AboutUs />
      <PeopleBehind />
      <OurServices />
      <OurClient />
      <OurFootstep />
      <OurJourney />
      <ContactUs/>
    </main>
  );
}
