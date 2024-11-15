"use client";
import { useRef } from "react";
import { AppStore, makeStore, persistor} from "./store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export function Providers({ children }: { children: React.ReactNode }) {
    const storeRef = useRef<AppStore | null>(null)
    if(!storeRef.current) {
        storeRef.current = makeStore()
        // storeRef.current.dispatch(initializeCount(count))
    }
    return (
        <Provider store={storeRef.current}>
            <PersistGate loading={null} persistor={persistor}>
                {children}
            </PersistGate>
        </Provider>
    );
}
