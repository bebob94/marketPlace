// import { BrowserRouter, Routes } from "react-router-dom";
import "./App.css";
import ContainerProducts from "./components/ContainerProducts";

import MyNavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <MyNavBar />
      <ContainerProducts />
    </div>
  );
}

export default App;
