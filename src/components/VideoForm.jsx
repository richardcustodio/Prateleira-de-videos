import React, { useState } from "react";
import {
  FormContainer,
  FormTitle,
  FormGroup,
  Label,
  Input,
  Textarea,
  SubmitButton,
} from "../styles/VideoFormStyles";

function VideoForm({ onAddVideo }) {
  const [link, setLink] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [linkError, setLinkError] = useState("");

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch (error) {
      return false;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setLinkError(""); // Limpar qualquer erro anterior

    if (link.trim() === "") {
      setLinkError("Por favor, insira um link de vídeo.");
      return;
    }

    if (!isValidUrl(link)) {
      setLinkError("Por favor, insira um link de vídeo válido.");
      return;
    }

    const newVideo = {
      id: Date.now(),
      link: link,
      title: title.trim() !== "" ? title : null,
      description: description.trim() !== "" ? description : null,
    };
    onAddVideo(newVideo);
    setLink("");
    setTitle("");
    setDescription("");
  };

  return (
    <FormContainer>
      <FormTitle>Adicionar Novo Vídeo</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor="videoLink">Link do Vídeo:</Label>
          <Input
            type="text"
            id="videoLink"
            name="videoLink"
            value={link}
            onChange={(e) => setLink(e.target.value)}
            placeholder="Cole o link do vídeo aqui"
          />
          {linkError && (
            <p style={{ color: "red", fontSize: "0.8em", marginTop: "5px" }}>
              {linkError}
            </p>
          )}
        </FormGroup>
        <FormGroup>
          <Label htmlFor="videoTitle">Título (Opcional):</Label>
          <Input
            type="text"
            id="videoTitle"
            name="videoTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Digite um título para o vídeo"
          />
        </FormGroup>
        <FormGroup>
          <Label htmlFor="videoDescription">Descrição (Opcional):</Label>
          <Textarea
            id="videoDescription"
            name="videoDescription"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Adicione uma descrição para o vídeo"
          ></Textarea>
        </FormGroup>
        <SubmitButton type="submit">Adicionar</SubmitButton>
      </form>
    </FormContainer>
  );
}

export default VideoForm;
