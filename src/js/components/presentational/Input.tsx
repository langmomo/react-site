import React from "react";
export default class Input extends React.Component<React.HTMLAttributes<HTMLInputElement>, {value:string|number|string[]}>{

  input:HTMLInputElement;

  get value() {
    return this.input.value;
  }

  render() {
    let {...attributes} = this.props;
    return (
      <input ref={(e) => {this.input = e;
    console.log(e)}} {...attributes} className={`cxui bordered-input ${this.props.className || ""}`}/>
    );
  }
}