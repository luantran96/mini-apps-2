import React from 'react';
import { connect } from 'react-redux';
import { Button, Dropdown } from 'semantic-ui-react';



class App extends React.Component {
    calculateScore() {
      this.props.dispatch({type:'CALCULATE', payload: this.props.value});
    }

    handleChange(value) {
      this.props.dispatch({type:'CURRENT_OPTION', payload: value});
    }

    render() {
      const { frames } = this.props;

      const options = [
        { key: 1, text: '1', value: 1 },
        { key: 2, text: '2', value: 2 },
        { key: 3, text: '3', value: 3 },
        { key: 4, text: '4', value: 4 },
        { key: 5, text: '5', value: 5 },
        { key: 6, text: '6', value: 6 },
        { key: 7, text: '7', value: 7 },
        { key: 8, text: '8', value: 8 },
        { key: 9, text: '9', value: 9 },
        { key: 10, text: '10', value: 10 },
      ]

        console.log(this.props);
        return (
            <div className="main">
            <div className="allFrames">
              {frames.map((score, idx) => 
              (<div 
              className="frame"
              key={idx}>
                <div>Frame {idx} </div>
                <div>{score}</div>
              </div>
              ))}
            </div>
              <Dropdown 
              placeholder='choose # of pins' 
              compact 
              selection 
              options={options}
              onChange={(e, { value }) => this.handleChange.call(this, value)}/>
              <Button onClick={this.calculateScore.bind(this)}>Bowl!</Button>
            </div>
        );
    }
}


const WrappedApp = connect((store) => {
    return {
        score: store.app.score,
        frames: store.app.frames,
        value: store.app.value,
    }
})(App);



export default WrappedApp;