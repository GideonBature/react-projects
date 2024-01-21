function TabButton({ children, className, onSelect }) {
    return (
        <button onClick={onSelect} className={className}>{children}</button>
    )
}

export default TabButton;