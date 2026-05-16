import { useState } from 'react'
import './Chat.scss'

export default function Chat(){
    const[chat,setChat] =useState(true)
    return(
        <div className="chat">
        <div className="messages">
            <h1>Messages</h1>
            <div className="message">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <span>John Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <span>John Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <span>John Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <span>John Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
            <div className="message">
                <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                <span>John Doe</span>
                <p>Lorem ipsum dolor sit amet...</p>
            </div>
        </div>
        {chat && (<div className="chatBox">
            <div className="top">
                <div className="user">
                    <img src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
                    John Doe
                </div>
                <span className='close' onClick={()=>setChat(null)}>X</span>
            </div>
            <div className="center">
                <div className="chatMessage">
                    <p>Hey Muhammad Faizan</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Hey John!!✌</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>How are you buddy?</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>yeah i'm good what's about you john?</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>i'm also fine buddy</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>John, could you please ask the viewers to like the video</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage">
                    <p>yeah sure please viewers like this video</p>
                    <span>1 hour ago</span>
                </div>
                <div className="chatMessage own">
                    <p>Thanks For Watching..❤</p>
                    <span>1 hour ago</span>
                </div>
            </div>
            <div className="bottom">
                <textarea></textarea>
                <button>Send</button>
            </div>
        </div>)}
    </div>
    )
}