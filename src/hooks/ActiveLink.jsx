import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function ActiveLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });

    return (
        <>
            <Link
                className={match ? 'text-primary-600' : "text-gray-700 hover:text-primary-600 duration-300"}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </>
    );
}

export default ActiveLink;