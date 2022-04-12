import React, { useEffect } from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useLocation, useNavigate } from 'react-router-dom';
import PATH from 'router/pathConstants';
import HeaderBg from 'components/HeaderBg/HeaderBg';
import mainbg from 'assets/photos/A100876-0034-1.jpg';
import mainbgSmall from 'assets/photos/A100876-0034-1-small.jpg';
import ProgressiveImage from 'react-progressive-image-loading';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import IconButton from '@mui/material/IconButton';
import bgm from 'assets/audios/bgm.mp3';
import './Header.sass';

interface LinkTabProps {
    label?: string;
    href: string;
}

function LinkTab(props: LinkTabProps) {
    const navigate = useNavigate();
    return (
        <Tab
            component="a"
            onClick={(
                event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
            ) => {
                event.preventDefault();
                navigate(props.href);
            }}
            {...props}
        />
    );
}

const Header: React.FC = () => {
    let bgmController: HTMLAudioElement | null = null;
    const location = useLocation();
    const [value, setValue] = React.useState(0);
    const [muted, setMuted] = React.useState(true);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    useEffect(() => {
        // const bgmObj: HTMLAudioElement | null = document.getElementById(
        //     'bgm'
        // ) as HTMLAudioElement;
        // bgmObj?.volume = 20;

        document.body.addEventListener('mousemove', () => {
            if (bgmController && bgmController.paused) {
                // bgmController.muted = false;
                bgmController?.play();
                bgmController.volume = 0.2;
                setMuted(false);
            }
        });
        bgmController?.addEventListener(
            'ended',
            () => {
                bgmController?.play();
            },
            false
        );
    }, [bgmController]);

    const handleplay = () => {
        document.body.addEventListener('mousemove', () => {
            if (bgmController && bgmController.paused) {
                // bgmController.muted = false;
                bgmController?.play();
                bgmController.volume = 0.2;
                setMuted(false);
            }
        });
        bgmController?.addEventListener(
            'ended',
            () => {
                bgmController?.play();
            },
            false
        );
    };

    return (
        <div className="header">
            {location.pathname === PATH.HOME && (
                <ProgressiveImage
                    preview={mainbgSmall}
                    src={mainbg}
                    render={(src, style) => (
                        <img
                            src={src}
                            style={style}
                            className="banner"
                            alt="wedding banner"
                        />
                    )}
                />
            )}
            <HeaderBg />
            <header>
                <h1>哲瑜 & 雯倩</h1>
                <div>We are married!</div>
                <audio
                    id="bgm"
                    // autoPlay
                    muted={muted}
                    ref={(thisRef) => {
                        bgmController = thisRef;
                    }}
                    // oncanplay={handleplay}
                >
                    <source src={bgm} />
                    <track kind="captions" />
                </audio>
                {muted ? (
                    <IconButton
                        aria-label="mute"
                        onClick={() => {
                            setMuted(false);
                        }}
                    >
                        <VolumeOffIcon />
                    </IconButton>
                ) : (
                    <IconButton
                        aria-label="play"
                        onClick={() => {
                            setMuted(true);
                        }}
                    >
                        <VolumeUpIcon />
                    </IconButton>
                )}
            </header>
            <nav>
                <Box sx={{ width: '100%', bgcolor: 'background.paper' }}>
                    <Tabs value={value} onChange={handleChange} centered>
                        <LinkTab label="Home" href={PATH.HOME} />
                        <LinkTab label="Our Story" href={PATH.OUR_STORY} />
                        <LinkTab label="Photos" href={PATH.PHOTOS} />
                        <LinkTab label="About Us" href={PATH.ABOUT_US} />
                    </Tabs>
                </Box>
            </nav>
        </div>
    );
};

export default Header;
