import React from "react";
import {
  Box,
  Camera,
  CameraIcon,
  Icon,
  MyStatus,
  OtherStatus,
  Profile,
  Texts,
  TickIcon,
  Wrapper,
} from "./Status.style";
import { FaPlus, FaWhatsapp } from "react-icons/fa";
import { TiTick } from "react-icons/ti";
import { AiFillCamera } from "react-icons/ai";
const Status = () => {
  return (
    <Wrapper>
      <MyStatus>
        <Box>
          <Profile>
            <img
              src="data:image/jpeg;base64,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"
              alt=""
            />
            <FaPlus />
          </Profile>
          <Texts>
            <h1>My Status</h1>
            <p>Tap to add status update</p>
          </Texts>
        </Box>
        <h3>Recent updates</h3>
        <OtherStatus>
          <Icon>
            <FaWhatsapp />
          </Icon>
          <p>WhatsApp</p>
          <TickIcon>
            <TiTick />
          </TickIcon>
        </OtherStatus>
      </MyStatus>
      <Camera>
        <CameraIcon>
          <AiFillCamera />
        </CameraIcon>
      </Camera>
    </Wrapper>
  );
};

export default Status;
