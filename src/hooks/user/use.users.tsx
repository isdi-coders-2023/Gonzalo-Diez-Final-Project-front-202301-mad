import { useDispatch, useSelector } from "react-redux";
import { UserRepo } from "../../services/user/user.repo";
import { AppDispatch, RootState } from "../../store/store";
import {
  register,
  login,
  addAddiction,
  loadUser,
  addCondition,
} from "../../reducer/users.slice";
import { User } from "../../models/user";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export function UseUsers(repo: UserRepo) {
  const users = useSelector((state: RootState) => state.users);
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>();

  const userRegister = async (userData: Partial<User>) => {
    try {
      const data = await repo.create(userData, "register");
      dispatch(register(data.results[0]));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const userLogin = async (info: Partial<User>) => {
    try {
      const data = await repo.create(info, "login");
      dispatch(login(data.results[0]));
      navigate("/home");
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const addUserAddiction = async (
    addictionId: string,
    timeConsuming: Date,
    cause: string,
    token: string
  ) => {
    try {
      const data = await repo.addAddiction(
        addictionId,
        timeConsuming,
        cause,
        token
      );
      dispatch(addAddiction(data.results[0]));
    } catch (error) {
      console.log(error as Error);
    }
  };

  const getUser = async (token: string) => {
    try {
      const data = await repo.getUser(token);
      dispatch(loadUser(data.results[0]));
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  const addUserCondition = async (
    conditionId: string,
    timeConsuming: Date,
    cause: string,
    token: string
  ) => {
    try {
      const data = await repo.addCondition(
        conditionId,
        timeConsuming,
        cause,
        token
      );
      dispatch(addCondition(data.results[0]));
    } catch (error) {
      console.log(error as Error);
    }
  };

  return {
    users,
    userRegister,
    userLogin,
    addUserAddiction,
    getUser,
    addUserCondition,
  };
}
