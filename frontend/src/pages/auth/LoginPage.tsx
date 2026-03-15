import { useState } from "react"
import Button from "../../components/Button"
import Input from "../../components/Input"
import weatherIcon from '../../assets/weather.png'
import { loginUser } from "../../api/auth.api"
import { useNavigate } from "react-router";

const LoginPage = () => {

const [formData, setFormData] = useState({
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

const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    
    try {

      await loginUser({
        email: formData.email,
        password: formData.password,
      })
     
      window.location.href = "/weather";
    } catch (error) {
      console.error("Login failed:", error);
    }

}



  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-r from-blue-400 to-blue-600">
      
      <div className="bg-sky-100 backdrop-blur-md p-10 rounded-3xl shadow-xl w-95">

        <div className="flex justify-center mb-4">
           <img src={weatherIcon} alt="weather" className="w-25 h-25" />
        </div>

        <h1 className="text-3xl font-bold text-center text-blue-900">
          Welcome Back!
        </h1>

        <p className="text-center text-gray-600 mt-2 mb-6">
          Log in to your account
        </p>

        <form onSubmit={handleLogin} className="space-y-4">

          <Input
            name="email"
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />

          <Input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
          />

          <Button type="submit" title="Log In" />

        </form>

        <p className="text-center text-gray-600 mt-6">
          Don’t have an account?{" "}
          <span className="text-blue-600 cursor-pointer font-medium" onClick={() => navigate("/signup")}>
            Sign Up
          </span>
        </p>

      </div>
    </div>
  );
}

export default LoginPage
