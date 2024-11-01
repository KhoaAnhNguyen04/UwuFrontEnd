import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components";
export const StreakContainer = styled.div``;
const StyledBadge = styled(Badge)({
  position: "absolute !important",
  right: "-12px",
  top: "-12px",
  "& .MuiBadge-badge": {
    fontSize: 14,
    fontWeight: 500,
    right: 14,
    top: 16,
  },
});

const Streak = (props) => {
  return (
    <StyledBadge
      badgeContent={props.streak}
      sx={{
        "& .MuiBadge-badge": {
          color: props.streak < 4 ? "var(--white-text)" : "inherit",
        },
      }}
    >
      <img
        width={"28px"}
        src={props.streak < 4 ? "unfire.png" : "fire.png"}
        alt=""
      />
    </StyledBadge>
  );
};

export default Streak;
