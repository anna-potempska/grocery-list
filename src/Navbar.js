function Navbar() {
    return (
        <div className="navbar pb-2 border-b border-gray-200 p-4 flex justify-between items-center max-sm:flex-col">
            <div className="logo flex items-center">
                <div className="flex items-center">
                    <svg className="inline-block w-10 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="black" class="size-10">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0ZM3.75 12h.007v.008H3.75V12Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm-.375 5.25h.007v.008H3.75v-.008Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                    </svg>
                    <h1 className="text-gray-800 text-4xl font-bold uppercase "> Grocery List</h1>
                </div>
            
            </div>
            <ul className="flex items-center gap-3 max-sm:mt-3">
                <li className="text-primary ml-2 uppercase text-xs font-bold cursor-pointer">Home</li>
                <li className="btn text-primary transition ease-out duration-500">Create new list</li>
            </ul>    
        </div>
    );
}

export default Navbar;