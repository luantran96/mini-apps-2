import React from 'react';
import axios from 'axios';
import _ from 'lodash';
import { Input, Icon } from 'semantic-ui-react';
import ReactPaginate from 'react-paginate';
import Information from './Information.jsx';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state={
          value: '',
          selected: 0,
          results: [],
          pageCount: 0,
        };

    this.handleResultSelect = this.handleResultSelect.bind(this);
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handlePageClick = this.handlePageClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    searchDB(query, pageNumber = 0, cb) {
      axios.get(`/events?q=${query}&_page=${pageNumber}`)
      .then((res) => {
          cb(res.data, res.headers['x-total-count']);
      });
    }

    handleResultSelect(e, { result }) {
      console.log('selected result: ', result);
    }

    handleSearchChange(e, { value }) {      
      this.setState({
        value,
      });
    }

    handlePageClick({ selected }) {
      console.log('page: ', selected + 1);
      const { value } = this.state;

      this.searchDB(value, selected, (results, pageCount) => {
        console.log(pageCount);
        this.setState({
          results,
          selected,
          pageCount: Math.floor(pageCount / 10),
        });
      });
    }

    handleSubmit(e) {
      console.log('CLICKED');
      const { selected, value } = this.state;

      this.searchDB(value, selected, (results, pageCount) => {
        this.setState({
          results,
          selected,
          pageCount: Math.floor(pageCount / 10),
        });
      });
    }

    render() {
      const { results, pageCount } = this.state;
      console.log(`results in render(): `, results);
        return (
            <div>
              <Input
              onChange={_.debounce(this.handleSearchChange, 100, { leading: true })}
              icon={ <Icon name='search' inverted circular link onClick={this.handleSubmit} />}
              />  
            
            <div>
              <Information results={results} />
            </div>
            <div>
              <ReactPaginate 
                    previousLabel={"previous"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    initialPage={0}
                    breakClassName={"break-me"}
                    pageCount={pageCount}
                    marginPagesDisplayed={3}
                    pageRangeDisplayed={10}
                    onPageChange={this.handlePageClick}
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"} />
            </div>
            </div>
        )
    }
}


export default App;