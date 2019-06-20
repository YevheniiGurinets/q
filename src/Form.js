import React from 'react';

class Form extends React.Component{

  static getDerivedStateFromProps (props, state) {
    if (props.item.id !== state.id) {
      return { ...props.item }
    }
    return null
  }

  state = {
    name: '',
    age: '',
    id: ''
  };

  render() {
    const { onSubmit } = this.props;
    const { name, age } = this.state;

    return (
      <form onSubmit={e => e.preventDefault() || onSubmit(this.state)}>
        <input type="text" value={name}
               onChange={e => this.setState({...this.state, name: e.target.value})}/>
        <input type="text" value={age}
               onChange={e => this.setState({...this.state, age: e.target.value})}/>
        <input type="submit"/>
      </form>
    )
}
};

export default Form;
