import { useState } from "react";
import "./App.scss";
import Create from "../Pages/Create/Create.jsx";
import Info from "../Pages/Info/Info.jsx";
import form from "../../Form.json";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  NavLink,
} from "react-router-dom";

function App() {
  const [forms, setForms] = useState(form);

  function addNewForm(newForm){
    setForms((prevstate) => [...prevstate, newForm]);
  }

  return (
    <Router>
      <header>
        <NavLink to="/">Создать</NavLink>
        <NavLink to="/info">Информация</NavLink>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Create addNewForm={addNewForm} length={forms.length}/>} />
          <Route path="/info" element={<Info forms={forms}/>} />
        </Routes>
      </main>
    </Router>
  );
}

export default App;
