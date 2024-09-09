import s from "./Feedback.module.css";

const Feedback = ({ feedback, totalFeedback, positivFeedback }) => {
  return (
    <div className={s.feedback}>
      <p className={s.rating}>Good:{feedback.good}</p>
      <p className={s.rating}>Neutral: {feedback.neutral}</p>
      <p className={s.rating}>Bad: {feedback.bad}</p>
      <p className={s.rating}>Total: {totalFeedback}</p>
      <p className={s.rating}>Positive: {positivFeedback}%</p>
    </div>
  );
};

export default Feedback;
