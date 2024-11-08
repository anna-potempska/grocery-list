function Mainpage() {
    return (
        <div className="px-16 py-6 bg-gray-100">
            <h2 className="text-gray-800 text-2xl font-bold">Your Grocery Lists</h2>
            <div className="lg:grid grid-cols-3 gap-5">
                <div className="card">
                    <img src="/img/img_1.jpg" alt="Party items" className="w-full h-auto" />
                    <div  className="m-4">
                        <div className=" text-xl mt-4 pb-2 border-b border-gray-200 flex justify-between items-center">
                            <h3 className="text-gray-800 ">Home</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                            </svg>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="myCheckbox" class="checkbox"/>
                            <label for="myCheckbox" class="text-gray-700 ml-2 ">Coffee</label>
                        </div>
                    </div>
                    <div className="badge flex justify-center items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                        <span>Today</span>
                    </div>
                </div>
                <div className="card">
                    <img src="/img/img_1.jpg" alt="Party items" className="w-full h-auto" />
                    <div className="m-4">
                    <div className=" text-xl mt-4 pb-2 border-b border-gray-200 flex justify-between items-center">
                            <h3 className="text-gray-800 ">Party</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                            </svg>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="myCheckbox" class="checkbox"/>
                            <label for="myCheckbox" class="text-gray-700 ml-2 ">Ballons</label>
                        </div>
                    </div>
                    <div className="badge flex justify-center items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                        <span>For later</span>
                    </div>
                </div>
                <div className="card">
                    <img src="/img/img_1.jpg" alt="Party items" className="w-full h-auto" />
                    <div className="m-4">
                        <div className=" text-xl mt-4 pb-2 border-b border-gray-200 flex justify-between items-center">
                            <h3 className="text-gray-800 ">Cake</h3>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
                            </svg>
                        </div>
                        <div className="flex items-center">
                            <input type="checkbox" id="myCheckbox" class="checkbox"/>
                            <label for="myCheckbox" class="text-gray-700 ml-2 ">Eggs</label>
                        </div>
                    </div>
                    <div className="badge flex justify-center items-center gap-1">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                    </svg>
                        <span>Weekend</span>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default Mainpage;