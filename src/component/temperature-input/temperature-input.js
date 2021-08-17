import React, { Component } from 'react';

const scales = {
    c: 'Цельсия',
    f: 'Фаренгейта'
}

export default class TemperatureInput extends Component {
    constructor(props){
        super(props);
        this.onChangeInput = this.onChangeInput.bind(this)
    }

    onChangeInput = (e) => {
        this.props.temperatureChange(e.target.value)
    }

    render() {
        const scale = this.props.scale;
        const temperature = this.props.temperature;
        return (
            <div>
                <div>Введи температуру {scales[scale]}</div>
                <input value={temperature} type='text' onChange={this.onChangeInput}/>
            </div>
        )
    }
}