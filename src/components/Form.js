import {useState} from 'react'

function Form(){
    const [formData,setFormData] = useState({
        firstName:"",
        lastName:"",
        email:"",
        comment:"",
        isFriendly: true,
        employment:"full time",
        favColor: ""

    })

    
    function handleChange(e){
        const {name,value,type,checked} = e.target
        setFormData(prevFormData =>{
            return{
                ...prevFormData,
                [name] : type==="checkbox" ? checked : value
                // the [name] is a computed property syntax . 
            }
            
        })
    }
    // console.log(formData)

    function handleSubmit(e){
        e.preventDefault()
        console.log(formData)
    }
    return(
        <form className='form' onSubmit={handleSubmit}>
            <input 
                type="text"
                name = "firstName"
                placeholder="First Name"
                onChange={handleChange}
                value = {formData.firstName}
            />

            <input 
                type="text"
                name = "lastName"
                placeholder="Last Name"
                onChange={handleChange}
                value = {formData.lastName}
            />

            <input 
                type="text"
                name = "email"
                placeholder="Email"
                onChange={handleChange}
                value = {formData.email}
            />

            <textarea
                name='comment'
                value={formData.comment}
                onChange = {handleChange}
            />

            <input 
                type="checkbox"
                id="isFriendly"
                checked={formData.isFriendly}
                onChange = {handleChange}
                name="isFriendly"
            />
            <label htmlFor='isFriendly'>Are you Friendly</label>
            <br/>
            <fieldset>
                <legend>Current employment status</legend>
                
                <input
                    type="radio"
                    id='unemployed'
                    name='employment'
                    value="unmployed"
                    checked = {formData.employment === "unmployed"}
                    onChange={handleChange}
                />
                <label htmlFor='unemployed'>Unemployed</label>
                <br/>

                <input
                    type="radio"
                    id='partTime'
                    name='employment'
                    value="part time"
                    checked = {formData.employment === "part time"}
                    onChange={handleChange}
                />
                <label htmlFor='partTime'>Part Time</label>
                <br/>

                <input
                    type="radio"
                    id='fullTime'
                    name='employment'
                    value="full time"
                    checked = {formData.employment === 'full time'}
                    onChange={handleChange}
                />
                <label htmlFor='fullTime'>Full Time</label>
                <br/>

            </fieldset>
            <br/>

            <label htmlFor='favColor'>Select your fav color</label>
            <br/>
            <select 
                id='favColor'
                value={formData.favColor}
                onChange = {handleChange}
                name = "favColor"
                >
                <option value="">--choose--</option>
                <option value="red">Red</option>
                <option value="blue">Blue</option>
                <option value="green">Green</option>
                <option value="yellow">Yellow</option>
                <option value="orange">Orange</option>
            </select>

            <br/>
            <br/>
            <button>Submit</button>
        </form>
    )
}

export default Form