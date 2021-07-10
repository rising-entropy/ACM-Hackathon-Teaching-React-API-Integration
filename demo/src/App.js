import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Main from './Main/Main'
import Login from './Login/Login'
import SignUp from './SignUp/SignUp'
import CreatePrescription from './CreatePrescription/CreatePrescription'
import CreateInstance from './CreateInstance/CreateInstance'

function App() {
  return (
    <div className="App">
       <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/signup" component={SignUp}></Route>
          <Route exact path="/createPrescription" component={CreatePrescription}></Route>
          <Route exact path="/createInstance" component={CreateInstance}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
