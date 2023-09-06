import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ChatPage = () => {
  const [chats, setChats] = useState([]);

    const fetchChat= async()=>{
      const {data} = await axios.get('/api/chat')
      setChats(data);
    };

    useEffect(()=>{
      fetchChat();
    },[])

  return (
    <>
      {
        chats &&  chats.map(chat=><div key={chat._id}>{chat.chatName}</div>)
      }
    </>
  );
}

export default ChatPage