import { Modal } from "components";
import React from "react";
import { StyledLogoutModal } from "./LogoutModal.styled";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../redux/userSlice";
import { closeAllModals } from "../../redux/modalsReduser";

const LogoutModal = () => {
  const dispatch = useDispatch();

  return (
    <Modal title="Log out" styledClass="logout-modal">
      <StyledLogoutModal>
        <p className="text">Do you really want to leave?</p>
        <div className="wrapper-btn">
          <button
            onClick={() => {
              dispatch(closeAllModals());
            }}
            className="cancel-btn"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              dispatch(logoutUser());
            }}
            className="logout-btn"
          >
            Log out
          </button>
        </div>
      </StyledLogoutModal>
    </Modal>
  );
};

export default LogoutModal;
