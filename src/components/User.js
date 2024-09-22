import React, { useContext } from "react";
import styles from "../styles/User.module.css";
import loggedInUserContext from "../utils/UserContext";

export const User = () => {
  const { userInfo } = useContext(loggedInUserContext);
  const { name, bio, company, avatar_url, location } = userInfo || {};
  return (
    <div className={styles.userCard}>
      {userInfo ? (
        <div>
          <img src={avatar_url} />
          <h2>Owner: {name}</h2>
          <h3>Company: {company}</h3>
          <h3>Location: {location}</h3>
          <p>{bio}</p>
        </div>
      ) : (
        <h3>No Data Available</h3>
      )}
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
        <div className={styles.userCard}>
          <img src={avatar_url} />
          <h2>{name}</h2>
          <h3>{location}</h3>
          <h3>
            Repo:{" "}
            <a href={html_url} target="_blank">
              {html_url}
            </a>
          </h3>
        </div>
        <div style={{ display: "none" }}>
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
