// Styles.
import { SFilter } from "../styles";

export default function Filter({
  text,
  type,
}: {
  text: string;
  type: any;
}): JSX.Element {
  if (type) {
    return (
      <SFilter>
        {text} - <span>{type}</span>
      </SFilter>
    );
  }

  return <></>;
}
