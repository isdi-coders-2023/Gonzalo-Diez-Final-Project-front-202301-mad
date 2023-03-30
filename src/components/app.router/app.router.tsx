import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { RouterOption } from "../app/app";
import { RouterPaths } from "../app/app";

const Access = lazy(() => import("../access/access"));
const Home = lazy(() => import("../home/home"));
const List = lazy(() => import("../listAddictions/list"));
const ListConditions = lazy(() => import("../listConditons/listConditions"));

const AddAddictionForm = lazy(
  () => import("../addAddictionForm/addAddictionForm")
);

const AddConditionForm = lazy(
  () => import("../addConditionForm/addConditionForm")
);

const Profile = lazy(() => import("../profile/profile"));

type AppRouterTypes = {
  routerOptions: RouterOption[];
};
export function AppRouter({ routerOptions }: AppRouterTypes) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path={"/"} element={<Access></Access>}></Route>
        <Route path={RouterPaths[1].path} element={<Home></Home>}></Route>
        <Route path={RouterPaths[2].path} element={<List></List>}></Route>
        <Route
          path={"/addictions/:addictionId"}
          element={<AddAddictionForm></AddAddictionForm>}
        ></Route>
        <Route path={RouterPaths[3].path} element={<Profile></Profile>}></Route>
        <Route
          path={RouterPaths[4].path}
          element={<ListConditions></ListConditions>}
        ></Route>
        <Route
          path={"/conditions/:conditionId"}
          element={<AddConditionForm></AddConditionForm>}
        ></Route>
      </Routes>
    </Suspense>
  );
}
