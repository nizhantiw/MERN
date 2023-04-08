import { CssBaseline, ThemeProvider } from "@mui/material"
import {Box} from "@mui/material"
import { createTheme } from "@mui/material/styles"
import { useMemo } from "react"
import { Routes, Route, BrowserRouter } from "react-router-dom"
import { themeSettings } from "./theme"
import Navbar from "@/scenes/navbar"
import Dashboard from "@/scenes/dashboard"

function App() {
  const theme =useMemo(()=> createTheme(themeSettings), [])

  return (
    <div className="App">
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Box width= "100%" height="100%" padding="1rem 2rem 4rem 2rem">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Dashboard/>}/>
            <Route 
            path="/prediction" 
            element={<div>prediction page</div>}/>
          </Routes>
        </Box>
      </ThemeProvider>
      </BrowserRouter>
    </div>
  )
}

export default App
