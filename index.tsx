/// <reference types="react/next" />
/// <reference types="react-dom/next" />
import React from 'react'

interface CallbackProps {
    callback?: () => void;
    children: React.ReactChild | React.ReactNodeArray;
}

export const CallbackWrapper: React.FC<CallbackProps> = ({
    callback,
    children
}) => callback
    ? <div ref={callback}>{ children }</div>
    : <>{ children }</>
    