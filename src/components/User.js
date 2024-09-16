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
      userInfo: {},
    };
  }

  async componentDidMount() {
    const USER_API_URL = `https://api.github.com/users/${this.props.userName}`;
    const data = await fetch(USER_API_URL);
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }

  render() {
    const { name, location, avatar_url, html_url } = this.state.userInfo;
    return (
      <>
        <div className="userCard">
          <img src={avatar_url} width={"100px"} />
          <h2>{name}</h2>
          <h3>{location}</h3>
          <h3>
            Repo:{" "}
            <a href={html_url} target="_blank">
              {html_url}
            </a>
          </h3>
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
