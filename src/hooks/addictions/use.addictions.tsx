import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { load } from "../../reducer/addictions.slice";
import { AddictionsRepo } from "../../services/addictions/addictions.repo";
import { AppDispatch, RootState } from "../../store/store";

export function UseAddictions(repo: AddictionsRepo) {
  const addictions = useSelector((state: RootState) => state.addictions);
  const dispatch = useDispatch<AppDispatch>();

  const loadAllAddictions = useCallback(async () => {
    try {
      const data = await repo.load();
      dispatch(load(data.results));
    } catch (error) {
      console.log((error as Error).message);
    }
  }, [dispatch, repo]);

  return { addictions, loadAllAddictions };
}
