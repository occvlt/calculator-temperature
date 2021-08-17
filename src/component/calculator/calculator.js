import React, { Component } from 'react';
import BoilingVerdict from '../boiling-verdict';
import TemperatureInput from '../temperature-input';

function toCelsius(farengeit) {
    return (farengeit -32) * 5 / 9;
}

function toFarengeit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded;
}

export default class Calculator extends Component {
    state = {
      scale: 'c',
      temperature: ''
    }

    celsiusChange = (temperature) => {
        this.setState({
            scale: 'c',
            temperature
        })
        console.log(this.state)   
    }

    farengeitChange = (temperature) => {
        this.setState({
            scale: 'f',
            temperature
        })        
        console.log(this.state)   
    }

    render() {     
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const farengeit = scale === 'c' ? tryConvert(temperature, toFarengeit) : temperature;
        return (
            <div>
                <TemperatureInput
                    scale = {'c'}
                    temperature = {celsius}
                    temperatureChange={this.celsiusChange}/>
                <TemperatureInput
                    scale = {'f'}
                    temperature = {farengeit}
                    temperatureChange={this.farengeitChange}/>
                <BoilingVerdict celsius={temperature}/>
           </div>
        )
    }
}