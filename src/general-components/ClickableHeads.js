import React from 'react'
    ;

export const ClickableHeads = ({ href, hrefHeading, iconNumber }) => {
    return (
        <div className='clickableContainerClass'>
            <div className='clickableNumberIcons'>
                <p>{iconNumber}</p>
            </div>
            <a href={href} style={{textDecoration: "none"}}>{hrefHeading}</a>
        </div>
    )
}
