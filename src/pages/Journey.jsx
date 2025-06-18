import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { data } from "@/utils/data";
import { Github, CodeXml } from "lucide-react";
export default function Journey() {
  return (
    <div className="p-4 md:p-8 mx-auto max-w-screen-lg">
      <h1 className="text-2xl md:text-4xl font-bold">
        My Web Development Journey
      </h1>
      <div className="text-xl flex flex-col gap-4 md:gap-8 mt-0 md:mt-8">
        <div className="HTML and CSS">
          <h2 className="text-xl md:text-2xl mt-2 md:mt-0 font-semibold">
            Getting Started with HTML & CSS
          </h2>
          I began with the basics on{" "}
          <a
            className="underline text-blue-900"
            href="https://www.w3schools.com/"
          >
            W3schools
          </a>
          ,{" "}
          <a
            className="underline text-blue-900"
            href="https://developer.mozilla.org/en-US/"
          >
            MDN Web Docs
          </a>{" "}
          and{" "}
          <a
            className="underline text-blue-900"
            href="https://replit.com/learn"
          >
            Replit
          </a>{" "}
          before joining an online community to take a more serious approach to{" "}
          <span className="double-underline animate-bounce inline-block font-bold">
            web development.
          </span>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Github</TableHead>
                <TableHead>Website</TableHead>
                <TableHead className="hidden md:flex justify-start items-center	">
                  Technologies
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data.slice(0, 2).map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.projectName}</TableCell>
                  <TableCell className="">
                    <a href={item.github} target="_blank">
                      <Github className="mx-auto md:ml-2" />
                    </a>
                  </TableCell>
                  <TableCell className="">
                    <a href={item.website} target="_blank">
                      {item.website && <CodeXml className="mx-auto md:ml-2" />}
                    </a>
                  </TableCell>
                  <TableCell className="items-center space-x-4 hidden md:flex">
                    {item.technologies.map((tech) => (
                      <div>
                        <span>{tech}</span>
                      </div>
                    ))}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        <div className="HTML, CSS and JS">
          <h2 className="text-xl md:text-2xl mt-2 md:mt-0 font-semibold">
            JavaScript: Learning to Think Like a Computer
          </h2>
          JavaScript taught me to break down problems step by step. The initial
          learning curve felt manageable, variables, if-else statements, loops,
          and functions made me feel unstoppable. Then came the real work:
          mastering arrays, objects, DOM manipulation, and ES6. While ES6 made
          code cleaner and more readable, it introduced new concepts I needed to
          grasp before diving into frameworks.
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Github</TableHead>
                <TableHead>Website</TableHead>
                <TableHead className="hidden md:flex justify-start items-center	">
                  Technologies
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data
                .filter(
                  (item) =>
                    item.technologies.length === 3 &&
                    item.technologies.includes("HTML") &&
                    item.technologies.includes("CSS") &&
                    item.technologies.includes("JS")
                )
                .map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.projectName}</TableCell>
                    <TableCell className="">
                      <a href={item.github} target="_blank">
                        <Github className="mx-auto md:ml-2" />
                      </a>
                    </TableCell>
                    <TableCell className="">
                      <a href={item.website} target="_blank">
                        {item.website && (
                          <CodeXml className="mx-auto md:ml-2" />
                        )}
                      </a>
                    </TableCell>
                    <TableCell className="items-center space-x-4 hidden md:flex">
                      {item.technologies.map((tech) => (
                        <div>
                          <span>{tech}</span>
                        </div>
                      ))}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
        <div className="Firebase">
          <h2 className="text-xl md:text-2xl mt-2 md:mt-0 font-semibold">
            Firebase: Simple and Powerful
          </h2>
          Firebase feels magical, easy to use with excellent documentation. It's
          perfect for small projects, especially since it's free to start.
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Github</TableHead>
                <TableHead>Website</TableHead>
                <TableHead className="hidden md:flex justify-start items-center	">
                  Technologies
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data
                .filter((item) => item.technologies.includes("Firebase"))
                .map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.projectName}</TableCell>
                    <TableCell className="">
                      <a href={item.github} target="_blank">
                        <Github className="mx-auto md:ml-2" />
                      </a>
                    </TableCell>
                    <TableCell className="">
                      <a href={item.website} target="_blank">
                        {item.website && (
                          <CodeXml className="mx-auto md:ml-2" />
                        )}
                      </a>
                    </TableCell>
                    <TableCell className="items-center space-x-4 hidden md:flex">
                      {item.technologies.map((tech) => (
                        <div>
                          <span>{tech}</span>
                        </div>
                      ))}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
        <div className="Responsive Design">
          <h2 className="text-xl md:text-2xl mt-2 md:mt-0 font-semibold">
            Responsive Design: The Mobile-First Revelation
          </h2>
          I initially struggled with media queries and responsive design
          principles. The mobile-first approach didn't click until I started
          using Tailwind CSS, which naturally enforces this methodology.
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Github</TableHead>
                <TableHead>Website</TableHead>
                <TableHead className="hidden md:flex justify-start items-center	">
                  Technologies
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data
                .filter(
                  (item) =>
                    item.responsive &&
                    !item.technologies.includes("Next") &&
                    !item.technologies.includes("React")
                )
                .map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.projectName}</TableCell>
                    <TableCell className="">
                      <a href={item.github} target="_blank">
                        <Github className="mx-auto md:ml-2" />
                      </a>
                    </TableCell>
                    <TableCell className="">
                      <a href={item.website} target="_blank">
                        {item.website && (
                          <CodeXml className="mx-auto md:ml-2" />
                        )}
                      </a>
                    </TableCell>
                    <TableCell className="items-center space-x-4 hidden md:flex">
                      {item.technologies.map((tech) => (
                        <div>
                          <span>{tech}</span>
                        </div>
                      ))}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
        <div className="React">
          <h2 className="text-xl md:text-2xl mt-2 md:mt-0 font-semibold">
            React: From Imperative to Declarative
          </h2>
          Starting with React confused me, I couldn't distinguish between React
          features and ES6 syntax. Strengthening my ES6 knowledge made React
          much clearer. What I love about React is how it simplifies dynamic
          rendering and shifts your thinking from imperative to declarative
          programming.
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Github</TableHead>
                <TableHead>Website</TableHead>
                <TableHead className="hidden md:flex justify-start items-center	">
                  Technologies
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data
                .filter(
                  (item) =>
                    item.technologies.includes("React") &&
                    !item.technologies.includes("Express")
                )
                .map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.projectName}</TableCell>
                    <TableCell className="">
                      <a href={item.github} target="_blank">
                        <Github className="mx-auto md:ml-2" />
                      </a>
                    </TableCell>
                    <TableCell className="">
                      <a href={item.website} target="_blank">
                        {item.website && (
                          <CodeXml className="mx-auto md:ml-2" />
                        )}
                      </a>
                    </TableCell>
                    <TableCell className="items-center space-x-4 hidden md:flex">
                      {item.technologies.map((tech) => (
                        <div>
                          <span>{tech}</span>
                        </div>
                      ))}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
        <div className="backend - Express">
          <h2 className="text-xl md:text-2xl mt-2 md:mt-0 font-semibold">
            Backend with Express: The MVC Principle
          </h2>
          Following a GitHub backend course introduced me to the MVC principle,
          which became my organizing framework:
          <ul className="list-disc list-inside ml-4">
            <li>
              <strong>Model</strong> Database schemas
            </li>
            <li>
              <strong>View</strong> Content rendered to users
            </li>
            <li>
              <strong>Controller</strong> Application functionality
            </li>
          </ul>
          This structure, combined with organized route folders, makes backend
          development clean and intuitive. For deployment, I experimented with
          Cloudflare proxies (which solved CORS issues), free server credits,
          and tunneling through my PC with a custom domain, it worked well. I'm
          considering dedicating a computer solely to running backend
          applications.
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Github</TableHead>
                <TableHead>Website</TableHead>
                <TableHead className="hidden md:flex justify-start items-center	">
                  Technologies
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data
                .filter((item) => item.technologies.includes("Express"))
                .map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.projectName}</TableCell>
                    <TableCell className="">
                      <a href={item.github} target="_blank">
                        <Github className="mx-auto md:ml-2" />
                      </a>
                    </TableCell>
                    <TableCell className="">
                      <a href={item.website} target="_blank">
                        {item.website && (
                          <CodeXml className="mx-auto md:ml-2" />
                        )}
                      </a>
                    </TableCell>
                    <TableCell className="items-center space-x-4 hidden md:flex">
                      {item.technologies.map((tech) => (
                        <div>
                          <span>{tech}</span>
                        </div>
                      ))}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
        <div className="Next">
          <h2 className="text-xl md:text-2xl mt-2 md:mt-0 font-semibold">
            Next.js: Server Side Rendering
          </h2>
          The biggest hurdle with full-stack apps was finding affordable server
          hosting for backend code. Next.js solved this perfectly by enabling
          free deployment on Vercel, eliminating the need for separate backend
          hosting.
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Github</TableHead>
                <TableHead>Website</TableHead>
                <TableHead className="hidden md:flex justify-start items-center	">
                  Technologies
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data
                .filter((item) => item.technologies.includes("Next"))
                .map((item) => (
                  <TableRow key={item.id}>
                    <TableCell>{item.projectName}</TableCell>
                    <TableCell className="">
                      <a href={item.github} target="_blank">
                        <Github className="mx-auto md:ml-2" />
                      </a>
                    </TableCell>
                    <TableCell className="">
                      <a href={item.website} target="_blank">
                        {item.website && (
                          <CodeXml className="mx-auto md:ml-2" />
                        )}
                      </a>
                    </TableCell>
                    <TableCell className="items-center space-x-4 hidden md:flex">
                      {item.technologies.map((tech) => (
                        <div>
                          <span>{tech}</span>
                        </div>
                      ))}
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </div>
        <div className="This">
          <h2 className="text-xl md:text-2xl mt-2 md:mt-0 font-semibold">
            This Project
          </h2>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Github</TableHead>
                <TableHead>Website</TableHead>
                <TableHead className="hidden md:flex justify-start items-center	">
                  Technologies
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell>Portfolio</TableCell>
                <TableCell className="">
                  <a
                    href="https://github.com/lucho20091/porfolio-june-25"
                    target="_blank"
                  >
                    <Github className="mx-auto md:ml-2" />
                  </a>
                </TableCell>
                <TableCell className="">
                  <a href="" target="_blank">
                    <CodeXml className="mx-auto md:ml-2" />
                  </a>
                </TableCell>
                <TableCell className="items-center space-x-4 hidden md:flex">
                  <span>React</span>
                  <span>Tailwind</span>
                  <span>Shadcn</span>
                  <span>Material Tailwind</span>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
