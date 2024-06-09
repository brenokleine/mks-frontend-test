// components/LoadingSpinner.tsx
import React from 'react';
import { ScaleLoader } from 'react-spinners';

interface LoadingSpinnerProps {
    loading: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ loading }) => {
    return (
        <div className="loading-spinner">
            <ScaleLoader color={"#0f52ba"} loading={loading} />
        </div>
    );
};

export default LoadingSpinner;
