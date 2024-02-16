import React, {useState, useEffect}  from 'react';
import logo from './logo.svg';
import './App.css';
import UseContext from './components/UseContext';

function App() {
    const [bgColor, setBgColor] = useState("");

    const changeColor = () => {

      if(bgColor === "#282c34"){
        setBgColor("red")
      }else if(bgColor === "red"){
        setBgColor("blue");
      }else{
        setBgColor("#282c34")
      }

    }
  return (
    <div className="App"  >
      <header className="App-header" style={{backgroundColor: bgColor}} >
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={changeColor}>
        Change Color
        </button>
        <Example/>
        <FavoriteColor/>
        <Car/>
        <Car1/>
        <Timer/>
        <Counter/>
        <UseContext/>
      </header>

    </div>
  );
}

function Example() {
  // Declare a new state variable, which we'll "count"
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");


  const increse = () => {  

    if(count >= 0){
      setCount(count + 1 );
    }
  }
  const decrese = () => {

    if(count > 0){
      setCount(count - 1 );
    }
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={decrese}>
        Decrease
      </button>
      <button onClick={increse}>
        Increase
      </button>
      </div>
  );
}

function FavoriteColor() {
  const [color, setColor] = useState("red"); 

  return (
    <>
      <h1>My favorite color is {color}!</h1>
      <button type="button"
       onClick={() => setColor("blue")}
      >Blue</button>
      <button type="button"
       onClick={() => setColor("red")}
      >Red</button>
    </>
  );
}

function Car() {
  const [brand, setBrand] = useState("Ford");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  const [color, setColor] = useState("Yellow");

  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}.
      </p>
    </>
  )
}


function Car1() {
  
  const [car1, setCar1] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "Blue"
  });

  const updateColor = () => {
    setCar1(previousState => {
      return { ...previousState, color: "red"}
    });
  }

  return (
    <>
      <h1>{car1.brand}</h1>
      <p>
        It is a {car1.color} {car1.model} from {car1.year}.
      </p>
      <button
        type="button"
        onClick={updateColor}
      >Red
      </button>
    </>
  );
}

function Timer() {
  const [count, setCount] = useState(0);

  useEffect( () => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  });
  return(
      <h1>I've rendered {count} times!</h1>
  )
}

function Counter(){
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]);

  return (
    <>
      <p>Count : {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );


}

export default App;
