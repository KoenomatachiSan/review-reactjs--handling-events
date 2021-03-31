import React from 'react';

export default class Component extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isToggleOn: true };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(state => ({
            isToggleOn: !state.isToggleOn
        }));
    }

    render() {
        return (
            <div>
                <h1 style={{display: this.state.isToggleOn ? 'block' : 'none' }}>Hello, it's my title</h1>
                <button onClick={this.handleClick}>
                    {this.state.isToggleOn ? 'Hide' : 'Show'} Title
                </button>
            </div>

        );
    }
}
