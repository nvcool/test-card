import { Card } from "../../components/card/Card";
import type { Landmark } from "../../types/landmark";
import s from "./HomePage.module.scss";
import image1 from "@/assets/card/image_1.png";
import image2 from "@/assets/card/image_2.png";
import image3 from "@/assets/card/image_3.png";
import image4 from "@/assets/card/image_4.png";
import image5 from "@/assets/card/image_5.png";

const mockLandmarks: Landmark[] = [
  {
    id: 1,
    image: image5,
    title: "Красная площадь",
    location: "Москва, Красная площадь",
    subway: "Площадь Революции",
    distance: "0.2 км",
    rating: 4.91,
  },
  {
    id: 2,
    image: image1,
    title: "Московский Кремль",
    location: "Москва, Кремль",
    subway: "Александровский сад",
    distance: "0.5 км",
    rating: 3.44,
  },
  {
    id: 3,
    image: image2,
    title: "Храм Христа Спасителя",
    location: "Москва, ул. Волхонка, 15",
    subway: "Кропоткинская",
    distance: "0.3 км",
    rating: 2.78,
  },
  {
    id: 4,
    image: image3,
    title: "Большой театр",
    location: "Москва, Театральная пл., 1",
    subway: "Театральная",
    distance: "0.1 км",
    rating: 4.26,
  },
  {
    id: 5,
    image: image4,
    title: "Третьяковская галерея",
    location: "Москва, Лаврушинский пер., 10",
    subway: "Третьяковская",
    distance: "0.4 км",
    rating: 3.86,
  },
  {
    id: 6,
    image: image5,
    title: "Парк Горького",
    location: "Москва, ул. Крымский Вал, 9",
    subway: "Парк культуры",
    distance: "0.6 км",
    rating: 4.54,
  },
  {
    id: 7,
    image: image1,
    title: "ВДНХ",
    location: "Москва, проспект Мира, 119",
    subway: "ВДНХ",
    distance: "0.8 км",
    rating: 4.49,
  },
  {
    id: 8,
    image: image2,
    title: "Собор Василия Блаженного",
    location: "Москва, Красная площадь",
    subway: "Площадь Революции",
    distance: "0.2 км",
    rating: 4.95,
  },
  {
    id: 9,
    image: image3,
    title: "Останкинская телебашня",
    location: "Москва, ул. Академика Королёва, 15",
    subway: "ВДНХ",
    distance: "1.2 км",
    rating: 4.34,
  },
  {
    id: 10,
    image: image4,
    title: "Московский зоопарк",
    location: "Москва, ул. Большая Грузинская, 1",
    subway: "Краснопресненская",
    distance: "0.5 км",
    rating: 4.61,
  },
];

export const HomePage = () => {
  return (
    <section className={`${s.home} container`}>
      <ul className={s.home__list}>
        {mockLandmarks.map((landmark) => (
          <li className={s[`home__list-item`]} key={landmark.id}>
            <Card landmark={landmark} />
          </li>
        ))}
      </ul>
    </section>
  );
};
