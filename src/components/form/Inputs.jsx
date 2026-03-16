import './styles.css'

export const TextInput = ({ 
    label, placeholder, isRequired, value, onValueChange, error, onBlur, type
}) => {

    const onChange = (content) => {
        onValueChange(content)
    }

    return (
        <div className='text-input-container'>
            <div className='text-input'>
                <span className='label'>{label}{isRequired && '*'}</span>
                <input 
                    type={type}
                    placeholder={placeholder}
                    value={value ?? ''}
                    onChange={onChange}
                    onBlur={onBlur}
                ></input>
            </div>
            <div className='text-error'>
                {error && <span>{error}</span>}
            </div>
            
        </div>
    )
}
