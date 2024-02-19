import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import useGlobalContext from "@/hooks/useGlobalContext";
import PropTypes from "prop-types";


const Modal = () => {
    const {modal, closeModal} = useGlobalContext();
    
    const {isOpen, title, content} = modal;
    
    return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{content}</DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default Modal;
