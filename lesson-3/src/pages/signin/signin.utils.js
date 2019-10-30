
export function validateInuput(errors, name, value) {

}

export const ERRORS  = {
    'email': emailValidation,
    'password': passwordValidation
}

export function emailValidation(errors, name, value) {
    if(isEmpty(value)) {
        return { ...errors, [name]: 'Email field is empty'}
    }
    else if(doesNotMatchEmailRegex(value)) {
        return { ...errors, [name]: 'Not valid email'}
    }
    else {
        
        const errorCopy = { ... errors }
        delete errorCopy[name]
        return errorCopy;
    }
}

export function doesNotMatchEmailRegex(value) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return !re.test(String(value).toLowerCase());
}
export function isNotValidPasswordLength(value) {
    return !value || value.length < 5;
}

export function passwordValidation(errors, name, value) {
    if(isEmpty(value)) {
        return { ...errors, [name]: 'Password has not been provided'}
    } 
    else if(isNotValidPasswordLength(value)) {
        return { ...errors, [name]: 'Is not valid password length'}
    }
    else {
        const errorCopy = { ... errors }
        delete errorCopy[name]
        return errorCopy;
    }
}

export function isEmpty(value) {
   return !value || !value.trim()
}