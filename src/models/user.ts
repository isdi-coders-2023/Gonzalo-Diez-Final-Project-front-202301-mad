import { UserAddiction } from "./addictions";
import { UserCondition } from "./conditions";

export type User = {
  id: string;
  age?: number;
  email: string;
  password: string;
  name?: string;
  profilePic?: string;
  nickName?: string | number;
  timeWithout?: Date;
  addictions?: UserAddiction[];
  conditions?: UserCondition[];
};
