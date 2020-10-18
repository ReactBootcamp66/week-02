import React from 'react';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };

    this.increment = this.increment.bind(this);
  }

  increment() {
    this.setState({
      count: this.state.count + 1,
    });
  }

  render() {
    const { type } = this.props;
    return (
      <div>
        <h1>Class Component</h1>
        <p>Count: {this.state.count}</p>
        <p>Type: {type}</p>

        <button type="button" onClick={this.increment.bind(this)}>
          Inc
        </button>
      </div>
    );
  }
}

export default ClassComponent;
