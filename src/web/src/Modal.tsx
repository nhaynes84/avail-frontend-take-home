import React from 'react';

interface ModalProps {
    handleClose: Function;
    show: boolean;
    label: string;
    children: React.ReactNode | React.ReactNode[]
}

function Modal({ handleClose, show, children, label }: ModalProps) {
    return (
        <div className={show ? "modal display-block" : "modal display-none"}>
            <section className="modal-main">
                <button className="close" onClick={() => handleClose()}>
                    Close
                </button>
                {children}
            </section>
        </div>
    );
};

export default Modal;