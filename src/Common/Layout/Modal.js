import React from "react";
import "./Modal.css";
function Modal(props) {
    const { modalTitle, modalContent, closeModal } = props;
    return (
        <div className="modal-conatiner">
            <div className="modal-inner-container">
                <div className="modal-header">
                    <div>{modalTitle || "Modal Title"}</div>
                </div>
                <div className="modal-body">
                    <div>{modalContent || "Are you sure ?"}</div>
                </div>
                <div className="modal-button-conatiner">
                    <div
                        className="modal-cancel-btn"
                        onClick={() => {
                            closeModal();
                        }}
                    >
                        Cancel
                    </div>
                    <div className="modal-ok-btn">Ok</div>
                </div>
            </div>
        </div>
    );
}

export default Modal;
