import React, {useState} from 'react'

const AuthorForm = (props) => {
    const {initialValue, operator, onSubmitProp} = props;
    const [name, setName] = useState(initialValue)

    const submitHandler = (e) => {
        e.preventDefault()
        onSubmitProp({name})
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label htmlFor="name">Name  </label>
                    <input type="text" name='name' onChange={e => setName(e.target.value)} value={name}/>
                </div>
                <button type='submit'>{operator}</button>
            </form>
        </div>
    )
}

export default AuthorForm