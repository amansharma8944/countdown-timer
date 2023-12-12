import React, { useState, useEffect } from 'react';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import PopoverComponent from '../components/Popover';

const PlayPauseSx = {
    color: "#05abcd",
    width: "45px",
    height: "45px",
    marginRight: "10px",
    "&:hover": {
        cursor: "pointer",
    }

}

const Timer = () => {

    const [totalSeconds, setTotalSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [anchorEl, setAnchorEl] = useState(null);

    useEffect(() => {
        let interval = null;

        if (isActive && totalSeconds > 0) {
            interval = setInterval(() => {
                setTotalSeconds(seconds => seconds - 1);
            }, 1000);
        } else if (!isActive) {
            clearInterval(interval);
        }

        if (totalSeconds === 0) {
            setIsActive(false);
            setInputValue('');
        }
        return () => clearInterval(interval);
    }, [isActive, totalSeconds]);

    const startTimer = (minutes) => {
        setTotalSeconds(minutes * 60);
        setIsActive(true);
    };
    const handleInputChange = (e) => {
        const minutes = e.target.value;
        setInputValue(minutes);
        if (minutes) {
            startTimer(minutes);
        } else {
            setIsActive(false);
            setTotalSeconds(0);
        }
    };
    const formatTime = () => {
        const hours = Math.floor(totalSeconds / 3600);
        const minutes = Math.floor((totalSeconds % 3600) / 60);
        const seconds = totalSeconds % 60;

        return `${hours < 10 ? '0' : ''}${hours}:${minutes < 10 ? '0' : ''}${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };
    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handlePopoverClose = () => {
        setAnchorEl(null);
    };
    const open = Boolean(anchorEl);
    return (
        <div className='h-[100vh] w-[100vw] bg-[#1c232f] flex items-center justify-center'>
            <h1 className='absolute top-[5%] left-[30%] text-white opacity-[0.3] text-[25px] font-bold  w-[50vw]'>Frontend Challenge CountDown Timer</h1>
            <div>
                <p className='text-[#05abcd] mb-[5px]'>Enter Minutes</p>
                <input type="number"
                    className='h-[6vh] w-[60vw] bg-[transparent] text-white border border-light-white border-opacity-[0.3] rounded-[5px] px-[5px]'
                    value={inputValue} onChange={handleInputChange}
                    min={"0"}
                    placeholder='0'
                />
                <div className='flex items-center justify-center mt-[15px]'>
                    <RestartAltIcon
                        sx={PlayPauseSx}
                        aria-owns={open ? 'mouse-over-popover' : undefined}
                        aria-haspopup="true"
                        onMouseEnter={handlePopoverOpen}
                        onMouseLeave={handlePopoverClose}
                        onClick={
                            () => {
                                setInputValue(0);
                                setTotalSeconds(0);
                            }
                        }
                    />
                    {
                        !isActive ?
                            <PlayCircleOutlineIcon
                                sx={PlayPauseSx}
                                  onClick={() => {

                                    if (inputValue) {
                                        setIsActive(true)
                                    }

                                }}
                            />
                            :
                            <PauseCircleIcon
                                sx={PlayPauseSx}
                                onClick={() => {

                                    if (inputValue) { 
                                        setIsActive(false)
                                    }
                                }}
                            />
                    }
                    <p className='text-[#05abcd] text-[34px]  font-bold'>{formatTime()}</p>
                </div>
            </div>

          <PopoverComponent
          handlePopoverClose
          handlePopoverOpen
          anchorEl={anchorEl}
          open={open}
          />
       
        
        </div>
    );
};

export default Timer;
