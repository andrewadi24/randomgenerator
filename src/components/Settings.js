import React from 'react'
import Output from './Output.js'
import { useState } from 'react'
import './Settings.js'
import './Settings.css'
function Settings() {
    const [visibility, setvisibility] = useState("hidden")
    const [numberofGroups, setnumberofGroups] = useState(1)
    const [element, setelem] = useState([])
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
    const onSubmit = (e) => {
        setnumberofGroups(e.target[2].value)
        const users = e.target[1].value.split("\n")
        const ls = []
        let n=e.target[2].value
        ls.length=n;
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
                if (currentgroup==n){
                    currentgroup = 0
                }
            }
        }
        const elements = []
        for(let i = 0; i<ls.length; i++){
            let members=[];
            for( let j = 0; j<ls[i].length; j++){
                members.push(<li>{ls[i][j]}</li>)
                /* alert(ls[i][j]) */
            }
            elements.push(<div>
                Group {i+1}:{members}
                </div>)
        }
        e.preventDefault();
        setvisibility("avail")
        setelem(elements)
        setnumberofGroups(e.target[2].value)
      };
    return (
        <div>
            <div class={visibility}>
                <h1>Result: </h1>
                <div class="result-section">
                {element}
                </div>
            </div>
            <div class = "settings">
                <div class="inner-settings">
                    <h1>Edit Settings</h1>
                    <form method="get" onSubmit={onSubmit}>
                        <p>Dataset</p>
                        <select id="cars" name="cars"> <option value="volvo">Team generator</option> <option value="saab">Custom list</option> <option value="mercedes">Random picker</option> <option value="audi">Boolean</option></select>   
                        <h2>Items</h2>
                        <p>You can indicate leaders by typing LEADER (in caps after name)</p>
                        <textarea></textarea>
                        <p>Groups</p>
                        <input type="number" ></input><br/>
                        <button type="submit">Generate</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Settings
