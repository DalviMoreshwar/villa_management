import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import MemberList from './container/membersList';

 
function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={MemberList} />
    </BrowserRouter>
  );
}

export default App;
