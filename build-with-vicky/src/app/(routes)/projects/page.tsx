
export default function ProjectsPage() {
  // This would typically come from an API or database
  const projects = [
    {
      id: 1,
      title: "Time Bridge AI",
      description: "TimeBridgeAI is an intelligent calendar management system that bridges the gap between AI language models and calendar applications. It enables AI assistants (currently using Google's Gemini) to understand, create, and manage calendar events through natural conversation.",
      technologies: ["React", "Node.js", "Gemini AI API"],
      difficulty: "Intermediate",
      githubUrl: "https://github.com/srinikhil0/TimeBridgeAI",
    },
    {
      id: 2,
      title: "You.Social",
      description: "An application that uses machine learning to identify objects in images.",
      technologies: ["Python", "TensorFlow", "Flask", "React"],
      difficulty: "Advanced",
      githubUrl: "https://github.com/yourusername/image-recognition-app",
    },
    {
      id: 3,
      title: "Smart Content Summarizer",
      description: "A tool that uses AI to generate concise summaries of articles and long-form content.",
      technologies: ["JavaScript", "Node.js", "Gemini API"],
      difficulty: "Beginner",
      githubUrl: "https://github.com/yourusername/content-summarizer",
    },
  ];

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Available Projects
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Choose a project that interests you and start contributing today. All skill levels welcome!
          </p>
        </div>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <div
              key={project.id}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden bg-white dark:bg-gray-800"
            >
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    {project.title}
                  </h3>
                  <p className="mt-3 text-base text-gray-500 dark:text-gray-400">
                    {project.description}
                  </p>
                  <div className="mt-4">
                    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200">
                      {project.difficulty}
                    </span>
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-md text-sm font-medium bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    View on GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-base text-gray-500 dark:text-gray-400">
            Don&apos;t see a project that interests you? Check back soon for more opportunities or{" "}
            <a
              href="https://github.com/srinikhil0"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              visit our GitHub
            </a>{" "}
            for all available projects.
          </p>
        </div>
      </div>
    </div>
  );
} 