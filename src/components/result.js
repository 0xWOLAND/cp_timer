import React, { Component } from "react";
import "./result.css";
export default class Result extends Component {
  constructor(props) {
    super(props);
    this.copy = this.copy.bind(this);
  }
  copy() {
    let ans = "";
    let arr = document.getElementsByClassName("Result");
    for (let i = 0; i < 5; i++) {
      ans += arr[i].innerHTML + " ";
    }
    navigator.clipboard.writeText(ans);
  }
  render() {
    return (
      <div id="result_container">
        <div id="result">
          <h1 className="Result" id="r1">
            0
          </h1>
          <h1 className="Result" id="r2">
            0
          </h1>
          <h1 className="Result" id="r3">
            0
          </h1>
          <h1 className="Result" id="r4">
            0
          </h1>
          <h1 className="Result" id="r5">
            0
          </h1>
        </div>
        <div id="copy_button_container" >
          <div>
            <div id="intro-content" class="center-content">
              <div class="center-content-inner">
                <div class="content-section content-section-margin">
                  <div class="content-section-grid clearfix">
                    <a onClick={this.copy}class="button nav-link">
                      <div class="bottom"></div>

                      <div class="top">
                        <div class="label">Copy Text!</div>

                        <div class="button-border button-border-left"></div>
                        <div class="button-border button-border-top"></div>
                        <div class="button-border button-border-right"></div>
                        <div class="button-border button-border-bottom"></div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
