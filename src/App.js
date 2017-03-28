import React, { Component } from 'react';
import update from 'react-addons-update';
import math from 'mathjs';
import Button from './Button';
import Buttons from './Buttons';
import Display from './Display';
import './App.css';

class App extends Component {
  constructor(props) {
      super(props);

      this.state = {
          operations: []
      }

      this.handleClick = this.handleClick.bind(this);
  }

  caculateOperations() {
      var result = this.state.operations.join('');

      if(result) {
          var value = String(math.eval(result));
          this.setState({
             operations: [value]
          });
      }
  }

  handleClick(e) {
    var value = e.target.getAttribute('data-value');

    switch (value) {
        case 'clear':
            this.setState({
               operations: []
            });
            break;
        case 'equal':
            this.caculateOperations();
            break;
        default:
            var newOperation = update(this.state.operations, { $push: [value] });
            this.setState({
                operations: newOperation
            });
    }
  }

  render() {
    return (
      <div className="App">
            <Display data={this.state.operations}/>
            <Buttons>
                <Button onClick={this.handleClick} label="C" value="clear"/>
                <Button onClick={this.handleClick} label="7" value="7"/>
                <Button onClick={this.handleClick} label="4" value="4"/>
                <Button onClick={this.handleClick} label="1" value="1"/>
                <Button onClick={this.handleClick} label="0" value="0"/>

                <Button onClick={this.handleClick} label="/" value="/"/>
                <Button onClick={this.handleClick} label="8" value="8"/>
                <Button onClick={this.handleClick} label="5" value="5"/>
                <Button onClick={this.handleClick} label="2" value="2"/>
                <Button onClick={this.handleClick} label="." value="."/>

                <Button onClick={this.handleClick} label="x" value="*"/>
                <Button onClick={this.handleClick} label="9" value="9"/>
                <Button onClick={this.handleClick} label="6" value="6"/>
                <Button onClick={this.handleClick} label="3" value="3"/>
                <Button label="" value="null"/>

                <Button onClick={this.handleClick} label="-" value="-"/>
                <Button onClick={this.handleClick} label="+" value="+" size="2"/>
                <Button onClick={this.handleClick} label="=" value="equal" size="2"/>
            </Buttons>
      </div>
    );
  }
}

export default App;
