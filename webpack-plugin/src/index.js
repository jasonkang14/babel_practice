import React from 'react';
import ReactDOM from 'react-dom';

function App() {
    return (
        <div>
            <h3>Hi, this is a webpack plugin example</h3>
            <p>html-webpack-plugin will be used</p>
            <p>{`앱 버전 == ${APP_VERSION}`}</p>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));