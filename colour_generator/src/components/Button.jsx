function Button( { children, tStyle, doClick } ) {
    return (
        <button onClick={doClick} className={tStyle}>{children}</button>
    )
}

export default Button;