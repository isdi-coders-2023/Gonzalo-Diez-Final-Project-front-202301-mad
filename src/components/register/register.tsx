import { SyntheticEvent, useMemo } from "react";
import { UseUsers } from "../../hooks/user/use.users";
import { UserToServe } from "../../models/user";
import { UserRepo } from "../../services/user/user.repo";
import "./register.scss";

export function Register() {
  const repo = useMemo(() => new UserRepo(), []);

  const { userRegister } = UseUsers(repo);

  const handleSumbit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;

    const registerForm: Partial<UserToServe> = {
      email: (form.elements[0] as HTMLFormElement).value,
      password: (form.elements[1] as HTMLFormElement).value,
    };

    userRegister(registerForm);
  };

  return (
    <form onSubmit={handleSumbit}>
      <label>
        email
        <input type="email" name="email" required></input>
      </label>
      <label>
        password
        <input type="password" name="password" required></input>
      </label>
      <button type="submit">Register!</button>
    </form>
  );
}
