import Image from "next/image";

export default function HeaderEnterButton() {
  return (
    <button className="flex items-center gap-4 hover:opacity-60 transition-opacity">
      <p className="text-black text-[16px] font-normal">
        Вход
      </p>
      <Image
        src={"icons/enter_icon.svg"}
        alt={"Иконка - вход"}
        width={30}
        height={28}
      />
    </button>
  )
}