import React from 'react';
import Grid from '@mui/material/Grid';
import yuProfile from 'assets/profile-yu.png';
import chienProfile from 'assets/profile-chien.png';
import fattieProfile from 'assets/profile-fattie.png';
import yuProfileP from 'assets/profile-yu-preview.png';
import chienProfileP from 'assets/profile-chien-preview.png';
import fattieProfileP from 'assets/profile-fattie-preview.png';
import useResize from 'hooks/useResize';
import InstagramIcon from '@mui/icons-material/Instagram';
import IconButton from '@mui/material/IconButton';
import ProgressiveImage from 'react-progressive-image-loading';
import Chip from '@mui/material/Chip';
import './AboutUs.sass';

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
                        <ProgressiveImage
                            preview={yuProfileP}
                            src={yuProfile}
                            render={(src, style) => (
                                <img
                                    src={src}
                                    style={style}
                                    alt="che yu profile"
                                />
                            )}
                        />
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
                        <Chip label="170.11111 無條件進位171" />
                        <Chip label="嘉義人" />
                        <Chip label="兩性憑拳大師" />
                    </div>
                    <div className="profile-des">
                        目前高雄製造業當一顆小螺絲釘，自己覺得是一個小小的矛盾個體，業務嘴的外交卻是善解人意的小文青，一直是個很鬧的大男孩，喜歡用Instagram紀錄生活記錄人生，希望趕快變成更好的人，這樣才能吸引更好的人事物，結果吸引到偶老婆，她的鬼靈精怪吸引了我，只好決定共結連理😀
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
                        <Chip label="性平魔人" />
                    </div>
                    <div className="profile-des">
                        幸福都市的一個小小軟體工程師，喜歡這邊的陽光跟山與海，因此腳麻走不了，在這落葉生根。目標是成為一個數位遊牧民族，並在有生之年踏遍世界，看似正常的外表下有一個反骨的靈魂，不喜歡受條條框框的拘束跟輕易妥協，喜歡嘗試新事物、喜歡規劃中帶點隨性的旅行。
                        <br />
                        朋友形容我是喜形於色、藏不住內心的人。缺點是嚴重拖延症、有著一堆難搞的想法與意見。幸好遇到一個可以包容我想做的事、與我個性互補，總是規劃和立刻執行的人。抱歉了各位世界上的女性同胞們，好男人被我收服一位，請大家另尋良緣🙏。
                    </div>
                </Grid>
                <Grid
                    item
                    xs={profileStyle[mode].picSpan}
                    className="profile-pic-wrapper"
                >
                    <div className="profile-pic">
                        <ProgressiveImage
                            preview={chienProfileP}
                            src={chienProfile}
                            render={(src, style) => (
                                <img
                                    src={src}
                                    style={style}
                                    alt="wen chien profile"
                                />
                            )}
                        />
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
                        <ProgressiveImage
                            preview={fattieProfileP}
                            src={fattieProfile}
                            render={(src, style) => (
                                <img
                                    src={src}
                                    style={style}
                                    alt="fattie profile"
                                />
                            )}
                        />
                    </div>
                </Grid>
                <Grid
                    item
                    xs={profileStyle[mode].profileSpan}
                    className="profile-des-wrapper"
                >
                    <h2>
                        阿肥
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
                        大約2021年2月出生，同年8月22日成為家裡的一份子，綽號跳跳雞，金頭凱克鸚鵡，有🐕狗勾的靈魂、🐿花栗鼠的外表、🐇兔兔的腿腿。最喜歡的食物是🍎蘋果
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};
export default AboutUs;
