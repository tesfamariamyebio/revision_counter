import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
class Count extends React.Component{
render(){
    return (
        <div>
 
    <button type="button" class="btn btn-success" onClick={this.props.increment}>+</button>
    <button type="button" class="btn btn-danger" onClick={this.props.decrement}>-</button>

   
        </div>
    );
}
}
export default Count ;