import React from 'react';
import styled from 'styled-components'
import { TYPE_URL } from '../endpoint'
import TypeList from './typelist'
import { BASE_URL } from '../endpoint'

export const ListContainer = styled.div`
    text-align: center;
`
class dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: [],
    };

  }

  componentDidMount = () => {
    this.callApi()
  }

  callApi = () => {
    fetch(TYPE_URL).then(res => res.json()).then(data => {
      this.setState({ type: data })
    }).catch(err => {
      console.error('Error: ', err);
    });
  }
  handleChange(event)  {
    var URL = BASE_URL+"/"+ event.target.value
    fetch(URL).then(res => res.json()).then(data => {
      this.setState({ type: data })
    }).catch(err => {
      console.error('Error: ', err);
    });
  }
  render() {
    const { type } = this.state;
    let optionItems = type.map((val) =>
      <option
        key={val.type_id}
        value={val.type_id}
      >
        {val.type_name}
      </option>
    );
    return (
      <div>
        <select id="type" value={this.state.value} onChange={this.handleChange}>
        <option value=""> ALL </option>
         {optionItems}
        </select>
      </div>
    )
  }

}

export default dropdown

