import s from "./Icon.module.scss";

interface IconProps extends React.SVGProps<SVGSVGElement> {
  name: string; // Название файла без расширения
  size?: number | string; // Упрощаем контроль размера
}

export const Icon = ({
  name,
  size = 24,
  className,
  style,
  ...props
}: IconProps) => {
  const symbolId = `#icon-${name}`; // Должен совпадать с форматом в vite.config

  return (
    <svg
      className={`${s.icon} ${className || ""}`}
      style={{ width: size, height: size, ...style }}
      aria-hidden="true" // Скрываем от скринридеров (декорация)
      {...props}>
      <use href={symbolId} />
    </svg>
  );
};
