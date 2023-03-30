import { RepoCondition } from "./conditions.repo.interface";
import { ConditionsServerResponse } from "../../models/conditions";

export class ConditionsRepo implements RepoCondition<ConditionsServerResponse> {
  url: string;
  constructor() {
    this.url = "http://localhost:4500/conditions";
  }

  async load(): Promise<ConditionsServerResponse> {
    const resp = await fetch(this.url + "/load");

    if (!resp.ok) throw new Error(`Error: ${resp.status} ${resp.statusText}`);
    const data = await resp.json();
    return data;
  }
}
