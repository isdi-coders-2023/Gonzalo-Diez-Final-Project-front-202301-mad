type cardProps = {
  UserCondition: any;
};

export function UserConditionCard({ UserCondition }: cardProps) {
  return (
    <div className="cardContainer">
      <img src={UserCondition.addictionId.img} alt="addiction img" />
      <div className="info">
        <span>{UserCondition.addictionId.name}</span>
        <span>{UserCondition.addictionId.description}</span>
        <span>Cause: {UserCondition.cause}</span>
        <span>Consuming since: {UserCondition.timeConsuming}</span>
      </div>
    </div>
  );
}
