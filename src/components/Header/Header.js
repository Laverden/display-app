import React from 'react';
import "./Header.css";

export default function Header ({
    title
}) {
    return <h1 className="header" title="header" data-testid="main-header">{ title }</h1>
}