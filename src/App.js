import React from 'react';
import Count from './component/Count'
class App extends React.Component{
  constructor(props){
    super(props);
   this.state={
      count:1
    }
    this.decrementCount=this.decrementCount.bind(this);
    this.incrementCount=this.incrementCount.bind(this);
  }
  decrementCount(){
    this.setState({
      count:this.state.count-1
    })
  }
  incrementCount(){
    this.setState({
      count:this.state.count+1
    })
  }
  render(){
    return(
      <div>
        <h1>Counter</h1>
        <h2>{this.state.count}</h2>
        <Count 
            count={this.state.count} 
            decrement={this.decrementCount}
            increment={this.incrementCount} 
            />
    
      </div>
      
      
    );
  }
}
export default App;