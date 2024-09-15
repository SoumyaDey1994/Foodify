import { User, UserClass } from "./User";
const About = () => {
  return (
    <div className="about">
      <h1>About Us</h1>
      <p>This is about us page of Namaste React</p>
      <User name={"Soumya Dey (Functional)"} profession={"Web Developer (Functional)"} contact={"https://www.linkedin.com/in/skd24x365/"} />
      <UserClass name={"Soumya Dey (Class)"} profession={"Web Developer (Class)"} contact={"https://www.linkedin.com/in/skd24x365/"} />
    </div>
  );
};

export default About;
