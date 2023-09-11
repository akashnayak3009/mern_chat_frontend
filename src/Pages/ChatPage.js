import React, { useEffect, useState } from 'react'
import { ChatState } from '../Context/ChatProvider';
import {Box} from '@chakra-ui/react'
import SideDrawer from '../components/miscellaneous/SideDrawer';
import MyChats from '../components/miscellaneous/MyChats';
import ChatBox from '../components/miscellaneous/ChatBox';


const ChatPage = () => {
    const user = ChatState();
  return (
    <div style={{width:"100%"}}>
      {user && <SideDrawer />}
      <Box>
        {user && <MyChats/>} 
        {user && <ChatBox/>}
      </Box>
    </div>
  );
}

export default ChatPage