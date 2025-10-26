import React from "react";
import { LoadingText, ErrorText, ResultsContainer, ResultsTitle, JsonDisplay } from "./styles";

const ResultsDisplay = ({ data, loading, error }) => {
  if (loading) return <LoadingText>Loading...</LoadingText>;
  if (error) return <ErrorText>{error}</ErrorText>;
  if (!data) return null;
  
  return (
    <ResultsContainer>
      <ResultsTitle>Results</ResultsTitle>
      <JsonDisplay>{JSON.stringify(data, null, 2)}</JsonDisplay>
    </ResultsContainer>
  );
};

export default ResultsDisplay;
