import HeaderDesktop from "@/components/HeaderDesktop/HeaderDesktop";
import HeaderMobile from "@/components/HeaderMobile/HeaderMobile";

export default function HeaderSection() {
  return (
    <header>
      {/* HeaderSection для ширины экрана равной или превышающей 768px */}
      <HeaderDesktop/>
      
      {/* HeaderSection для ширины экрана менее 768px */}
      <HeaderMobile/>
    </header>
  )
}