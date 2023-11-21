import CountControl from "./components/CountControl";
import Counter from "./components/Counter";
import NameCard from "./components/NameCard";

const App = () => {
  return (
    <div>
      <p>Hello, World!</p>
      <Counter />
      <Counter />
      <CountControl />
      <NameCard />
    </div>
  );
};

export default App;
