import { User } from "../../models/user";

export interface URepo<P> {
  create(info: Partial<User>, path: string): Promise<P>;
  update(info: Partial<User>, path: string, token: string): Promise<P>;
}
