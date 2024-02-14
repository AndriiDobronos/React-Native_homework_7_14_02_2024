import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {RootState} from "@/store";

export type ColorScheme = 'dark' | 'light';

interface ThemeState  {
    theme: ColorScheme;
}

const initialState:ThemeState = {
    theme:'light'
}

const uiSlice = createSlice ({
    name:'ui',
    initialState,
    reducers:{
        toggleTheme:(state) => {
        //toggleTheme:(state,action:PayloadAction<ColorScheme>) => {
            //state.theme = action.payload
            state.theme = state.theme === 'dark' ? 'light' : 'dark'
        }
    },

});

export const {toggleTheme} = uiSlice.actions

export const selectTheme = (state:RootState) => state.ui.theme

export default uiSlice.reducer ;