import React, { Component } from "react";
import Counter from "./counter";

class Counters extends Component {
  constructor() {
    super();
    console.log("Counters :: constructor");
  }

  componentDidMount() {
    console.log("Counters :: componentDidMount");
  }

  componentDidUpdate() {
    console.log("Counters :: componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("Counters :: componentWillUnmount");
  }

  render() {
    const { counters, onUp, onDown, onDelete, onReset } = this.props;
    return (
      <div>
        <button onClick={onReset} className="btn btn-primary btn-lg m-2">
          Reset
        </button>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            onUp={onUp}
            onDown={onDown}
            onDelete={onDelete}
          ></Counter>
        ))}
      </div>
    );
  }
}

export default Counters;
