import { useDispatch, useSelector } from "react-redux";
import { previousWeek, nextWeek } from "../../store/calSlice";
import {
	CalendarHeader,
	WeekContainer,
	WeekDays,
	WeekDay,
	WeekSelector,
	Selectors,
	EmptyBlock,
} from "./week.styles";
import SelectedWeek from "./selectedWeek";

const Week = () => {
	const dispatch = useDispatch();
	const { year, month, date } = useSelector(
		(state) => state.calendarStore.currentDate
	);
	const currentDate = new Date(year, month, date);

	return (
		<CalendarHeader>
			<EmptyBlock />
			<WeekContainer>
				<WeekDays>
					<WeekDay>M</WeekDay>
					<WeekDay>T</WeekDay>
					<WeekDay>W</WeekDay>
					<WeekDay>T</WeekDay>
					<WeekDay>F</WeekDay>
					<WeekDay>S</WeekDay>
					<WeekDay>S</WeekDay>
				</WeekDays>
				<SelectedWeek />
				<WeekSelector>
					<Selectors
						onClick={() => {
							dispatch(previousWeek({ year, month, date: date - 7 }));
						}}
					>
						&#8249;
					</Selectors>
					{currentDate.toLocaleString("en-US", { month: "long" })} {year}
					<Selectors
						onClick={() => {
							dispatch(nextWeek({ year, month, date: date + 7 }));
						}}
					>
						&#8250;
					</Selectors>
				</WeekSelector>
			</WeekContainer>
		</CalendarHeader>
	);
};

export default Week;
