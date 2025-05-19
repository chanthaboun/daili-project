// src/pages/SaturdaySchedule.jsx
import { Container } from "@mui/material";
import ScheduleTable from "../components/ScheduleTable";

const SaturdaySchedule = () => {
	return (
		<Container>
			<ScheduleTable scheduleType="saturday" title="ຕາຕະລາງສຳລັບວັນເສົາ" />
		</Container>
	);
};

export default SaturdaySchedule;