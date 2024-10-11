import Link from 'next/link'; // Assuming you're using Next.js for routing
import NavBar from "@/components/navbar/navbar";

export default function Education() {
  return (
    <div className="bg-white">

      <div className="bg-white py-10 flex flex-col items-center">
        
        <h2 className="text-center text-black max-w-2xl">
          We, at MGDT, believe that growing your own food should be an enjoyable and accessible experience for everyone. To help you get started,
          here are 3 easy steps that will guide you on your journey to cultivating your very own garden!
        </h2>
      </div>

      {/* Grid for the 3 centered cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl mx-auto mt-8">
        {/* First card */}
        <div className="relative border border-gray-300 p-4 rounded-lg shadow-lg">
          <Link href="/step1">
            <div className="relative group">
              <img
                src="/redboots.png"
                alt="Step 1"
                className="w-full h-48 object-cover rounded-md"
              />
              {/* Translucent overlay */}
              <div className="absolute inset-0 bg-white opacity-30 rounded-md group-hover:opacity-50 transition-opacity"></div>
            </div>
          </Link>
          <h5 className="text-center text-lg font-bold mt-4 text-emerald-700">Step 1</h5>
          <p className="text-center text-gray-600">Prepare Your Soil or Pot: Start by ensuring your soil or potting mix is nutrient-rich and well-draining.</p>
        </div>

        {/* Second card */}
        <div className="relative border border-gray-300 p-4 rounded-lg shadow-lg">
          <Link href="/step2">
            <div className="relative group">
              <img
                src="/seedling.png"
                alt="Step 2"
                className="w-full h-48 object-cover rounded-md"
              />
              {/* Translucent overlay */}
              <div className="absolute inset-0 bg-white opacity-30 rounded-md group-hover:opacity-50 transition-opacity"></div>
            </div>
          </Link>
          <h5 className="text-center text-lg font-bold mt-4 text-emerald-700">Step 2</h5>
          <p className="text-center text-gray-600">Plant and Nurture: Choose plants that fit your space and climate, then plant them with care.</p>
        </div>

        {/* Third card */}
        <div className="relative border border-gray-300 p-4 rounded-lg shadow-lg">
          <Link href="/step3">
            <div className="relative group">
              <img
                src="/eggplant.png"
                alt="Step 3"
                className="w-full h-48 object-cover rounded-md"
              />
              {/* Translucent overlay */}
              <div className="absolute inset-0 bg-white opacity-30 rounded-md group-hover:opacity-50 transition-opacity"></div>
            </div>
          </Link>
          <h5 className="text-center text-lg font-bold mt-4 text-emerald-700">Step 3</h5>
          <p className="text-center text-gray-600">Water and Monitor: Regularly water your plants, provide them with ample sunlight, and check for signs of pests or diseases.</p>
        </div>
      </div>

      {/* Articles and Videos Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl mx-auto mt-12">
        {/* Articles Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center text-emerald-700">Related Articles</h3>
          <div className="space-y-4">
            <div className="border border-gray-300 p-4 rounded-lg shadow-lg">
              <Link href="https://www.chelseagreen.com/2018/seed-series-soil-health/?srsltid=AfmBOopg5bVXlWs71Adasvoiv6tq06ztgj_wFnbjSViY7v9shZ6x6vuo" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                <h4 className="font-bold text-black">3 Steps to Start Your Plants Off Right</h4>
              </Link>
              <p className="mt-2 text-gray-600">A guide on how to ensure your plants get off to a good start with 3 simple steps.</p>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg shadow-lg">
              <Link href="https://ediblecapecod.ediblecommunities.com/food-thought/plotting-and-planning-planting" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                <h4 className="font-bold text-black">The Plotting and Planning of Planting</h4>
              </Link>
              <p className="mt-2 text-gray-600">Insights into how to effectively plan your planting process.</p>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg shadow-lg">
              <Link href="https://www.chelseagreen.com/2018/seed-series-soil-health/?srsltid=AfmBOopg5bVXlWs71Adasvoiv6tq06ztgj_wFnbjSViY7v9shZ6x6vuo" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                <h4 className="font-bold text-black">3 Steps to Start Your Plants Off Right</h4>
              </Link>
              <p className="mt-2 text-gray-600">A guide on how to ensure your plants get off to a good start with 3 simple steps.</p>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg shadow-lg">
              <Link href="https://ediblecapecod.ediblecommunities.com/food-thought/plotting-and-planning-planting" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                <h4 className="font-bold text-black">The Plotting and Planning of Planting</h4>
              </Link>
              <p className="mt-2 text-gray-600">Insights into how to effectively plan your planting process.</p>
            </div>
            <div className="border border-gray-300 p-4 rounded-lg shadow-lg">
              <Link href="https://ediblecapecod.ediblecommunities.com/food-thought/plotting-and-planning-planting" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                <h4 className="font-bold text-black">The Plotting and Planning of Planting</h4>
              </Link>
              <p className="mt-2 text-gray-600">Insights into how to effectively plan your planting process.</p>
            </div>

          </div>
        </div>

        {/* Videos Section */}
        <div>
          <h3 className="text-xl font-semibold mb-4 text-center text-emerald-700">Videos</h3>
          <div className="space-y-4">
            {/* Video 1 */}
            <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/EBWpxGK7dXM?si=M2Ne0WeEp9Icj1qJ" // Replace with your video link
                title="Video 1"
                width="100%"
                height="315"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Video 2 */}
            <div className="border border-gray-300 rounded-lg shadow-lg overflow-hidden">
              <iframe
                src="https://www.youtube.com/embed/zLHpCZZD0vQ?si=XC6n2grdCjCVlh7Y" // Replace with your video link
                title="Video 2"
                width="100%"
                height="315"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Add more videos as needed */}
          </div>
        </div>
      </div>
      <br>
      </br>
      <br>
      </br>
      <br>
      </br>
    </div>

  );
}
