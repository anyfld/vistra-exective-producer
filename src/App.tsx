import { Routes, Route } from "react-router-dom"
import { Box, Container } from "@mui/material"

import Home from "@/routes/Home"
import HashPage from "@/routes/$hash"
import Chat from "@/routes/Chat"

function App() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Container component="main" sx={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:hash" element={<HashPage />} />
          <Route path="/chat" element={<Chat />} />
        </Routes>
      </Container>
    </Box>
  )
}

export default App
