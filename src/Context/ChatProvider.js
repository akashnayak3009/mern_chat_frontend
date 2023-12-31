import { createContext, useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ChatContext = createContext();

const ChatProvider = ({ children }) => {
    const [user, setUser] = useState();
    const [chats, setChats] = useState([]);
    const [selectedChat, setSelectedChat] = useState();
    const [notification, setNotification] = useState([]);

    const navigate = useNavigate();

    useEffect(() => {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        setUser(userInfo);

        if (!userInfo) {
            navigate("/");
        }
    }, [navigate]);
    return (
        <ChatContext.Provider
            value={{
                user,
                notification,
                setNotification,
                chats,
                setChats,
                selectedChat,
                setSelectedChat,
            }}
        >
            {children}
        </ChatContext.Provider>
    );
};

export const ChatState = () => {
    return useContext(ChatContext);
};
export default ChatProvider;
