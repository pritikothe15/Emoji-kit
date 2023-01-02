import React, {useState} from "react";
import "./App.css";

function App() {
  const [emoji,setEmoji]= useState("🍕")
  const [emojiColor,setEmojicolor]=useState("white")
  const [emojisize,setEmojisize]=useState(100)
  const [emojiDeg, setEmojiDeg] = useState(0);

  return (
    <div className="container">
      <div className="app-title-container">
        <h1 className="app-title"> 🥳Emoji Kit</h1>
      </div>


      <div className="emoji-editor-container">
        <div> 
          {/* <h1> Output </h1> */}
          <div className="main-emoji-container"style ={{backgroundColor:emojiColor,transform: `rotate(${emojiDeg*3.6}deg)`}}> 
         <div className="main-emoji" style= {{fontSize:`${emojisize*1.8}px`}}> {emoji} </div>                
        </div>
        <div className="emoji-container"> 
          <div className="emoji-item"onClick={()=>{setEmoji('🍕')}}>🍕</div>
          <div className="emoji-item"onClick={()=>{setEmoji('😁')}}>😁 </div>
          <div className="emoji-item"onClick={()=>{setEmoji('🤍')}}>🤍</div>
          <div className="emoji-item"onClick={()=>{setEmoji('🎈')}}>🎈</div>
          <div className="emoji-item"onClick={()=>{setEmoji('🎂')}}>🎂</div>
        </div>
      </div>
        <div>
          {/* <h1> Editing</h1> */}
          <div className="colors-container">
            <div className="color-item bg-black"onClick={()=>{ setEmojicolor("black")}}></div>
            <div className="color-item bg-yellow"onClick={()=>{ setEmojicolor("yellow")}}></div>
            <div className="color-item bg-purple"onClick={()=>{ setEmojicolor("purple")}}></div>
            <div className="color-item bg-blue"onClick={()=>{ setEmojicolor("blue")}}></div>
            <div className="color-item bg-green"onClick={()=>{ setEmojicolor("green")}}></div>
          </div>

          <div className="size-container">
          <input type="range" className="size-slider"onChange={(e)=>{setEmojisize(e.target.value)}}/>

          <div className='size-container'>
            <input type="range" className='size-slider' onChange={(e)=>{setEmojiDeg(e.target.value)}}/>
          </div>
        </div>
        </div>

       
      </div>

      
    </div>
  );
}

export default App;
