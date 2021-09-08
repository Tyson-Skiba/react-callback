import React from 'react';
interface CallbackProps {
    callback?: () => void;
    children: React.ReactChild | React.ReactNodeArray;
}
export declare const CallbackWrapper: React.FC<CallbackProps>;
export {};
