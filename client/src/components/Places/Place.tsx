export default function Place({
  place: { id, name, rating },
  getPlace,
}: any): JSX.Element {
  return (
    <li>
      <button onClick={() => getPlace(id)}>
        {name}, {rating}
      </button>
    </li>
  );
}
