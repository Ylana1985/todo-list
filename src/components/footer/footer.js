import React from 'react';
import TaskFilter from '../task-filter'

import './footer.css';

function Footer({ todoLeft, onClickFilters, onClickClearCompleted }) {
  return (
    <footer className="footer">
      <span className="todo-count">{todoLeft} items left</span>
      <TaskFilter onClickFilters={(event) => onClickFilters(event)} />
      <button className="clear-completed" onClick={onClickClearCompleted} type="button">
        Clear completed
      </button>
    </footer>
  );
}

Footer.defaultProps = {
  todoLeft: 0,
  onClickFilters: () => {},
  onClickClearCompleted: () => {},
};

export default Footer;