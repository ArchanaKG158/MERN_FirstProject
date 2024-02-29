import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import abc from "./related-1.jpg";
import First from "./Components/First";
import Second from "./Components/Second";
import ArrowFunction from "./Components/ArrowFunction";
import ArrayMethod from "./Components/ArrayMethod";
import StudentInfo from "./Components/StudentInfo";
import Insta from "./Components/Insta";
import DoubleBox from "./Components/DoubleBox";
import Cards from "./Components/Cards";
import Ternary from "./Components/Ternary";
import Spread from "./Components/Spread";
import Destructuring from "./Components/Destructuring";
import EmployeeInfo from "./Components/EmployeeInfo";
import EvenOdd from "./Components/EvenOdd";
import InstagramLogo from "./Components/InstagramLogo";
import Import from "./Components/Import";
import BasicButtons from "./Components/MUI/Button";
import Autocomplete from "./Components/MUI/Autocomplete";
import State from "./Components/Usestate";
import Form from "./Components/Form";
import Output from "./Components/Output";
import Props from "./Components/Props";
import UseStudentData from "./Components/UseStudentData";
import { useState } from "react";
import RuseEffect from "./Components/RuseEffect";
import Mode from "./Components/Mode";
import RegistrationForm from "./Components/RegistrationForm";
import CardsMUI from "./Components/MUI/CardsMUI";
import TablesEffect from "./Components/TablesEffect";
import TableMUI from "./Components/MUI/TableMUI";
import Router from "./Components/Router";
import RuseState from "./Components/RuseState";
function App() {
  //React uses Camelcase for CSS
  let styleObject = {
    fontFamily: "cursive",
    backgroundColor: "#f0e68c",
    color: "#000000",
  };

  const [user, setUser] = useState({ name: "", phone: "" });
  return (
    <div>
      {/* <Router /> */}
      <div>
        <div className="App">
          {/*<h1>Greeting from React</h1>
        <h2 style={{ color: "red", backgroundColor: "yellow" }}>
          Inline CSS in react
        </h2>
        <h3 style={styleObject}>Internal CSS in react</h3>
        <h4 class="heading">External CSS in react</h4>
        <img
          style={{ height: "300px", width: "300px" }}
          src={abc}
          alt="image"
        />
        <hr />
        <First />
        <Second />
        <hr />
      <ArrowFunction />
  <hr />
        <ArrayMethod />
  <hr />
        <StudentInfo />
        <hr />
        <Insta />
        <hr /> 
        <DoubleBox />
        <hr />
         <Cards />
        <hr /> 
        <Ternary />
        <hr /> 
        <Spread />
        <hr />
        <Destructuring /> 
  <hr /> */}
          {/* <InstagramLogo /> 
          <hr />
          <EmployeeInfo />
          <hr />
          <EvenOdd />
          <hr />
          <Import />
          <hr />
          <BasicButtons />
          <hr />
          <Autocomplete />
          <hr />
          <State />
          <hr />
          <Form setUser={setUser} />
          <hr />
          <Output user={user} />
          <hr />
          <Props />
          <hr />
          <UseStudentData />
          <hr />
          <RuseEffect />
          <hr />
          <Mode />
          <hr />
          <hr />
          <CardsMUI />
          <hr />
<TablesEffect />
          <hr />
          <hr />
          <TableMUI />
          <hr />*/}
          <RegistrationForm />
          {/* <hr />
          <RuseState /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
