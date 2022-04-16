import Counter from "./components/Counter";
import User from "./components/User";

function App() {
  return (
    <>
      <h1 className="mt-4"> React + TS!</h1>
      <hr />
      
      <h2> useState</h2>
      <User />
      <Counter />

      <h2>useEffect - useRef</h2>
      <hr />
      
    </>
  );
}

export default App;
