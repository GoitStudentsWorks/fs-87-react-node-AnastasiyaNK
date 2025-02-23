import { useEffect } from "react";
import { Button, ModalWrapper, ModalOverlay } from "./UserDropdown.styled";
import { ReactComponent as SettingsIcon } from "assets/icons/cog-6-tooth.svg";
import { ReactComponent as LogOutIcon } from "assets/icons/arrow-right-on-rectangle.svg";
import { useDispatch } from "react-redux";
import { setLogoutModal, setSettingsModal } from "../../../redux/modalsReduser";

export const UserDropdown = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const close = (e) => {
      if (e.code === "Escape") {
        onClose();
      }
    };
    document.addEventListener("keydown", close);

    return () => {
      document.removeEventListener("keydown", close);
    };
  }, [onClose]);

  if (!isOpen) return;

  return (
    <>
      <ModalOverlay onClick={onClose} />
      <ModalWrapper onClick={(e) => e.stopPropagation()}>
        <Button
          type="button"
          onClick={() => {
            dispatch(setSettingsModal(true));
            onClose();
          }}
        >
          <SettingsIcon className="settings-icon" />
          <p>Setting</p>
        </Button>
        <Button
          type="button"
          onClick={() => {
            dispatch(setLogoutModal(true));
            onClose();
          }}
        >
          <LogOutIcon className="logout-icon" />
          <p>Log out</p>
        </Button>
      </ModalWrapper>
    </>
  );
};
