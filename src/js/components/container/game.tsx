import React from "react"
import Toggle from "../presentational/Toggle";
import Input from "../presentational/Input";
import Tooltip from "../presentational/Tooltip";
import SearchBox from "../presentational/SearchBox";
interface GameStates{
    board: string[];
    sign: string[];
    selected_sign: string;
    select_a: number[];
    select_b: number[];
    regular: boolean;
    line: number[];
    col: number[];
    diagonal: number;
    antidiagonal: number;
    finish: boolean
}
export default class Game extends React.Component<{}, GameStates>{
    state: GameStates={
        board:Array(9).fill(null),
        sign: ["X","O"],
        selected_sign: "X",
        select_a: [],
        select_b:[],
        line: Array(3).fill(0),
        col: Array(3).fill(0),
        diagonal: 0,
        antidiagonal: 0,
        regular: false,
        finish: false
    }
    checkSuccess=(row: number, column: number, sign: string, board: string[])=>{
        let {line, col, diagonal, antidiagonal, finish} = this.state
        line[row] += (sign=="X"?1:-1)
        col[column] += (sign=="X"?1:-1)
        if(row == column){
            this.state.diagonal += (sign=="X"?1:-1)
        }
        if((row+column+1) == 3){
            antidiagonal+=(sign=="X"?1:-1)
        }
        console.log(row+" "+column+ " " +line[row] + " " +col[column]+" "+diagonal+" "+antidiagonal)
        if(Math.abs(line[row])==3 || Math.abs(col[column])==3 || Math.abs(diagonal)==3 || Math.abs(antidiagonal)==3){
            console.log(`finish game!`);
            finish = true;
            
        }
        
        this.setState({
            line: line,
            col: col,
            diagonal: diagonal,
            antidiagonal: antidiagonal,
            finish: finish,
            board: board
        })
    }
    handleClick(row: number, column:number): void{
        let {board} = this.state
        let id = row*3+column
        if(board[id]!=null) alert("already occupied")
        else {
            
            board[id] = this.state.selected_sign
            
        }
        if(!this.state.finish){
            let currow = -1, currcol=-1;
            for(var i=0; i<3; i++){
                for(var j=0; j<3; j++){
                    
                    if(board[i*3+j]==null){
                        currow=i;
                        currcol=j;
                        
                        break;
                    }
                    
                }
                if(currow!=-1) break;
                
            }

            board[currow*3+currcol]="O"
            this.checkSuccess(row, column, "X", board);
            this.checkSuccess(currow, currcol, "O", board);
        }
        
    
    }

    componentDidMount(){
        let board = this.state.board;
    }
    render(){
        let {board, regular, finish} = this.state
        return(
            <div>
                <Tooltip>
                    <h1>Game</h1>
                </Tooltip>
                
                <Input/>
                
                <button onClick={()=>this.setState({regular: !regular})}>show details</button>
                <Toggle selected={regular}>
                    <h3>use X or O</h3>
                </Toggle>
                <div>
                    <button disabled={board[0]!=null || finish} onClick={()=>this.handleClick(0,0)}>{board[0]}</button>
                    <button disabled={board[1]!=null || finish} onClick={()=>this.handleClick(0,1)}>{board[1]}</button>
                    <button disabled={board[2]!=null || finish} onClick={()=>this.handleClick(0,2)}>{board[2]}</button>
                </div>
                <div>
                    <button disabled={board[3]!=null || finish} onClick={()=>this.handleClick(1,0)}>{board[3]}</button>
                    <button disabled={board[4]!=null || finish} onClick={()=>this.handleClick(1,1)}>{board[4]}</button>
                    <button disabled={board[5]!=null || finish} onClick={()=>this.handleClick(1,2)}>{board[5]}</button>
                </div>
                <div>
                    <button disabled={board[6]!=null || finish} onClick={()=>this.handleClick(2,0)}>{board[6]}</button>
                    <button disabled={board[7]!=null || finish} onClick={()=>this.handleClick(2,1)}>{board[7]}</button>
                    <button disabled={board[8]!=null || finish} onClick={()=>this.handleClick(2,2)}>{board[8]}</button>
                </div>
                <SearchBox></SearchBox>
            </div>
            
        )
    }
}