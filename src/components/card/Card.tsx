import s from "./Card.module.scss";
import { Icon } from "../icon/Icon";
import type { ComponentProps } from "react";
import type { Landmark } from "../../types/landmark";
import { StarRating } from "../starRating/StarRating";

export const Card = ({
  landmark,
  ...props
}: ComponentProps<"div"> & { landmark: Landmark }) => {
  return (
    <div className={s.card} {...props}>
      <div className={s[`card__image-container`]}>
        <img src={landmark.image} alt="" />
        <div className="">
          {/* <Icon name="house" /> */}
          <div className="">
            {/* <Icon name="picture" />
            <Icon name="360" /> */}
          </div>
        </div>
      </div>
      <div className={s[`card__content`]}>
        <div className={s[`card__content-title`]}>
          <span>{landmark.title}</span>
          <Icon name="heart" color="transparent" stroke="#131921" />
        </div>
        <div className={s[`card__content-item`]}>
          <div className="">
            <Icon name="location" />

            <span>{landmark.location}</span>
          </div>
          <div className="">
            {/* <Icon name="subway" /> */}

            <span>{landmark.subway}</span>
          </div>
          <div className="">
            {/* <Icon name="line" /> */}
            <span>{landmark.distance}</span>
          </div>
          <div className="">
            <StarRating rating={landmark.rating} />
            <span>{landmark.rating}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
