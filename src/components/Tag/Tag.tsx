import React from "react";


interface TagProps {
    label: string;
}

const Tag: React.FC<TagProps> = ({label}) => {
    return (
        <div className="container">
            <div className="fz-badge">
                {label}
            </div>
        </div>
    )
}

export default Tag;
