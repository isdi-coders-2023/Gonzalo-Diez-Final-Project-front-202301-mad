import { Link } from "react-router-dom";
import { Addiction } from "../../models/addictions";
import "./addictionCard.scss";

type cardProps = {
  addiction: Addiction;
};

export function AddictionCard({ addiction }: cardProps) {
  return (
    <div className="cardContainer">
      <Link to={`/addictions/${addiction.id}`}>
        <img src={addiction.img} alt="addiction img" />
      </Link>
      <div className="info">
        <span>{addiction.name}</span>
        <span>{addiction.description}</span>
      </div>
    </div>
  );
}
