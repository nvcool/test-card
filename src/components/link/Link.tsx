import type { ComponentProps } from "react";
import s from "./Link.module.scss";

export const Link = ({ className, ...props }: ComponentProps<"a">) => {
  return <a className={`${s.link} ${className}`} {...props}></a>;
};
