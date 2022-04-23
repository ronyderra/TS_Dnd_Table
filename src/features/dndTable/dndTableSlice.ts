import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/store';

export interface dataObj {
    id: number,
    name: string,
    overLimitHours: string,
    manualHours: string,
    hours: string,
    sumHours: string
}

export interface DndTableState {
    data: dataObj[]
}

const initialState = {
    data: [
        {
            id: 316287341,
            name: "ראובן",
            overLimitHours: '4:00',
            manualHours: '4:00',
            hours: '155:00',
            sumHours: '159:00'
        },
        {
            id: 316287341,
            name: "תומר",
            overLimitHours: '4:00',
            manualHours: '4:00',
            hours: '155:00',
            sumHours: '159:00'
        },
        {
            id: 316287341,
            name: "שרון",
            overLimitHours: '4:00',
            manualHours: '4:00',
            hours: '155:00',
            sumHours: '159:00'
        },
        {
            id: 316287341,
            name: "יותם",
            overLimitHours: '4:00',
            manualHours: '4:00',
            hours: '155:00',
            sumHours: '159:00'
        },
        {
            id: 316287341,
            name: "חיים",
            overLimitHours: '4:00',
            manualHours: '4:00',
            hours: '155:00',
            sumHours: '159:00'
        },
        {
            id: 316287341,
            name: "רותם",
            overLimitHours: '4:00',
            manualHours: '4:00',
            hours: '155:00',
            sumHours: '159:00'
        },
        {
            id: 316287341,
            name: "תומר",
            overLimitHours: '4:00',
            manualHours: '4:00',
            hours: '155:00',
            sumHours: '159:00'
        },
        {
            id: 316287341,
            name: "שרון",
            overLimitHours: '4:00',
            manualHours: '4:00',
            hours: '155:00',
            sumHours: '159:00'
        },
        {
            id: 316287341,
            name: "יותם",
            overLimitHours: '4:00',
            manualHours: '4:00',
            hours: '155:00',
            sumHours: '159:00'
        },
        {
            id: 316287341,
            name: "חיים",
            overLimitHours: '4:00',
            manualHours: '4:00',
            hours: '155:00',
            sumHours: '159:00'
        },
        {
            id: 316287341,
            name: "רותם",
            overLimitHours: '4:00',
            manualHours: '4:00',
            hours: '155:00',
            sumHours: '159:00'
        },
    ],
};

export const dndTableSlice = createSlice({
    name: 'dndTable',
    initialState,
    reducers: {
        addRow: (state, action: PayloadAction<dataObj>) => {
            state.data.push(action.payload);
        },
        // deleteRow: (state) => {
        //     state.data -= 1;
        // },
        // incrementByAmount: (state, action: PayloadAction<number>) => {
        //     state.data += action.payload;
        // },
    },
});

export const { addRow } = dndTableSlice.actions;
export const selectDndTableData = (state: RootState) => state.dndTableData.data;
export default dndTableSlice.reducer;