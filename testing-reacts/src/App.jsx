
import { useState } from 'react';
import './App.css';
import { Button } from './components/Button';

function App() {
  const [theme,setTheme]=useState('light');
  return (
    <div className="App">
      <div>Button testing in react</div>
      <h3>Theme is {theme}</h3>
      <Button onClick={()=>{
       setTheme(theme==="light" ? "dark" :"light");
      }}>Change Theme</Button>
      <Button variant="ghost" colorScheme="green">Green Ghost</Button>
    </div>
    
  );
};

export default App;
