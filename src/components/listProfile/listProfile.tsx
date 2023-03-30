import { useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { useEffect, useMemo } from "react";
import { UseUsers } from "../../hooks/user/use.users";
import { UserRepo } from "../../services/user/user.repo";
import { UserAddiction } from "../../models/addictions";
import { UserAddictionCard } from "../userAddictionCard/userAddictionCard";
import { UserCondition } from "../../models/conditions";
import { UserConditionCard } from "../userConditionCard/userConditionCard";
import "./listProfile.scss";

export function ListProfile() {
  const repo = useMemo(() => new UserRepo(), []);
  const { getUser, users } = UseUsers(repo);
  const token = useSelector((state: RootState) => state.users.userLogged);
  useEffect(() => {
    getUser(token);
  }, []);

  return (
    <>
      <div className="listContainer">
        <ul>
          {users.userAddictions?.addictions?.map(
            (item: UserAddiction, index: number) => (
              <UserAddictionCard
                UserAddiction={item}
                key={index}
              ></UserAddictionCard>
            )
          )}
        </ul>
        <ul>
          {users.userConditions?.conditions?.map(
            (item: UserCondition, index: number) => (
              <UserConditionCard
                UserCondition={item}
                key={index}
              ></UserConditionCard>
            )
          )}
        </ul>
      </div>
    </>
  );
}
export default ListProfile;
