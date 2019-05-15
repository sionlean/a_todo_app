import React, { Component } from "react";

class Timer extends Component {
  state = {
    timeHour: "",
    timeMin: "",
    note: ""
  };

  setHour = e => {
    const { value } = e.target;
    this.setState({ timeHour: value });
  };

  setMin = e => {
    const { value } = e.target;
    this.setState({ timeMin: value });
  };

  setText = e => {
    const { value } = e.target;
    this.setState({ note: value });
  };

  submitTimer = e => {
    e.preventDefault();
    this.props.timer(this.state.timeHour, this.state.timeMin, this.state.note);
    this.setState({ timeHour: "" });
    this.setState({ timeMin: "" });
    this.setState({ note: "" });
  };

  render() {
    return (
      <div className="timer">
        <form onSubmit={this.submitTimer}>
          <p>Set Timer</p>
          <div>
            Hours:{" "}
            <input
              onChange={this.setHour}
              type="number"
              value={this.state.timeHour}
              min="0"
              step="1"
              max="23"
            />
            <span>
              Minutes:{" "}
              <input
                onChange={this.setMin}
                type="number"
                value={this.state.timeMin}
                min="0"
                step="1"
                max="59"
              />
            </span>
          </div>
          <div className="note">
            Notes:
            <br />
            <textarea
              onChange={this.setText}
              rows="5"
              cols="20"
              placeholder="Reminder text..."
              maxLength="100"
              value={this.state.note}
            />
          </div>
          <input className="set btn" type="submit" value="Set" />
        </form>
      </div>
    );
  }
}

export default Timer;
