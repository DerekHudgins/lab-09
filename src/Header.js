/* eslint-disable no-unused-vars */
import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Header extends Component {
    render() {
        return (
            <div className='head'>
            <h1 className='title1'> A list of bands!</h1>
            <h2 className='title2'> add some of your favorits </h2>
                <p className='home'><Link to="/">Home</Link></p>
                <p className='create'><Link to="/create">Add new band!</Link>
                </p>
            </div>
        )
    }
}
