import React from "react";
import { Input, Button } from "./styles";

const SearchField = ({ ip, setIp, onSearch, loading }) => {
  return (
    <>
      <Input
        value={ip}
        onChange={(e) => setIp(e.target.value)}
        placeholder="Enter IP address"
      />
      <Button onClick={onSearch} disabled={loading}>
        {loading ? "Checking..." : "Check"}
      </Button>
    </>
  );
};

export default SearchField;
