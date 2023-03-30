/* eslint-disable react-hooks/rules-of-hooks */
import { Header } from "../header/header";
import "./profile.scss";

import { ListProfile } from "../listProfile/listProfile";

export function Profile() {
  return (
    <>
      <div>
        <h2>Profile</h2>
        <Header></Header>
        <ListProfile></ListProfile>
      </div>
    </>
  );
}

export default Profile;
