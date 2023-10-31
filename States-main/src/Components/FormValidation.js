
import React,{useState} from "react";


const FormValidation = () => {
   const [user, setUser] = useState({
         name:"",
         email:"",
         password:"",
         confirmPassword:""
    })

    let [error, setError] = useState("")
    let [success, setSuccess] = useState("")

    let {name, email, password, confirmPassword} = user
   
     function  handleChange(e){
        // console.log(e.target) 
        // console.log(e.target.name)
        setUser({...user, [e.target.name]: e.target.value})
     }

     function handleSubmit(e){
         e.preventDefault() 
         // basic conditions: 
         if(!name || !email || !password || !confirmPassword){
              setError("Please fill all the details")
              setSuccess("")
         } 
         //first and last name 
         else if(!name.includes(" ")){
               setError("Please enter your first and last name")
               setSuccess("")
         }
        //email validation  : 
        else if(!email.includes("@")){
                setError("Please enter valid email")
                setSuccess("")
        }
         else if(password !== confirmPassword){
                setError("Password and Confirm Password should be same")
                setSuccess("")
         }
         else{
            console.log("dslkdlsds")
                setSuccess("Form Submitted Successfully")
                setError("")
                setUser({
                    name:"",
                    email:"",
                    password:"",
                    confirmPassword:""
                })
         }
     }




    return(
         <div className="signup">
                 {
                        error && <h3 style={{color:"red"}}> {error} </h3>
                 }

                 {
                        success && <h3 style={{color:"green"}}> {success} </h3>
                 }


                <form onSubmit={handleSubmit}>
                        <input type="text" placeholder="Enter your Name" name= "name"
                          onChange={handleChange}
                          value= {name}
                        />
                        <input type="email" placeholder="Enter your Email"  name="email"
                            onChange={handleChange}
                            value= {email}
                        />
                        <input type="password" placeholder="Enter your Password"  name="password"
                            onChange={handleChange}
                            value= {password}
                        />
                        <input type="password" placeholder="Confirm your Password"  name="confirmPassword"
                            onChange={handleChange}
                            value= {confirmPassword}
                        />
                        <button > Submit </button>
                </form>
        </div>
    )
}

export default FormValidation;