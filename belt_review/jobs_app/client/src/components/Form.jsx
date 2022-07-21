import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Form = (props) => {
    const {initialTitle, initialCompany, initialSalary, initialIsRemote, operator, onSubmitProp, errors} = props;
    const [title, setTitle] = useState(initialTitle)
    const [company, setCompany] = useState(initialCompany)
    const [salary, setSalary] = useState(initialSalary)
    const [isRemote, setIsRemote] = useState(initialIsRemote)

    const navigate = useNavigate();

    const onSubmit = (e) => {
        e.preventDefault()
        onSubmitProp({title, company, salary, isRemote})
    }

    const redirect = () => navigate('/')
    return (
        <form onSubmit={onSubmit} className='container'>
            <div>
                <label htmlFor="title" className='form-label'>Title</label>
                <input type="text" name='title' className='form-control' onChange={(e) => setTitle(e.target.value)} value={title}/>
                {errors.hasOwnProperty("title")&& <p style={{color : "red", fontWeight : "bold"}}>{errors.title.message}</p>}
            </div>
            <div>
                <label htmlFor="company" className='form-label'>Company</label>
                <input type="text" name='company' className='form-control' onChange={(e) => setCompany(e.target.value)} value={company}/>
                {errors.hasOwnProperty("company")&& <p style={{color : "red", fontWeight : "bold"}}>{errors.company.message}</p>}
            </div>
            <div>
                <label htmlFor="salary" className='form-label'>Salary</label>
                <input type="number" name='salary' className='form-control' onChange={(e) => setSalary(e.target.value)} value={salary}/>
                {errors.hasOwnProperty("salary")&& <p style={{color : "red", fontWeight : "bold"}}>{errors.salary.message}</p>}
            </div>
            <div>
                <label htmlFor="isRemote" className='form-label'>Remote?</label>
                <input type="checkbox" name='isRemote'className='form-check-input' onChange={(e) => setIsRemote(e.target.checked)} checked={isRemote}/>
            </div>
            <button type='submit' className='btn btn-success'>{operator}</button>
            <span>    </span>
            <button className='btn btn-secondary'onClick={redirect}>Cancel</button>
        </form>
    )
}

export default Form