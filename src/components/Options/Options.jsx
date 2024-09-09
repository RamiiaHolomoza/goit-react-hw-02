import s from "./Options.module.css";

const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    <div className={s.option}>
      <button onClick={() => onLeaveFeedback("good")} className={s.btn}>
        Good
      </button>
      <button onClick={() => onLeaveFeedback("neutral")} className={s.btn}>
        Neutral
      </button>
      <button onClick={() => onLeaveFeedback("bad")} className={s.btn}>
        Bad
      </button>
      {totalFeedback > 0 && (
        <button onClick={onReset} className={s.btn}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
