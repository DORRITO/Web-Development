var Greeter = React.createClass({
    //default property used if none are passed
    getDefaultProps: function() {
        return {
            name: "React",
            message: "this is the default message"
        };
    },
    
    //gets the state
    getInitialState: function() {
        return {
            name: this.props.name
        }
    },
    
    //when the user clicks a button.  e is the event object
    onButtonClick: function(e) {
        e.preventDefault();
        
        var nameRef = this.refs.name;
        //refs is the object tied to the input
        var name = nameRef.value;
        //reset input box
        nameRef.value = '';
        
        if (typeof name === 'string' && name.length > 0) { 
            this.setState({
                name: name
            });
        }
    },
    
    render: function() {
        //pulling name property out of render
        var name = this.state.name;
        var message = this.props.message;
        
        return(
            <div>
                <h1>Hello {name}</h1>
                <p>{message}</p>
                <form onSubmit={this.onButtonClick}>
                    <input type="text" ref="name"/>
                    <button>Set Name</button>
                </form>
            </div>
        );
    }
});

var fName = "chip";
var message ="message from the property";

ReactDOM.render(
    //name property passed in here, if no properties, default from above is used
    <Greeter name={fName} message={message}/>,
    document.getElementById("app")
);