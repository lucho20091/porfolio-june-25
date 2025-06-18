import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
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
import { FaArrowRight } from "react-icons/fa";
import { Github, CodeXml } from "lucide-react";
import { data as data2 } from "../utils/data";

export default function ProjectsTabs() {
  const uniqueTech = [
    "All",
    ...new Set(data2.flatMap((item) => item.technologies)),
  ];

  return (
    <Tabs value="Next" className="w-full">
      <TabsHeader
        className="bg-transparent overflow-x-auto pb-2"
        indicatorProps={{
          className: "bg-gray-900/10 shadow-none !text-gray-900",
        }}
      >
        {uniqueTech.map((item) => (
          <Tab key={item} value={item}>
            {item}
          </Tab>
        ))}
      </TabsHeader>
      <TabsBody>
        {uniqueTech.map((tech) => (
          <TabPanel key={tech} value={tech} className="w-full">
            <Table className="w-full">
              <TableHeader>
                <TableRow>
                  <TableHead>Project Name</TableHead>
                  <TableHead className="text-center">GitHub</TableHead>
                  <TableHead className="text-center">Website</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {data2
                  .filter((project) =>
                    tech === "All"
                      ? project.stars
                      : project.technologies.includes(tech) && project.stars
                  )
                  .map((projectMap) => (
                    <TableRow key={projectMap.id}>
                      <TableCell className="font-medium">
                        {projectMap.projectName}
                      </TableCell>
                      <TableCell className="text-center">
                        <a
                          href={projectMap.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Github
                            className="mx-auto hover:text-blue-600 transition-colors"
                            size={20}
                          />
                        </a>
                      </TableCell>
                      <TableCell className="text-center">
                        {projectMap.website && (
                          <a
                            href={projectMap.website}
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <CodeXml
                              className="mx-auto hover:text-green-600 transition-colors"
                              size={20}
                            />
                          </a>
                        )}
                      </TableCell>
                    </TableRow>
                  ))}
              </TableBody>
            </Table>
          </TabPanel>
        ))}
      </TabsBody>
    </Tabs>
  );
}
