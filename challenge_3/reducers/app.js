let reducer = (state = {
  score: 0,
  frames: [0,0,0,0,0,0,0,0,0,0],
  curFrame: 0,
  value: 0,
  totalScore: 0,
  round: 1,
  totalScore: 0,
  numSpares : 0,
  numStrikes: 0,
}, action) => {

    if (action.type === "CALCULATE") {
      if ( state.round === 1) { // If first round
        if (action.payload === 10) {
          return {
            ...state,
            curFrame: state.curFrame + 1,
            round: 1,
            numSpares: state.numSpares + 1,
          }
        } else {
          let newFrames = state.frames.slice();
    
          if (state.curFrame > 0) {
            newFrames[state.curFrame - 1] += (state.numSpares * 10) + action.payload; 
          } 

          const reducer = (accumulator, currentValue) => accumulator + currentValue;

          return {
            ...state, 
            score: state.score + action.payload,
            round: state.round + 1,
            frames: newFrames,
            numSpares: 0,
            totalScore: state.frames.reduce(reducer),
          };
        }

      }
      // If second round
      if (state.round === 2) {
        if ((action.payload + state.score) >= 10) { 
          return {
            ...state,
            round: 1,
            curFrame: state.curFrame + 1,
            numSpares: state.numSpares + 1,
            score: 0,
          }
        }
      }
    }

    if (action.type === 'CURRENT_OPTION') {
      return {
        ...state, 
        value: action.payload,
      };
    }

    return state;
}

module.exports = reducer;