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
                return <tr key={val.store_id} key_id={val.store_id}> <td>Product : {val.store_name} </td><td> Branch : {val.branch} </td><td> Quality : {val.qty}</td><td> Price : {val.price}  </td></tr>
                })
            }
        </div>
      );
    }
  }

export default List


