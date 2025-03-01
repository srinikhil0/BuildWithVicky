export default function ContributorsPage() {
  // This would typically come from an API or database
  const contributors = [
    {
      id: 1,
      name: "Jane Doe",
      role: "Frontend Developer",
      contributions: ["AI Chat Assistant", "Smart Content Summarizer"],
      github: "https://github.com/janedoe",
      contributionCount: 15,
    },
    {
      id: 2,
      name: "John Smith",
      role: "Backend Developer",
      contributions: ["Image Recognition App"],
      github: "https://github.com/johnsmith",
      contributionCount: 8,
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "UI/UX Designer",
      contributions: ["AI Chat Assistant"],
      github: "https://github.com/emilyjohnson",
      contributionCount: 6,
    },
    {
      id: 4,
      name: "Michael Brown",
      role: "Machine Learning Engineer",
      contributions: ["Image Recognition App", "Smart Content Summarizer"],
      github: "https://github.com/michaelbrown",
      contributionCount: 12,
    },
    // Adding more contributors to demonstrate scalability
    {
      id: 5,
      name: "Sarah Wilson",
      role: "Data Scientist",
      contributions: ["Smart Content Summarizer"],
      github: "https://github.com/sarahwilson",
      contributionCount: 5,
    },
    {
      id: 6,
      name: "David Lee",
      role: "Full Stack Developer",
      contributions: ["AI Chat Assistant", "Image Recognition App"],
      github: "https://github.com/davidlee",
      contributionCount: 10,
    },
    {
      id: 7,
      name: "Lisa Chen",
      role: "Frontend Developer",
      contributions: ["AI Chat Assistant"],
      github: "https://github.com/lisachen",
      contributionCount: 7,
    },
    {
      id: 8,
      name: "Robert Taylor",
      role: "DevOps Engineer",
      contributions: ["Image Recognition App"],
      github: "https://github.com/roberttaylor",
      contributionCount: 9,
    },
  ];

  // Group contributors by project
  const projectContributors = {
    "AI Chat Assistant": contributors.filter(c => 
      c.contributions.includes("AI Chat Assistant")
    ),
    "Image Recognition App": contributors.filter(c => 
      c.contributions.includes("Image Recognition App")
    ),
    "Smart Content Summarizer": contributors.filter(c => 
      c.contributions.includes("Smart Content Summarizer")
    ),
  };

  // Sort contributors by contribution count (most active first)
  const topContributors = [...contributors].sort((a, b) => 
    b.contributionCount - a.contributionCount
  ).slice(0, 5);

  return (
    <div className="bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:py-24 lg:px-8">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
            Our Contributors
          </h1>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 dark:text-gray-400 lg:mx-auto">
            Meet the talented individuals who have contributed to our projects. Join them by contributing today!
          </p>
        </div>

        {/* Top Contributors Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Top Contributors
          </h2>
          <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
            <ul className="divide-y divide-gray-200 dark:divide-gray-700">
              {topContributors.map((contributor) => (
                <li key={contributor.id}>
                  <div className="px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-bold">
                          {contributor.name.charAt(0)}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-indigo-600 dark:text-indigo-400">
                            {contributor.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">
                            {contributor.role}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          {contributor.contributionCount} contributions
                        </span>
                        <a
                          href={contributor.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="ml-4 text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                        >
                          GitHub Profile
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contributors by Project Section */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
            Contributors by Project
          </h2>
          
          <div className="space-y-12">
            {Object.entries(projectContributors).map(([project, projectContribs]) => (
              <div key={project}>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {project}
                </h3>
                <div className="bg-white dark:bg-gray-800 shadow overflow-hidden sm:rounded-md">
                  <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    {projectContribs.map((contributor) => (
                      <li key={`${project}-${contributor.id}`}>
                        <div className="px-4 py-3 sm:px-6 flex items-center justify-between">
                          <div>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">
                              {contributor.name}
                            </span>
                            <span className="ml-2 text-xs text-gray-500 dark:text-gray-400">
                              {contributor.role}
                            </span>
                          </div>
                          <a
                            href={contributor.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                          >
                            GitHub
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Search and Filter Section (for future implementation) */}
        <div className="mt-16 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Find More Contributors
          </h2>
          <p className="text-gray-500 dark:text-gray-400 mb-4">
            With hundreds of contributors, we&apos;ve organized them by project above. In the future, you&apos;ll be able to search and filter to find specific contributors.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1 opacity-50 cursor-not-allowed">
              <div className="relative rounded-md shadow-sm">
                <input
                  type="text"
                  disabled
                  className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-4 pr-12 sm:text-sm border-gray-300 rounded-md"
                  placeholder="Search contributors (coming soon)"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <svg className="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            </div>
            <div className="opacity-50 cursor-not-allowed">
              <select
                disabled
                className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
              >
                <option>Filter by project (coming soon)</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-extrabold text-gray-900 dark:text-white">
            Want to Join Our Contributors?
          </h2>
          <p className="mt-4 max-w-2xl text-lg text-gray-500 dark:text-gray-400 mx-auto">
            It&apos;s easy to get started! Choose a project, fork the repository, and start contributing. Your work will be recognized here.
          </p>
          <div className="mt-6">
            <a
              href="/projects"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Browse Projects
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 