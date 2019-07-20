import React from 'react';
import logo from './logo.svg';
import './App.css';
import Radiobox from './form/Radiobox'

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <Radiobox
                    color={'white'}
                    selectedColor={''}
                    hoverColor={''}
                    paddingLeft={'35px'}
                    fontSize={'1rem'}
                    options={[
                        {
                            label: 'iPhone',
                            value: 'iphone'
                        },
                        {
                            label: 'Dogs',
                            value: 'dogs'
                        }
                    ]}
                />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    );
}

export default App;
