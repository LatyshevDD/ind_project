import Image from "next/image";
import HeaderMenuButton from "@/components/HeaderMenuButton/HeaderMenuButton";

export  default function HeaderMobile() {
  return (
    <div id="header_mobile" className="flex justify-between md:hidden px-4 h-[60px] items-center">
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