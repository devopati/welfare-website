import { createSlice,PayloadAction } from '@reduxjs/toolkit'

interface AppState {
    phone_number:string,
    member_number:string,
    member_details:object,
    email:string,
    business_type:string,
    dealer_info: object,
    general_info:object
}


const initialState:AppState = {
    phone_number:"",
    member_number:"",
    member_details:{},
    email:"",
    business_type:"",
    dealer_info:{},
    general_info:{}
}

const AppSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setPhoneNumber: (state:AppState, action:PayloadAction<string>) => {
        state.phone_number = action.payload;
        },
    setMemberNumber: (state:AppState, action:PayloadAction<string>) => {
        state.member_number = action.payload;
        localStorage.setItem("member_no",JSON.stringify(action.payload))
        },
    setMemberDetails:(state:AppState, action:PayloadAction<any>)=>{
        state.member_details = action.payload;
    },
    setEmailAndBusinessType:(state:AppState,action:PayloadAction<{email:string,business_type:string}>)=>{
        state.email = action.payload?.email;
        state.business_type = action.payload?.business_type
    },
    setDealerInfo:(state:AppState,action:PayloadAction<object>)=>{
        state.dealer_info = action.payload;
    },
    setGeneralInfo:(state:AppState,action:PayloadAction<object>)=>{
        state.general_info = action.payload;
    }
  }
});

export const {setMemberNumber,setPhoneNumber,setMemberDetails,setEmailAndBusinessType,setDealerInfo,setGeneralInfo} = AppSlice.actions

export default AppSlice.reducer