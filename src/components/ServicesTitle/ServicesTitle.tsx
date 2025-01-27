export default function ServicesTitle() {
  return (
    <>
      {/* ServicesTitle для разрешений равных или превышающих 768px*/}
      <div className="hidden md:flex h-[68px] border-b border-b-[#E1E1E1] items-center">
        <h2 className="text-[#A59DFF] text-[40px] font-normal basis-[428px] shrink-[8]">
          1.0
        </h2>
        <h2 className="text-[#A59DFF] text-[40px] font-normal basis-[1185px] shrink-[15]">
          Наши Услуги
        </h2>
      </div>
      
      {/* ServicesTitle для разрешений менее 768px*/}
      <div className="flex flex-col md:hidden items-start">
        <h2 className="w-full text-[#A59DFF] text-[26px] font-normal h-[36px] border-b border-b-[#E1E1E1]">
          1.0
        </h2>
        <h2 className="w-full text-[#A59DFF] text-[26px] font-normal h-[36px]">
          Наши Услуги
        </h2>
      </div>
    </>
  )
}