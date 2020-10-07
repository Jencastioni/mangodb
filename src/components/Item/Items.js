
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Table from 'react-bootstrap/Table'
// import Layout from '../shared/Layout'

// import the api's url
import apiUrl from '../../apiConfig'
import messages from '../AutoDismissAlert/messages'

// Import axios so we can make HTTP requests
import axios from 'axios'

// This will be our Items Index component (show all books)
class Items extends Component {
  constructor (props) {
    super(props)

    // setup our initial state
    this.state = {
      // we have zero items, until our API request has finished
      items: []
      // deleted: false
    }
  }

  // this is called whenever our component is created and inserted
  // into the DOM (first appears)
  componentDidMount () {
    // make a GET request for all of the items
    const { msgAlert } = this.props
    axios({
      url: (`${apiUrl}/items`),
      headers: {
        'Authorization': `Bearer ${this.props.user.token}`
      }
    })
      // .then(res => {
      //   if (res.data.items === []) {
      //     msgAlert({
      //       heading: 'Your Inventory Is Empty!',
      //       message: messages.inventoryEmpty,
      //       variant: 'danger'
      //     })
      //   }
      // }
      // )
      .then((res) => {
        this.setState({ items: res.data.items })
        if (res.data.items.length === 0) {
          msgAlert({
            heading: 'Your Inventory Is Empty!',
            message: messages.inventoryEmpty,
            variant: 'danger'
          })
        } else if (res) {
          msgAlert({
            heading: 'Success!',
            message: messages.indexItemSuccess,
            variant: 'success'
          })
        }
      })
      // .then((items) => {
      //   if (items === []) {
      //     msgAlert({
      //       heading: 'Your Inventory Is Empty!',
      //       message: messages.inventoryEmpty,
      //       variant: 'danger'
      //     })
      //   } else if (items) {
      //     msgAlert({
      //       heading: 'Success!',
      //       message: messages.indexItemSuccess,
      //       variant: 'success'
      //     })
      //   }
      // }
      // )
      // .then((items) => msgAlert({
      //   heading: 'Success!',
      //   message: messages.indexItemSuccess,
      //   variant: 'success'
      // }))
      .catch(error => {
        msgAlert({
          heading: 'Indexing Items Failed' + error.message,
          message: messages.indexItemFailure,
          variant: 'danger'
        })
      })
  }

  render () {
    const items = this.state.items.map(item => (
      <div className="table" key={item._id}>
        <Table striped bordered hover variant="dark">
          <thead>
            <tr>
              <th>Category</th>
              <th>Product</th>
              <th>Quantity</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{item.category}</td>
              <td><Link to={`/items/${item._id}`}>{item.product}</Link></td>
              <td>{item.quantity}</td>
              <td>{item.price}</td>
            </tr>
          </tbody>
        </Table>
      </div>
      // <li key={item._id}>
      //   <Link to={`/items/${item._id}`}>
      //     {item.product}
      //   </Link><br/>
      //   <p>Quantity: {item.quantity}</p>
      // </li>
    ))

    return (
      <div className="items">
        <h6>Items</h6><br/>
        <p> </p>
        <p> </p>
        <ul>
          {items}
        </ul>
      </div>
    )
  }
}

export default Items
