import axios from "axios";


const FormEvent = () => {
    // Post event to backend
    const postEvent = async (event) => {
        event.preventDefault();
        // collect all inputs from form
        const formData = new FormData(event.target);
        // post data to backend
        const response =await axios.post('https://stella-event-backend.onrender.com/events', formData);
        console.log(response)
    }
    return (
        <div>
            <div className="flex justify-center relative">
                <div className="h-40 w-max-full bg-white"></div>
            </div>

            <div className="h-[850px] w-max-full bg-black flex justify-center gap-x-32">

                <div className="flex flex-col justify-center">
                    <span className="text-white font-bold text-6xl text-center">Stella Events</span>
                    <span className="text-white font-bold text-6xl text-center">Canvas</span>
                </div>

                <div className="h-28 w-2/4">
                    <div className="bg-white rounded-3xl shadow-xl ">
                        <h2 className="text-3xl font-bold text-center mt-20">Canvas</h2>
                        <h4 className="font-bold flex justify-center">Let's Create!</h4>

                        <div className="flex justify-center">
                            <form onSubmit={postEvent} className="max-w-lg mx-auto p-4">

                                <div className="mb-8">
                                    {/* NAME OF EVENT */}
                                    <label
                                        htmlFor="name"
                                        className="text-gray-500 text-2 mb-1 mr-0">

                                    </label>
                                    <input
                                        type="name"
                                        id="name"
                                        name="name"
                                        //   value={formData.name}
                                        //   onChange={handleChange}
                                        className="h-9 bg-[#f1f1f1] w-full px-3 py-2 border-[#c57816] 
                                                        border-2 border-t-0 border-r-0 border-l-0 rounded-lg 
                                                       focus:outline-none focus:ring-2 focus:ring-black hover:bg-[#c57816]"
                                        placeholder="Name of Event..." />

                                </div>

                                <div className="mb-8">
                                    {/* CATEGORIES */}
                                    <label
                                        htmlFor="categories"
                                        className="block text-gray-500 text-2 font-bold mb-1 ml-4">
                                    </label>

                                    <select name="categories" id="categories" className=" h-9 bg-[#f1f1f1] w-full px-3 py-2 
                                                                    border-[#c57816] border-t-0 border-l-0 
                                                                    border-r-0 border-2 rounded-lg hover:bg-[#c57816]
                                                                    focus:outline-none focus:ring-0">
                                        <option></option>
                                        <option disabled selected>Categories...</option>
                                        <option>Concerts</option>
                                        <option>Conferences</option>
                                        <option>Wedding</option>
                                        <option>Tours</option>
                                    </select>
                                </div>

                                <div className="mb-8 flex flex-row justify-center items-center">
                                    {/* DATE */}
                                    <label
                                        htmlFor="date"
                                        className="block text-gray-500 font-bold mb-1 ml-4">
                                    </label>

                                    <input
                                        type="date"
                                        name="date"
                                        placeholder=""
                                        className=" h-9 bg-[#f1f1f1] w-60 px-3 py-2 
                                                     border-[#c57816] border-t-0 border-l-0 
                                                    border-r-0 border-2 rounded-lg hover:bg-[#c57816]
                                                    focus:outline-none focus:ring-0">
                                    </input>
                                </div>

                                <div className="mb-8 flex flex-row justify-center items-center">
                                    {/* TIME */}
                                    <label
                                        htmlFor="time"
                                        className="block text-gray-500 font-bold mb-1 ml-4">
                                    </label>

                                    <input
                                        type="time"
                                        id="time"
                                        name="time"
                                        placeholder=""
                                        className=" h-9 bg-[#f1f1f1] w-60 px-3 py-2 border-[#c57816] 
                                                        border-t-0 border-l-0 hover:bg-[#c57816]
                                                        border-r-0 border-2 rounded-lg 
                                                        focus:outline-none focus:ring-0">
                                    </input>
                                </div>


                                {/* STATUS */}
                                <div className="mb-8">
                                    <label
                                        htmlFor="status"
                                        className="block text-gray-500 font-bold mb-1 ml-4">
                                    </label>

                                    <select
                                        name="status"
                                        id="status"
                                        placeholder="Status" className=" h-9 bg-[#f1f1f1] w-full px-3 py-2 border-[#c57816] 
                                                                        border-t-0 border-l-0 border-r-0 border-2 rounded-lg 
                                                                        focus:outline-none hover:bg-[#c57816] focus:ring-0">
                                        <option value="" disabled selected>Status...</option>
                                        <option value="VIP">REGULAR</option>
                                        <option value="PLATNUM">VIP</option>
                                        <option value="PLATINUM">PLATINUM</option>
                                        <option value="GOLD">GOLD</option>

                                    </select>


                                    <div className="mt-8">
                                        {/* PRICE */}
                                        <label
                                            htmlFor="status"
                                            className="block text-gray-500 font-bold mb-1 ml-4">
                                        </label>

                                        <input
                                            type="text"
                                            name="price"
                                            id="price"
                                            className=" h-9 bg-[#f1f1f1] w-full border-[#c57816] border-t-0 border-l-0 
                                                                            border-r-0 border-2 rounded-lg hover:bg-[#c57816]
                                                                            focus:outline-none focus:ring-0 mr-6" placeholder="PRICE">
                                        </input>
                                    </div>
                                </div>

                                <div className="mb-8">
                                    {/* LOCATION */}
                                    <label
                                        htmlFor="location"
                                        className="text-gray-500 text-2 mb-1">
                                    </label>
                                    <input
                                        type="location"
                                        id="location"
                                        name="location"
                                        //   value={formData.name}
                                        //   onChange={handleChange}
                                        className="h-9 bg-[#f1f1f1] w-full border-[#c57816] border-2 
                                                        rounded-lg border-t-0 border-l-0 border-r-0 hover:bg-[#c57816]
                                                       focus:outline-none" placeholder="Location..." />
                                </div>

                                <div className="mb-8">
                                    {/* DESCRIPTION */}
                                    <label
                                        htmlFor="description"
                                        className="text-gray-500 text-2 mb-1">
                                    </label>
                                    <input
                                        type="description"
                                        id="description"
                                        name="description"
                                        //   value={formData.name}
                                        //   onChange={handleChange}
                                        className="h-9 bg-[#f1f1f1] w-full border-[#c57816] border-2 
                                                        rounded-lg border-t-0 border-l-0 border-r-0 hover:bg-[#c57816]
                                                       focus:outline-none" placeholder="Description..." />
                                </div>

                                <div className="mb-8">
                                    {/* FLIER UPLOAD */}
                                    <label
                                        htmlFor="image"
                                        className="text-gray-500 text-2 font-bold mb-1">Upload Event flier :
                                    </label>

                                    <input
                                        type="file"
                                        id="image"
                                        name="image" className="h-9 bg-[#f1f1f1] w-26 border-[#c57816] 
                                                            border-2 border-t-0 border-l-0
                                                            border-r-0 rounded-lg focus:outline-none">
                                    </input>
                                </div>

                                <div className="flex justify-center">
                                    {/* SUBMIT BUTTON */}
                                    <input
                                        type="submit" className="h-9 bg-[#f1f1f1] w-28 border-[#c57816] 
                                                                border-2 rounded-lg 
                                                                focus:outline-none font-bold hover:bg-[#c57816]">
                                    </input>
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