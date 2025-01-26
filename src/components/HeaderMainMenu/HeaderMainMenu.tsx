export default function HeaderMainMenu() {
  return (
    <nav>
      <ul className="flex gap-6">
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
      </ul>
    </nav>
  )
}