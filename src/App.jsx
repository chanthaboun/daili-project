// // // src/App.jsx
// // import { useState } from "react";
// // import {
// // 	ThemeProvider,
// // 	CssBaseline,
// // 	Container,
// // 	Box,
// // 	Tabs,
// // 	Tab,
// // 	Paper,
// // 	Snackbar,
// // 	Alert,
// // } from "@mui/material";
// // import "@fontsource/roboto/300.css";
// // import "@fontsource/roboto/400.css";
// // import "@fontsource/roboto/500.css";
// // import "@fontsource/roboto/700.css";
// // import theme from "./theme/theme";
// // import AppBar from "./components/AppBar";
// // import WeekdaySchedule from "./pages/WeekdaySchedule";
// // import SaturdaySchedule from "./pages/SaturdaySchedule";
// // // import SundaySchedule from "./pages/SundaySchedule";
// // // import TipsPage from "./pages/TipsPage";
// // import EditDialog from "./components/EditDialog";
// // import { ScheduleProvider } from "./contexts/ScheduleContext";

// // function App() {
// // 	const [tabValue, setTabValue] = useState(0);
// // 	const [addDialogOpen, setAddDialogOpen] = useState(false);
// // 	const [notification, setNotification] = useState({
// // 		open: false,
// // 		message: "",
// // 		severity: "success",
// // 	});

// // 	const handleChange = (event, newValue) => {
// // 		setTabValue(newValue);
// // 	};

// // 	const handleAddNew = () => {
// // 		setAddDialogOpen(true);
// // 	};

// // 	const handleCloseNotification = () => {
// // 		setNotification({ ...notification, open: false });
// // 	};

// // 	const showNotification = (message, severity = "success") => {
// // 		setNotification({ open: true, message, severity });
// // 	};

// // 	// ສ້າງຕາຕະລາງທີ່ກຳລັງຖືກເລືອກ
// // 	const renderTabContent = () => {
// // 		switch (tabValue) {
// // 			case 0:
// // 				return <WeekdaySchedule onNotify={showNotification} />;
// // 			case 1:
// // 				return <SaturdaySchedule onNotify={showNotification} />;
// // 			case 2:
// // 				return <SundaySchedule onNotify={showNotification} />;
// // 			case 3:
// // 				return <TipsPage />;
// // 			default:
// // 				return <WeekdaySchedule onNotify={showNotification} />;
// // 		}
// // 	};

// // 	return (
// // 		<ThemeProvider theme={theme}>
// // 			<CssBaseline />
// // 			<ScheduleProvider>
// // 				<Box
// // 					sx={{
// // 						display: "flex",
// // 						flexDirection: "column",
// // 						minHeight: "100vh",
// // 						"@media print": {
// // 							".no-print": {
// // 								display: "none",
// // 							},
// // 						},
// // 					}}
// // 				>
// // 					<Box className="no-print">
// // 						<AppBar onAddNew={handleAddNew} onNotify={showNotification} />
// // 					</Box>

// // 					<Container maxWidth="lg" sx={{ flex: 1, py: 3 }}>
// // 						<Box
// // 							className="no-print"
// // 							sx={{
// // 								borderBottom: 1,
// // 								borderColor: "divider",
// // 								mb: 3,
// // 								backgroundColor: "background.paper",
// // 								borderRadius: "4px 4px 0 0",
// // 							}}
// // 						>
// // 							<Tabs
// // 								value={tabValue}
// // 								onChange={handleChange}
// // 								variant="scrollable"
// // 								scrollButtons="auto"
// // 								textColor="primary"
// // 								indicatorColor="primary"
// // 							>
// // 								<Tab label="ວັນຈັນ-ວັນສຸກ" />
// // 								<Tab label="ວັນເສົາ" />
// // 								<Tab label="ວັນອາທິດ" />
// // 								<Tab label="ຄຳແນະນຳເພີ່ມເຕີມ" />
// // 							</Tabs>
// // 						</Box>

// // 						<Paper elevation={3} sx={{ p: 3, mb: 3 }}>
// // 							{renderTabContent()}
// // 						</Paper>

// // 						<EditDialog
// // 							open={addDialogOpen}
// // 							onClose={() => setAddDialogOpen(false)}
// // 							item={null}
// // 							day={
// // 								tabValue < 3
// // 									? ["weekday", "saturday", "sunday"][tabValue]
// // 									: null
// // 							}
// // 							onNotify={showNotification}
// // 						/>

// // 						<Snackbar
// // 							open={notification.open}
// // 							autoHideDuration={4000}
// // 							onClose={handleCloseNotification}
// // 							anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
// // 						>
// // 							<Alert
// // 								onClose={handleCloseNotification}
// // 								severity={notification.severity}
// // 								variant="filled"
// // 								sx={{ width: "100%" }}
// // 							>
// // 								{notification.message}
// // 							</Alert>
// // 						</Snackbar>
// // 					</Container>
// // 				</Box>
// // 			</ScheduleProvider>
// // 		</ThemeProvider>
// // 	);
// // }

// // export default App;

// // src/App.jsx
// import { useState, useEffect } from "react";
// import { CssBaseline, Container, ThemeProvider } from "@mui/material";
// import "@fontsource/roboto/300.css";
// import "@fontsource/roboto/400.css";
// import "@fontsource/roboto/500.css";
// import "@fontsource/roboto/700.css";

// import theme from "./theme/theme";
// import ScheduleProvider from "./contexts/ScheduleContext";
// import AppBar from "./components/AppBar";
// import StatusMessage from "./components/StatusMessage";
// import WeekdaySchedule from "./pages/WeekdaySchedule";
// import SaturdaySchedule from "./pages/SaturdaySchedule";
// import SundaySchedule from "./pages/SundaySchedule";
// import TipsPage from "./pages/TipsPage";

// function App() {
// 	// ສະຖານະສຳລັບແທັບປັດຈຸບັນ
// 	const [currentTab, setCurrentTab] = useState("weekday");

// 	// ກຳນົດການຈັດການເມື່ອກົດ esc ເພື່ອຍົກເລີກການແກ້ໄຂ
// 	useEffect(() => {
// 		const handleKeyDown = (e) => {
// 			// TODO: ເພີ່ມຟັງຊັນຄີບອດຊ໊ອດຄັດ
// 		};

// 		window.addEventListener("keydown", handleKeyDown);
// 		return () => {
// 			window.removeEventListener("keydown", handleKeyDown);
// 		};
// 	}, []);

// 	// ສະແດງໜ້າຕາມແທັບທີ່ເລືອກ
// 	const renderContent = () => {
// 		switch (currentTab) {
// 			case "weekday":
// 				return <WeekdaySchedule />;
// 			case "saturday":
// 				return <SaturdaySchedule />;
// 			case "sunday":
// 				return <SundaySchedule />;
// 			case "tips":
// 				return <TipsPage />;
// 			default:
// 				return <WeekdaySchedule />;
// 		}
// 	};

// 	return (
// 		<ThemeProvider theme={theme}>
// 			<ScheduleProvider>
// 				<CssBaseline />
// 				<div className="App">
// 					<AppBar currentTab={currentTab} onTabChange={setCurrentTab} />
// 					<Container component="main" sx={{ py: 3 }}>
// 						{renderContent()}
// 					</Container>
// 					<StatusMessage />
// 				</div>
// 			</ScheduleProvider>
// 		</ThemeProvider>
// 	);
// }

// export default App;

// src/App.jsx
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