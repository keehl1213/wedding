import React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useNavigate } from 'react-router-dom';
import PATH from 'router/pathConstants';
import HeaderBg from 'components/HeaderBg/HeaderBg';
import mainbg from 'assets/photos/A100876-0034-1.jpg';
import mainbgSmall from 'assets/photos/A100876-0034-1-small.jpg';
import ProgressiveImage from 'react-progressive-image-loading';
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
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    return (
        <div className="header">
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
            <HeaderBg />
            <header>
                <h1>哲瑜 & 雯倩</h1>
                <div>We are married!</div>
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
