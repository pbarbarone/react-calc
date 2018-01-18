import React, {Component} from 'react';

class Calculator extends Component {
	constructor(props){
		super(props)
			this.state = {
				inputOne:0,
				inputTwo: 0
			}
			this.findSum= this.findSum.bind(this) 
		}

  findSum(e){
    let sumTotal = parseInt(e.target.value); 
    if(!sumTotal) {
      sumTotal = 0;
    }
    const currentName = e.target.name;
    this.setState({
      [currentName]: sumTotal
    });
  }
	render() {
		return (
			<div className="container">
				<h1>Add with React!</h1>
				<div className="add">
					<input type="text" name="inputOne" onChange={(e) => this.findSum(e)}/>
					<span>+</span>
					<input type="text" name="inputTwo" onChange={(e) => this.findSum(e)} />
					<h3>Results: {this.state.inputOne + this.state.inputTwo}</h3>
				</div>
			</div>
			);
	}
}


export default Calculator;