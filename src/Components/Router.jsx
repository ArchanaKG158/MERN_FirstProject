import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ArrowFunction from "./ArrowFunction";
import Home from "./Home";
import ArrayMethod from "./ArrayMethod";
import EmployeeInfo from "./EmployeeInfo";
import Cards from "./Cards";
import Error from "./Error";
import Mode from "./Mode";
import CardsMUI from "./MUI/CardsMUI";
import TableMui from "./MUI/TableMUI";
import TablesEffect from "./TablesEffect";
import RuseEffect from "./RuseEffect";

export default function Router() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/arrow" element={<ArrowFunction />} />
          <Route exact path="/array" element={<ArrayMethod />} />
          <Route exact path="/employee" element={<EmployeeInfo />} />
          <Route exact path="/*" element={<Error />} />
          <Route exact path="/cards" element={<Cards />} />
          <Route exact path="/mode" element={<Mode />} />
          <Route exact path="/muiCards" element={<CardsMUI />} />
          <Route exact path="/cards" element={<Cards />} />
          <Route exact path="/tableMUI" element={<TableMui />} />
          <Route exact path="/tableeffect" element={<TablesEffect />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
