import React, { Component } from "react";
import "./main_view.css";
import ReactDOM from 'react-dom';

class MainView extends Component {
  constructor(props) {
    super(props);
    this.state = { time: 0.0, completed: 0, times: [], canStart: false };
    this.next = this.next.bind(this);
    this.reset = this.reset.bind(this);
    this.clear = this.clear.bind(this);
    this.pause = this.pause.bind(this);
    this.tick = this.tick.bind(this);
    this.start = this.start.bind(this);
  }
 

  start() {
    this.timerID = setInterval(() => this.tick(), 100);
    this.setState({ canStart: false });

    // this.tick();
  }

  handleKeyPress(e) {
    console.log("hi");
  }
  componentDidMount() {
    this.start();
  }

  componentWillUnmount() {
    this.pause();
  }

  pause() {
    clearInterval(this.timerID);
    this.setState({ canStart: true });
  }
  tick() {
    this.setState({
      time: this.state.time + 0.1,
    });
  }

  clear() {
    this.setState({
      time: 0,
    });
  }
  next() {
    var ele = document.getElementsByClassName("circle");
    var res = document.getElementsByClassName("Result");
    if (this.state.completed === 5) {
      
      this.reset();
    } else {
      ele[this.state.completed].className += " completed";
      res[this.state.completed].innerHTML = (this.state.time / 60).toFixed(1);
      this.setState({ completed: this.state.completed + 1 });
      this.state.times.push(this.state.time);
      this.clear();
    }
  }

  reset() {
    this.pause();
    this.setState({ completed: 0 });
    var ele = document.getElementsByClassName("circle");
    var res = document.getElementsByClassName("Result");
    for (var i = 0; i < 5; i++) {
      ele[i].className = "circle";
      res[i].innerHTML = 0;
    }
    this.clear();
    this.start();
  }

  render() {
    return (
      <div id="main_view_container">
        <h1 id="title">CP Timer</h1>
        <h2>
          <inline id="time">{this.state.time.toFixed(2)}</inline> seconds
        </h2>
        <div id="circle_container">
          <div className="circle" id="c1"></div>

          <div className="circle" id="c2"></div>

          <div className="circle" id="c3"></div>

          <div className="circle" id="c4"></div>

          <div className="circle" id="c5"></div>
        </div>

        <div id="button_container">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            viewBox="0 0 24 24"
            width="50"
            onClick={this.reset}
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M12.5 8c-2.65 0-5.05.99-6.9 2.6L2 7v9h9l-3.62-3.62c1.39-1.16 3.16-1.88 5.12-1.88 3.54 0 6.55 2.31 7.6 5.5l2.37-.78C21.08 11.03 17.15 8 12.5 8z" />
          </svg>
          {/* pause */}
          <svg
            onClick={this.pause}
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            viewBox="0 0 24 24"
            width="50"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>

          {/* play  */}
          {this.state.canStart ? (
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="50"
                viewBox="0 0 24 24"
                width="50"
                onClick={this.start}
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M8 5v14l11-7z" />
              </svg>{" "}
            </div>
          ) : (
            <div>
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="50"
                viewBox="0 0 24 24"
                width="50"
              >
                <path d="M0 0h24v24H0z" fill="none" />
                <path d="M8 5v14l11-7z" fill="#d3d3d3" />
              </svg>
            </div>
          )}
          {/* next */}
          <svg
            onClick={this.next}
            xmlns="http://www.w3.org/2000/svg"
            height="50"
            viewBox="0 0 24 24"
            width="50"
          >
            <path d="M0 0h24v24H0z" fill="none" />
            <path d="M6 18l8.5-6L6 6v12zM16 6v12h2V6h-2z" />
          </svg>
        </div>
      </div>
    );
  }
}

export default MainView;
