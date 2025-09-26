import {configureStore} from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import movieReducer from "./movieSlice";
import geminiReducer from "./geminiSlice";
import configReducer from "../utils/configSlice"

const appStore = configureStore(
    {
        reducer:{
            user:userSlice,
            movies:movieReducer,
            gemini:geminiReducer,
            config:configReducer,
        },
    },
);

export default appStore;