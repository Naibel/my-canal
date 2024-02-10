import { IoClose } from "react-icons/io5";

const CloseButton = ({ onClose }: { onClose: () => void }) => (
  <div
    className="duration-300 rounded-full p-1 bg-black/70 hover:bg-black cursor-pointer absolute z-10 top-3 right-3 "
    onClick={onClose}
  >
    <IoClose size={30} />
  </div>
);

export default CloseButton;
