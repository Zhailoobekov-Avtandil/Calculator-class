import React from 'react'

export class Calculator extends React.Component {
    constructor() {
        super()
        this.state = {
            num1: 1,
            num2: 0,
            result: 0
        }
    }

    onNumber1 = (e) => {
      this.setState(() => ({num1: parseInt(e.target.value)}))
    }

    onNumber2 = (e) => {
        this.setState(() => ({num2: parseInt(e.target.value)}))
    }

    onPlus = () => {
        this.setState(() => ({result: this.state.num1 + this.state.num2}))
    }

    onMinus = () => {
        this.setState(() => ({result: this.state.num1 - this.state.num2}))
    }

    onMult = () => {
        this.setState(() => ({result: this.state.num1 * this.state.num2}))
    }

    onDivide = () => {
        this.setState(() => ({result: this.state.num1 / this.state.num2}))
    }

    render() {
        return <div>
            <input type='number' value={this.state.num1} onChange={this.onNumber1}/>
            <button onClick={this.onPlus}>+</button>
            <button onClick={this.onMinus}>-</button>
            <button onClick={this.onMult}>*</button>
            <button onClick={this.onDivide}>/</button>
            <input type="number" value={this.state.num2} onChange={this.onNumber2}/>
            <span>{this.state.result}</span>
        </div>
    }

}