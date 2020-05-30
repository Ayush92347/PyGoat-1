// import React from 'react';

const PageNumButton = (props) => {

    const currentPage = props.store.checkActivePage()

    const pageNumStyle = {
        backgroundColor: props.active? '#ffd200': '#c4c4c4', 
        border: '0pt',
        marginTop: '20px',
        marginRight: '20px',
        marginBottom: '10px',
        borderRadius: '4px',
    }

    const handleClick = (e) => {
        props.store.refresh.innerHTMLReRender(props.num)
        if(props.store.checkCurrentPageNumber() != props.num) {
            props.store.changeCurrentPageNumber(props.num)
            props.store.refresh.rootReRender(Math.random())
        }
    }

    return (
        <button style={pageNumStyle} onClick={handleClick}>{props.num}</button>
    )
}


export {PageNumButton}