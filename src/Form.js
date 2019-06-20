import React from 'react';

const Form = (props) => {
  const { onSubmit, item = {} } = props;
  const [state, setState] = React.useState(item);
  React.useEffect(() => {
    setState(item);
  }, [item]);

  const { name, age } = state;

  return (
    <form onSubmit={e => e.preventDefault() || onSubmit(state)}>
    <input type="text" value={name} onChange={e => setState({ ...state, name: e.target.value })}/>
    <input type="text" value={age} onChange={e => setState({ ...state, age: e.target.value })}/>
    <input type="submit"/>
  </form>
  )
};

export default Form;
