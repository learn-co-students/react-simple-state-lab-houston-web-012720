import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { pattern1 } from './data.js'
import Matrix from './Matrix.js'



ReactDOM.render(<Matrix values={pattern1} />, document.getElementById('root'));
// ReactDOM.render(<h1> Am I on the right page lmao</h1>, document.getElementById('root'));

