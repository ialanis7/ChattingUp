import Head from "next/dist/next-server/lib/head.js";
import styled from "styled-components";
import Sidebar from "../../components/Sidebar";
import ChatScreen from "../../components/ChatScreen";
import { auth, db } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import getRecipientEmail from "../../utils/getRecipientEmail";

function Chat({chat, messages}) {
    const [user] = useAuthState(auth);

    return (
        <Container>
            <Head>
                <title>
                    Chat with {getRecipientEmail(chat.users , user)}
                </title>
            </Head>
            <Sidebar />
            <ChatContainer>
                <ChatScreen chat={chat} messages={messages} />
            </ChatContainer>

        </Container>
    );
    
}

export default Chat;

export async function getServerSideProps(context) {
    const ref = db.collection("chats").doc(context.query.id);

    // PREP the messages on the server side
    const messagesRes =  await ref
    .collection("messages")
    .orderBy("timestamp", "asc")
    .get();

    const messages = messagesRes.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
    })).map((messages) => ({
        ...messages,
        timestamp: messages.timestamp.toDate().getTime(),
    }));

    //Prep the chats
    const chatRes = await ref.get();
    const chat = {
        id: chatRes.id,
        ...chatRes.data(),
    };

    return {
        props: {
            messages: JSON.stringify(messages),
            chat: chat,
        },
    }
}

const Container = styled.div`
    display: flex;
`;

const ChatContainer = styled.div`
    flex: 1;
    overflow: scroll;
    height: 100vh;

    ::-webkit-scrollbar{
        display:none;
    }

    -ms-overflow-style: none;
    scrollbar-width: none;
`;