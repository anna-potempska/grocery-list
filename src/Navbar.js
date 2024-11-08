function Navbar() {
    return (
        <div className="navbar pb-2 border-b border-gray-200">
            <div className="logo">
                <h1 className="text-gray-800 text-4xl font-bold uppercase p-4">📝 Grocery List</h1>
            </div>
            <ul>
                <li className="text-primary">Home</li>
                <li className="text-primary">Create new list</li>
            </ul>
            
        </div>
    );
}

export default Navbar;