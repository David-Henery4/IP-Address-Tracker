import { Header, Map } from "./components";

function App() {
  return (
    <main className="overall">
      <Header />
      <Map />
      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.linkedin.com/in/david-henery-725458241">
          David Henery
        </a>
        .
      </div>
    </main>
  );
}

export default App;
