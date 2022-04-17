import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Previews as previewList } from 'assets';

const Photos: React.FC = () => (
    <div>
        <ImageList
            // sx={{ width: 500, height: 450 }}
            variant="masonry"
            cols={4}
            gap={8}
        >
            {Object.values(previewList).map((previewUrl: string) => (
                <ImageListItem key={previewUrl}>
                    <img
                        src={previewUrl}
                        // srcSet={previewUrl}
                        alt=""
                        loading="lazy"
                    />
                </ImageListItem>
            ))}
        </ImageList>
    </div>
);
export default Photos;
