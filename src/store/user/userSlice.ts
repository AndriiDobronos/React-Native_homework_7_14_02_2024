import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {AppDispatch, RootState} from "@/store";
import JSONPlaceholder from "@/api/JSONPlaceholder/JSONPlaceholder";
import {User} from "@/api/JSONPlaceholder/JSONPlaceholder";

interface UserState {
    firstName:string;
    lastName:string;
    loading: 'idle'|'pending'|'succeeded'|'failed';
    userF: User | null,
    userId:string,
}

const initialState:UserState = {
    firstName:"John",
    lastName:"Doe",
    loading: 'idle',
    userF: null,
    userId:'1',
}

export const fetchUserById = createAsyncThunk<
    User,
    number,
    {
        dispatch:AppDispatch;
        signal:AbortSignal;
    }
    >(
    'users/fetchByIdStatus',
     async (userId:number, thunkAPI) => {
         return await JSONPlaceholder.getUser({
             userId,
             signal: thunkAPI.signal,
         })
     },
);

const userSlice = createSlice({
    name:'user',
    initialState,
    reducers: {
        setFirstName:(state,action:PayloadAction<string>) => {
            state.firstName = action.payload
        },
        setLastName:(state,action:PayloadAction<string>) => {
            state.lastName = action.payload
        },
        setUserId:(state,action:PayloadAction<string>) => {
            state.userId = action.payload
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserById.pending,(state,action)=>{
            state.loading = 'pending'
        });
        builder.addCase(fetchUserById.fulfilled,(state,action)=>{
            state.loading = 'succeeded'
            state.userF = action.payload
        });
        builder.addCase(fetchUserById.rejected,(state,action)=>{
            state.loading = 'failed'
            state.userF = null
        });
    }
});

export const {setFirstName,setLastName,setUserId} = userSlice.actions;

export const selectFirstName = (state:RootState) => state.user.firstName;

export const selectLastName = (state:RootState) => state.user.lastName;

export const selectUserId = (state:RootState) => state.user.userId;

export const selectFullName = (state:RootState) => `${state.user.firstName} ${state.user.lastName}`;

export const selectUserF = (state:RootState) => state.user.userF;

export default userSlice.reducer;