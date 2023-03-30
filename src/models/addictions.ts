import { Causes } from "./causes";

export type Addiction = {
  id: string;
  name: string;
  img: string;
  description: string;
};

export type AddictionsServerResponse = {
  results: Addiction[];
};

export type UserAddiction = {
  addiction: string;
  timeConsuming: Date;
  cause: Causes | string;
};
