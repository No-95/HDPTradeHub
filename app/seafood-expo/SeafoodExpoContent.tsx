import Header from "@/components/header"
import HeroSection from "@/components/hero-section"
import ChallengesSection from "@/components/challenges-section"
import SolutionSection from "@/components/solution-section"
import BenefitsSection from "@/components/benefits-section"
import TargetAudienceSection from "@/components/target-audience-section"
import EventScheduleSection from "@/components/event-schedule-section"
import HdpRoleSection from "@/components/hdp-role-section"
import ImageSlider from "@/components/image-slider"
import PackagesSection from "@/components/packages-section"
import Footer from "@/components/footer"

export default function SeafoodExpoHome() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <HeroSection />
        <ChallengesSection />
        <SolutionSection />
        <BenefitsSection />
        <TargetAudienceSection />
        <EventScheduleSection />
        <HdpRoleSection />
        <ImageSlider />
        <PackagesSection />
        <Footer />
      </main>
    </>
  )
}
