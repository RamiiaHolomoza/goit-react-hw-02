import s from "./Options.module.css";

const Options = ({ onLeaveFeedback, onReset, totalFeedback }) => {
  return (
    <div className={s.option}>
      <button
        type="button"
        name="good"
        onClick={() => onLeaveFeedback("good")}
        className={s.btn}
      >
        Good
      </button>
      <button
        type="button"
        name="neutral"
        onClick={() => onLeaveFeedback("neutral")}
        className={s.btn}
      >
        Neutral
      </button>
      <button
        type="button"
        name="bad"
        onClick={() => onLeaveFeedback("bad")}
        className={s.btn}
      >
        Bad
      </button>
      {totalFeedback > 0 && (
        <button type="button" name="reset" onClick={onReset} className={s.btn}>
          Reset
        </button>
      )}
    </div>
  );
};

export default Options;
