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
  const [sliderMobileElements, setSliderMobileElements] = useState<NodeListOf<Element> | [] >([]);
  // let sliderMobileElements: NodeListOf<Element> | null = null;
  const [selectedSlideItem, setSelectedSlideItems] = useState(0);
  
  useEffect(() => {
    // sliderMobileElements = document.querySelectorAll("#slederMobileContainer>div");
    setSliderMobileElements(document.querySelectorAll("#slederMobileContainer>div"));
  }, [])
  
  const handleNext = () => {
    //Устанавливаем шаг скрола в зависимости от ширины экрана и делаем скрол вперед, скролим на длину элемента + 16px gap
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
  
  const handlePaginationClick = (sliderItemNumber: number) => {
    if(sliderMobileElements) {
      sliderMobileElements[sliderItemNumber].scrollIntoView({ behavior: 'smooth' });
    }
    setSelectedSlideItems(sliderItemNumber);
    return
  }
  
  return (
    <>
      {/* Пагинация для мобильных разрешений */}
      <div id="Pagination" className="flex md:hidden pt-10 gap-2">
        {
          sliderMobileElements !== null ?
          Array.from(sliderMobileElements).map((item, index) => {
            if(index === selectedSlideItem){
              return (
                <button
                  key={index}
                  onClick={() => handlePaginationClick(index)}
                >
                  <Image
                    src={"/images/pagination_active_image.png"}
                    alt={"Активная пагинация"}
                    width={40}
                    height={8}
                  />
                </button>
              )
            }
            if(index !== selectedSlideItem){
              return (
                <button
                  key={index}
                  onClick={() => handlePaginationClick(index)}
                >
                  <Image
                    src={"/images/pagination_image.png"}
                    alt={"Неактивная пагинация"}
                    width={8}
                    height={8}
                    key={index}
                  />
                </button>
              )
            }
          }) : null
        }
      </div>
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
      <div className="flex gap-5 text-black text-xl pt-10">
        <button onClick={handlePrev}>
          <Image
            src={"/icons/arrow-left_icon.svg"}
            alt={"Кнопка - переключить предыдущий слайд"}
            width={20}
            height={20}
          />
        </button>
        <button onClick={handleNext}>
          <Image
            src={"/icons/arrow-right_icon.svg"}
            alt={"Кнопка - переключить следующий слайд"}
            width={20}
            height={20}
          />
        </button>
      </div>
    </>
  )
}