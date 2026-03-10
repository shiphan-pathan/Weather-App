

const Navbar = () => {
    const handleLogout = () => {
        
    }

  return (
    <div className="w-full bg-linear-to-r from-blue-500 to-blue-400 text-white p-4 flex justify-between items-center">
      <h1 className="text-2xl font-bold">Weather App</h1>
      <button
        onClick={handleLogout}
        className="py-2 px-4 rounded-lg bg-red-500 hover:bg-red-600 transition-colors"
      >
        Logout
      </button>
    </div>
  )
}

export default Navbar
