import "./App.css";
import gptLogo from "./assets/chatgpt.svg";
import addBtn from "./assets/add-30.png";
import msgIcon from "./assets/message.svg";
import Home from "./assets/home.svg";
import saved from "./assets/bookmark.svg";
import rocket from "./assets/rocket.svg";

function App() {
  return (
    <div className="App">
      <div className="sideBar">
        <div className="upperSide">
          <div className="upperSideTop">
            <img src={gptLogo} alt="logo" className="logo" />
            <span className="brand"></span>ChatGPT
          </div>
          <button className="midBtn">
            <img src={addBtn} alt="new chat" className="addBtn" />
            Новый чат
          </button>
          <div className="upperSideBottom">
            <button className="query">
              <img src={msgIcon} alt="Query" /> Что такое программирования ?
            </button>
            <button className="query">
              <img src={msgIcon} alt="Query" /> как использовать API?
            </button>
          </div>
        </div>
        <div className="lowerSide">
          <div className="listItems">
            <img src={Home} alt="" className="listitemsImg" />
            Home
          </div>
          <div className="listItems">
            <img src={saved} alt="" className="listitemsImg" />
            Saved
          </div>
          <div className="listItems">
            <img src={rocket} alt="" className="listitemsImg" />
            Upgrade to pro
          </div>
        </div>
      </div>
      <div className="main"></div>
    </div>
  );
}

export default App;
