import React from 'react';

interface ModalProps {
    handleClose: Function;
    show: boolean;
    label: string;
    children: React.ReactNode | React.ReactNode[]
}
const Modal = ({ handleClose, show, children, label }: ModalProps) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <button className="close" onClick={() => handleClose()}>Close</button>
                {children}
            </section>
        </div>
    );
};

export default Modal;