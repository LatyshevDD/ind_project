import HeaderLabel from "@/components/HeaderLabel/HeaderLabel";
import HeaderMainMenu from "@/components/HeaderMainMenu/HeaderMainMenu";
import HeaderEnterButton from "@/components/HeaderEnterButton/HeaderEnterButton";

export default function HeaderDesktop() {
  return (
    <div id="header_desktop" className="hidden md:flex px-4 h-[60px] border-b border-b-[#E1E1E1] items-center">
      <div className="flex items-start basis-[428px] shrink-[8]">
        <HeaderLabel/>
      </div>
      <div className="basis-[1185px] shrink-[18]">
        <HeaderMainMenu/>
      </div>
      <HeaderEnterButton/>
    </div>
  )
}