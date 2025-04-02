import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import {
  ItemContainer,
  VideoTitle,
  VideoDescription,
  PlayerWrapper,
  ButtonGroup,
  ActionButton,
  Separator,
} from "../styles/VideoItemStyles";
import {
  FormGroup,
  Label,
  Input,
  Textarea,
  SubmitButton,
} from "../styles/VideoFormStyles"; // Reutilizando estilos do formulário

function VideoItem({ video, onRemove, onEdit, isEditing, onSave }) {
  const [editedTitle, setEditedTitle] = useState(video.title || "");
  const [editedDescription, setEditedDescription] = useState(
    video.description || ""
  );

  useEffect(() => {
    setEditedTitle(video.title || "");
    setEditedDescription(video.description || "");
  }, [video]); // Atualizar o estado quando o vídeo muda (ao iniciar a edição)

  const handleEditClick = () => {
    onEdit(video.id);
  };

  const handleSaveClick = () => {
    onSave({ ...video, title: editedTitle, description: editedDescription });
  };

  return (
    <ItemContainer>
      {isEditing ? (
        <div>
          <FormGroup>
            <Label htmlFor={`editTitle-${video.id}`}>Título:</Label>
            <Input
              type="text"
              id={`editTitle-${video.id}`}
              value={editedTitle}
              onChange={(e) => setEditedTitle(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor={`editDescription-${video.id}`}>Descrição:</Label>
            <Textarea
              id={`editDescription-${video.id}`}
              value={editedDescription}
              onChange={(e) => setEditedDescription(e.target.value)}
            ></Textarea>
          </FormGroup>
          <ButtonGroup>
            <ActionButton onClick={handleSaveClick} className="edit">
              Salvar
            </ActionButton>
            <ActionButton onClick={() => onEdit(null)}>Cancelar</ActionButton>
          </ButtonGroup>
        </div>
      ) : (
        <div>
          <VideoTitle>{video.title || "Sem Título"}</VideoTitle>
          {video.description && (
            <VideoDescription>{video.description}</VideoDescription>
          )}
          <PlayerWrapper>
            <ReactPlayer url={video.link} width="100%" height="100%" controls />
          </PlayerWrapper>
          <ButtonGroup>
            <ActionButton onClick={handleEditClick} className="edit">
              Editar
            </ActionButton>
            <ActionButton onClick={() => onRemove(video.id)} className="delete">
              Remover
            </ActionButton>
          </ButtonGroup>
        </div>
      )}
      <Separator />
    </ItemContainer>
  );
}

export default VideoItem;
