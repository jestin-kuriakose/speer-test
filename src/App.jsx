import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AllCalls from './pages/AllCalls.jsx';
import Archive from './pages/Archive.jsx';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
  
        <Route path="/">
          <Route index element={<AllCalls/>}/>
          <Route path="archive" element={<Archive/>}/>
        </Route>

      </Routes>
    </BrowserRouter>

  );
};

export default App;
