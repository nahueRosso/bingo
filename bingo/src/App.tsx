import { useRef, useState } from "react";
import "./App.css";
import RuedaAnimation from "./component/RuedaAnimation";
import Logo from "./assets/react.svg";

function App() {
  const refeTab = useRef<any>();
  const refSvg = useRef<any>()
  const refSvg2 = useRef<any>()
  const [numGenerator, setNumGenerator] = useState<any>("Bingo");

  const numeros: number[] = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39,
    40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58,
    59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77,
    78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96,
    97, 98, 99,
  ];

  const randomNumber = () => {
    let variable:number = Math.floor(Math.random() * 99.99);
    let varRandom:number ;
    for (let i = 0; i < 99; i++) {
      if (refeTab.current.children[variable].style.backgroundColor !==
      "rgb(209, 209, 209)") {
        varRandom = variable
        i = 99
      } else {
         variable = Math.floor(Math.random() * 99.998)       
      }
      
    }
    return variable
  };

  const paint = () => {
    refSvg.current.classList.remove('animation');
    refSvg2.current.classList.remove('animation2');
    setTimeout(() => {
      refSvg.current.classList.add("animation");
      refSvg2.current.classList.add("animation2");
    }, 10)
    setTimeout(() => {
      
      setNumGenerator(randomNumber());
    }, 2000);
    refeTab.current.children[numGenerator].style.backgroundColor = "#d1d1d1";
      console.log("si se ejecuta");
  
  };
  
  // console.log(refSvg.current)

  return (
    <div className="App">
      <div className="tablero" ref={refeTab}>
        {numeros.map((numero, index): any => {
          return (
            <div key={`key${index}`} className="numero">
              {numero}
            </div>
          );
        })}
        <img src={Logo} className="logoSub" />
        <img src={Logo} className="logo" />
      </div>

      <div className="numberRandom">
        <RuedaAnimation refSvg={refSvg} refSvg2={refSvg2} />
        <button onClick={paint}>Generar Numero</button>
        <h2>{numGenerator}</h2>
      </div>
    </div>
  );
}

export default App;
