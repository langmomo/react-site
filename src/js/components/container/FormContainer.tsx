import React from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input";
import Toggle from "../presentational/Toggle";
import Game from "./game";
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
    const { seo_title, selected } = this.state;
    return (
      <div>
<Toggle selected={this.state.selected}>
      <Input onChange={(e)=>this.setState({"seo_title": e.currentTarget.value})}/>
      </Toggle>
      <Game></Game>
      </div>
      
      
    );
  }
}
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer/>, wrapper) : false;