import { SyntheticEvent, useMemo } from "react";
import { UseUsers } from "../../hooks/user/use.users";
import { UserToServe } from "../../models/user";
import { UserRepo } from "../../services/user/user.repo";

export function Login() {
  const repo = useMemo(() => new UserRepo(), []);
  const { userLogin } = UseUsers(repo);

  const handleSumbit = (event: SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const toLogIn: Partial<UserToServe> = {
      email: (form.elements[0] as HTMLFormElement).value,
      password: (form.elements[1] as HTMLFormElement).value,
    };

    userLogin(toLogIn);
  };

  return (
    <>
      <form onSubmit={handleSumbit}>
        <label>
          email
          <input type="text" name="email"></input>
        </label>
        <label>
          password
          <input type="password" name="password"></input>
        </label>
        <button type="submit">Login</button>
      </form>
    </>
  );
}
