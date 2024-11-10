import './Form.css'
import React from 'react'

function Form() {
  return (
    <div className='form'>
        <form action="">
            <label htmlFor="">Your Name</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Email</label>
            <input type="email" name="" id="" />
            <label htmlFor="">Subject</label>
            <input type="text" name="" id="" />
            <label htmlFor="">Message</label>
            <textarea name="" id="" rows="6" placeholder='Type your message here'></textarea>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}

export default Form
