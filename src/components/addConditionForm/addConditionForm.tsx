import React, { useState } from "react";
import { UseUsers } from "../../hooks/user/use.users";
import { UserRepo } from "../../services/user/user.repo";
import { useParams } from "react-router-dom";
import { ConditionsRepo } from "../../services/conditions/conditions.repo";
import "./addConditionForm.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Header } from "../header/header";
import { UseConditions } from "../../hooks/conditions/use.conditions";

const AddConditionForm = () => {
  const token = useSelector((state: RootState) => state.users.userLogged);
  // const repo = useMemo(() => new UserRepo(), []);
  // const { users } = UseUsers(repo);
  const { ConditionId } = useParams<{ ConditionId: any }>();
  const [timeConsuming, setTimeConsuming] = useState("");
  const [cause, setCause] = useState("");
  const { addUserCondition } = UseUsers(new UserRepo());
  const { Conditions } = UseConditions(new ConditionsRepo());

  const ConditionsDetails = Conditions.conditions.find(
    (item: { id: string | undefined }) => item.id === ConditionId
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!token) {
      return console.error("Token was not found");
    }

    addUserCondition(ConditionId, new Date(timeConsuming), cause, token);
  };

  return (
    <>
      <Header></Header>
      <div className="formContainer">
        <img src={ConditionsDetails?.img} alt="Condition img" />
        <form data-testid="add-Condition-form" onSubmit={handleSubmit}>
          <label>
            <input type="text" value={ConditionsDetails?.name} readOnly />
          </label>
          <br />
          <label>
            Time Consuming:
            <input
              type="datetime-local"
              value={timeConsuming}
              onChange={(e) => setTimeConsuming(e.target.value)}
            />
          </label>
          <br />
          <label>
            Cause:
            <input
              type="text"
              value={cause}
              onChange={(e) => setCause(e.target.value)}
            />
          </label>
          <br />
          <input type="submit" value="Add Condition" />
        </form>
      </div>
    </>
  );
};

export default AddConditionForm;
