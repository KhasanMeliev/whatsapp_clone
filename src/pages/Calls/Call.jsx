import React from "react";
import { Box, Calls, ShareIcon, Texts, Wrapper } from "./Call.style";
import { AiOutlineLink } from "react-icons/ai";
const Call = () => {
  return (
    <Wrapper>
      <Box>
        <ShareIcon>
          <AiOutlineLink />
        </ShareIcon>
        <Texts>
          <h3>Create call link</h3>
          <p>Share a link for your WhatsApp call</p>
        </Texts>
      </Box>

      <Calls>
        <p>
          To start calling contacts who have WhatsApp, tap 📞 at the bottom of
          your screen
        </p>
      </Calls>
    </Wrapper>
  );
};

export default Call;
