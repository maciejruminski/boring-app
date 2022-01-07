// Styles.
import { SSubmit } from "./styles";

export default ({
  onClickHandler,
  text,
  type = "button",
}: {
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
  type?: "button" | "submit" | "reset";
}) => {
  return (
    <SSubmit type={type} onClick={onClickHandler}>
      {text}
    </SSubmit>
  );
};
