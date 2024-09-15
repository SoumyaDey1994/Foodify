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
  }
  render() {
    const { name, profession, contact } = this.props;
    return (
      <div className="userCard">
        <h2>Name: {name}</h2>
        <h3>Profession: {profession}</h3>
        <h4>Contact: {contact}</h4>
      </div>
    );
  }
}
