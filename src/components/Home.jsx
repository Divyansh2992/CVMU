import { useState } from "react";

const Home = ({ setData }) => {
  const [idea, setIdea] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`http://localhost:5000/best-locations?idea=${idea}`);
    const result = await response.json();
    setData(result);
  };

  return (
    <div className="container mt-5 text-center">
      <h1 className="display-4 text-primary">Startup Location Finder</h1>
      <p className="lead">Enter your startup idea and get the best location!</p>
      <form onSubmit={handleSubmit} className="mt-4">
        <input
          type="text"
          className="form-control w-50 mx-auto"
          placeholder="Enter your startup idea"
          value={idea}
          onChange={(e) => setIdea(e.target.value)}
          required
        />
        <button type="submit" className="btn btn-success mt-3">Find Best Location</button>
      </form>
    </div>
  );
};

export default Home;