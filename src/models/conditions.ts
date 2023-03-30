export type Condition = {
  id: string;
  name: string;
  img: string;
  description: string;
};

export type ConditionsServerResponse = {
  results: Condition[];
};

export type UserCondition = {
  condition: string;
  timeConsuming: Date;
  cause: string;
};
