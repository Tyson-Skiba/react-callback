import React from 'react';
declare type Callback = (() => void) | undefined;
interface CallbackProps {
    callback?: Callback;
    children: React.ReactChild | React.ReactNodeArray;
}
export declare const CallbackWrapper: React.FC<CallbackProps>;
export {};
