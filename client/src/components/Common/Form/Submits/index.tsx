// Styles.
import { SSubmit } from "./styles";

export default function Submits({
  onClickHandler,
  text,
}: {
  onClickHandler: React.MouseEventHandler<HTMLButtonElement>;
  text: string;
}) {
  return (
    <SSubmit type="submit" onClick={onClickHandler}>
      {text}
    </SSubmit>
  );
}
