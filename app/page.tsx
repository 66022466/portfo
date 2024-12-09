import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-12 space-y-16 bg-gray-50 sm:px-12">
      {/* Section: Introduction */}
      <section className="text-center">
        <h1 className="text-4xl font-bold text-gray-800">Portfolio</h1>
        <p className="mt-4 text-lg text-gray-600">Name | </p>
        <p className="mt-4 text-lg text-gray-600">Age: 20 | Student ID: </p>
        <p className="mt-4 text-lg text-gray-600">contact | tel.</p>
      </section>

      {/* Section: Skills */}
      <section className="w-full max-w-3xl space-y-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
        <p className="text-gray-700">
          I am a passionate software engineering student with experience in data collection, analysis, test case development, 
          and Scrum teamwork. I have a solid foundation in various programming technologies and tools.
        </p>
        <div className="mt-4 text-left">
          <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
            <li>
              <strong>Data Collection & Analysis:</strong> Experience in gathering, processing, and analyzing data to derive insights and support decision-making.
            </li>
            <li>
              <strong>Test Case Development:</strong> Developed structured test cases to validate software functionality and performance.
            </li>
            <li>
              <strong>Scrum Teamwork:</strong> Worked collaboratively in Agile Scrum teams to deliver high-quality software solutions.
            </li>
            <li>
              <strong>Programming Skills:</strong> Proficiency in HTML, CSS, JavaScript, Python, and Git for version control and collaboration.
            </li>
          </ul>
        </div>
      </section>

      {/* Section: Projects */}
      <section className="w-full max-w-4xl">
        <h2 className="mb-8 text-2xl font-semibold text-center text-gray-800">My Projects</h2>
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Project 1 */}
          <div className="flex flex-col items-center p-6 space-y-4 border rounded-lg shadow bg-white">
            <Image
              className="rounded-md"
              src="/project1.png"
              alt="appTamroi - Selling Plants"
              width={300}
              height={200}
            />
            <h3 className="text-xl font-semibold text-gray-800">appTamroi - Selling Plants</h3>
            <p className="text-sm text-gray-600">
              An application designed to sell plants, providing a seamless interface for browsing and purchasing products.
            </p>
          </div>

          {/* Project 2 */}
          <div className="flex flex-col items-center p-6 space-y-4 border rounded-lg shadow bg-white">
            <Image
              className="rounded-md"
              src="/project2.png"
              alt="appTamroi - Food Recommendation"
              width={300}
              height={200}
            />
            <h3 className="text-xl font-semibold text-gray-800">appTamroi - Food Recommendation</h3>
            <p className="text-sm text-gray-600">
              An application to recommend food dishes based on user preferences and past choices.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}