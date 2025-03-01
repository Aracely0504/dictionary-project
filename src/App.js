import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>

        <footer className="App-footer">
          <small>
            This project was coded by{" "}
            <a
              href="https://github.com/Aracely0504"
              rel="noreferrer"
              target="_blank"
            >
              Aracely Campos,
            </a>{" "}
            is{" "}
            <a
              href="https://github.com/Aracely0504/dictionary-project"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              open-sourced on Github
            </a>{" "}
            and
            <a
              href="https://dictionary-app-shecodesio.netlify.app/"
              rel="noreferrer"
              target="_blank"
            >
              {" "}
              hosted on Netlify.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}

export default App;
