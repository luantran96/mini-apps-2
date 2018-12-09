import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'semantic-ui-react'

class App extends React.Component {
    componentDidMount() {
      this.props.dispatch({type: "CREATE_MAP"});
    }

    handleClick(value) {
      console.log(value);
      this.props.dispatch({type: "TOGGLE", payload: value});
    }

    render() {
        return (
            <div>
              <Table celled>
                <Table.Body>
                {this.props.field.map((row, i) => (
                  <Table.Row>
                    {row.map((column, j) => (
                      <Table.Cell
                      id={i.toString() +j.toString()}
                      onClick={(e) => this.handleClick(e.target.id)}>
                        {column.toggle ? column.value : 'MINE?'}
                      </Table.Cell>
                    ))}
                  </Table.Row>
                ))}
                </Table.Body>
              </Table>
            </div>
        )
    }
}

const WrappedApp = connect((store) => {
    return {
      numFlags: store.app.numFlags,
      numMines: store.app.numMines,
      field: store.app.field,
    }
})(App);


export default WrappedApp;