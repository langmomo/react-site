import React from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
import Toggle from "../presentational/Toggle";
import Game from "./game";
import Login from "./login";
import Table from "../presentational/Table";
interface formProps{

}

interface formState{
  "seo_title": string;
  "selected": boolean
}
export default class FormContainer extends React.Component<formProps, formState> {
  state: formState= {
    seo_title: "",
    selected: true
  };

  render() {

    return (
      
      <div>
          <Toggle selected={this.state.selected}>
            <Input onChange={(e)=>this.setState({"seo_title": e.currentTarget.value})}/>
          </Toggle>
          <Game></Game>
          <Input></Input>
          <Login></Login>
          <Table></Table>
      </div>
      
      
    );
  }
}
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer/>, wrapper) : false;