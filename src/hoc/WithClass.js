import React from 'react';
 
//Have a function that returns a function which is a functional component
const withClass = (WrappedComponent, className) => {
    return props => (
        <div className={className}>
            <WrappedComponent {...props} /> 
        </div>
    );
};

export default withClass;
