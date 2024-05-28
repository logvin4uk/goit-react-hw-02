import css from "./Feedback.module.css";

const Feedback = ({ value, total, positive }) => {
  return (
    <div className={css.container}>
      <p className={css.text}>Good: {value.good}</p>
      <p className={css.text}>Neutral: {value.neutral}</p>
      <p className={css.text}>Bad: {value.bad}</p>
      <p className={css.text}>Total: {total}</p>
      <p className={css.text}>Positive: {positive}%</p>
    </div>
  );
};

export default Feedback;
