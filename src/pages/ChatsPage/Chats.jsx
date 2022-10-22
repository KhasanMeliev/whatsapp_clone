import React from "react";
import users from "../../mocks/chats";
import { Box, Message, MessageIcon, SendMessage, Wrapper } from "./Chats.style";
import { BiMessageDetail } from "react-icons/bi";
const Chats = () => {
  return (
    <Wrapper>
      {users.map((user) => (
        <Box key={user.id}>
          <img src={user.profile_pic} alt="" />
          <Message>
            <h2>{user.name}</h2>
            <p>{user.message}</p>
          </Message>
          <h6>{user.time}</h6>
        </Box>
      ))}
      <SendMessage>
        <MessageIcon>
          <BiMessageDetail />
        </MessageIcon>
      </SendMessage>
    </Wrapper>
  );
};

export default Chats;
