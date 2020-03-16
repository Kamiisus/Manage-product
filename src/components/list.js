import React from 'react';
import styled from 'styled-components'
import { BASE_URL } from '../endpoint'

export const ListContainer = styled.div`
    text-align: center;
`

class List extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          x: 0, 
          y: 0,
          product: [],
        };
    }

    componentDidMount = () => {
        this.callApi()
    }

    callApi = () => {
        fetch(BASE_URL).then(res => res.json()).then(data => {
            this.setState({ product: data })
        }).catch(err => {
            console.error('Error: ', err);
        });
    }
  
    render() {
        const { product } = this.state
        console.log(product, '==product')
      return (
        <div>
            {
                product.map(val => {
                return <p key={val.store_id} key_id={val.store_id}>{val.store_name}</p>
                })
            }
          <h1>Move the mouse around!</h1>
          <p>The current mouse position is ({this.state.x}, {this.state.y})</p>
        </div>
      );
    }
  }

export default List


