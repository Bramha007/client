import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import LoginPage from "scenes/LoginPage/LoginPage";
import HomePage from "scenes/homePage/HomePage";
import ProfilePage from "scenes/profilePage/ProfilePage";
import { useMemo } from "react";
import { UseSelector, useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material";
import { themeSettings } from "theme";

function App() {
    const mode = useSelector((state) => state.mode);
    const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

    return (
        <div className="app">
            <BrowserRouter>
                <ThemeProvider theme={theme}>
                    <CssBaseline />
                    <Routes>
                        <Route path="/" element={<LoginPage />} />
                        <Route path="/home" element={<HomePage />} />
                        <Route
                            path="/profile/:userId"
                            element={<ProfilePage />}
                        />
                    </Routes>
                </ThemeProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
