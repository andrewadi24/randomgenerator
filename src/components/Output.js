import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import './Output.css'
function update(){
    
}
function Output() {
    const [visibility, setvisibility] = useState("hidden")
    const [numberofGroups, setnumberofGroups] = useState(4)
    const users = ["andrew","bob","charlie","doddy","dev"]
    const ls = []
    ls.length=numberofGroups;
    for(let i = 0; i<ls.length; i++){
        ls[i]=[];
    }
    let currentgroup = 0
    while (true){
        if(users.length==0)break
        else{
            let userindex = Math.floor(Math.random() * users.length)
            let user = users[userindex]
            ls[currentgroup].push(user)
            users.splice(userindex, 1)
            currentgroup++
            if (currentgroup==numberofGroups){
                currentgroup = 0
            }
        }
    }
    const elements = []
    for(let i = 0; i<ls.length; i++){
        let members=[];
        for( let j = 0; j<ls[i].length; j++){
            members.push(<li>{ls[i][j]}</li>)
        }
        elements.push(<div>
            Group {i+1}:{members}
            </div>)
    }
    return (
        <div class={visibility}>
            <h1>Result: </h1>
            <div class="result-section">
            {elements}
            </div>
        </div>
    )
}

export default Output
