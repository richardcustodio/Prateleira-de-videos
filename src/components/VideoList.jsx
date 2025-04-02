import React from "react";
import VideoItem from "./VideoItem";
import {
  ListContainer,
  ListTitle,
  EmptyListMessage,
  VideoListUl,
  VideoListItemLi,
} from "../styles/VideoListStyles";
import { motion, AnimatePresence } from "framer-motion";

const itemVariants = {
  initial: { opacity: 0, y: 50 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -50 },
};

function VideoList({
  videos,
  onRemoveVideo,
  onEditVideo,
  editingVideoId,
  onSaveEditedVideo,
}) {
  return (
    <ListContainer>
      <ListTitle>Sua Prateleira de Vídeos</ListTitle>
      {videos.length === 0 ? (
        <EmptyListMessage>
          Sua prateleira está vazia. Adicione alguns vídeos!
        </EmptyListMessage>
      ) : (
        <VideoListUl>
          <AnimatePresence>
            {videos.map((video) => (
              <motion.li
                key={video.id}
                variants={itemVariants}
                initial="initial"
                animate="animate"
                exit="exit"
                transition={{ duration: 0.3 }}
              >
                <VideoItem
                  video={video}
                  onRemove={onRemoveVideo}
                  onEdit={onEditVideo}
                  isEditing={editingVideoId === video.id}
                  onSave={onSaveEditedVideo}
                />
              </motion.li>
            ))}
          </AnimatePresence>
        </VideoListUl>
      )}
    </ListContainer>
  );
}

export default VideoList;
