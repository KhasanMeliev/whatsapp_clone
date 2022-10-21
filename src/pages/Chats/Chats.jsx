import React from 'react'
import { Box, Message, Wrapper } from './Chats.style'

const Chats = () => {
    return (
        <Wrapper>
            <Box>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_INtnGRHGT8cN9AiEFvTpLkVlLCdLakqtMyXu16zK0g&s" alt="" />
                <Message>
                    <h2>mukhriddin_m</h2>
                    <p>Hello</p>
                </Message>
                <h6>19:34</h6>
            </Box>
            <Box>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcyosA3Bq3y4UQhBc76lKnNuVMU-c-X-OZw&usqp=CAU" alt="" />
            </Box> <Box>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWcyosA3Bq3y4UQhBc76lKnNuVMU-c-X-OZw&usqp=CAU" alt="" />
            </Box>
        </Wrapper>
    )
}

export default Chats