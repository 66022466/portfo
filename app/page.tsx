import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start w-full max-w-3xl">
        {/* Header */}
        <div className="flex flex-col items-center gap-4 sm:items-start">
          <Image
            src="/profile.jpg" // รูปภาพจะถูกใส่ในโฟลเดอร์ public
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-full border-4 border-gray-300"
          />
          <h1 className="text-3xl font-bold text-center sm:text-left">
            Jidapa Ruamsuk
          </h1>
          <p className="text-lg text-gray-600 text-center sm:text-left">
            Web Developer | Frontend Enthusiast | Problem Solver
          </p>
        </div>

        {/* About Section */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">About Me</h2>
          <p className="text-gray-700">
            Hi, I'm Jidapa, a passionate web developer with a love for creating
            beautiful and user-friendly web applications. With 2 years of
            experience in frontend development, I specialize in React and
            Next.js.
          </p>
        </section>

        {/* Skills Section */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Skills</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Frontend: HTML, CSS, JavaScript, React, Next.js</li>
            <li>Backend: Node.js, Express, MongoDB</li>
            <li>Tools: Git, Figma, Vercel</li>
          </ul>
        </section>

        {/* Experience Section */}
        <section className="flex flex-col gap-6">
          <h2 className="text-2xl font-semibold">Experience</h2>
          <ul className="list-none space-y-4">
            <li className="border-l-4 border-gray-300 pl-4">
              <h3 className="font-bold">Frontend Developer</h3>
              <p className="text-sm text-gray-600">ABC Company | 2022-2023</p>
              <p className="text-gray-700">
                Developed and maintained the company's e-commerce platform using
                React and Next.js.
              </p>
            </li>
            <li className="border-l-4 border-gray-300 pl-4">
              <h3 className="font-bold">Web Development Intern</h3>
              <p className="text-sm text-gray-600">XYZ Solutions | 2021</p>
              <p className="text-gray-700">
                Assisted in creating landing pages and optimized website
                performance.
              </p>
            </li>
          </ul>
        </section>
      </main>
    </div>
  );
}
