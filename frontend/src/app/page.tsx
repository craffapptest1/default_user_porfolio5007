import Link from "next/link";
import Image from "next/image";
import { FiCode, FiLayout, FiMonitor, FiStar } from "react-icons/fi";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="w-full py-12 md:py-24 text-center relative">
        <div className="absolute inset-0 z-0 opacity-50">
          <Image 
            src="https://images.unsplash.com/photo-1491336477066-31156b5e4f35?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDgxMDAzMjJ8&ixlib=rb-4.1.0&q=80&w=1080" 
            alt="Portfolio hero image" 
            fill 
            className="object-cover" 
            priority 
          />
          <div className="absolute inset-0 bg-black bg-opacity-40"></div>
        </div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Portfolio<span className="text-indigo-400">5007</span>
              </h1>
              <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
                Creative developer crafting beautiful digital experiences
              </p>
            </div>
            <div className="space-x-4 pt-4">
              <Link
                href="#projects"
                className="inline-flex h-10 items-center justify-center rounded-md bg-indigo-600 px-8 text-sm font-medium text-white shadow transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
              >
                View My Work
              </Link>
              <Link
                href="#contact"
                className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white bg-opacity-20 backdrop-blur-sm px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
              >
                Contact Me
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="relative h-80 md:h-96 rounded-lg overflow-hidden">
              <Image 
                src="https://images.unsplash.com/photo-1507537231947-f2ff14bc1554?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDgxMDAzMjN8&ixlib=rb-4.1.0&q=80&w=1080" 
                alt="Portrait photo" 
                fill
                className="object-cover"
              />
            </div>
            <div className="space-y-4">
              <h2 className="text-3xl font-bold tracking-tighter">About Me</h2>
              <p className="text-gray-500 md:text-lg">
                Hello! I'm a passionate web developer focused on creating clean, user-friendly websites and applications. With expertise in modern frameworks and responsive design, I build digital solutions that help businesses succeed online.
              </p>
              <p className="text-gray-500 md:text-lg">
                When I'm not coding, you can find me exploring new technologies and contributing to open-source projects. I believe in continuous learning and staying updated with the latest industry trends.
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">HTML/CSS</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">JavaScript</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Next.js</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">UI/UX Design</span>
                <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Responsive Design</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">My Services</h2>
            <p className="max-w-[85%] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Specialized services to bring your digital vision to life
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 md:grid-cols-3">
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="p-3 rounded-full bg-indigo-100">
                <FiLayout className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold">Web Design</h3>
              <p className="text-sm text-gray-500 text-center">
                Creative and responsive designs that capture your brand's essence and engage your audience
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="p-3 rounded-full bg-indigo-100">
                <FiCode className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold">Web Development</h3>
              <p className="text-sm text-gray-500 text-center">
                Custom, high-performance websites and applications built with modern technologies
              </p>
            </div>
            <div className="flex flex-col items-center space-y-2 rounded-lg border p-6 shadow-sm">
              <div className="p-3 rounded-full bg-indigo-100">
                <FiMonitor className="h-6 w-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-bold">UI/UX Design</h3>
              <p className="text-sm text-gray-500 text-center">
                Intuitive user experiences and interfaces that enhance usability and satisfaction
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Featured Projects</h2>
            <p className="max-w-[85%] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              A selection of my recent work
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1608778185867-32c01de44c52?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDgxMDAzMjV8&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Project 1" 
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">E-commerce Website</h3>
                <p className="mt-2 text-sm text-gray-500">
                  A modern online shopping experience with responsive design and secure payment integration.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded">React</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded">Node.js</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded">MongoDB</span>
                </div>
                <Link 
                  href="#" 
                  className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
                >
                  View Details
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Project 2 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1542744095-fcf48d80b0fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDgxMDAzMjZ8&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Project 2" 
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Portfolio Website</h3>
                <p className="mt-2 text-sm text-gray-500">
                  A custom portfolio site with animations and interactive elements to showcase creative work.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded">Next.js</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded">Tailwind CSS</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded">Framer Motion</span>
                </div>
                <Link 
                  href="#" 
                  className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
                >
                  View Details
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Project 3 */}
            <div className="group relative overflow-hidden rounded-lg shadow-md transition-all hover:shadow-xl">
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src="https://images.unsplash.com/photo-1527195575508-5b138d14a35b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDgxMDAzMjd8&ixlib=rb-4.1.0&q=80&w=1080" 
                  alt="Project 3" 
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl font-bold">Mobile App UI</h3>
                <p className="mt-2 text-sm text-gray-500">
                  A sleek, intuitive mobile application interface for a fitness tracking platform.
                </p>
                <div className="mt-4 flex gap-2">
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded">Figma</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded">React Native</span>
                  <span className="text-xs px-2 py-1 bg-gray-100 rounded">UI/UX</span>
                </div>
                <Link 
                  href="#" 
                  className="mt-4 inline-flex items-center text-sm font-medium text-indigo-600 hover:text-indigo-800"
                >
                  View Details
                  <svg className="ml-1 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-4 text-center">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-gray-200 bg-white px-8 text-sm font-medium shadow-sm transition-colors hover:bg-gray-100 hover:text-gray-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-12 md:py-24 bg-gray-50">
        <div className="container px-4 md:px-6">
          <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Client Testimonials</h2>
            <p className="max-w-[85%] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              What clients are saying about my work
            </p>
          </div>
          <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 py-12 md:grid-cols-2 lg:grid-cols-3">
            {/* Testimonial 1 */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-500 italic mb-4">
                "Working with this developer was a fantastic experience. They delivered exactly what we needed and were very responsive throughout the project. Highly recommended!"
              </p>
              <div className="flex items-center space-x-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDgxMDAzMjl8&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="Client 1" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Sarah Johnson</h4>
                  <p className="text-sm text-gray-500">Marketing Director</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 2 */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-500 italic mb-4">
                "The website design exceeded our expectations. Clean code, fast performance, and excellent communication throughout the process. We'll definitely work together again."
              </p>
              <div className="flex items-center space-x-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1637684114022-9d31419ebe25?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDgxMDAzMzB8&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="Client 2" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">David Chen</h4>
                  <p className="text-sm text-gray-500">Startup Founder</p>
                </div>
              </div>
            </div>
            
            {/* Testimonial 3 */}
            <div className="rounded-lg border bg-white p-6 shadow-sm">
              <div className="flex items-center space-x-2 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <FiStar key={star} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-500 italic mb-4">
                "An absolute pleasure to work with. They took our vague concept and transformed it into a beautiful, functional website that perfectly represents our brand."
              </p>
              <div className="flex items-center space-x-3">
                <div className="relative h-10 w-10 rounded-full overflow-hidden">
                  <Image 
                    src="https://images.unsplash.com/photo-1568149537268-2790e1d5c4c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3MzAxMzF8MHwxfHJhbmRvbXx8fHx8fHx8fDE3NDgxMDAzMzJ8&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="Client 3" 
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-medium">Emily Rodriguez</h4>
                  <p className="text-sm text-gray-500">Creative Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section id="contact" className="w-full py-12 md:py-24 bg-indigo-600 text-white">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-[58rem] flex flex-col items-center justify-center space-y-4 text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
              Let's Work Together
            </h2>
            <p className="max-w-[85%] text-indigo-100 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Ready to start your next project? Get in touch and let's create something amazing.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row pt-4">
              <Link
                href="mailto:contact@portfolio5007.com"
                className="inline-flex h-10 items-center justify-center rounded-md bg-white px-8 text-sm font-medium text-indigo-600 shadow transition-colors hover:bg-indigo-50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
              >
                Email Me
              </Link>
              <Link
                href="#"
                className="inline-flex h-10 items-center justify-center rounded-md border border-indigo-200 px-8 text-sm font-medium text-white shadow-sm transition-colors hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-indigo-500"
              >
                View Resume
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}