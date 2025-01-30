"use client"

import { useState } from "react";
import HeaderEnterButton from "@/components/HeaderEnterButton/HeaderEnterButton";

export default function HeaderMenuButton() {
  
  const [isOpenMenu, setIsOpenMenu] = useState(false);
  
  return (
    <div className="relative">
      <button
        className="w-[59px] h-[28px] bg-black rounded-[4px] hover:opacity-60 transition-all active:translate-y-1 active:translate-x-1"
        onClick={() => setIsOpenMenu(!isOpenMenu)}
      >
        <p className="text-white font-normal text-[16px]">
          Меню
        </p>
      </button>
      <nav className={`absolute top-[35px] right-0 bg-[rgb(160,157,157)] overflow-hidden transition-all ${isOpenMenu ? "h-auto p-4" : "h-0"}`}>
        <ul className="flex flex-col gap-6">
          <li>
            <button className="hover:opacity-60 transition-opacity">
              <p className="text-black text-[16px] font-normal">
                О школе
              </p>
            </button>
          </li>
          <li>
            <button className="hover:opacity-60 transition-opacity">
              <p className="text-black text-[16px] font-normal">
                Курсы
              </p>
            </button>
          </li>
          <li>
            <button className="hover:opacity-60 transition-opacity">
              <p className="text-black text-[16px] font-normal">
                Библиотека
              </p>
            </button>
          </li>
          <li>
            <HeaderEnterButton/>
          </li>
        </ul>
      </nav>
    </div>
  )
}