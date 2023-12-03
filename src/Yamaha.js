import { Component } from "react";
import './Yamaha.css'

class Colorchange extends Component{
    constructor(){
        super()
        this.state={
            make:"Yamaha",
            model:"R15",
            color:"BLACK"
        }
    }
    changeColor(){
        this.setState({
            color:"RED"
        })
    }

    render(){
        return(
            <div className="color-change">
                <h2>{this.state.color}</h2>
                <button onClick={()=>this.changeColor()}>Change</button>
            </div>
        )
    }
}

export default Colorchange