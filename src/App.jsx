import { useState } from 'react'
import ButtonComponent from './components/ButtonComponent'
import SizeStyles from './components/SizeStyles';
import './App.css'

function App() {
  const [inputValue, setInputValue] = useState("");
  const [width,setWidth]=useState(16);
  const [height, setHeight] = useState(16);
  // const [link,setLink] = useState('');


  return (
    <>
      <div className="button">
        <ButtonComponent
          type="link"
          buttonType="primary"
          value={inputValue}
          placeholder="Click Here"
          link="https://google.com"
          text={inputValue}
        />
        {}
        <button
          type="button"
          buttonType="primary"
          value={inputValue}
         
          onChange={(e) => setInputValue(e.target.value)}
          // onClick={()=> window.open(setLink())}
          placeholder="Container"
          text={inputValue}
          style={{
            cursor: "pointer",
            textAlign:'center',
          
            padding:'5px',
            color: "black",
          }}>
            Click Here
          </button>
         
        
        <SizeStyles
        width={width}
        height={height}
        setHeight={setHeight}
        setWidth={setWidth}
        />
        {/* <Typography
        fontType='inter'
        fontWeight='medium'
        Size='16'
        fontHeight='20'
        LetterSpacing='20'
        
        /> */}
      </div>
    </>
  );
}

export default App
