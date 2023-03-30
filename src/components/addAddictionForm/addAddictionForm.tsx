import React, { useMemo, useState } from "react";
import { UseUsers } from "../../hooks/user/use.users";
import { UserRepo } from "../../services/user/user.repo";
import { useParams } from "react-router-dom";
import { AddictionsRepo } from "../../services/addictions/addictions.repo";
import { UseAddictions } from "../../hooks/addictions/use.addictions";
import "./addAddictionForm.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { Header } from "../header/header";
import Swal from "sweetalert2";

const AddAddictionForm = () => {
  const token = useSelector((state: RootState) => state.users.userLogged);
  const repo = useMemo(() => new UserRepo(), []);
  const { users } = UseUsers(repo);
  const { addictionId } = useParams<{ addictionId: any }>();
  const [timeConsuming, setTimeConsuming] = useState("");
  const [cause, setCause] = useState("");
  const { addUserAddiction } = UseUsers(new UserRepo());
  const { addictions } = UseAddictions(new AddictionsRepo());

  const addictionsDetails = addictions.addictions.find(
    (item: { id: string | undefined }) => item.id === addictionId
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!token) {
      return console.error("Token was not found");
    }
    addUserAddiction(addictionId, new Date(timeConsuming), cause, token);
    Swal.fire("Añadida!", "Su adicción ha sido añadida!", "success");
  };

  return (
    <>
      <Header></Header>
      <div className="formContainer">
        <img src={addictionsDetails?.img} alt="Addiction img" />
        <form data-testid="add-addiction-form" onSubmit={handleSubmit}>
          <label>
            <input type="text" value={addictionsDetails?.name} readOnly />
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
          <input type="submit" value="Add Addiction" />
        </form>
      </div>
    </>
  );
};

export default AddAddictionForm;
