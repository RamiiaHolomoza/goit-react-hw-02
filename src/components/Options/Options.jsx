import s from "./Options.module.css";

const Options = ({ onLeaveFeedback }) => {
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
      {/* {totalFeedback > 0 } */}
    </div>
  );
};

export default Options;
