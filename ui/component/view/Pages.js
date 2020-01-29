import React, { Component } from 'react'
import App from './App'

export default class Pages extends Component {
  render() {
    return (
      <div>
      <App/>
      <table className='table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th>1</th>
            <td>Title Page#1</td>
            <td>
              <a href='/'>Show</a>
            </td>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
}
