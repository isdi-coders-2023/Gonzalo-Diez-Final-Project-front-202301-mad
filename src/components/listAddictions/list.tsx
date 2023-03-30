import { Header } from "../header/header";
import { useEffect, useMemo } from "react";
import { AddictionCard } from "../addictionCard/addictionCard";
import { AddictionsRepo } from "../../services/addictions/addictions.repo";
import { UseAddictions } from "../../hooks/addictions/use.addictions";
import { Addiction } from "../../models/addictions";
import "./list.scss";

export function ListAddictions() {
  const repo = useMemo(() => new AddictionsRepo(), []);
  const { loadAllAddictions, addictions } = UseAddictions(repo);
  useEffect(() => {
    loadAllAddictions();
  }, [loadAllAddictions]);
  return (
    <>
      <Header></Header>
      <h2 className="title">Addictions</h2>
      <div className="listContainerAddictions">
        <ul>
          {addictions.addictions.map((item: Addiction) => (
            <AddictionCard addiction={item} key={item.id}></AddictionCard>
          ))}
        </ul>
      </div>
    </>
  );
}
export default ListAddictions;
