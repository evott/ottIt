import React, { useState, useRef, useEffect } from 'react';
import './Modal.css';


const ModalPopup = () => {
    const [modalOpen, setModalOpen] = useState(false);
    const modalBackground = useRef(null);

    useEffect(() => {
        setModalOpen(true);
    }, []);

    return (
        <>
            {
                modalOpen && (
                <div className="container h-16 w-20 items-center justify-center" ref={modalBackground} onClick={e => {
                    if (e.target === modalBackground.current) {
                        setModalOpen(false);
                    }
                }}>
                    <div className="modal-content">
                        <p>Choose your taste</p>
                        <button className="modal-close-btn" onClick={() => setModalOpen(false)}>
                            <p id='golink'> Learn more</p>
                        </button>
                    </div>
                </div>
                    )
            }
        </>
    );
};

export default ModalPopup;