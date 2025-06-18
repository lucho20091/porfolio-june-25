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
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Github, CodeXml } from "lucide-react";
import { data as data2 } from "../utils/data";
import { useState, useEffect, useRef } from "react";

export default function ProjectsTabs() {
  const [activeTab, setActiveTab] = useState("All");
  const tabsHeaderRef = useRef(null);
  const isFirstRender = useRef(1);
  const uniqueTech = [
    "All",
    ...new Set(data2.flatMap((item) => item.technologies)),
  ];
  let firstTime = 1;

  console.log(activeTab);

  function moveTabLeft() {
    const currentIndex = uniqueTech.indexOf(activeTab);
    const newIndex = currentIndex >= 1 ? currentIndex - 1 : 0;
    setActiveTab(uniqueTech[newIndex]);
  }

  function moveTabRight() {
    const currentIndex = uniqueTech.indexOf(activeTab);
    const newIndex =
      currentIndex >= uniqueTech.length ? currentIndex : currentIndex + 1;
    setActiveTab(uniqueTech[newIndex]);
  }

  const scrollActiveTabIntoView = () => {
    if (tabsHeaderRef.current) {
      const activeTabElement = tabsHeaderRef.current.querySelector(
        `[data-value="${activeTab}"]`
      );
      if (activeTabElement) {
        activeTabElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  };

  console.log("firstTime", isFirstRender);
  useEffect(() => {
    if (isFirstRender.current < 3) {
      isFirstRender.current++;
      return;
    }
    console.log("this ran");
    const timer = setTimeout(scrollActiveTabIntoView, 500);
    return () => clearTimeout(timer);
  }, [activeTab]);

  return (
    <Tabs key={activeTab} value={activeTab} className="w-full">
      <button
        onClick={moveTabLeft}
        className="absolute top-[-34px] md:top-[-36px] left-0 px-4 py-2"
      >
        <FaArrowLeft className="cursor-pointer animate-bounce text-2xl" />
      </button>
      <button
        onClick={moveTabRight}
        className="absolute top-[-34px] md:top-[-36px] right-0 px-4 py-2"
      >
        <FaArrowRight className="cursor-pointer  animate-bounce text-2xl" />
      </button>
      <TabsHeader
        ref={tabsHeaderRef}
        className="bg-transparent overflow-x-auto pb-2"
        indicatorProps={{
          className: "bg-gray-900/10 shadow-none !text-gray-900",
        }}
      >
        {uniqueTech.map((item) => (
          <Tab key={item} value={item} onClick={() => setActiveTab(item)}>
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
