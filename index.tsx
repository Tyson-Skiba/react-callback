import React from 'react'

type Callback = (() => void) | undefined;

interface CallbackProps  {
    callback?: Callback;
    children: React.ReactChild | React.ReactNodeArray;
}

const onMount = (element: HTMLDivElement | null, callback: Callback) => {
    if (callback) callback();
    if (element && element.parentElement) element.parentElement.removeChild(element);
}

export const CallbackWrapper: React.FC<CallbackProps> = ({
    callback,
    children
}) => (
    <>
        { children }
        <div
            ref={element => onMount(element, callback)}
            style={{ display: 'none' }}
        />
    </>
)