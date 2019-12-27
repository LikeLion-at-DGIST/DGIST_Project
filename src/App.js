import React from "react";
import logo from "./logo.svg";
import "./App.css";

class BusTime extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      d: new Date()
    };
    setInterval(() => {
      this.setState({
        d: new Date()
      });
    }, 1000);
  }

  render() {
    return (
      <div className={BusTime} className="pos_center">
        <h1>
          {this.state.d.getHours()}시 {this.state.d.getMinutes()}분{" "}
          {this.state.d.getSeconds()}초 입니다.
        </h1>
      </div>
    );
  }
}

function App() {
  return <BusTime />;
}

export default App;
