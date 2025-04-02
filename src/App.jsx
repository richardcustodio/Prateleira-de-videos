import React, { useState, useEffect, useMemo } from "react"; // Importe useMemo
import VideoForm from "./components/VideoForm";
import VideoList from "./components/VideoList";
import SearchBar from "./components/SearchBar";
import { AppContainer, AppTitle } from "./styles/AppStyles";

function App() {
  const [videos, setVideos] = useState([]);
  const [editingVideoId, setEditingVideoId] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [theme, setTheme] = useState("light"); // 'light' ou 'dark'

  useEffect(() => {
    const storedVideos = localStorage.getItem("videos");
    if (storedVideos) {
      setVideos(JSON.parse(storedVideos));
    }
  }, []);

  useEffect(() => {
    document.body.className = theme === "dark" ? "theme-dark" : "";
  }, [theme]);

  const handleAddVideo = (newVideo) => {
    const updatedVideos = [...videos, newVideo];
    setVideos(updatedVideos);
    localStorage.setItem("videos", JSON.stringify(updatedVideos));
  };

  const handleRemoveVideo = (videoId) => {
    const updatedVideos = videos.filter((video) => video.id !== videoId);
    setVideos(updatedVideos);
    localStorage.setItem("videos", JSON.stringify(updatedVideos));
  };

  const handleEditVideo = (videoId) => {
    setEditingVideoId(videoId);
  };

  const handleSaveEditedVideo = (editedVideo) => {
    const updatedVideos = videos.map((video) =>
      video.id === editedVideo.id ? editedVideo : video
    );
    setVideos(updatedVideos);
    localStorage.setItem("videos", JSON.stringify(updatedVideos));
    setEditingVideoId(null);
  };

  const handleSearchChange = (term) => {
    setSearchTerm(term);
  };

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Função para filtrar os vídeos com base no searchTerm
  const filteredVideos = useMemo(() => {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return videos.filter((video) => {
      const titleMatch =
        video.title?.toLowerCase().includes(lowerCaseSearchTerm) || false;
      const descriptionMatch =
        video.description?.toLowerCase().includes(lowerCaseSearchTerm) || false;
      return titleMatch || descriptionMatch;
    });
  }, [videos, searchTerm]); // Dependências para recálculo

  return (
    <AppContainer>
      <button
        onClick={toggleTheme}
        style={{ marginBottom: "10px", padding: "8px 15px", cursor: "pointer" }}
      >
        Alternar Tema para {theme === "light" ? "Escuro" : "Claro"}
      </button>
      <AppTitle>Prateleira de Vídeos</AppTitle>
      <SearchBar searchTerm={searchTerm} onSearchChange={handleSearchChange} />
      <VideoForm onAddVideo={handleAddVideo} />
      <VideoList
        videos={filteredVideos} // Passe a lista filtrada para VideoList
        onRemoveVideo={handleRemoveVideo}
        onEditVideo={handleEditVideo}
        editingVideoId={editingVideoId}
        onSaveEditedVideo={handleSaveEditedVideo}
      />
    </AppContainer>
  );
}

export default App;
