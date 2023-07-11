import css from './FeedbackOptions.module.css';
import React from 'react';


class FeedbackOptions extends React.Component {

  render() {
     const el = Object.keys(this.props.valuesArray);
    return (
    <div>
      <ul className={css.listBtn}>
        {el.map(name => {
          return (
            <li className={css.itemBtn} key={name}>
              <button
                type="button"
                className={css.btn}
                onClick={() => this.props.onLeaveFeedback(name)}
                name={name}
              >
                {name}
              </button>
            </li>
          );
        })}
      </ul>
      <h2 className={css.title}>Statistics:</h2>
    </div>
  )};
};


export default FeedbackOptions;
              

            