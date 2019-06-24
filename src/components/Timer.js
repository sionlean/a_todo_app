import React, { Component } from "react";
import { connect } from "react-redux";
import { setTimer, setTimerMin, setTimerHour, setTimerText } from "../actions";

class Timer extends Component {
  setHour = e => {
    const value = e.target.value;
    this.props.setTimerHour(value);
  };

  setMin = e => {
    const value = e.target.value;
    this.props.setTimerMin(value);
  };

  setText = e => {
    const value = e.target.value;
    this.props.setTimerText(value);
  };

  setTime = e => {
    e.preventDefault();
    this.props.setTimer();
  };
  render() {
    const { hour, min, text } = this.props;
    return (
      <div className="timer">
        <form onSubmit={this.setTime}>
          <p>Set Timer</p>
          <div>
            Hours:{" "}
            <input
              onChange={this.setHour}
              type="number"
              value={hour}
              min="0"
              step="1"
              max="23"
            />
            <span>
              Minutes:{" "}
              <input
                onChange={this.setMin}
                type="number"
                value={min}
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
              value={text}
            />
          </div>
          <input className="set btn" type="submit" value="Set" />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    hour: state.setTimer.hour,
    min: state.setTimer.min,
    text: state.setTimer.text
  };
};

const mapDispatchToProps = dispatch => ({
  setTimer: () => dispatch(setTimer()),
  setTimerHour: hour => dispatch(setTimerHour(hour)),
  setTimerMin: min => dispatch(setTimerMin(min)),
  setTimerText: text => dispatch(setTimerText(text))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Timer);
