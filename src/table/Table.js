import React, { Component } from 'react'
import RowTable from './RowTable'
import FilterTable from './FilterTable';

class Table extends Component {
    constructor(props){
        super(props);
        this.state = {
            header : [],
            data: [],
            currentData: []
        }
    }

    doFilter = (id) => {
        debugger;
        const d = [...this.state.data];
        const fd = id == "" ?  d : d.filter((x) => x.id == id );
        this.setState({currentData: fd});
    }

    componentWillReceiveProps(props){
        const { dataSource } = props;
        if(dataSource.length){
            this.setState({header : Object.keys(dataSource[0]), data: dataSource, currentData: dataSource });
        }
    }

  render() {
    const headerL = this.state.header.map((v, i) => 
    (
          <th key={ i }> {v}  </th>
    ));
    const bodyL = this.state.currentData.map((v, i) => 
    (
          < RowTable data={v} id = {i} key={i} />
    ));
    return (
    <div className="container">
       <div className="row">
            <div className="col s12">
                <div className="card">
                    <div class="table-header">
                        <span class="table-title">Material Datatable</span>
                        <FilterTable data= { this.props.data } filter={ this.doFilter } />
                    </div>
                    <table className="table table-hover table-bordered results centered highlight responsive-table">
                            <thead>
                                <tr>
                                { headerL }
                                </tr>
                            </thead>
                            <tbody>
                                {  bodyL }
                            </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
        
    )
  }
}

export default Table
