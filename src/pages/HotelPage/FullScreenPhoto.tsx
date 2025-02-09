import { Box, Modal } from "@mui/material";

interface FullScreenPhotoProps {
  close: () => void;
  url: string;
}

const FullScreenPhoto: React.FC<FullScreenPhotoProps> = ({ close, url }) => {
  return (
    <Modal
      open={!!url}
      onClose={close}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    >
      <Box>
        <img src={url} alt="Full Screen" />
      </Box>
    </Modal>
  );
};

export default FullScreenPhoto;
