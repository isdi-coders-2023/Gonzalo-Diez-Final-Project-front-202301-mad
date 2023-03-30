import { useSelector } from "react-redux";
import { RouterPaths } from "../app/app";
import { Menu } from "../menu/menu";
import "./header.scss";
import { State } from "../../reducer/users.slice";
import { Link } from "react-router-dom";

export function Header() {
  const path = useSelector((state: State) => state.route);

  return (
    <>
      <div className="container">
        <Menu menuOptions={RouterPaths}></Menu>
        <p>{path}</p>
        <Link to="/profile">
          <img src="../img/user-logo.png" className="userImg" alt="User Logo" />
        </Link>
      </div>
    </>
  );
}
