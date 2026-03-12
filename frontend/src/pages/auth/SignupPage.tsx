import React from 'react'
import Input from '../../components/Input'
import Button from '../../components/Button'
import weatherIcon from '../../assets/weather.png'
import { signupUser } from '../../api/auth.api'
import { useNavigate } from 'react-router-dom'

const SignupPage = () => {

    const [formData, setFormData] = React.useState({
        username: '',
        email: '',
        password: '',
    })

    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        try {
          await signupUser({
            name: formData.username,
            email: formData.email,
            password: formData.password,
          })
          console.log("Signup successful");
        } catch (error) {
          console.error("Signup failed:", error);
        }

        navigate("/")
    }


  return (
  <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-blue-400 via-blue-500 to-blue-600">

      <div className="bg-sky-100 backdrop-blur-md p-10 rounded-3xl shadow-xl w-100">

        <div className="flex justify-center mb-4">
          <img src={weatherIcon} alt="weather" className="w-25 h-25" />
        </div>

        <h2 className="text-3xl font-bold text-center mb-2 text-blue-900">
          Create Your Account
        </h2>

        <p className="text-center text-gray-500 mb-6">
          Join us to get the latest weather updates!
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <Input
            type="text"
            name="username"
            placeholder="Username"
            value={formData.username}
            onChange={handleChange}
          />

          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />


          <Button type="submit" title='Sign up'/>

        </form>

        <p className="text-center text-gray-500 mt-6">
          Already have an account?{" "}
          <span className="text-blue-600 font-semibold cursor-pointer" onClick={() => navigate("/")}>
            Login
          </span>
        </p>

      </div>

    </div>
  );
}

export default SignupPage
