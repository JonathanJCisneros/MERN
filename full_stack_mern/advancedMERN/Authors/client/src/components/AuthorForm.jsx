import React, {useState} from 'react'

const AuthorForm = (props) => {
    const {authorName, operator, onSubmitProp, error} = props;
    const [name, setName] = useState(authorName)

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
                    {error&& <p style={{color : "red", fontWeight: "bold"}}>{error}</p>}
                </div>
                <button type='submit'>{operator}</button>
            </form>
        </div>
    )
}

export default AuthorForm