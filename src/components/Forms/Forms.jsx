import {useState} from "react";
import {object} from "prop-types";


const Forms = () => {

  const [inputFields, setInputFields] = useState({
      email: '',
      password: ''
  })
    const [errors, setErrors] = useState({})
    const [finishSubmit,setFinishSubmit] = useState(false)

    const handleChange = (e) => {
    setInputFields({...inputFields,  [e.target.name]: e.target.value})
    }
    const handleSubmit = (e) => {
    e.preventDefault()
      const errorsValue = {}
      if (inputFields.email.length < 5){
       errorsValue.emailError = 'email cant be lass then 5 letters'
      }
      if (inputFields.password.length < 5){
        errorsValue.passwordError =  'password cant be lass then 5 letters'
      }
      setErrors(errorsValue)
        if (Object.keys(errorsValue).length === 0){
          console.log(inputFields)
          setFinishSubmit(true)
        }
    }
  return (
    <div>


      {finishSubmit ? <h2>Sent successfully</h2>
        : <form onSubmit={handleSubmit}>
        <input type="text" name='email' onChange={handleChange}/>
        {errors && <p>{errors.emailError}</p>}
        <input type="password" name='password' onChange={handleChange}/>
        {errors && <p>{errors.passwordError}</p>}
        <button>show</button>
      </form> }
    </div>
  );
};

export default Forms;