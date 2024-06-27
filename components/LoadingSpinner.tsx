// components/LoadingSpinner.tsx
import React from 'react';
import { ScaleLoader } from 'react-spinners';
import { colors } from '@/styles/colors';

interface LoadingSpinnerProps {
    loading: boolean;
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ loading }) => {
    return (
        <div className="loading-spinner">
            <ScaleLoader color={colors.primary} loading={loading} />
        </div>
    );
};

export default LoadingSpinner;
