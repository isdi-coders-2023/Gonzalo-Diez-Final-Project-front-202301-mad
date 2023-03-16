import { User } from "../models/user";
import { URepo } from "./user.repo.interface";

export class UserRepo implements URepo<User> {
  url: string;
  constructor() {
    this.url = "http://localhost:4500";
  }

  async create(info: Partial<User>, path: string): Promise<User> {
    const url = this.url + "/" + path;

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!resp.ok) throw new Error(`Error: ${resp.status} ${resp.statusText}`);

    const data = await resp.json();
    return data;
  }
  async update(
    info: Partial<User>,
    path: string,
    token: string
  ): Promise<User> {
    const url = this.url + "/" + path;

    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!resp.ok) throw new Error(`Error: ${resp.status}  ${resp.statusText}`);

    const data = await resp.json();

    return data;
  }
}
