import Image from "next/image";

export default function HeaderLabel() {
  return (
    <div className="flex gap-4 items-center">
      <Image
        src={"icons/header_logo.svg"}
        alt={"Логотип сайта"}
        width={28}
        height={28}
      />
      <p className="text-black text-[16px] font-normal">
        STEMPS
      </p>
    </div>
  )
}