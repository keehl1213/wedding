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
        content: '第一次在朋友約的桌遊聚會相遇',
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
        date: 'December 17 ,2018',
        content: '第一次告白失敗',
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
        content: '失敗後再接再厲繼續的第一個約會',
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
        content: '終於成功在一起',
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
        content: '第一次一起出國',
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
                    <div className="story-content">{story.content}</div>
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
