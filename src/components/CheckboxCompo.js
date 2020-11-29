const CheckboxCompo = ({name, checked, change}) => {
    return (
        <label htmlFor={name}>
            Show {name} graph bars
            <input
                type='checkbox'
                id={name}
                name={name}
                checked={checked}
                onChange={change}
                />
                
        </label>
        )
}

export default CheckboxCompo