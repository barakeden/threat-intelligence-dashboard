import styled from "styled-components";

export const LoadingText = styled.p`
  color: #666;
  font-style: italic;
`;

export const ErrorText = styled.p`
  color: #dc3545;
  font-weight: bold;
`;

export const ResultsContainer = styled.div`
  margin-top: 20px;
  padding: 15px;
  background-color: #f8f9fa;
  border-radius: 4px;
`;

export const ResultsTitle = styled.h3`
  color: #333;
  margin-bottom: 10px;
`;

export const JsonDisplay = styled.pre`
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 15px;
  overflow-x: auto;
  font-size: 14px;
  line-height: 1.4;
`;
