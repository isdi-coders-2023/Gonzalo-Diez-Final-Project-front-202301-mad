import { AddictionsServerResponse } from "../../models/addictions";
import { RepoAddiction } from "./addictions.repo.interface";

export class AddictionsRepo implements RepoAddiction<AddictionsServerResponse> {
  url: string;
  constructor() {
    this.url = "http://localhost:4500/addictions";
  }

  async load(): Promise<AddictionsServerResponse> {
    const resp = await fetch(this.url + "/load");

    if (!resp.ok) throw new Error(`Error: ${resp.status} ${resp.statusText}`);
    const data = await resp.json();
    return data;
  }
}
