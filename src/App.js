import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import MemberList from "./container/membersList";
import MemberAdd from "./container/memberAdd";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MemberList} />
      <Route path="/member-add" component={MemberAdd} />
    </BrowserRouter>
  );
}

export default App;
