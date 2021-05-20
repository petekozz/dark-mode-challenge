import React from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faMoon, faSun} from '@fortawesome/free-solid-svg-icons';
import {ThemeContext} from '../contexts';

export default class ThemeSwitcher extends React.Component {

    render() {
        return (
            <ThemeContext.Consumer>
                {({isDarkModeEnabled, toggleDarkMode}) => (
                    <button 
                        className="app__dark-mode-btn icon level-right" 
                        onClick={() => toggleDarkMode()}>
                        <FontAwesomeIcon icon={isDarkModeEnabled ? faSun : faMoon} color={isDarkModeEnabled ? '#FFA500' : '#4D5B6B'}/>
                    </button>
                )}
            </ThemeContext.Consumer>
        );
    }

}
