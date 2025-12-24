export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-700 via-blue-700 to-slate-700">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-white">Jelle Mulder</div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-white hover:text-blue-300 transition-colors">About</a>
              <a href="#experience" className="text-white hover:text-blue-300 transition-colors">Experience</a>
              <a href="#skills" className="text-white hover:text-blue-300 transition-colors">Skills</a>
              <a href="#contact" className="text-white hover:text-blue-300 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 p-1">
                <div className="w-full h-full rounded-full bg-gray-800 flex items-center justify-center">
                  <img src="/ProfilePicture.jpeg" alt="Profile picture" className="w-full h-full object-cover rounded-full" />
                </div>
              </div>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Jelle Mulder
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8">
              Full Stack Developer & Software Engineer
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12">
              A social, ambitious Computer Science graduate from Utrecht University with a strong analytical mindset. 
              Currently pursuing a master's in Business Development and Entrepreneurship, combining technical expertise with business acumen.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-3 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105">
                View My Work
              </button>
              <a 
                href="/resume.pdf" 
                download="Jelle_Mulder_Resume.pdf"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all text-center inline-flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              I'm a dedicated developer with a passion for creating meaningful digital experiences
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">My Journey</h3>
              <p className="text-gray-300 mb-6">
                I'm a Computer Science graduate from Utrecht University with a passion for both technology and business. 
                My analytical skills help me solve complex problems, while I also value creative input from team members. 
                I have successfully completed minors in Economics and Business Economics alongside my technical studies.
              </p>
              <p className="text-gray-300 mb-8">
                Currently pursuing a master's in Business Development and Entrepreneurship, I combine technical expertise 
                in languages like C#, Python, JavaScript, React, and SQL with business understanding. I hold a Cambridge CAE 
                certificate and am fluent in English at a high level.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="bg-blue-600/20 text-blue-300 px-3 py-1 rounded-full text-sm">Analytical Thinker</span>
                <span className="bg-cyan-600/20 text-cyan-300 px-3 py-1 rounded-full text-sm">Team Player</span>
                <span className="bg-green-600/20 text-green-300 px-3 py-1 rounded-full text-sm">Business-Minded</span>
              </div>
            </div>
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h4 className="text-xl font-bold text-white mb-6">Quick Facts</h4>
              <div className="space-y-4">
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Based in Houten, Netherlands</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Born September 18, 2001</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">WO Bachelor Computer Science</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-cyan-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Cambridge CAE Certified</span>
                </div>
                <div className="flex items-center">
                  <span className="w-2 h-2 bg-blue-400 rounded-full mr-3"></span>
                  <span className="text-gray-300">Available for new opportunities</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Experience</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              My professional journey and key accomplishments
            </p>
          </div>
          <div className="space-y-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Analist Markt & Strategie and Software Developer</h3>
                <span className="text-blue-300 font-medium">Oct 2024 - Present</span>
              </div>
              <p className="text-gray-400 mb-4">John & Co • Netherlands</p>
              <p className="text-gray-300 mb-4">
                Development of internal applications and digital tooling. Building front-end with React and JavaScript, 
                working on back-end logic with PHP (Laravel) and PostgreSQL database. Integrated Twilio for 2FA SMS 
                authentication and worked on data analysis with Python in a Scrum team environment with DevOps practices.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-yellow-600/20 text-yellow-300 px-2 py-1 rounded text-xs">JavaScript</span>
                <span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">PHP Laravel</span>
                <span className="bg-green-600/20 text-green-300 px-2 py-1 rounded text-xs">PostgreSQL</span>
                <span className="bg-red-600/20 text-red-300 px-2 py-1 rounded text-xs">Python</span>
                <span className="bg-cyan-600/20 text-cyan-300 px-2 py-1 rounded text-xs">Twilio</span>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Software Developer (Bachelor Project)</h3>
                <span className="text-blue-300 font-medium">Feb 2024 - Jul 2024</span>
              </div>
              <p className="text-gray-400 mb-4">Utrecht University • Netherlands</p>
              <p className="text-gray-300 mb-4">
                20-week bachelor completion project working 20 hours per week. Served as Product Owner in a Scrum team, 
                developing a full-stack web application using React and TypeScript on the frontend, with FastAPI and SQL on the backend.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">React</span>
                <span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">TypeScript</span>
                <span className="bg-green-600/20 text-green-300 px-2 py-1 rounded text-xs">FastAPI</span>
                <span className="bg-blue-600/20 text-blue-300 px-2 py-1 rounded text-xs">SQL</span>
                <span className="bg-orange-600/20 text-orange-300 px-2 py-1 rounded text-xs">Scrum</span>
              </div>
            </div>

            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Various Part-time Jobs</h3>
                <span className="text-blue-300 font-medium">Mar 2018 - Aug 2024</span>
              </div>
              <p className="text-gray-400 mb-4">Various Companies • Netherlands</p>
              <p className="text-gray-300 mb-4">
                Gained work experience through various roles including stock clerk and delivery driver, 
                developing strong work ethic and customer service skills while studying.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-gray-600/20 text-gray-300 px-2 py-1 rounded text-xs">Customer Service</span>
                <span className="bg-gray-600/20 text-gray-300 px-2 py-1 rounded text-xs">Work Ethics</span>
                <span className="bg-gray-600/20 text-gray-300 px-2 py-1 rounded text-xs">Time Management</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A comprehensive toolkit for building modern web applications
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-4">Frontend</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">React/Next.js</span>
                  <div className="w-20 bg-gray-700 rounded-full h-2">
                    <div className="w-5/6 bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">JavaScript/TypeScript</span>
                  <div className="w-20 bg-gray-700 rounded-full h-2">
                    <div className="w-5/6 bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">HTML/CSS</span>
                  <div className="w-20 bg-gray-700 rounded-full h-2">
                    <div className="w-4/5 bg-gradient-to-r from-cyan-400 to-cyan-600 h-2 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-4">Backend</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Python/FastAPI</span>
                  <div className="w-20 bg-gray-700 rounded-full h-2">
                    <div className="w-4/5 bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">PHP/Laravel</span>
                  <div className="w-20 bg-gray-700 rounded-full h-2">
                    <div className="w-4/5 bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">SQL/PostgreSQL</span>
                  <div className="w-20 bg-gray-700 rounded-full h-2">
                    <div className="w-5/6 bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-blue-500/50 transition-all">
              <h3 className="text-xl font-bold text-white mb-4">Languages & Tools</h3>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">C#</span>
                  <div className="w-20 bg-gray-700 rounded-full h-2">
                    <div className="w-4/5 bg-gradient-to-r from-blue-400 to-blue-600 h-2 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Haskell</span>
                  <div className="w-20 bg-gray-700 rounded-full h-2">
                    <div className="w-3/5 bg-gradient-to-r from-green-400 to-green-600 h-2 rounded-full"></div>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-300">Scrum/DevOps</span>
                  <div className="w-20 bg-gray-700 rounded-full h-2">
                    <div className="w-4/5 bg-gradient-to-r from-orange-400 to-orange-600 h-2 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-black/20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Let's Work Together</h2>
          <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
            I'm always interested in new opportunities and exciting projects. 
            Let's connect and discuss how we can bring your ideas to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <a 
              href="mailto:jellemulder2001@hotmail.com" 
              className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-8 py-4 rounded-lg font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all transform hover:scale-105 inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              Email Me
            </a>
            <a 
              href="https://www.linkedin.com/in/jelle-mulder-7458a6232/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.338 16.338H13.67V12.16c0-.995-.017-2.277-1.387-2.277-1.39 0-1.601 1.086-1.601 2.207v4.248H8.014v-8.59h2.559v1.174h.037c.356-.675 1.227-1.387 2.526-1.387 2.703 0 3.203 1.778 3.203 4.092v4.711zM5.005 6.575a1.548 1.548 0 11-.003-3.096 1.548 1.548 0 01.003 3.096zm-1.337 9.763H6.34v-8.59H3.667v8.59zM17.668 1H2.328C1.595 1 1 1.581 1 2.298v15.403C1 18.418 1.595 19 2.328 19h15.34c.734 0 1.332-.582 1.332-1.299V2.298C19 1.581 18.402 1 17.668 1z" clipRule="evenodd" />
              </svg>
              LinkedIn
            </a>
            <a 
              href="https://github.com/jellemulder" 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-white/30 text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-all inline-flex items-center justify-center"
            >
              <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">© 2025 Jelle Mulder. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
