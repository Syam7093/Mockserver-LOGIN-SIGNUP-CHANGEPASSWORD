import {configureStore,combineReducers} from "@reduxjs/toolkit"
import { passChange } from "../slices/passChange"


const reducer=combineReducers({

    reusableStore:passChange.reducer,
    

})

export const store=configureStore({
    reducer:reducer
})