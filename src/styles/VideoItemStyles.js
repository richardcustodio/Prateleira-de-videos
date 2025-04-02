import styled from "styled-components";

export const ItemContainer = styled.div`
  margin-bottom: 15px;
`;

export const VideoTitle = styled.h3`
  color: #333;
  margin-bottom: 10px;
  font-size: 1.4em;
`;

export const VideoDescription = styled.p`
  color: #666;
  margin-bottom: 15px;
  font-size: 1em;
`;

export const PlayerWrapper = styled.div`
  position: relative;
  width: 100%;
  padding-top: 56.25%; /* Proporção 16:9 (9 / 16 * 100) */
  overflow: hidden;
  border-radius: 6px;
  margin-bottom: 15px;

  iframe,
  video,
  div[data-react-player="true"] > div {
    position: absolute !important;
    top: 0;
    left: 0;
    width: 100% !important;
    height: 100% !important;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
`;

export const ActionButton = styled.button`
  background-color: #eee;
  color: #555;
  border: 1px solid #ddd;
  padding: 8px 15px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 0.9em;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ddd;
  }

  &.edit {
    background-color: #00c853;
    color: white;
    border-color: #00b347;
    &:hover {
      background-color: #00a03e;
    }
  }

  &.delete {
    background-color: #f44336;
    color: white;
    border-color: #d32f2f;
    &:hover {
      background-color: #d32f2f;
    }
  }
`;

export const Separator = styled.hr`
  border: 0;
  border-top: 1px solid #eee;
  margin: 20px 0;
`;
