import React, { ReactNode } from 'react';

interface INHContainer{
    children:ReactNode;
    className:string;
}

const NHContainer = ({children, className=""}:INHContainer) => {
    return (
        <div className={`container mx-auto p-5 ${className}`}>
            {children}
        </div>
    );
};

export default NHContainer;