
import React from 'react';
import './App.css';
 import ArrowDownward from '@material-ui/icons/ArrowDownward';

function randomFill(word){
  console.log(word)
  var newWord="";
 for (let index = 0; index < word.length; index++) {
   document.write("<span></span")
   var rand = Math.floor((Math.random()*100)+1);
   if (rand%5==0)  {newWord += word.charAt(index).toLowerCase(); }
   else newWord += word.charAt(index).toUpperCase();
   
 }
return newWord;

}
class App extends React.Component{
  constructor(){
      super();

      this.state = {
        heading:[],
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
              title: 'soul searching',
              imageUrl: 'https://images.pexels.com/photos/4500796/pexels-photo-4500796.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              id: 3,
              category: 'headshots'
            
          
            
            },
            {
              title: 'passion',
              imageUrl: 'https://images.pexels.com/photos/8024815/pexels-photo-8024815.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
              id: 4,
              category: 'headshots'        
            
            }]
      }
      
  
  }
  componentDidMount(){
    var headings =[];
    for (let index = 0; index < this.state.data.length; index++) {
    headings[index] =randomFill( this.state.data[index].title);
      console.log(randomFill( this.state.data[index].title))
      console.log(headings)
    }
    this.setState({heading:headings})
    
  }
  
  handleChange=(x)=>{
    console.log("hey")
    this.setState({current:x.id})
  }
  

  render(){
    return (
      <div className="App">
        <header id="1" className="App-header">
        <span class="material-icons-outlined">arrow forward</span>
        <Face/>
         <div className="theme-circle">
           <img className="center-photo" src={this.state.data[this.state.current-1].imageUrl}></img>
         </div>
         <span class="material-icons">&#xe5c6;</span>
         <span class="material-icons md-48">face</span>
       
        <div className="titles">
        {this.state.data.map((x) => 
        <div>
           <p className="category">{x.id}.&nbsp;{ x.category.toUpperCase()}</p>
           <p className="title" onMouseEnter={()=>this.handleChange(x)}>{this.state.heading[x.id-1]}</p>
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
