import React from "react"
import Input from "../presentational/Input";

export default class Login extends React.Component<{},{}>{
    render(){
        return(
            <div>
            <div>
                <label>username: </label>
                <Input/>
            </div>
            <div>
                <label> password:</label>
                <Input/>
            </div>
            </div>
            
        )
    }
}