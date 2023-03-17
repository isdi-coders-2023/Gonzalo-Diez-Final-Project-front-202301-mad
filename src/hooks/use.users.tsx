import { useDispatch, useSelector } from "react-redux";
import { UserRepo } from "../services/user.repo";
import { AppDispatch, RootState } from "../store/store";
import { register, login } from "../reducer/users.slice";
import { UserToServe } from "../models/user";

export function useUsers(repo: UserRepo) {
  const users = useSelector((state: RootState) => state.users);
  const dispatch = useDispatch<AppDispatch>();

  const userLogin = async (info: Partial<UserToServe>) => {
    try {
      const data = await repo.create(info, "login");

      dispatch(login(data.results[0]));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const userRegister = async (userData: Partial<UserToServe>) => {
    try {
      const data = await repo.create(userData, "register");
      dispatch(register(data.results[0]));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    users,
    userLogin,
    userRegister,
  };
}
