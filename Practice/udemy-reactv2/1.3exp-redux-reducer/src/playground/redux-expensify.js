import {createStore, combineReducers} from 'redux';

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = [];

///////////////////////build the two reducers!/////////////////////////////
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        default:
            return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        default:
            return{
                text: '',
                sortBy: 'date',
                startDate: undefined,
                endDate: undefined
            }
    }
};
///////////////////////////////////////////////////////////////////

//combine the reducers!//////
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filtersReducer
    })
);///////////////////////////

console.log(store.getState());

const demoState = {
    expenses: [{
      id: 'poijasdfhwer',
      description: 'January Rent',
      note: 'This was the final payment for that address',
      amount: 54500,
      createdAt: 0
    }],
    filters: {
      text: 'rent',
      sortBy: 'amount', // date or amount
      startDate: undefined,
      endDate: undefined
    }
  };
  