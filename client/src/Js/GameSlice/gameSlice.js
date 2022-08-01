import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from "axios";

export const getgames= createAsyncThunk("game/get",async()=>{
  try {
    let result = axios.get("http://localhost:5000/game/");
    return result;
    
  } catch (error) {
    console.log("error");
    
  }
})

export const addGame = createAsyncThunk("game/add", async(game)=>{
  try {
     let result = axios.post("http://localhost:5000/game/add" ,game);
     return result;
    
  } catch (error) {
    console.log(error);
    
  }
})
export const deleteGame = createAsyncThunk("game/delete", async(id)=>{
  try {
     let result = axios.delete(`http://localhost:5000/game/${id}`);
     return result;
    
  } catch (error) {
    console.log(error);
    
  }
})
export const updateGame = createAsyncThunk("game/update", async({id , edited})=>{
  try {
     let result = axios.put(`http://localhost:5000/game/${id}`,edited);
     return result;
    
  } catch (error) {
    console.log(error);
    
  }
})
const initialState = {
  games:null,
  status:null,
}

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {},
  extraReducers:{
    [getgames.pending]:(state)=>{
      state.status = "pending";
    },
    [getgames.fulfilled]:(state,action)=>{
      state.status = "fulfilled";
      state.games = action.payload.data.games;
    },
    [getgames.rejected]:(state)=>{
      state.status = "rejected";
    },
    [addGame.pending]:(state)=>{
      state.status = "pending";
    },
    [addGame.fulfilled]:(state)=>{
      state.status = "fulfilled";
  
    },
    [addGame.rejected]:(state)=>{
      state.status = "rejected";
    },
    [deleteGame.pending]:(state)=>{
      state.status = "pending";
    },
    [deleteGame.fulfilled]:(state)=>{
      state.status = "fulfilled";
  
    },
    [deleteGame.rejected]:(state)=>{
      state.status = "rejected";
    },
    [updateGame.pending]:(state)=>{
      state.status = "pending";
    },
    [updateGame.fulfilled]:(state)=>{
      state.status = "fulfilled";
  
    },
    [updateGame.rejected]:(state)=>{
      state.status = "rejected";
    },
  },
});

// Action creators are generated for each case reducer function
//export const {  } = gameSlice.actions

export default gameSlice.reducer