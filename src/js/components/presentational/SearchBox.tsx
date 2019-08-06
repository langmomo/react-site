import React from 'react';
import Dropdown,{item} from './Dropdown';

export default class SearchBox extends React.Component<{},{selected: boolean; curitem: item}>{
    state = {
        selected: false,
        curitem: null
    }

    render(){
        let {selected} = this.state
        let m: item[] = [{key: 1,
            value: "string"},{key:2, value:"int"},{key:3, value:"boolean"}]

        let curitem = this.state.curitem==null? " ": this.state.curitem.value
        return(
            <div>
                <input onClick={()=>this.setState({selected:!selected})} value={curitem} onChange={()=>console.log("change")}></input>
                {selected && 
                    <Dropdown menu={m} selected={this.state.selected} onChangeValue={(value: item)=>{
                        this.setState({curitem: value});
                        console.log(value.key)
                    }}/>
                }
            </div>
           
         
        )
    }

}