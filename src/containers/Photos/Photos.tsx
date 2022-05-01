/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Previews as previewList, Photos as photoList } from 'assets';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import useModal from 'hooks/useModal';
import ProgressiveImage from 'react-progressive-image-loading';
import useResize from 'hooks/useResize';
import ReactGA from 'react-ga4';
import './Photos.sass';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    p: 4,
    padding: 0,
    height: '100%',
    maxWidth: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
};

const Photos: React.FC = () => {
    const modal = useModal<string>();
    const [width] = useResize();
    return (
        <div className="photos">
            <ImageList
                variant="masonry"
                cols={width > 640 ? 4 : 3}
                gap={width > 640 ? 8 : 6}
            >
                {Object.keys(previewList).map((key: string) => (
                    <ImageListItem
                        key={previewList[key]}
                        onClick={() => {
                            ReactGA.event('photo click', {
                                event_category: 'Click',
                                event_label: '照片點擊',
                                value: key,
                            });
                            modal.openModal(key);
                        }}
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
                    <Box sx={style} onClick={modal.closeModal}>
                        {modal.modalData && (
                            <ProgressiveImage
                                preview={previewList[modal.modalData]}
                                src={
                                    photoList[modal.modalData]
                                        ? photoList[modal.modalData]
                                        : previewList[modal.modalData]
                                }
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
                    </Box>
                </Fade>
            </Modal>
        </div>
    );
};
export default Photos;
