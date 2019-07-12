import React from "react"
interface GameStates{
    board: string[];
    sign: string[];
    selected_sign: string;
}
export default class Game extends React.Component<{}, GameStates>{
    state: GameStates={
        board:Array(9).fill(null),
        sign: ["X","O"],
        selected_sign: ""
    }
    handleClick(id: number): void{
        let board = this.state.board
        if(board[id]!=null) alert("already occupied")
        else {
            board[id] = this.state.selected_sign
        }
        this.setState({
            board : board
        })
    }

    componentDidMount
    render(){
        let {board} = this.state
        return(
            <div>
                <div>
                    <button disabled={board[0]!=null} onClick={()=>this.handleClick(2)}>{board[0]}</button>
                    <button>{board[1]}</button>
                    <button>{board[2]}</button>
                </div>
                <div>
                    <button>{board[3]}</button>
                    <button>{board[4]}</button>
                    <button>{board[5]}</button>
                </div>
                <div>
                    <button>{board[6]}</button>
                    <button>{board[7]}</button>
                    <button>{board[8]}</button>
                </div>
            </div>
            
        )
    }
}