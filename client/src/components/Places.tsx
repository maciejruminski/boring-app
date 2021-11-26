// Context.
import { useGlobalContext } from "../context";

export default function Places() {
  const { state } = useGlobalContext();

  return (
    <div>
      <h3>Places:</h3>
      {state.places.length ? state.places.map((place) => {
            return <p>{place}</p>;
          }): <p>Loading...</p>}
        
    </div> 
  )

}
