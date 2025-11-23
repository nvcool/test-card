import s from "./Card.module.scss";
import { Icon } from "../icon/Icon";
import { useState, type ComponentProps } from "react";
import type { Landmark } from "../../types/landmark";
import { StarRating } from "../starRating/StarRating";

export const Card = ({
  landmark,
  ...props
}: ComponentProps<"div"> & { landmark: Landmark }) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);

  const handleLikeToggle = () => {
    setIsLiked((prev) => !prev);
  };

  return (
    <div className={s.card} {...props}>
      <div className={s[`card__image-container`]}>
        <img src={landmark.image} alt="" />
        <div className={s.card__actions}>
          <button className={s[`card__actions-house`]}>
            <Icon name="house" />
          </button>
          <div className={s[`card__actions-container`]}>
            <button>
              <Icon name="picture" />
            </button>
            <button>
              <Icon name="360" />
            </button>
            <button>
              <Icon name="camera" />
            </button>
          </div>
        </div>
      </div>
      <div className={s.card__content}>
        <div className={s[`card__title-container`]}>
          <span>{landmark.title}</span>
          <button onClick={handleLikeToggle}>
            <Icon
              name="heart"
              className={`${s[`card__like-button`]} ${
                isLiked ? s[`card__like-button--active`] : ""
              }`}
            />
          </button>
        </div>
        <div className={s[`card__content-container`]}>
          <div className={s[`card__content-item`]}>
            <Icon size={18} name="location" />

            <span>{landmark.location}</span>
          </div>
          <div className={s[`card__content-item`]}>
            <Icon size={22} name="subway" />

            <span>{landmark.subway}</span>
          </div>
          <div className={s[`card__content-item`]}>
            <Icon size={15} name="path" />
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
    </div>
  );
};
