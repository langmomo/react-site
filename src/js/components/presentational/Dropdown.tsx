import React from 'react';
import Toggle from "./Toggle"
export interface item{
    key: number;
    value: string
}
export interface DropdownProps extends React.HTMLAttributes<HTMLDivElement>{
    selected: boolean;
    menu: item[];
    curritem?: item;
    onChangeValue?: (opt: item)=>void
}
export default class Dropdown extends React.Component<DropdownProps,{options: item[]; curritem: item}>{
    state={
        options: this.props.menu,
        curritem: this.props.curritem
    }

    constructor(props) {
        super(props);
    }
    render(){
        return(
            <Toggle selected={this.props.selected}>
                <ul className="dd-list">
                {
                    this.state.options.map((opt:item)=>
                        (<li key={opt.key} onClick={()=>this.props.onChangeValue(opt)}>{opt.value}</li>)
                )}
                </ul>
            </Toggle>
        )
    }

}