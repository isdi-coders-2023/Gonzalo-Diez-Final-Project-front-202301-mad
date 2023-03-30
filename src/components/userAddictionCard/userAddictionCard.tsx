import { UserAddiction } from "../../models/addictions";
import "./userAddictionCard.scss";

type cardProps = {
  UserAddiction: any;
};

export function UserAddictionCard({ UserAddiction }: cardProps) {
  return (
    <div className="cardContainer">
      <img src={UserAddiction.addictionId.img} alt="addiction img" />
      <div className="info">
        <span>{UserAddiction.addictionId.name}</span>
        <span>{UserAddiction.addictionId.description}</span>
        <span>Cause: {UserAddiction.cause}</span>
        <span>Consuming since: {UserAddiction.timeConsuming}</span>
      </div>
    </div>
  );
}
