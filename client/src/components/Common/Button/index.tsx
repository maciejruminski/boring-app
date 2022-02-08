// Styles.
import { SSubmit } from "./styles";

export default function Button({
  onClickHandler,
  text,
  type = "button",
  icon,
  className,
}: {
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  type?: "button" | "submit" | "reset";
  icon?: string;
  className?: string;
}): JSX.Element {
  return (
    <SSubmit type={type} onClick={onClickHandler} className={className}>
      <span className="text">{text}</span>
      {icon && <img className="icon" src={icon} aria-hidden="true" alt='' />}
    </SSubmit>
  );
}
