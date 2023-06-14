import { configureStore } from "@reduxjs/toolkit";
import calReducer from "./calSlice";

export default configureStore({
	reducer: {
		calendarStore: calReducer,
	},
});
