import constData from "../constData";

export default function Image({ props }) {
  return (
    <>
      <div>
        <div>
          <img src={props.image}></img>
          <div>
            <h2>{props.image}</h2>
            <p>{props.desciription}</p>
            <p>{props.year}</p>
          </div>
        </div>
      </div>
    </>
  );
}
