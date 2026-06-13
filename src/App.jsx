import profileImage from "./assets/profile_image.jpg";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-color-to-r from-blue-500 to-purple-600 p-6">
      <div className="w-full max-w-sm bg-white/90 backdrop-blur-md rounded-3xl shadow-2xl p-8 text-center">

        <img
          src={profileImage}
          alt="Profile"
          className="w-28 h-28 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
        />

        <h1 className="mt-5 text-2xl font-bold text-gray-900">
          Najma Zahoor
        </h1>

        <p className="mt-1 text-gray-600">
          Web Developer
        </p>

        <div className="flex justify-center gap-8 mt-6">
          <div>
            <h3 className="font-bold text-gray-900">12K</h3>
            <p className="text-sm text-gray-500">Followers</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900">850</h3>
            <p className="text-sm text-gray-500">Following</p>
          </div>

          <div>
            <h3 className="font-bold text-gray-900">120</h3>
            <p className="text-sm text-gray-500">Posts</p>
          </div>
        </div>

        <button className="w-full mt-6 bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition-all duration-300 shadow-md">
          Follow
        </button>

      </div>
    </div>
  );
}