function Mainpage() {
    return (
        <div className="px-16 py-6 bg-gray-100">
            <h2 className="text-gray-800 text-2xl font-bold">Your Grocery Lists</h2>
            <div className="lg:grid grid-cols-3 gap-5">
                <div className="card">
                    <img src="/img/img_1.jpg" alt="Party items" className="w-full h-auto" />
                    <div  className="m-4">
                        <h3 className="text-gray-800 text-xl mt-4 pb-2 border-b border-gray-200">Home</h3>
                        <div className="flex items-center">
                            <input type="checkbox" id="myCheckbox" class="checkbox"/>
                            <label for="myCheckbox" class="text-gray-700 ml-2 ">Coffee</label>
                        </div>
                    </div>
                    <div className="badge">
                        <span>Today</span>
                    </div>
                </div>
                <div className="card">
                    <img src="/img/img_1.jpg" alt="Party items" className="w-full h-auto" />
                    <div className="m-4">
                        <h3 className="text-gray-800 text-xl mt-4 pb-2 border-b border-gray-200">Party</h3>
                        <div className="flex items-center">
                            <input type="checkbox" id="myCheckbox" class="checkbox"/>
                            <label for="myCheckbox" class="text-gray-700 ml-2 ">Ballons</label>
                        </div>
                    </div>
                    <div className="badge">
                        <span>For later</span>
                    </div>
                </div>
                <div className="card">
                    <img src="/img/img_1.jpg" alt="Party items" className="w-full h-auto" />
                    <div className="m-4">
                        <h3 className="text-gray-800 text-xl mt-4 pb-2 border-b border-gray-200">Cake</h3>
                        <div className="flex items-center">
                            <input type="checkbox" id="myCheckbox" class="checkbox"/>
                            <label for="myCheckbox" class="text-gray-700 ml-2 ">Eggs</label>
                        </div>
                    </div>
                    <div className="badge">
                        <span>Weekend</span>
                    </div>
                </div>
                </div>
        </div>
    );
}

export default Mainpage;