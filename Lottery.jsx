import { useState } from "react"
import { genTicket ,sum } from "./helper";
import Ticket from "./Ticket";
export default function Lottery({num=3,winCondition}){
    let [ticket,setTicket]=useState(genTicket(num));
    let isWinning=winCondition(ticket);
    let buynewticket=()=>{
        setTicket(genTicket(num))
    }
    return(
        <div>
            <h1>Lottery Game!</h1>
            <Ticket ticket={ticket}/>
           <button onClick={buynewticket}>Buy new Ticket</button>
            <h3>{isWinning &&"Congratulations You Won!"}</h3>
        </div>
    )
}