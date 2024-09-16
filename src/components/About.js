import { User, UserClass } from "./User";
const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>This is about us page of Namaste React</p>
      <UserClass userName={"soumyadey1994"} />
    </div>
  );
};

export default About;
