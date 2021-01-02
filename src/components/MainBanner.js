import React from 'react'

const MainBanner=({children,mainbanner})=> {
    return (
        <header className={mainbanner}>
        {children}
            
        </header>
    )
}

MainBanner.defaultProps={
mainbanner: "defaultMainBanner"
}
export default MainBanner
