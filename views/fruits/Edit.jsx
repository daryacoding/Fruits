const React = require('react')
const Default = require('../layouts/Default.jsx')

class Edit extends React.Component {
    render(){
        const {name, _id, color, readyToEat} = this.props.fruit
        return (
            <Default>
                <h1>Edit This Fruit</h1>
                <nav>
                    <a href="/fruits"> Go Back To Fruits Home</a>
                </nav>
                <form method="POST" action={`/fruits/${_id}?_method=PUT`}>
                    Name: <input type="text" name="name" defaultValue={name}></input><br/>
                    Color: <input type="text" name="color" defaultValue={color}></input><br />
                    Is Ready To Eat: <input type="checkbox" name="readyToEat" defaultChecked={readyToEat}/> <br />
                    <input type="submit" value="Edit Fruit" />
                </form>
            </Default>
        )
    }
}

module.exports = Edit