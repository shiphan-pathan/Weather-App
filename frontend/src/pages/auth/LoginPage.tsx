import Button from "../../components/Button"
import Input from "../../components/Input"


const LoginPage = () => {
  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-md shadow-md">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button title="Login" type="submit" />
    </div>
  )
}

export default LoginPage
