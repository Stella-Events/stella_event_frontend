

const FormEvent = () => {
    return (
        <div>
            <div className="flex justify-center relative">
                <div className="h-40 w-max-full bg-white"></div>
                <div className="h-1 w-full bg-[#c57816] absolute -bottom-3"></div>
                <div className="h-20 w-3/5 bg-[#c57816] absolute -bottom-10 rounded-full flex justify-center items-center">
                    {/* <span className="font-sans font-bold text-6xl">Create An Experience</span> */}
                </div>

            </div>

            <div className="h-[800px] w-max-full bg-black flex justify-center gap-x-32">

                <div className="flex flex-col items-center">
                    <span className="text-white font-bold text-6xl text-center">Stella Events</span>
                    <span className="text-white font-bold text-6xl text-center">Canvas</span>
                </div>

                <div className="h-20 w-1.5/4">
                    <div className="bg-white rounded-3xl shadow-xl">
                        <h2 className="text-2xl font-bold text-center mt-10 mb-5">Canvas</h2>
                        <h4 className="font-bold flex justify-center">Let's Create!</h4>

                        <div className="flex justify-center">
                            <form className="max-w-lg mx-auto p-4">
                                <div className="mb-8">
                                    <label
                                        htmlFor="name"
                                        className="text-gray-500 text-2 mb-1 ml-4">
                                        NAME OF EVENT
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        //   value={formData.name}
                                        //   onChange={handleChange}
                                        className="h-9 bg-[#f1f1f1] w-full px-3 py-2 border-[#c57816] border-2 rounded-lg 
                                                       focus:outline-none focus:ring-2 focus:ring-black"/>

                                </div>

                                <div className="mb-8">
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-500 font-bold mb-1 ml-4">
                                    </label>
                                    CATEGORIES
                                    <select name="" id="" className=" h-9 bg-[#f1f1f1] w-full px-3 py-2 border-[#c57816] border-t-0 border-l-0 border-r-0 border-2 rounded-lg 
                                                                        focus:outline-none focus:ring-0">
                                        <option value=""></option>
                                        <option value="">Concerts</option>
                                        <option value="">Conferences</option>
                                        <option value="">Wedding</option>
                                        <option value="">Tours</option>
                                    </select>
                                </div>

                                <div className="mb-8">
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-500 font-bold mb-1 ml-4">
                                    </label>
                                    DATE
                                    <input type="date" placeholder="" className=" h-9 bg-[#f1f1f1] w-40 px-3 py-2 border-[#c57816] border-t-0 border-l-0 
                                                                                border-r-0 border-2 rounded-lg 
                                                                                focus:outline-none focus:ring-0">

                                    </input>
                                </div>

                                <div className="flex flex-row">
                                    <div className="mb-8">
                                        <label
                                            htmlFor="name"
                                            className="block text-gray-500 font-bold mb-1 ml-4">
                                        </label>
                                        STATUS
                                        <select name="" id="" className=" h-9 bg-[#f1f1f1] w-40 px-3 py-2 border-[#c57816] border-t-0 border-l-0 border-r-0 border-2 rounded-lg 
                                                                        focus:outline-none focus:ring-0">
                                            <option value=""></option>
                                            <option value="Regular">REGULAR</option>
                                            <option value="VIP">VIP</option>
                                            <option value="PLATNUM">PLATINUM</option>
                                            <option value="GOLD">GOLD</option>
                                        </select>
                                    </div>

                                    <div className="mb-8">
                                        <label
                                            htmlFor="name"
                                            className="block text-gray-500 font-bold mb-1 ml-4">
                                        </label>
                                        PRICE
                                        <select name="" id="" className=" h-9 bg-[#f1f1f1] w-40 px-3 py-2 border-[#c57816] border-t-0 border-l-0 border-r-0 border-2 rounded-lg 
                                                                        focus:outline-none focus:ring-0">
                                            <option value=""></option>
                                            <option value="Regular">500 Cedis</option>
                                            <option value="VIP">600 Cedis</option>
                                            <option value="PLATNIUM">800 Cedis</option>
                                            <option value="GOLD">1,000 Cedis</option>
                                        </select>
                                    </div>
                                </div>

                            </form>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default FormEvent