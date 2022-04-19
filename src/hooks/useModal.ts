import { useState } from 'react';

function useModal<T = any>(initData?: T) {
    const [visible, setVisible] = useState(false);
    const [modalData, setModalData] = useState(initData);

    function openModal(data?: T) {
        setVisible(true);
        setModalData(data);
    }

    function closeModal() {
        setVisible(false);
        setModalData(initData);
    }

    return {
        visible,
        modalData,
        openModal,
        closeModal,
    };
}

export default useModal;
