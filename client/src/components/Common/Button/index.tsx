// Styles.
import { SSubmit } from "./styles";

export default ({
  onClickHandler,
  text,
  type = "button",
  icon,
  className,
}: {
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  type?: "button" | "submit" | "reset";
  icon?: string;
  className?: string;
}) => {
  return (
    <SSubmit type={type} onClick={onClickHandler} className={className}>
      <span className="text">{text}</span>
      {icon && <img className="icon" src={icon} aria-hidden="true" />}
    </SSubmit>
  );
};
