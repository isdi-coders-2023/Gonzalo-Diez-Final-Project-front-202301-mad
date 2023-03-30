import Swal from "sweetalert2";
import { userResults, User } from "../../models/user";
import { URepo } from "./user.repo.interface";

export class UserRepo implements URepo<userResults> {
  url: string;
  constructor() {
    this.url = "http://localhost:4500/users";
  }

  async create(info: Partial<User>, path: string): Promise<userResults> {
    const url = this.url + "/" + path;

    const resp = await fetch(url, {
      method: "POST",
      body: JSON.stringify(info),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!resp.ok) {
      Swal.fire({
        icon: "error",
        text: "No has hecho algo bien",
      });
      throw new Error("Error http: " + resp.status + resp.statusText);
    }

    const data = (await resp.json()) as userResults;
    return data;
  }

  async update(
    info: Partial<User>,
    path: string,
    token: string
  ): Promise<userResults> {
    const url = this.url + "/" + path;

    const resp = await fetch(url, {
      method: "PATCH",
      body: JSON.stringify(info),
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!resp.ok) throw new Error(`Error: ${resp.status}  ${resp.statusText}`);

    const data = (await resp.json()) as userResults;

    return data;
  }

  async addAddiction(
    addictionId: string,
    timeConsuming: Date,
    cause: string,
    token: string
  ): Promise<userResults> {
    const url = `${this.url}/add-addiction`;
    const resp = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        addiction: addictionId,
        timeConsuming: timeConsuming,
        cause: cause,
      }),
    });

    if (!resp.ok) {
      throw new Error(`HTTP error: ${resp.status}`);
    }

    const data: userResults = await resp.json();
    return data;
  }

  async getUser(token: string): Promise<userResults> {
    const url = this.url + "/profile";

    const resp = await fetch(url, {
      method: "GET",
      headers: {
        Authorization: "Bearer " + token,
      },
    });

    if (!resp.ok) throw new Error("Error: " + resp.status + resp.statusText);

    const data = await resp.json();

    return data;
  }

  async addCondition(
    conditionId: string,
    timeConsuming: Date,
    cause: string,
    token: string
  ): Promise<userResults> {
    const url = `${this.url}/add-condition`;
    const resp = await fetch(url, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        condition: conditionId,
        timeConsuming: timeConsuming,
        cause: cause,
      }),
    });

    if (!resp.ok) {
      throw new Error(`HTTP error: ${resp.status}`);
    }

    const data: userResults = await resp.json();
    return data;
  }
}
