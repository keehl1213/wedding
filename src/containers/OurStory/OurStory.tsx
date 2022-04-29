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
            '告白失敗後，還是偶爾有在聯繫，這天週末答應一起出門，並沒有其他想法，純粹只是他自己安排的個人高雄一日遊行程午餐地點離我很近，到了晚上我提議去某間餐廳吃晚餐，點完餐後隨即去了廁所，出來後餐點已經在桌上，套餐內含的那碗滷肉飯所有的肥肉已經被移除得乾乾淨淨。\n\r腦中瞬間有很多想法同時浮現，想起曾經有跟他提到不喜歡肥肉的事情，想到和我吃飯的男生從來沒人敢這樣做，他恥力也太高了吧，但不可否認，自己就是容易被這種手法套路',
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
            '經過一番考慮，我們決定給彼此一個機會試著交往看看，如果三個月後覺得不適合，那就好聚好散',
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
        date: 'December 4, 2019',
        title: '出國✈️',
        content: '沒想到三個月這麼快就過了，很快地就一年，',
        media: (
            <video
                controls
                src={Storys.storyFirstAbroad}
                poster={Storys.storyFirstAbroadPreview}
            />
        ),
    },
    {
        date: 'Someday',
        title: '',
        content: '一起爬山',
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
        title: '',
        content: '一起玩水',
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
        date: 'August 22, 2021',
        title: '',
        content: '一起養寵物',
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
        title: '',
        content: '求婚',
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
        title: '',
        content: '遲了一年的新家入厝',
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
        title: '',
        content: '未完待續',
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
            {/* <iframe
                title="memory"
                src="https://www.google.com/maps/d/embed?mid=195y3R6S2crqow3QRY1m-BAHAwl507ZJO&ehbc=2E312F"
                width="640"
                height="480"
            /> */}
        </div>
    );
};
export default OurStory;
