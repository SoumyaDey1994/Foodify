import styles from "../styles/Contact.module.css";

const Contact = () => {
  return (
    <div className="contact">
      <h2>Contact Us</h2>
      <p>Contact us in nmreact@edu.in</p>
      <form>
        <input
          name="username"
          type="text"
          className={styles.inputBox}
          placeholder="Enter username"
        />
        <input
          name="useremail"
          type="email"
          className={styles.inputBox}
          placeholder="Enter email"
        />
        <button className={styles.submitBtn}>Submit</button>
      </form>
    </div>
  );
};

export default Contact;
