import HeaderDesktope from "@/components/HeaderDesktope/HeaderDesktope";
import HeaderMobile from "@/components/HeaderMobile/HeaderMobile";

export default function HeaderSection() {
  return (
    <header>
      {/* Header для ширины экрана равной или превышающей 768px */}
      <HeaderDesktope/>
      
      {/* Header для ширины экрана менее 768px */}
      <HeaderMobile/>
    </header>
  )
}