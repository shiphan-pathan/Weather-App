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
      className="w-full py-3 rounded-xl text-white font-semibold bg-linear-to-r from-blue-500 to-blue-400 hover:opacity-90"
    >
      {title}
    </button>
  )
}

export default Button