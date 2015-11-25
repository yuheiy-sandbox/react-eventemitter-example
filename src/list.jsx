'use strict';
import React from 'react';
import eventemitter from './eventemitter';

export default class List extends React.Component {
  render() {
    return (
      <ul>
        {this.props.items.map(item =>
          <li key={item.id}>{item.value}</li>
        )}
      </ul>
    );
  }
}

List.propTypes = {
  items: React.PropTypes.array
};

List.defaultProps = {
  items: []
};
