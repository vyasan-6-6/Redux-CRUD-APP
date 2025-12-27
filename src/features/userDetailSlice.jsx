import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


//create action
export const createUser  = createAsyncThunk("createUser",async(data,rejectWithValue)=>{ 
    const response = await fetch('https://694eca3db5bc648a93c14c99.mockapi.io/CRUD',{
        method:"POST", 
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
    });

 try {
    const result = await response.json();
    return result;
 } catch (error) {
    return rejectWithValue(error);
 }

});
 const userDetail = createSlice({
    name:"userDetail",
    initialState:{
        users:[],
        loading:false,
        error:null,
    },
    extraReducers: (builder)=>{
        builder
        .addCase(createUser.pending,(state)=>{
            state.loading= true;
        })
        .addCase(createUser.fulfilled,(state,action)=>{
            state.loading= false,
            state.users.push(action.payload)
        })
        .addCase(createUser.rejected,(state,action)=>{
            state.loading = false,
             state.users  = action.payload
        })
      
    }
});
  

// export const {} = userDetail.actions;
export default userDetail.reducer;