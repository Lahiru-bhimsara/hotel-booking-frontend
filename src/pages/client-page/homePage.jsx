import Header from "../../components/header/header";

export default function Homepage() {
  return (
    <>
      <Header />
      <div className="w-full h-screen bg-pink-200 flex flex-col justify-center items-center">
        <div className="border border-white bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row justify-between items-center space-x-4">
          <input
            type="date"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <input
            type="date"
            className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400"
          />
          <select className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-pink-400">
            <option>Luxury</option>
            <option>Normal</option>
            <option>Low</option>
          </select>
          <button className="bg-pink-500 text-white font-semibold py-2 px-4 rounded-md hover:bg-pink-600 transition duration-200">
            Book Now
          </button>
        </div>
        <h1 className="text-white text-[50px] m-[20px]">
          Welcome to the Luxery Hotel Chain - Sri lanka
        </h1>
      </div>
    </>
  );
}
