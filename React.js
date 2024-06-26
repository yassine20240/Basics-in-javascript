
/*
const { Component } = require("react")

//react work in single compent 
let x = ()=>{
    return(
        <h2>hello from compent</h2>
    )
}

send data form dad to cheldren props 
send data from children to dad Component

*/


/*hooks in reactjs 
1
useState Hook
import React, { useState } from 'react';

function Counter() {
  // Declare a state variable 'count' initialized to 0
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}
/////////////////////////////////////////////
2
useEffect Hook
import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    // Fetch data when the component mounts
    fetch('https://api.example.com/data')
      .then(response => response.json())
      .then(data => setData(data));

    // Cleanup function (optional), similar to componentWillUnmount
    return () => {
      // Perform cleanup actions here
    };
  }, []); // Empty dependency array means this effect runs once after mount

  return (
    <div>
      {data ? (
        <p>Data: {data}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
/////////////////////////////////////////////

3
useContext Hook
import React, { useContext } from 'react';

// Create a context
const ThemeContext = React.createContext('light');

function ThemeProvider() {
  return (
    <ThemeContext.Provider value="dark">
      <App />
    </ThemeContext.Provider>
  );
}

function App() {
  // Consume the context
  const theme = useContext(ThemeContext);

  return <p>Current theme: {theme}</p>;
}

/////////////////////////////////////////////
4Custom Hooks
import { useState, useEffect } from 'react';

function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return windowSize;
}

function ComponentUsingCustomHook() {
  const { width, height } = useWindowSize();

  return (
    <div>
      <p>Window width: {width}</p>
      <p>Window height: {height}</p>
    </div>
  );
}






*/






