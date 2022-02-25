import { BrowserRouter,Switch,Route } from "react-router-dom";
import LoginComponent from "./components/LoginComponent";
import RegisterComponent from "./components/RegisterComponent";
import AnnounceComponent from "./components/AnnounceComponent";
import AddHospitalComponent from "./components/AddHospitalComponent";
import App from "./App"
import HospitalComponent from "./components/HospitalComponent";
import AddAnnounceComponent from "./components/AddAnnounceComponent";
const MyRoute=()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/announce" exact component={AnnounceComponent}/>
                <Route path="/login" exact component={LoginComponent}/>
                <Route path="/register" exact component={RegisterComponent}/>
                <Route path="/addhospital" exact component={AddHospitalComponent}/>
                <Route path="/hospital" exact component={HospitalComponent}/>
                <Route path="/addannounce" exact component={AddAnnounceComponent}/>
            </Switch>
        </BrowserRouter>
    );
}
export default MyRoute;