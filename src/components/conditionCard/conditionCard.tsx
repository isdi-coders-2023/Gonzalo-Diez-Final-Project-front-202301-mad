import { Link } from "react-router-dom";
import { Condition } from "../../models/conditions";
import "./conditionCard.scss";

type cardProps = {
  condition: Condition;
};

export function ConditionCard({ condition }: cardProps) {
  return (
    <div className="cardContainer">
      <Link to={`/conditions/${condition?.id}`}>
        <img src={condition.img} alt="Condition img" />
      </Link>
      <div className="info">
        <span>{condition.name}</span>
        <span>{condition.description}</span>
      </div>
    </div>
  );
}
