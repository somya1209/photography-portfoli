import logo from './logo.svg';
import React from 'react'
import './App.css';
function randomFill(word){
  console.log(word)
  var newWord="";
 for (let index = 0; index < word.length; index++) {
   document.write("<span></span")
   var rand = Math.floor((Math.random()*100)+1);
   if (rand%3==0)  {newWord += word.charAt(index).toLowerCase(); }
   else newWord += word.charAt(index).toUpperCase();
   
 }
return newWord;

}
class App extends React.Component{
  constructor(){
      super();

      this.state = {
        current:1,
          data:[ {
              title: 'better one',
              imageUrl: 'https://images.pexels.com/photos/5878801/pexels-photo-5878801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"',
              id: 1,
              category: 'headshots'
            },
            {
              title: 'free yourself',
              imageUrl: 'https://images.pexels.com/photos/5509502/pexels-photo-5509502.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
              id: 2,
              category: 'fashion'
            },
            {
              title: 'together',
              imageUrl: '',
              id: 3,
              category: 'headshots'
            
          
            
            }]
      }
      
  
  }
  handleChange=(x)=>{
    console.log("hey")
    this.setState({current:x.id})
  }
  

  render(){
    return (
      <div className="App">
        <header id="1" className="App-header">
         <div className="theme-circle">
           <img className="center-photo" src="https://images.pexels.com/photos/5878801/pexels-photo-5878801.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></img>
         </div>
        <div className="titles">
        {this.state.data.map((x) => 
        <div>
           <p className="category">{x.id}.&nbsp;{ x.category.toLocaleUpperCase()}</p>
           <p className="title" onClick={()=>this.handleChange(x)}>{randomFill(x.title)}</p>
        </div>
      
           
            )

            }

        </div>
        </header>
        <header id="sec" className="App-header" style={{backgroundColor:"black"}}></header>
      </div>
    );
  }

}



export default App;
