type ButtonProps = {
  title: string
  onClick?: () => void
  type?: "button" | "submit"
}

const Button = ({ title, onClick, type = "button" }: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="w-full bg-blue-300 text-white py-2 px-4 rounded-md hover:bg-blue-400 transition"
    >
      {title}
    </button>
  )
}

export default Button