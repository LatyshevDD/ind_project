import Image from "next/image";
import HeaderMenuButton from "@/components/HeaderMenuButton/HeaderMenuButton";

export  default function HeaderMobile() {
  return (
    <div id="header_mobile" className="flex justify-between md:hidden px-4 h-[60px] border-b border-b-[#E1E1E1] items-center">
      <Image
        src={"icons/header_logo.svg"}
        alt={"Логотип сайта"}
        width={28}
        height={28}
      />
      <HeaderMenuButton/>
    </div>
  )
}