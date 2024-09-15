import React from "react";

export const User = (props) => {
  const { name, profession, contact } = props;
  return (
    <div className="userCard">
      <h2>Name: {name}</h2>
      <h3>Profession: {profession}</h3>
      <h4>Contact: {contact}</h4>
    </div>
  );
};

export class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 0,
    };
  }
  render() {
    const { name, profession, contact } = this.props;
    return (
      <>
        <div className="userCard">
          <h2>Name: {name}</h2>
          <h3>Profession: {profession}</h3>
          <h4>Contact: {contact}</h4>
        </div>
        <div className="userCard">
          <h4>Counter 1: {this.state.count}</h4>
          <h4>Counter 2: {this.state.count2}</h4>
          <button
            style={{ margin: "10px" }}
            onClick={() =>
              this.setState({
                count: this.state.count + 1,
              })
            }
          >
            + Counter1
          </button>
          <button
            style={{ margin: "10px" }}
            onClick={() =>
              this.setState({
                count2: this.state.count2 + 1,
              })
            }
          >
            + Counter2
          </button>
        </div>
      </>
    );
  }
}
