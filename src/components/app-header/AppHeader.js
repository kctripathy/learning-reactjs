import React, { Component } from 'react';
import AppMenu from '../app-menu/AppMenu';

class AppHeader extends Component {
    render() {
        return (
            <React.Fragment>                
                <div className="App-header">
                    <h5>App Header</h5>
                </div>
                <AppMenu />
            </React.Fragment>
        );
    }
}

export default AppHeader; 