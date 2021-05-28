import logo from './logo.svg';
import './App.css';
function randomFill(word){
  var newWord="";
 for (let index = 0; index < word.length; index++) {
   document.write("<span></span")
   var rand = Math.floor((Math.random()*100)+1);
   if (rand%5==0)  {newWord += word.charAt(index).toLowerCase(); }
   else newWord += word.charAt(index);
   
 }
return newWord;

}
function App() {
  return (
    <div className="App">
      <header id="1" className="App-header">
       <div className="theme-circle">
         <img className="center-photo" src="https://images.pexels.com/photos/5878801/pexels-photo-5878801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
       </div>
       <div className="titles">
      <h1 >{randomFill( "BETTER ONE")}</h1>
      <h1 id="h">{randomFill( "FREE YOURSELF")}</h1>
      <h1 id="h">{randomFill( "TOGETHER")}</h1>
      <h1 id="h">{randomFill( "EXPANSION")}</h1>
      </div>
      </header>
      <header id="sec" className="App-header" style={{backgroundColor:"black"}}></header>
    </div>
  );
}

export default App;
