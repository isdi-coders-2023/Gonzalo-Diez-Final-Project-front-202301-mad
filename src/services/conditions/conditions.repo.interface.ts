export interface RepoCondition<T> {
  load(): Promise<T>;
}
