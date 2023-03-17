import { UserAddiction } from "./addictions";
import { UserCondition } from "./conditions";

export type User = {
  id: string;
  age?: number;
  token?: string;
  email: string;
  password: string;
  name?: string;
  profilePic?: string;
  nickName?: string | number;
  timeWithout?: Date;
  addictions?: UserAddiction[];
  conditions?: UserCondition[];
};

export type userResults = {
  results: User[];
};

export class UserToServe implements User {
  constructor(
    public id: string,
    public email: string,
    public password: string,
    public name?: string,
    public profilePic?: string,
    public nickName?: string | number,
    public age?: number,
    public timeWithout?: Date,
    public addictions?: UserAddiction[],
    public conditions?: UserCondition[]
  ) {}
}
