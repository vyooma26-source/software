import React from 'react';

export function SkipToContent({ targetId = 'main-content' }: { targetId?: string }) {
    return (
        <a href={`#${targetId}`} className="skip-to-content">
            Skip to main content
        </a>
    );
}
