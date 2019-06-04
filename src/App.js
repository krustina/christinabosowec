import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import AppWrapper from './AppWrapper.js'


class App extends Component {
    render() {
        return (
            <div className="app-wrapper">
                <AppWrapper>
                    {this.props.children}
                </AppWrapper>
            </div>
        )
    }
}

export default App;