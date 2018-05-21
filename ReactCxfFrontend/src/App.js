import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import SimpleReactFileUpload from "./SimpleReactFileUpload";
import UploadedFileData from "./UploadedFileData"
import Test from "./Test"

class App extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h1 className="App-title">Welcome to React</h1>
                </header>

                <div>
                    <h1>Upload</h1>
                    <p>
                        <SimpleReactFileUpload/>
                    </p>
                    <p>
                        <UploadedFileData/>
                    </p>
                </div>
                <div>
                    <Test/>
                </div>

            </div>

        );
    }
}

export default App;
