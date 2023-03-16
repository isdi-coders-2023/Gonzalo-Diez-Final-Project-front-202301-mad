import { Causes } from "./causes";

export type Condition = {
  id: string;
  name: string;
  Causes: Causes | string;
};

export type UserCondition = {
  id: string;
  addiction: Condition;
  timeConsuming: Date;
  cause: string;
};
