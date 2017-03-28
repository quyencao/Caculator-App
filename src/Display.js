import React, { Component } from 'react';

export default class Display extends Component {
    render() {
        var string = this.props.data.join('');

        return (
            <div className="Display">
                {string}
            </div>
        )
    }
}