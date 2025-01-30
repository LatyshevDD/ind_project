"use client"

import {useState, useRef, useEffect} from "react";
import {services_data} from "@/utils/data";
import Image from "next/image";
import styles from "../../app/extraStyles.module.css";
import {useResize} from "@/utils/hooks";

export default function ServicesSlider() {
  const width = useResize();
  const [services, setServices] = useState(services_data);
  const [scrollPosition, setScrollPosition] = useState(0);
  const sliderDesktopeRef = useRef<HTMLDivElement | null>(null);
  const sliderMobileRef = useRef<HTMLDivElement | null>(null);
  
  //Информация для работы слайдера на мобильных разрешениях (менее 768px)
  let sliderMobileElements: NodeListOf<Element> | null = null;
  const [selectedSlideItem, setSelectedSlideItems] = useState(0);
  
  useEffect(() => {
    sliderMobileElements = document.querySelectorAll("#slederMobileContainer>div");
  })
  
  const handleNext = () => {
    //Устанавливаем шаг скрола в зависимости от ширины экрана и делаем скрол вперед
    if(width >= 1280) {
      const maxScrollPosition = sliderDesktopeRef.current ? sliderDesktopeRef.current?.scrollWidth - (((width-80)/4) + 16) : 0
      if(scrollPosition >= maxScrollPosition) {
        return
      }
      const newScrollPosition = scrollPosition + (((width-80)/4) + 16)
      sliderDesktopeRef.current?.scrollTo({
        top: 0,
        left: newScrollPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newScrollPosition)
      return
    }
    if(width > 768) {
      const maxScrollPosition = sliderDesktopeRef.current ? sliderDesktopeRef.current?.scrollWidth - (((width-64)/3) + 16) : 0
      if(scrollPosition >= maxScrollPosition) {
        return
      }
      const newScrollPosition = scrollPosition + (((width-64)/3) + 16)
      sliderDesktopeRef.current?.scrollTo({
        top: 0,
        left: newScrollPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newScrollPosition)
      return;
    }
    if(width <= 768) {
      if(sliderMobileElements && selectedSlideItem === sliderMobileElements?.length - 1){
        return
      }
      const newSelectedSlideItem = selectedSlideItem + 1
      if(sliderMobileElements) {
        sliderMobileElements[newSelectedSlideItem].scrollIntoView({ behavior: 'smooth' });
      }
      setSelectedSlideItems(newSelectedSlideItem);
      return
    }
  }
  
  const handlePrev = () => {
    if(width >= 1280) {
      if(scrollPosition <= 0) {
        return
      }
      const newScrollPosition = scrollPosition - (((width-80)/4) + 16)
      sliderDesktopeRef.current?.scrollTo({
        top: 0,
        left: newScrollPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newScrollPosition)
      return
    }
    if(width > 768) {
      if(scrollPosition <= 0) {
        return
      }
      const newScrollPosition = scrollPosition - (((width-64)/3) + 16)
      sliderDesktopeRef.current?.scrollTo({
        top: 0,
        left: newScrollPosition,
        behavior: 'smooth'
      });
      setScrollPosition(newScrollPosition)
      return
    }
    if(width <= 768) {
      if(selectedSlideItem === 0){
        return
      }
      const newSelectedSlideItem = selectedSlideItem-1;
      if(sliderMobileElements) {
        sliderMobileElements[newSelectedSlideItem].scrollIntoView({ behavior: 'smooth' });
      }
      setSelectedSlideItems(newSelectedSlideItem);
      return
    }
  }
  
  return (
    <>
      {/* Верстка слайдера для разрешений превышающих 768px */}
      <div ref={sliderDesktopeRef} className={`hidden md:flex flex-nowrap gap-4 pt-10 overflow-x-scroll ${styles.scrollbar_none} ${styles.container_snap}`}>
        {
            services.map((service, index) => {
              return (
                <div
                  className={`flex flex-none flex-col gap-[56px] items-start bg-[#F0F0F0] rounded-lg p-6 xl:w-[calc((100vw-80px)/4)]
                  md:w-[calc((100vw-64px)/3)] hover:opacity-60 cursor-pointer`}
                  key={index}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={80}
                    height={80}
                  />
                  <p className="text-black text-6 lg:text-[32px] leading-9 font-normal">
                    {service.title}
                  </p>
                </div>
              )
            })
        }
      </div>
      
      {/* Верстка слайдера для разрешений менее 768px */}
      <div id="slederMobileContainer" ref={sliderMobileRef} className={`flex md:hidden flex-nowrap gap-4 pt-10 overflow-x-scroll ${styles.scrollbar_none} ${styles.container_snap}`}>
        {
          services.map((service, index) => {
            return (
              <div
                className={`flex flex-none flex-col gap-[60px] items-start bg-[#F0F0F0] rounded-lg p-4 w-[calc(100vw-32px)] hover:opacity-60 cursor-pointer`}
                key={index}
                id={`sliderMobileItem - ${index}`}
              >
                <div className="flex gap-6">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={60}
                    height={60}
                    style={{objectFit: 'contain'}}
                  />
                  <p className="text-black text-[24px] leading-[28px] font-normal">
                    {service.title}
                  </p>
                </div>
                <p className="text-black text-[14px] leading-[20px] font-normal">
                  {service.description}
                </p>
              </div>
            )
          })
        }
      </div>
      <div className="flex gap-5 text-black text-xl">
        <button onClick={handleNext}>Next</button>
        <button onClick={handlePrev}>Prev</button>
      </div>
    </>
  )
}