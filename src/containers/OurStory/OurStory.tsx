/* eslint-disable jsx-a11y/media-has-caption */
import React from 'react';
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
        media: <video controls src={Storys.storyFailed} />,
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
];

const OurStory: React.FC = () => {
    const [width] = useResize();
    return (
        <div className="our-story">
            {width > 640 ? (
                <Timeline position="alternate">
                    {storyList.map((story) => (
                        <TimelineItem key={uuidv4()}>
                            <TimelineOppositeContent color="text.secondary">
                                <h2 className="story-date">{story.date}</h2>
                                <div className="story-content">
                                    {story.content}
                                </div>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>{story.media}</TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            ) : (
                storyList.map((story) => (
                    <Divider key={uuidv4()} orientation="vertical" flexItem>
                        {story.media}
                        <h2 className="story-date">{story.date}</h2>
                        <div className="story-content">{story.content}</div>
                    </Divider>
                ))
            )}
        </div>
    );
};
export default OurStory;
