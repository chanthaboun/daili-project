// src/App.jsx
import React from "react";
import { useState, useEffect } from "react";
import {
	CssBaseline,
	Container,
	ThemeProvider,
	Box,
	useMediaQuery,
} from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import theme from "./theme/theme";
import ScheduleProvider from "./contexts/ScheduleContext";
import AppBar from "./components/AppBar";
import StatusMessage from "./components/StatusMessage";
import WeekdaySchedule from "./pages/WeekdaySchedule";
import SaturdaySchedule from "./pages/SaturdaySchedule";
import SundaySchedule from "./pages/SundaySchedule";
import TipsPage from "./pages/TipsPage";

function App() {
	// ສະຖານະສຳລັບແທັບປັດຈຸບັນ
	const [currentTab, setCurrentTab] = useState("weekday");

	// ກວດສອບຄວາມກວ້າງໜ້າຈໍ
	const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

	// ກຳນົດການຈັດການເມື່ອກົດ esc ເພື່ອຍົກເລີກການແກ້ໄຂ
	useEffect(() => {
		const handleKeyDown = (e) => {
			// TODO: ເພີ່ມຟັງຊັນຄີບອດຊ໊ອດຄັດ
		};

		window.addEventListener("keydown", handleKeyDown);
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, []);

	// ສະແດງໜ້າຕາມແທັບທີ່ເລືອກ
	const renderContent = () => {
		switch (currentTab) {
			case "weekday":
				return <WeekdaySchedule />;
			case "saturday":
				return <SaturdaySchedule />;
			case "sunday":
				return <SundaySchedule />;
			case "tips":
				return <TipsPage />;
			default:
				return <WeekdaySchedule />;
		}
	};

	return (
		<ThemeProvider theme={theme}>
			<ScheduleProvider>
				<CssBaseline />
				<div className="App">
					<AppBar currentTab={currentTab} onTabChange={setCurrentTab} />
					<Container
						component="main"
						sx={{
							py: 3,
							px: { xs: 1, sm: 2, md: 3 }, // Responsive padding
							mb: isMobile ? 8 : 3, // Additional bottom margin for mobile (for bottom navigation)
							maxWidth: { lg: "lg", xl: "xl" }, // Responsive container width
						}}
					>
						{renderContent()}
					</Container>
					<StatusMessage />
				</div>
			</ScheduleProvider>
		</ThemeProvider>
	);
}

export default App;