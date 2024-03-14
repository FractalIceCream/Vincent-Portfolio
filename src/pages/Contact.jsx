import { useState } from "react";

export default function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formState)
        if(!errorMessage) {
            console.log('Submit Form', formState);
        }

        fetch("https://getform.io/f/nelz5VbK", {
            method: "POST",
            body: formState,
            headers: { "Content-Type": "JSON" }
                // "Accept": "application/json"}
        }).then(res => console.log(res))
        .catch(error => console.log(error));
        
    };

    const handleChange = (event) => {
        if (event.target.name === 'email') {

            const emailRegExp = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
            const isValid = emailRegExp.test(event.target.value);
            if (!isValid) {
                setErrorMessage('Your email is invalid.');
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value });
            console.log('Handle Form', formState);
        }
    };

    return (
        <section>
            <form id="form" onSubmit={handleSubmit} method="POST" action="https://getform.io/f/nelz5VbK" acceptCharset="UTF-8">
                <div className="form-group">
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text"
                        name="name"
                        defaultValue={name}
                        onBlur={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email address:</label>
                    <input 
                        type="email"
                        name="email"
                        defaultValue={email}
                        onBlur={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                        type="text"
                        name="message"
                        rows="5"
                        defaultValue={message}
                        onBlur={handleChange} />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </section>
    );
}