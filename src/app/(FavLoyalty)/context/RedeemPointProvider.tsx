import { useState } from "react";
import { ReddemPointContext } from "./RedeemPointContext";

const RedeemPointProvider = ({ children }: any) => {
    const [points, setPoints] = useState(0);

    const SyncPoints = (event: any, newValue: any) => {
        setPoints(newValue);
    };

    const exportValue = {
        points: points,
        setPoints: setPoints,
        SyncPoints: SyncPoints
    }
    return (
        <ReddemPointContext.Provider value={exportValue}>
            {children}
        </ReddemPointContext.Provider>
    )
}

export default RedeemPointProvider