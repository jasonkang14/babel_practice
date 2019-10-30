import React from 'react';
import ReactDOM from 'react-dom';
import Style from './App.css';
import Json from './data.json';

console.log({ Style })
function App() {
    return (
        <div className="container">
            <h3 className="title">webpack example</h3>
            <div>{`name: ${Json.name}, age: ${Json.age}`}</div>
        </div>
    );
}

ReactDOM.render(<App />, document.getElementById('root'));