import React from "react";
import { Box, CallIcon, Calls, ShareIcon, Texts, Wrapper } from "./Call.style";
import { AiOutlineLink } from "react-icons/ai";
import { HiOutlinePhoneMissedCall } from "react-icons/hi";
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

        <CallIcon>
          <HiOutlinePhoneMissedCall />
        </CallIcon>
      </Calls>
    </Wrapper>
  );
};

export default Call;
