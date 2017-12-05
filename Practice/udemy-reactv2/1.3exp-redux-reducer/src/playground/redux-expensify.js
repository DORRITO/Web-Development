import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

// add expense
const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});
//remove expense
const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});
//edit expense
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});
//set text filter
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT_FILTER',
    text
});
//sort by date
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})
//sort by amount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})
//set start date
const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
})
//set end date
const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
})

const expensesReducerDefaultState = [];
const filtersReducerDefaultState = [];

///////////////////////build the two reducers!/////////////////////////////
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    switch(action.type){
        case 'ADD_EXPENSE':
            return [...state, action.expense];
        case 'REMOVE_EXPENSE':
            return state.filter(({id}) => id !== action.id);
        case 'EDIT_EXPENSE':
            return state.map((expense) => {
                if(expense.id === action.id){
                    return{ 
                        ...expense, 
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            })
        default:
            return state;
    }
};

const filtersReducer = (state = filtersReducerDefaultState, action) => {
    switch(action.type){
        case 'SET_TEXT_FILTER':
            return{
                ...state,
                text: action.text
            };
        case 'SORT_BY_DATE':
            return{
                ...state,
                sortBy: 'amount'
            };
        case 'SORT_BY_AMOUNT':
            return{
                ...state,
                sortBy: 'date'
            };
        case 'SET_START_DATE':
            return{
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return{
                ...state,
                endDate: action.endDate
            };
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

store.subscribe(() => {
    console.log(store.getState());
});

// const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
// const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 300 }));

// store.dispatch(removeExpense({ id: expenseOne.expense.id }));

// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500 }));

// store.dispatch(setTextFilter('rent'));
// store.dispatch(setTextFilter());

// store.dispatch(sortByAmount()); //sort by amount
// store.dispatch(sortByDate()); //sort by date

store.dispatch(setStartDate(125)); //sort by amount
store.dispatch(setStartDate()); //
store.dispatch(setEndDate(1250)); 

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
  