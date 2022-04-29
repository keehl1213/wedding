/* eslint-disable jsx-a11y/media-has-caption */
import React, { useMemo } from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import ProgressiveImage from 'react-progressive-image-loading';
import { Storys } from 'assets';
import { v4 as uuidv4 } from 'uuid';
import Divider from '@mui/material/Divider';
import useResize from 'hooks/useResize';
import './OurStory.sass';

const storyList = [
    {
        date: 'October 26 ,2018',
        title: '相遇',
        content:
            '就跟所有平凡的愛情故事一樣，認識的方式並不是轟轟烈烈的開場、也不是一見鍾情的浪漫。我們的相遇是在一個桌遊聚會中，當時對對方都沒有抱持特別的想法',
        media: (
            <ProgressiveImage
                preview={Storys.storyFirstLook}
                src={Storys.storyFirstLook}
                render={(src, style) => (
                    <img src={src} style={style} alt="first look" />
                )}
            />
        ),
    },
    {
        date: 'November 28 ,2018',
        title: '第一句對話？',
        content:
            '漸漸地，因為準備野餐聚會有了接觸，發現聊著聊著，聊到掛不了電話。從三天聊一次，到一天一次；從一次聊一小時，到一次三小時',
        media: (
            <ProgressiveImage
                preview={Storys.storyFirstChat}
                src={Storys.storyFirstChat}
                render={(src, style) => (
                    <img src={src} style={style} alt="first chat" />
                )}
            />
        ),
    },
    {
        date: 'December 17 ,2018',
        title: '失敗',
        content:
            '但事情不是一直都這麼順利。野餐不久後緊接著就是我的生日，晚上他帶著花束和蛋糕直奔我家告白，雖然我不是沒有考慮過，但因為一些現實因素考量，最後拒絕了',
        media: (
            <video
                controls
                src={Storys.storyFailed}
                poster={Storys.storyFailedPreview}
            />
        ),
    },
    {
        date: 'December 23 ,2018',
        title: '滷肉飯情緣',
        content:
            '告白失敗後，還是偶爾有在聯繫，週末答應一起出門，並沒有其他想法，純粹只是他自己安排的個人高雄一日遊行程午餐地點離我很近，到了晚上我提議去某間餐廳吃晚餐，點完餐後隨即去了廁所，出來後餐點已經在桌上，套餐內含的那碗滷肉飯所有太肥的部分已經被移除得乾乾淨淨。\n\r沒想到一個見面不超過三次的人，居然記得我曾經不經意提過討厭肥肉的事情',
        media: (
            <ProgressiveImage
                preview={Storys.storyFirstDate}
                src={Storys.storyFirstDate}
                render={(src, style) => (
                    <img src={src} style={style} alt="first date" />
                )}
            />
        ),
    },
    {
        date: 'December 23 ,2018',
        title: '三個月',
        content:
            '我們決定給彼此一個機會試著交往看看，如果三個月後覺得不適合，那就好聚好散。幸好經歷一些小小的磨合，順利的度過了',
        media: (
            <ProgressiveImage
                preview={Storys.storyFlower}
                src={Storys.storyFlower}
                render={(src, style) => (
                    <img src={src} style={style} alt="flower" />
                )}
            />
        ),
    },
    {
        date: 'Someday',
        title: '假日我們會一起爬山',
        content: '',
        media: (
            <ProgressiveImage
                preview={Storys.storyClimbing}
                src={Storys.storyClimbing}
                render={(src, style) => (
                    <img src={src} style={style} alt="climbing" />
                )}
            />
        ),
    },
    {
        date: 'Someday',
        title: '或者一起潛水',
        content: '',
        media: (
            <ProgressiveImage
                preview={Storys.storyDiving}
                src={Storys.storyDiving}
                render={(src, style) => (
                    <img src={src} style={style} alt="diving" />
                )}
            />
        ),
    },
    {
        date: 'December 4, 2019',
        title: '甚至一起去更遠的地方旅行🇰🇷',
        content: '',
        media: (
            <video
                controls
                src={Storys.storyFirstAbroad}
                poster={Storys.storyFirstAbroadPreview}
            />
        ),
    },
    {
        date: 'August 22, 2021',
        title: '嘗試一起對一個生命負起責任',
        content: '',
        media: (
            <ProgressiveImage
                preview={Storys.storyPet}
                src={Storys.storyPet}
                render={(src, style) => (
                    <img src={src} style={style} alt="pet" />
                )}
            />
        ),
    },
    {
        date: 'October 14, 2021',
        title: '意外的求婚',
        content:
            '我是一個對婚禮沒有幻想和粉紅泡泡的人，原本並不期待會有求婚，也對他說沒有這個儀式沒關係。但這位每個情人節都不忘送花的浪漫Duke，精心策劃了一場秘密求婚，甚至影片的音樂都自己作詞作曲，並瞞著我特地跑到錄音室錄一整天',
        media: (
            <ProgressiveImage
                preview={Storys.storyPropose}
                src={Storys.storyPropose}
                render={(src, style) => (
                    <img src={src} style={style} alt="propose" />
                )}
            />
        ),
    },
    {
        date: 'March, 2022',
        title: '家',
        content:
            '都是理性派的我們，在決定交往後便有了一起擁有一個家的共識，經過兩年密集的尋覓，終於找到現在這個溫馨的家。但因為疫情的關係，新家入厝也整整遲了一年',
        media: (
            <ProgressiveImage
                preview={Storys.storyHousewarmingParty}
                src={Storys.storyHousewarmingParty}
                render={(src, style) => (
                    <img src={src} style={style} alt="housewarming" />
                )}
            />
        ),
    },
    {
        date: 'Future',
        title: '故事未完待續',
        content:
            '還沒有遇到他之前，曾經我很痛苦迷惘，上網發問，有個網友回應我「如果妳知道妳要的是怎樣的人生，那就像是一段有目的地的旅程，妳會明白眼前的風景都只是過客，妳會明白彎彎繞繞的路途都只是旅程。」\n\r現在我覺得「生命就像一座五彩繽紛的樂園，每個人都是拿著門票的幸運兒，雖然不如意的事十之八九，但既然都來了，那怎麼能不好好玩遍每個設施看遍每個風景？」幸好能在這個樂園遇到一個有趣的靈魂，陪我一起闖蕩。',
        media: (
            <ProgressiveImage
                preview={Storys.storyMarried}
                src={Storys.storyMarried}
                render={(src, style) => (
                    <img src={src} style={style} alt="married" />
                )}
            />
        ),
    },
];

const OurStory: React.FC = () => {
    const [width] = useResize();
    const isComputer = width > 640;
    const timelineComp = useMemo(
        () => (
            <Timeline position="alternate">
                {storyList.map((story) => (
                    <TimelineItem key={uuidv4()}>
                        <TimelineOppositeContent color="text.secondary">
                            <h2 className="story-date">{story.date}</h2>
                            <p className="story-title">{story.title}</p>
                            <div className="story-content">{story.content}</div>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>{story.media}</TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        ),
        [isComputer]
    );
    const sTimelineComp = useMemo(
        () =>
            storyList.map((story) => (
                <Divider key={uuidv4()} orientation="vertical" flexItem>
                    {story.media}
                    <h2 className="story-date">{story.date}</h2>
                    <p className="story-title">{story.title}</p>
                    <pre className="story-content">{story.content}</pre>
                </Divider>
            )),
        [isComputer]
    );
    return (
        <div className="our-story">
            {isComputer ? timelineComp : sTimelineComp}
        </div>
    );
};
export default OurStory;
