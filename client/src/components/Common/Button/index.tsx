// Styles.
import { SSubmit } from "./styles";

export default function Button({
  onClickHandler,
  text,
  type = "button",
  icon,
  className,
  disabled,
  id,
}: {
  onClickHandler?: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  type?: "button" | "submit" | "reset";
  icon?: string;
  className?: string;
  disabled?: boolean;
  id?: string;
}): JSX.Element {
  return (
    <SSubmit
      type={type}
      onClick={onClickHandler}
      className={className}
      disabled={disabled}
      data-testid={id}
    >
      <span className="text">{text}</span>
      {icon && <img className="icon" src={icon} aria-hidden="true" alt="" />}
    </SSubmit>
  );
}
