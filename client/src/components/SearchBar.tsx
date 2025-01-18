export default function SearchBar({}) {
  // const handleSearch = () => {
  //     if (city) {
  //       onSearch(city); // Call parent function to fetch data
  //       setCity(""); // Clear input field
  //     }
  //   };

    return (
      <div className="flex items-center gap-2">
        <form>
          <input
            type="text"
            value={city}
            // onChange={(e) => setCity(e.target.value)}
            placeholder="Enter City"
            className="border px-2 py-1"
          ></input>
          <button
            // onClick={handleSearch}
            className="bg-blue-500 text-white px-3 py-1"
          >
            Search
          </button>
        </form>
      </div>
    );
  };
}
