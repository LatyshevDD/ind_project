# Slider on NEXT JS

---

### [Ссылка на приложение](https://ind-project-bice.vercel.app/)
### [Ссылка на макет в figma](https://www.figma.com/design/iT7HR5aCVFx53TIsp8yKXY/%D0%A2%D0%B5%D1%81%D1%82%D0%BE%D0%B2%D0%BE%D0%B5-%D0%B7%D0%B0%D0%B4%D0%B0%D0%BD%D0%B8%D0%B5-IND?node-id=1-2806&t=nZRaA0FvulmsFP2X-1)

---

#### Особенности реализации проекта:
1. Испоользуются HTML, CSS, JavaScript
2. Проект реализован на TypeScript
3. Проект реализован на React с использованием фреймворка NextJS
4. Все стили приложения реализованы на TailWind CSS:
    - Реализована адаптивная верстка для всех типов разрешений до минимального значения 390px
    - для учета инфомрации о ширине экрана реализован кастомный hook useResize
    - для мобильных разрешений реализовано выпадающее меню при клике на кнопку
5. Для оптимизации приложения используются возможности фреймворка NextJS:
    - изображения оптимизированны через компонент Image
    - шрифты оптимизированы с использованием next/font
6. Функциональность слайдера:
    - На десктопных разрешениях слайдер отображает от 3 до 4 слайдов в видимой области.
    - На мобильных разрешениях слайдер отодбражает один слайд в видимой области.
    - На десктопных разрешениях реализованы кнопки переключения между слайдами.
    - На мобильных разрешениях реализована пагинация с возможность переключения на конкретных слайд по клику.
