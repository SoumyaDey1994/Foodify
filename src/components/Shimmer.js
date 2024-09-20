import styles from '../styles/Shimmer.module.css';

const Shimmer = () => {
  return (
    <div className={styles.shimmerContainer}>
      <div className={`${styles.shimmerCard} ${styles.shimmerBG}`}></div>
      <div className={`${styles.shimmerCard} ${styles.shimmerBG}`}></div>
      <div className={`${styles.shimmerCard} ${styles.shimmerBG}`}></div>
      <div className={`${styles.shimmerCard} ${styles.shimmerBG}`}></div>
      <div className={`${styles.shimmerCard} ${styles.shimmerBG}`}></div>
    </div>
  );
};

export default Shimmer;
