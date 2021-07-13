import React from 'react';
import './App.css';
import Person from './components/Person';

function App() {
  const blogObj = {
    title: 'Blog Title 1',
    description: 'Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor Lorem Ipsum Dolor '
    

  }
  return (
   <>
      <div className="App">
        <div> 
          <h3>{blogObj.title}</h3>
          <p>{blogObj.description}</p>
        </div>
        <div> 
          <h3>{blogObj.title}</h3>
          <p>{blogObj.description}</p>
        </div>
        <div> 
          <h3>{blogObj.title}</h3>
          <p>{blogObj.description}</p>
          <div> 
          <h3>{blogObj.title}</h3>
          <p>{blogObj.description}</p>
        </div>
        <div> 
          <h3>{blogObj.title}</h3>
          <p>{blogObj.description}</p>
        </div>
        </div>

        <h1> This is the first ReactJS app</h1>
        <Person name="Tedu 1" age ="4"/>
        <Person name="Tedu 1" age ="4"/>
        <Person name="Tedu 1" age ="4"/>
      </div>
   
   </>


  );
}

export default App;
