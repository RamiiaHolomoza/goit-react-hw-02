import s from "./Feedback.module.css";

const Feedback = ({ feedback }) => {
  return (
    <div className={s.feedback}>
      <p className={s.rating}>Good:{feedback.good}</p>
      <p className={s.rating}>Neutral: {feedback.neutral}</p>
      <p className={s.rating}>Bad: {feedback.bad}</p>
    </div>
  );
};

export default Feedback;
