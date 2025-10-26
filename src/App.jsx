import { useState } from "react";
import styled from "styled-components";
import SearchField from "./components/SearchField";
import ResultsDisplay from "./components/ResultsDisplay";

const Container = styled.div`
  padding: 20px;
  font-family: sans-serif;
  max-width: 800px;
`;

const Title = styled.h1`
  margin-bottom: 20px;
`;

export default function App() {
  const [ip, setIp] = useState("");
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchIntel = async () => {
    setData(null);
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`http://localhost:3001/api/intel?ip=${ip}`);
      const json = await res.json();
      
      if (!res.ok) {
        throw new Error(json.error || "Unknown error");
      }
      setData(json);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      <Title>Threat Intelligence Dashboard</Title>
      <SearchField 
        ip={ip} 
        setIp={setIp} 
        onSearch={fetchIntel} 
        loading={loading} 
      />
      <ResultsDisplay 
        data={data} 
        loading={loading} 
        error={error} 
      />
    </Container>
  );
}
