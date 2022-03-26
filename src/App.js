import "./App.css";
import Header from "./Components/Header/Header";
import Product from "./Components/Product/Product";
import ReactQuesOne from "./Components/QReact-1/ReactQues_One";
import ReactQuesTwo from "./Components/QReact-2/ReactQuesTwo";
import ReactQuesThree from "./Components/QReact-3/ReactQuesThree";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Product></Product>
      <ReactQuesOne></ReactQuesOne>
      <ReactQuesTwo></ReactQuesTwo>
      <ReactQuesThree></ReactQuesThree>
    </div>
  );
}

export default App;
