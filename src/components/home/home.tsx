import { Link } from "react-router-dom";
import { Header } from "../header/header";
import "./home.scss";

export function Home() {
  return (
    <>
      <Header></Header>
      <div className="homeContainer">
        <h2>Home</h2>
        <h3>Let's begin healing</h3>
        <div className="panels">
          <Link to="/list">
            <img src="../img/LeftPanel.png" alt="Left panel" />
          </Link>
          <Link to="/listConditions">
            <img src="./img/RightPanel.png" alt="Right panel" />
          </Link>
        </div>
        <h3>How are you feeling?</h3>
        <div className="statesContainer">
          <img src="../img/state1.png" alt="state1" />

          <img src="../img/state2.png" alt="hstate2" />

          <img src="../img/state3.png" alt="dstate3" />

          <img className="state4" src="../img/state4.png" alt="jstate4" />

          <img className="state5" src="../img/state5.png" alt="rstate5" />
        </div>
        <h3>Daily help</h3>
        <Link to="#">
          <img src="../img/dailyHelpIMG.png" alt="Daily help " />
        </Link>
      </div>
    </>
  );
}

export default Home;
