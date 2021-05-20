import React from 'react';
import {ThemeContext} from '../contexts';

export default class AppContainer extends React.Component {

    toggleDarkMode = () => {
        this.setState(state => {
            return {isDarkModeEnabled: !state.isDarkModeEnabled}
        });
    }

    state = {
        isDarkModeEnabled: false,
        toggleDarkMode: this.toggleDarkMode,
    }
    
    render() {
        const {children} = this.props;

        return (
           <ThemeContext.Provider value={this.state}>
                <div className={`app-container ${this.state.isDarkModeEnabled ? 'dark-mode' : ''}`}>
                    {children}
                </div>
            </ThemeContext.Provider>
            </div>
        );
    }

}
