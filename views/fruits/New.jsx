const React = require('react')
const Default = require('../layouts/Default.jsx')

class New extends React.Component{
    render(){
        return (
            <Default>
            <h1>Create A New Fruit</h1>
            <nav>
                <a href="/fruits">Go Back To Fruits Home Page</a>
            </nav>
            <form method="POST" action="/fruits">
                Name: <input name="name" placeholder='Name of Fruit Here'></input><br/>
                Color: <input name="color" placeholder='Color of Fruit Here'></input><br/>
                Is Ready to Eat": <input type="checkbox" name="readyToEat"></input><br/>
                <input type="submit" value="Submit Fruit"></input><br/>
            </form>
            </Default>
        )
    }
}

module.exports = New