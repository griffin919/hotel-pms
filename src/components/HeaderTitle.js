import React from 'react'

const HeaderTitle = ({title}) => {
    return (
        <div className='overviewLabel'>
            <h1>{title}</h1>
        </div>
    )
}

export default HeaderTitle

HeaderTitle.defaultProps = {
    title: 'Something is missing here',
}
