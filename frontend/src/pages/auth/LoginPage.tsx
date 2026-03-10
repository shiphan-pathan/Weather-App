import { useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/Input"
import weatherIcon from '../../assets/weather.png'

const LoginPage = () => {

const [formData, setFormData] = useState({
    email: '',
    password: '',
})

const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
        ...formData,
        [e.target.name]: e.target.value,
    })
}

const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Implement login logic here
}



  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-400 to-blue-600">
      
      <div className="bg-sky-100 backdrop-blur-md p-10 rounded-3xl shadow-xl w-95">

        <div className="flex justify-center mb-4">
           <img src={weatherIcon} alt="weather" className="w-25 h-25" />
        </div>

        <h1 className="text-3xl font-semibold text-center text-blue-900">
          Welcome Back!
        </h1>

        <p className="text-center text-gray-600 mt-2 mb-6">
          Log in to your account
        </p>

        <form onSubmit={handleLogin} className="space-y-4">

          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <Button type="submit" title="Log In" />

        </form>

        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer font-medium">
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
}

export default LoginPage
