import React from 'react';
import ListItem from './ListItem';

const ListContainer = (props) => {
  const { list, onSelect } = props;

  return (
    <div style={{ marginTop: 30 }}>
      {list.map((item) => ListItem({ onSelect, ...item }))}
    </div>
  )
}

export default ListContainer;
