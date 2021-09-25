import logo from "./logo.svg";
import "./App.css";
import MyHeader from "./MyComponents/MyHeader.js";
import {MyContent} from "./MyComponents/MyContent.js";
import {Footer} from "./MyComponents/Footer.js";

function App() {
  return (
    <>
    <MyHeader title="Buy n Sell Projects" searchBar={false}/>
    <MyContent />
    <Footer />
    </>
  );
}

export default App;
