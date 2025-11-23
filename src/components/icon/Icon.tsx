import s from "./Icon.module.scss";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string; // Название файла без расширения
  size?: number | string; // Упрощаем контроль размера
}

export const Icon = ({ name, size, className, style, ...props }: IconProps) => {
  const symbolId = `#icon-${name}`;

  return (
    <svg
      className={`${s.icon} ${className || ""}`}
      style={{ width: size, height: size, ...style }}
      aria-hidden="true"
      {...props}>
      <use href={symbolId} />
    </svg>
  );
};
