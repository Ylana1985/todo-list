import React, { Component } from 'react';
import './task-filter.css';

export default class TaskFilter extends Component {
  static defaultProps = {
    onClickFilters: () => {},
  };

  render() {
    const { onClickFilters } = this.props;

    return (
      <ul className="filters" onClick={onClickFilters}>
        <li>
          <button className="selected">All</button>
        </li>
        <li>
          <button>Active</button>
        </li>
        <li>
          <button>Completed</button>
        </li>
      </ul>
    );
  }
}