import "./App.css";
import gptLogo from "./assets/chatgpt.svg"

function App() {
  return (
    <div className="App">
      <div className="sideBar">
          <div className="upperSide">
             <div className="upperSideTop"><img src={gptLogo} alt="logo" className="logo" /><span className="brand"></span>ChatGPT</div>
             <button className="midBtn"><img src="" alt="" className="addBtn" />Новый чат</button>
             <div className="upperSideBottom">
              <button className="query"><img src="" alt="" /> Что такое программирования ?</button>

             </div>
          </div>
          <div className="lowerSide">

          </div>
      </div>
      <div className="main">

      </div>
    </div>
  );
}

export default App;
