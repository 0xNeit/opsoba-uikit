import styled from "styled-components";
import { background, border, layout, position, space } from "styled-system";
import { m as motion } from "framer-motion";
import { BoxProps } from "./types";

export const MotionBox = styled(motion.div)<BoxProps>`
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
`;

const Box = styled.div<BoxProps>`
  ${background}
  ${border}
  ${layout}
  ${position}
  ${space}
`;

export default Box;
