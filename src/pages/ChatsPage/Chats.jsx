import React from 'react'
import users from '../../mocks/chats'
import { Box, Message, Wrapper } from './Chats.style'

const Chats = () => {
    return (
        <Wrapper>
            {users.map((user) => (
                <Box key={user.id}>
                <img src={user.profile_pic} alt="" />
                <Message>
                        <h2>{user.name}</h2>
                        <p>{ user.message}</p>
                </Message>
                    <h6>{user.time}</h6>
            </Box>
            ))}
        </Wrapper>
    )
}

export default Chats