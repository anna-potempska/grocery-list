function Navbar() {
    return (
        <div className="navbar pb-2 border-b border-gray-200 p-4 flex justify-between items-center">
            <div className="logo">
                <h1 className="text-gray-800 text-4xl font-bold uppercase ">📝 Grocery List</h1>
            </div>
            <ul className="flex"> 
                <li className="text-primary">Home</li>
                <li className="text-primary ml-2">Create new list</li>
            </ul>
            
        </div>
    );
}

export default Navbar;