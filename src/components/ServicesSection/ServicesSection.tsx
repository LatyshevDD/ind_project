import ServicesTitle from "@/components/ServicesTitle/ServicesTitle";
import ServicesSlider from "@/components/ServicesSlider/ServicesSlider";

export default function ServicesSection() {
  return (
    <section id="ServicesSection" className="px-4">
      <ServicesTitle/>
      <ServicesSlider/>
    </section>
  )
}