import './App.css';
import {useState} from 'react';
import Buttons from './components/buttons';
import {evaluate} from 'mathjs';

function App () {
  let [exp, setExp] = useState ('');
  let [answer, setAnswer] = useState ('');
  function handleClear () {
    setExp ('');
  }
  function handleChange (e) {
    setExp (e.target.value);
  }
  function handleEqual () {
    setExp(evaluate(exp));
  }
  function handleInput(e){
    setExp(`${exp}${e.target.innerText}`);
  }
  function handleDelete(){
    setExp(exp.slice(0, -1));
  }
  return (
    <div className="App">
      <header className="App-header">
        <h1>Calculator</h1>
      </header>
      <body className="App-body">
        <input
          type="text"
          className="text-class"
          placeholder="Enter expression"
          value={exp}
          onChange={handleChange}
        />
        <div className="btns-class">
          <Buttons
            handleClear={handleClear}
            handleEqual={handleEqual}
            handleInput={handleInput}
            handleDelete={handleDelete}
          />
        </div>
      </body>
    </div>
  );
}

export default App;
