import { Provider } from "react-redux";
import { store } from "../../store/store";
import { AppRouter } from "../app.router/app.router";
import "./app.scss";
export type RouterOption = {
  label: string;
  path: string;
};

export const RouterPaths: RouterOption[] = [
  { label: "Access", path: "/access" },
  { label: "Home", path: "/home" },
  { label: "List", path: "/list" },
  { label: "Profile", path: "/Profile" },
  { label: "Conditions", path: "/listConditions" },
];

function App() {
  return (
    <Provider store={store}>
      <AppRouter routerOptions={RouterPaths} />
    </Provider>
  );
}

export default App;
