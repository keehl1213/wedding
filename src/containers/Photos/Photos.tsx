/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Previews as previewList, Photos as photoList } from 'assets';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import useModal from 'hooks/useModal';
import ProgressiveImage from 'react-progressive-image-loading';
import './Photos.sass';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '80%',
    boxShadow: 24,
    p: 4,
    padding: 0,
    maxHeight: '100%',
    maxWidth: '100%',
};

const Photos: React.FC = () => {
    const modal = useModal<string>();
    return (
        <div className="photos">
            <ImageList
                // sx={{ width: 500, height: 450 }}
                variant="masonry"
                cols={4}
                gap={8}
            >
                {Object.keys(previewList).map((key: string) => (
                    <ImageListItem
                        key={previewList[key]}
                        onClick={() => modal.openModal(key)}
                    >
                        <img
                            className="photos-preview"
                            src={previewList[key]}
                            // srcSet={previewUrl}
                            alt=""
                            loading="lazy"
                        />
                    </ImageListItem>
                ))}
            </ImageList>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={modal.visible}
                onClose={modal.closeModal}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={modal.visible}>
                    <Box sx={style}>
                        {/* <Typography
                            id="transition-modal-title"
                            variant="h6"
                            component="h2"
                        >
                            Text in a modal
                        </Typography> */}
                        <Typography
                            id="transition-modal-description"
                            sx={{ mt: 2 }}
                        >
                            {modal.modalData && (
                                <ProgressiveImage
                                    preview={previewList[modal.modalData]}
                                    src={photoList[modal.modalData]}
                                    render={(src, st) => (
                                        <img
                                            onClick={modal.closeModal}
                                            src={src}
                                            style={{
                                                maxWidth: '100%',
                                                maxHeight: '100%',
                                                ...st,
                                            }}
                                            alt="wedding banner"
                                        />
                                    )}
                                />
                            )}
                        </Typography>
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};
export default Photos;
