import React, { Component } from 'react'

export class RowTable extends Component {
  render() {
    const cellL = Object.keys(this.props.data).map((v, i) => ( <td key={i}> {
        this.props.data[v] 
     } </td> ))
    return (
        <tr key = {this.props.id}>
            {
                cellL
            }
        </tr>
    )
  }
}

export default RowTable
