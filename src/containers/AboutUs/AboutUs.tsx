import React from 'react';
import Grid from '@mui/material/Grid';
import yuProfile from 'assets/profile-yu.png';
import chienProfile from 'assets/profile-chien.png';
import fattieProfile from 'assets/profile-fattie.png';
import useResize from 'hooks/useResize';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import './AboutUs.sass';
import Chip from '@mui/material/Chip';

// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(1),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
// }));
const profileStyle = {
    mobile: {
        picSpan: 12,
        profileSpan: 12,
    },
    computer: {
        picSpan: 4,
        profileSpan: 8,
    },
};

const AboutUs: React.FC = () => {
    const [width] = useResize();
    const mode = width > 640 ? 'computer' : 'mobile';
    return (
        <div className="about-us">
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={profileStyle[mode].picSpan}
                    className="profile-pic-wrapper"
                >
                    <div className="profile-pic">
                        <img src={yuProfile} alt="che yu profile" />
                    </div>
                </Grid>
                <Grid
                    item
                    xs={profileStyle[mode].profileSpan}
                    className="profile-des-wrapper"
                >
                    <h2>
                        張哲瑜
                        <a
                            href="https://www.instagram.com/jim8010406/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IconButton aria-label="delete">
                                <InstagramIcon sx={{ fontSize: '20px' }} />
                            </IconButton>
                        </a>
                    </h2>
                    <div className="profile-tag">
                        <Chip label="81年次" />
                        <Chip label="牡羊男" />
                        <Chip label="170.5555555 無條件接近171" />
                        <Chip label="嘉義人" />
                    </div>
                    <div className="profile-des">
                        目前高雄製造業當一顆小螺絲釘，自己覺得是一個小小的矛盾個體，業務嘴的外交卻是善解人意的小文青，一直是個很鬧的大男孩，喜歡用Instagram紀錄生活記錄人生
                        希望趕快變成更好的人，這樣才能吸引更好的人事物，結果吸引到偶老婆，她的鬼靈精怪吸引了我，只好決定共結連理😀
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={profileStyle[mode].profileSpan}
                    className="profile-des-wrapper"
                >
                    <h2>
                        唐雯倩
                        <a
                            href="https://www.instagram.com/chienchien.tang/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IconButton aria-label="delete">
                                <InstagramIcon sx={{ fontSize: '20px' }} />
                            </IconButton>
                        </a>
                    </h2>
                    <div className="profile-tag">
                        <Chip label="79年次" />
                        <Chip label="射手" />
                        <Chip label="高雄市左營區南屏路莫文蔚" />
                        <Chip label="高雄人" />
                    </div>
                    <div className="profile-des">self introduction</div>
                </Grid>
                <Grid
                    item
                    xs={profileStyle[mode].picSpan}
                    className="profile-pic-wrapper"
                >
                    <div className="profile-pic">
                        <img src={chienProfile} alt="che yu profile" />
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={2}>
                <Grid
                    item
                    xs={profileStyle[mode].picSpan}
                    className="profile-pic-wrapper"
                >
                    <div className="profile-pic">
                        <img src={fattieProfile} alt="che yu profile" />
                    </div>
                </Grid>
                <Grid
                    item
                    xs={profileStyle[mode].profileSpan}
                    className="profile-des-wrapper"
                >
                    <h2>
                        怪鳥阿肥Fattie
                        <a
                            href="https://www.instagram.com/weirdbirdfattie/"
                            target="_blank"
                            rel="noreferrer"
                        >
                            <IconButton aria-label="delete">
                                <InstagramIcon sx={{ fontSize: '20px' }} />
                            </IconButton>
                        </a>
                    </h2>
                    <div className="profile-tag">
                        <Chip label="聖鳥" />
                        <Chip label="歡迎找我業配" />
                        <Chip label="別愛我沒結果" />
                        <Chip label="我喝血" />
                    </div>
                    <div className="profile-des">
                        2021.02~
                        阿肥，綽號跳跳雞，金頭凱克鸚鵡，有🐕狗勾的靈魂、🐿花栗鼠的外表、🐇兔兔的腿腿。最喜歡的食物是🍎蘋果
                        Fattie, a.k.a the Jumpy chick🐤. A Caique with 🐕soul, 🐿
                        face and 🐇 legs, 🍎 is my favorite
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};
export default AboutUs;
