import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center min-h-screen px-6 py-12 space-y-16 bg-gray-50 sm:px-12">
      {/* Section: Introduction */}
      <section className="text-center">
        <div className="flex flex-col items-center space-y-4">
          {/* Profile Picture */}
          <div className="w-36 h-36 bg-gray-200 rounded-full flex items-center justify-center">
            <Image
              className="rounded-full"
              src="/profile-picture.jpg" // เปลี่ยนเป็นรูปโปรไฟล์ของคุณ
              alt="Profile Picture"
              width={150}
              height={150}
            />
          </div>
          <h1 className="text-4xl font-bold text-gray-800">Portfolio</h1>
          <p className="mt-4 text-lg text-gray-600">Name | Jidapa Ruamsuk</p>
          <p className="mt-4 text-lg text-gray-600">Age: 20 | Student ID: 66022466</p>
          <p className="mt-4 text-lg text-gray-600">Contact | tel.088 55X 748X</p>
        </div>
      </section>

      {/* Section: Skills */}
      <section className="w-full max-w-3xl space-y-6 text-center">
        <h2 className="text-2xl font-semibold text-gray-800">About Me</h2>
        <p className="text-gray-700">
          I am a passionate software engineering student with experience in HTML, Java, Vercel, database management, Scrum, and diagramming. I have developed strong skills in programming technologies and collaboration.
        </p>
        <div className="mt-4 text-left">
          <h3 className="text-xl font-semibold text-gray-800">Skills</h3>
          <ul className="mt-4 space-y-2 list-disc list-inside text-gray-700">
            <li>
              <strong>HTML:</strong> Proficient in creating websites with HTML, CSS, and JavaScript.
            </li>
            <li>
              <strong>Java:</strong> Experience in object-oriented programming and Java applications.
            </li>
            <li>
              <strong>Vercel:</strong> Deployed web applications using Vercel for production environments.
            </li>
            <li>
              <strong>Database Management:</strong> Experience in designing and managing relational databases.
            </li>
            <li>
              <strong>Scrum:</strong> Familiar with Scrum methodologies for Agile project management.
            </li>
            <li>
              <strong>Diagramming:</strong> Skilled in creating diagrams for system design and architecture.
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
