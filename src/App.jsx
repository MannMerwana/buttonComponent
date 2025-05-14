import { useState } from 'react'
import ButtonComponent from './components/ButtonComponent'

import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("");
  // const [link,setLink] = useState('');


  return (
    <>
      <div className="button">
        <ButtonComponent
          type="button"
          buttonType="primary"
          placeholder="Click Here"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          text={inputValue}
          style={{
            cursor: "pointer",
            textAlign: "center",
            padding: "15px",
            color: "black",
          }}
          typography={{
            fontFamily: "Poppins",
            fontWeight: 600,
            fontSize: "35px",
            lineHeight: "24px",
            letterSpacing: "1px",
          }}
          colors={{
            color: "black",
            backgroundColor: "red",
          }}
          size={{
            width: "45%",
            height: "10%",
          }}
          // Transform={{
          //   rotate: "20deg",
          //   scale: "1.5",
          // }}
          shadow={{
            boxShadow: "inset 0 0 10px rgba(0, 105, 242, 0.5)",
          }}
        ></ButtonComponent>
      </div>
    </>
  );
}

export default App
