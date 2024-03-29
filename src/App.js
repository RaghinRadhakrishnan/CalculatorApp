import React , { Component } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import ClearButton from './components/ClearButton';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);

    this.state={
      input:"",
      previousNumber:"",
      currentNumber:"",
      operator:""
    };
  }
addDecimal= val=>{
  if(this.state.input.indexOf(".")===-1){
    this.setState({input: this.state.input+val});
  }
}

  addToInput=val=>{
    this.setState({input: this.state.input+ val});
  };

  addZeroToInput= val=>{
    if(this.state.input!==""){
      this.setState({input: this.state.input+val});
    }
  };


  add=()=>{
    this.state.previousNumber= this.state.input;
    this.setState({input:""});
    this.state.operator="plus";
  }


  subtract=()=>{
    this.state.previousNumber= this.state.input;
    this.setState({input:""});
    this.state.operator="subtract";
  }

  multiply=()=>{
    this.state.previousNumber= this.state.input;
    this.setState({input:""});
    this.state.operator="multiply";
  }

  division=()=>{
    this.state.previousNumber= this.state.input;
    this.setState({input:""});
    this.state.operator="division";
  }

  evaluate=()=>{
    this.state.currentNumber=this.state.input;
    if(this.state.operator=="plus"){
      this.setState({
        input: parseInt(this.state.previousNumber)+
        parseInt(this.state.currentNumber)
      });
    }
    else if(this.state.operator=="subtract"){
      this.setState({
        input:parseInt(this.state.previousNumber)-
        parseInt(this.state.currentNumber)
      });   
    }
    else if(this.state.operator=="multiply"){
      this.setState({
        input:parseInt(this.state.previousNumber)*
        parseInt(this.state.currentNumber)
      });   
    }
    else if(this.state.operator=="division"){
      this.setState({
        input:parseInt(this.state.previousNumber)/
        parseInt(this.state.currentNumber)
      });   
    }
  }

clearInput =() =>{
  this.setState({input:""});
}

  render(){
  return (
    <div className="App">
      <div className="calc-wrapper">
      <div className="row">
          <Input>  {this.state.input} </Input>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>7</Button>
          <Button handleClick={this.addToInput}>8</Button>
          <Button handleClick={this.addToInput}>9</Button>
          <Button handleClick={this.division}>/</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>4</Button>
          <Button handleClick={this.addToInput}>5</Button> 
          <Button handleClick={this.addToInput}>6</Button>
          <Button handleClick={this.multiply}>*</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addToInput}>1</Button>
          <Button handleClick={this.addToInput}>2</Button>
          <Button handleClick={this.addToInput}>3</Button>
          <Button handleClick={this.add}>+</Button>
        </div>
        <div className="row">
          <Button handleClick={this.addDecimal}>.</Button>
          <Button handleClick={this.addZeroToInput}>0</Button>
          <Button handleClick={this.evaluate}>=</Button>
          <Button handleClick={this.subtract}>-</Button>
        </div>
        <div className="row">
          <ClearButton  handleClear={this.clearInput}>Clear</ClearButton>
        </div>
      </div>
    </div>
  );
}
}

export default App;
