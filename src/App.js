import "./App.css";
import Logo from "./components/Logo";
import Programme from "./components/Programme";
import programme from "./programme.json";

function App() {
  return (
    <>
      <header>
        <Logo />
      </header>
      <main className="wrapper">
        {programme.map((element) => {
          return <Programme prog={element} />;
        })}
      </main>
      <footer>
        <p>Made at le Reacteur By Thiru - 2022</p>
      </footer>
    </>
  );
}

export default App;
