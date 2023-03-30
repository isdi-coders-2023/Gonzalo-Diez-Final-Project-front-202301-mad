import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadConditions } from "../../reducer/conditions.slice";
import { ConditionsRepo } from "../../services/conditions/conditions.repo";
import { AppDispatch, RootState } from "../../store/store";

export function UseConditions(repo: ConditionsRepo) {
  const Conditions = useSelector((state: RootState) => state.conditions);

  const dispatch = useDispatch<AppDispatch>();

  const loadAllConditions = useCallback(async () => {
    try {
      const data = await repo.load();
      dispatch(loadConditions(data.results));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [dispatch, repo]);

  return { Conditions, loadAllConditions };
}
