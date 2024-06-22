import { configureStore } from '@reduxjs/toolkit';
import registrationReducer from './slices/registrationSlice';

const store = configureStore({
    reducer: {
        registration: registrationReducer,
        login: loginReducer,
        
    },
});

export default store;
