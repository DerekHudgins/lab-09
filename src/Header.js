import React, { Component } from 'react'
import ListPage from "./ListPage";
import CreatePage from "./CreatePage";
import DetailPage from "./DetailPage";
import {
BrowserRouter as Router,
Switch,
Route,
Link,
useParams
} from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <Router>
            <div className='head'>
            <h1 className='title1'> A list of bands!</h1>
            <h2 className='title2'> add some of your favorits </h2>
                <p className='home'><Link to="/">Home</Link></p>
                <p className='create'><Link to="/create">Add new band!</Link>
                </p>
                <Switch>
                    <Route 
                    path="/" 
                    exact
                    render={(routerProps) => <ListPage {...routerProps} />} 
                    /> 
                    <Route 
                    path="/music/:id" 
                    exact
                    render={(routerProps) => <DetailPage {...routerProps} />} 
                    />
                    <Route 
                    path="/create" 
                    exact
                    render={(routerProps) => <CreatePage {...routerProps} />} 
                    />          
                </Switch>
            </div>
        </Router>
        )
    }
}
