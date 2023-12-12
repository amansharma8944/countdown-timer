import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';

import React from 'react'

const PopoverComponent = ({handlePopoverClose,handlePopoverOpen,anchorEl,open}) => {
  return (
    <Popover
    id="mouse-over-popover"
    sx={{
        pointerEvents: 'none',
        background: "transparent",
      
    }}
    open={open}
    anchorEl={anchorEl}
    anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
    }}
    transformOrigin={{
        vertical: 'top',
        horizontal: 'left',
    }}
    onClose={handlePopoverClose}
    disableRestoreFocus
    PaperProps={{
        style: {
            background: 'transparent',
        },
    }}
    >
    <Typography sx={{ p: 1, color: "white" }}>
        {
            anchorEl?.getAttribute("data-testid") === "PlayCircleOutlineIcon" ? "resume" : anchorEl?.getAttribute("data-testid") === "RestartAltIcon" ? "reset" : anchorEl?.getAttribute("data-testid") === "PauseCircleIcon"?"pause":""
    
        }
    </Typography>
    </Popover>
  )
}

export default PopoverComponent
