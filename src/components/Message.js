import {useState} from 'react'

function Message(){
    const [messages,setMesssages] = useState(['a','b','c'])
    const msg = messages.map(msg=>(
        <h1>{msg}</h1>
    ))
    return(
        <div>
            {messages.length === 0 ? <h1>You're all caught up</h1>:
            <h1>You have {messages.length} unread {messages.length > 1?"messages":"message"}</h1>
            }
            {messages.length > 0 && msg}
        </div>
    )
}

export default Message