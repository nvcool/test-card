import s from "./Card.module.scss";
import { Icon } from "../icon/Icon";
import { useState, type ComponentProps } from "react";
import type { Landmark } from "../../types/landmark";
import { StarRating } from "../starRating/StarRating";
import { Link } from "../link/Link";

export const Card = ({
  withButton,
  landmark,
  ...props
}: ComponentProps<"article"> & {
  landmark: Landmark;
  withButton?: boolean;
}) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLikeToggle = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <article className={s.card} {...props}>
      <div className={s[`card__image-container`]}>
        <a href="#">
          <img src={landmark.image} alt={landmark.title} />
        </a>
        <div className={s.card__actions}>
          <button aria-label="домой" className={s[`card__actions-house`]}>
            <Icon name="house" />
          </button>
          <div className={s[`card__actions-container`]}>
            <button aria-label="просмотр изображений">
              <Icon name="picture" />
            </button>
            <button aria-label="панорама 360">
              <Icon name="360" />
            </button>
            <button aria-label="видео контент">
              <Icon name="camera" />
            </button>
          </div>
        </div>

        <div className={s.card__description}>
          <p>{landmark.description}</p>
        </div>
      </div>

      <div className={s.card__content}>
        <div className={s[`card__title-container`]}>
          <a href="#">
            <h3>{landmark.title}</h3>
          </a>
          <button
            aria-label={
              isLiked ? "удалить из избранного" : "добавить в избранное"
            }
            onClick={handleLikeToggle}>
            <Icon
              name="heart"
              className={`${s[`card__like-button`]} ${
                isLiked ? s[`card__like-button--active`] : ""
              }`}
            />
          </button>
        </div>

        {withButton && <Link className={s.card__link}>перейти</Link>}

        <div className={s[`card__content-container`]}>
          <div className={s[`card__content-item`]}>
            <Icon size={17} name="location" />

            <address>{landmark.location}</address>
          </div>
          <div className={s[`card__content-item`]}>
            <Icon size={22} name="subway" />

            <span>{landmark.subway}</span>
          </div>
          <div
            className={`${s[`card__content-item`]} ${
              s[`card__content-item--primary`]
            }`}>
            <Icon size={17} name="path" />
            <span>{landmark.distance}</span>
          </div>
          <div
            className={`${s[`card__content-item`]} ${
              s[`card__content-item--review`]
            }`}>
            <StarRating rating={landmark.rating} />
            <span>{landmark.rating}</span>
          </div>
        </div>
      </div>
    </article>
  );
};
