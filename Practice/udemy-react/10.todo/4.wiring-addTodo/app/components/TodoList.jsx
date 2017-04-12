var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass({
    
    render: function() {
        var {todos} = this.props;
        
        var renderTodos = () => {
            return todos.map((todo) => {
                return(
                    //... passes down every attribute as props, cool!  key makes it so react can keep track of list items.
                    <Todo key={todo.id} {...todo}/>
                )
            });
        };
        
        return(
            <div>
                {renderTodos()}
            </div>
        )
    } 
});

module.exports = TodoList;