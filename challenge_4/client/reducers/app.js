let reducer = (state = {
    numFlags : 0,
    numMines: 10,
    field: [],
}, action) => {
    if ( action.type === "CREATE_MAP") {
      let newField = state.field.slice();

      for( let row = 0; row < 10; row += 1) {
        newField[row] = [];
        for ( let column = 0; column < 10; column += 1) {
          newField[row][column] = {value: 0, toggle: false};
        }
      }

      for( let i = 0; i < state.numMines; i += 1) {
        let bombPlaced = false;
        while(!bombPlaced) {
          const randomX = Math.floor(Math.random() * 10);
          const randomY = Math.floor(Math.random() * 10); 
          if (!newField[randomX][randomY].value) {
            newField[randomX][randomY].value = 'X';
            bombPlaced = true;
          }
        }
      }

      for (let i = 0; i < 10; i += 1){
        for(let j = 0; j < 10; j += 1) {
          // if (newField[i][j].value !== 'X'){
          //   if (i-1 >= 0 && j-1 >= 0 && newField[i-1][j-1].value === 'X') {
          //     newField[i][j].value += 1;
          //   }
          //   if (i-1 >= 0 && newField[i-1][j] === 'X') {
          //     newField[i][j].value += 1;
          //   }
          //   if (i-1 >= 0 && j+1 < 10 && newField[i-1][j+1].value === 'X') {
          //     newField[i][j].value += 1;
          //   }
          //   if (j-1 >= 0 && newField[i][j-1].value === 'X') {
          //     newField[i][j].value += 1;
          //   }
          //   if (j+1 < 10 && newField[i][j+1].value === 'X') {
          //     newField[i][j].value += 1;
          //   }
          //   if (j-1 >= 0 && i+1 < 10 && newField[i+1][j-1].value === 'X') {
          //     newField[i][j].value += 1;
          //   }
          //   if (i+1 < 10 && newField[i+1][j].value === 'X') {
          //     newField[i][j].value += 1;
          //   }
          //   if (i+1 < 10 && j+1 < 10 && newField[i+1][j+1].value === 'X') {
          //     newField[i][j].value += 1;
          //   }
          // }

          if (newField[i][j].value === 'X') {
            if (i-1 >= 0 && j-1 >= 0 && newField[i-1][j-1].value !== 'X') {
              newField[i-1][j-1].value += 1;
            }
            if (i-1 >= 0 && newField[i-1][j] === 'X') {
              newField[i][j].value += 1;
            }
            if (i-1 >= 0 && j+1 < 10 && newField[i-1][j+1].value !== 'X') {
              newField[i-1][j+1].value += 1;
            }
            if (j-1 >= 0 && newField[i][j-1].value !== 'X') {
              newField[i][j-1].value += 1;
            }
            if (j+1 < 10 && newField[i][j+1].value !== 'X') {
              newField[i][j+1].value += 1;
            }
            if (j-1 >= 0 && i+1 < 10 && newField[i+1][j-1].value !== 'X') {
              newField[i+1][j-1].value += 1;
            }
            if (i+1 < 10 && newField[i+1][j].value !== 'X') {
              newField[i+1][j].value += 1;
            }
            if (i+1 < 10 && j+1 < 10 && newField[i+1][j+1].value !== 'X') {
              newField[i+1][j+1].value += 1;
            }
          }
        }
      }

      return {
        ...state,
        field: newField,
      }
    }


    if (action.type === 'TOGGLE') {
      let x = action.payload[0];
      let y = action.payload[1];

      let newField = state.field.slice();

      newField[x][y].toggle = !newField[x][y].toggle;
      return {
        ...state,
        field: newField,
      }
    }

    return state;
};


module.exports = reducer;