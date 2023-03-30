import { Header } from "../header/header";
import { useEffect, useMemo } from "react";
import { ConditionsRepo } from "../../services/conditions/conditions.repo";
import { UseConditions } from "../../hooks/conditions/use.conditions";
import { Condition } from "../../models/conditions";
import "./listConditions.scss";
import { ConditionCard } from "../conditionCard/conditionCard";

export function ListConditions() {
  const repo = useMemo(() => new ConditionsRepo(), []);
  const { loadAllConditions, Conditions } = UseConditions(repo);

  useEffect(() => {
    loadAllConditions();
  }, [loadAllConditions]);

  return (
    <>
      <Header></Header>
      <div className="listContainer">
        <ul>
          {Conditions?.conditions?.map((item: Condition) => (
            <ConditionCard condition={item} key={item.id} />
          ))}
        </ul>
      </div>
    </>
  );
}

export default ListConditions;
