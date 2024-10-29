import { createReducer } from "@reduxjs/toolkit";
import { hide, show } from "./loading.actions";
import { LoadingState } from "./LoadingState.types";

const initialState:LoadingState = {
    show :false
}

export const loadingReduser = createReducer(initialState, builder =>{
    builder.addCase(show, ()=>{
        return {show: true}
    }),
    builder.addCase(hide, ()=>{
        return {show: false}
    })
})