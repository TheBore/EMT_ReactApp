import {Switch, Route} from "react-router-dom";
import './App.css';
import React, {Component} from "react";
import CustomNavbar from "./pages/components/Navbar";
import Location from "./pages/location/Location";

class App extends Component{
    render() {
        return (
            <div className="App">

                <CustomNavbar />

                <div className="container-fluid" style={{height: "100%"}}>
                    <Switch>
                        <Route path="/" exact component={Location}/>
                        <Route path="/location" exact component={Location}/>
                    </Switch>
                </div>

            </div>
        );
    }


}

export default App;
