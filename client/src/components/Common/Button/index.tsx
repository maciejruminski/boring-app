// Styles.
import { SSubmit } from "./styles";

export default function Button({
  onClickHandler,
  text,
  type = "button",
  icon,
  className,
  disabled,
}: {
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  type?: "button" | "submit" | "reset";
  icon?: string;
  className?: string;
  disabled?: boolean;
}): JSX.Element {
  return (
    <SSubmit
      type={type}
      onClick={onClickHandler}
      className={className}
      disabled={disabled}
    >
      <span className="text">{text}</span>
      {icon && <img className="icon" src={icon} aria-hidden="true" alt="" />}
    </SSubmit>
  );
}
