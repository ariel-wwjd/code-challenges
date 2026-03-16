import { useState } from 'react'
import { TextInput } from './Inputs'
import './styles.css'

export default function FormComponent() {
    const [isFormTouched, setIsFormTouched] = useState(false)
    const [firstName, setFirstName] = useState('')
    const [firstNameError, setFirstNameError] = useState('')
    const [lastName, setLastName] = useState('')
    const [lastNameError, setLastNameError] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')
    const [phoneNumberError, setPhoneNumberError] = useState('')
    const [email, setEmail] = useState('')
    const [emailError, setEmailError] = useState('')

    const phonePattern = /^\d{8}$/
    // const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    const isFormCompleted = firstName !== '' && lastName !== '' && email !== '' 

    const isFormWithError = firstNameError !== ''
        || lastNameError !== '' || phoneNumberError !== '' || emailError !== ''

    // console.log({ isFormTouched, isFormWithError, isFormCompleted })

    const onFirstNameChangeHandler = (firstName) => {
        setFirstName(firstName)
        if (firstNameError !== '') {
            setFirstNameError('')
        }
    }

    const onLastNameChangeHandler = (lastName) => {
        setLastName(lastName)
        if (lastNameError !== '') {
            setFirstNameError('')
        }
    }

    const onPhoneNumberChangeHandler = (phoneNumber) => {
        setPhoneNumber(phoneNumber)
        if (phoneNumberError !== '') {
            setPhoneNumberError('')
        }
    }

    const onEmailChangeHandler = (email) => {
        setEmail(email)
        if (emailError !== '') {
            setEmailError('')
        }
    }

    const onFirstNameBlurHandler = () => {
        if (!isFormTouched) {
            setIsFormTouched(true)
        }

        if (firstName === '') {
            setFirstNameError('First Name is required')
        } else {
            setFirstNameError('')
        }
    }

    const onLastNameBlurHandler = () => {
        if (!isFormTouched) {
            setIsFormTouched(true)
        }

        if (lastName === '') {
            setLastNameError('Last Name is required')
        } else {
            setLastNameError('')
        }
    }

    const onPhoneNumberBlurHandler = () => {
        if (!isFormTouched) {
            setIsFormTouched(true)
        }

        const isValidPhone = phonePattern.test(phoneNumber)
        if (phoneNumber) {
            if (isValidPhone) {
                setPhoneNumberError('')
            } else {
                setPhoneNumberError('Phone number must be 8 digits')
            }
        } else {
            setPhoneNumberError('')
        }
    }

    const onEmailBlurHandler = (event) => {
        if (!isFormTouched) {
            setIsFormTouched(true)
        }
        const isValidEmail = event.target.validity.valid
        const emailErrorMessage = event.target.validationMessage
        if (email === '') {
            setEmailError('Email is required')
        } else if (isValidEmail) {
            setEmailError('')
        } else {
            setEmailError(emailErrorMessage)
        }
    }

    const onSubmit = (event) => {
        event.preventDefault()
        alert('form Submit')
        setFirstName('')
        setLastName('')
        setPhoneNumber('')
        setEmail('')
        setIsFormTouched(false)
    }

    return (
        <div>
            <h1 className='main-title-form'>Create a form with controlled inputs and validation.</h1>
            <form className="form-area" onSubmit={onSubmit}>
                <h2>Registration Form</h2>
                <div className="inputs">
                    <TextInput
                        type='text'
                        key='firstNameInput'
                        label='First Name'
                        placeholder='First Name'
                        value={firstName}
                        onValueChange={
                            (event) => onFirstNameChangeHandler(event.target.value)
                        }
                        isRequired={true}
                        error={firstNameError}
                        onBlur={onFirstNameBlurHandler}
                    />
                    <TextInput 
                        type='text'
                        key='lastNameInput'
                        label='Last Name'
                        placeholder='Last Name'
                        value={lastName}
                        onValueChange={
                            (event) => {onLastNameChangeHandler(event.target.value)}
                        }
                        isRequired={true}
                        error={lastNameError}
                        onBlur={onLastNameBlurHandler}
                    />
                    <TextInput 
                        type='number'
                        key='phoneNumberInput'
                        label='Phone Number'
                        placeholder='12345678'
                        value={phoneNumber}
                        onValueChange={
                            (event) => {onPhoneNumberChangeHandler(event.target.value)}
                        }
                        isRequired={false}
                        error={phoneNumberError}
                        onBlur={onPhoneNumberBlurHandler}
                    />
                    <TextInput
                        type='email'
                        key='emailInput'
                        label='Email'
                        placeholder='user@email.com'
                        value={email}
                        onValueChange={
                            (event) => {onEmailChangeHandler(event.target.value)}
                        }
                        isRequired={true}
                        error={emailError}
                        onBlur={onEmailBlurHandler}
                    />
                </div>
                <div>
                    <button
                        type='submit'
                        disabled={isFormTouched 
                            ? isFormWithError || !isFormCompleted: true}
                    >Submit</button>
                </div>
            </form>
        </div>
    )
}
