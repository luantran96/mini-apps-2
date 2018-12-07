import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';



class App extends React.Component { 
    componentDidMount() {
        this.props.dispatch({type: 'INC'});
    }
    render() {
        console.log(this.props);
        return (
            <div>
                <Button>Bowl!</Button>
            </div>
        );
    }
}


const WrappedApp = connect((store) => {
    return {
        score: store.app.score,
    }
})(App);


export default WrappedApp;