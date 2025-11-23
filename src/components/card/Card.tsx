import "./Card.module.scss";
import image1 from "../../assets/card/image_1.png";
import { Icon } from "../icon/Icon";

export const Card = () => {
  return (
    <div className="card">
      <div className="">
        <img src={image1} alt="" />
      </div>
      <div className="">
        ggggd
        <Icon name="house" />
      </div>
    </div>
  );
};
