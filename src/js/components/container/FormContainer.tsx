import React from "react";
import ReactDOM from "react-dom";
import Input from "../presentational/Input.jsx";

interface formProps{

}

interface formState{
  "seo_title": string
}
export default class FormContainer extends React.Component<formProps, formState> {
  state: formState= {
    seo_title: ""
  };
  constructor() {
    super();
    // this.state = {
    //   seo_title: ""
    // };
    // this.handleChange = this.handleChange.bind(this);
  }
  
  render() {
    const { seo_title } = this.state;
    return (
      <form id="article-form">
        <input
          text="SEO title"
          label="seo_title"
          type="text"
          id="seo_title"
          value={seo_title}
          onChange={(e)=>{
            console.log(e.currentTarget.value);
            this.setState({"seo_title": e.currentTarget.value})}}
        />
      </form>
    );
  }
}
const wrapper = document.getElementById("create-article-form");
wrapper ? ReactDOM.render(<FormContainer/>, wrapper) : false;