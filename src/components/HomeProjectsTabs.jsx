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
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { Github, CodeXml } from "lucide-react";
import { data as data2 } from "../utils/data";
import { useState, useEffect, useRef } from "react";

export default function ProjectsTabs() {
  const [activeTab, setActiveTab] = useState("Recent");
  const [active, setActive] = useState(0);
  const tabsHeaderRef = useRef(null);
  const isFirstRender = useRef(1);
  const uniqueTech = [
    "Recent",
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
      currentIndex < uniqueTech.length - 1 ? currentIndex + 1 : currentIndex;
    setActiveTab(uniqueTech[newIndex]);
  }

  console.log("unique tech length", uniqueTech.length);
  console.log(uniqueTech);
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

  const recentProjects = data2.filter((item) => item.stars >= 4);

  useEffect(() => {
    if (isFirstRender.current < 3) {
      isFirstRender.current++;
      return;
    }
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
            {activeTab === "Recent" && (
              <div className="grid gap-4 my-4 pb-4">
                <div className="relative group">
                  <img
                    className="h-64 md:h-96 w-full max-w-full rounded-lg object-cover object-top object-center md:h-[480px]"
                    src={`${recentProjects[active].projectName}.jpg`}
                    alt=""
                  />
                  <a
                    className="absolute top-0 bottom-0 left-0 right-0 bg-black/50 group-hover:bg-black/0 transition-all duration-300"
                    href={
                      recentProjects[active].website
                        ? recentProjects[active].website
                        : recentProjects[active].github
                    }
                    target="_blank"
                  ></a>
                  <div className="absolute bottom-2 left-1 md:bottom-4 flex md:left-4 gap-4">
                    <span className="text-md md:text-2xl font-bold bg-white px-2 py-1 md:px-4 md:py-2 select-none rounded-2xl flex gap-4 items-center shadow-2xl">
                      {
                        recentProjects[active].projectName
                          .replace(/⭐/g, "")
                          .split(" - ")[0]
                      }
                      <a
                        href={recentProjects[active].github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="mx-auto hover:text-blue-600 transition-colors" />
                      </a>
                      {recentProjects[active].website && (
                        <a
                          href={recentProjects[active].website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <CodeXml className="mx-auto hover:text-green-600 transition-colors" />
                        </a>
                      )}
                    </span>
                  </div>
                </div>
              </div>
            )}
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
                    tech === "Recent"
                      ? project.stars >= 4
                      : project.technologies.includes(tech)
                  )
                  .map((projectMap, index) => (
                    <TableRow key={projectMap.id}>
                      <TableCell className="font-medium">
                        <Dialog>
                          <DialogTrigger
                            className="text-left"
                            {...(activeTab === "Recent" && {
                              onClick: () => setActive(index),
                            })}
                          >
                            {
                              projectMap.projectName
                                .replace(/⭐/g, "")
                                .split(" - ")[0]
                            }
                          </DialogTrigger>
                          <DialogContent className="w-[90%]">
                            <DialogHeader>
                              <DialogTitle className="text-left md:text-center">
                                {
                                  projectMap.projectName
                                    .replace(/⭐/g, "")
                                    .split(" - ")[0]
                                }
                              </DialogTitle>
                              <DialogDescription>
                                {activeTab === "Recent" && (
                                  <img
                                    src={`${projectMap.projectName}.jpg`}
                                    className="w-96 h-60 object-cover my-4 mx-auto"
                                  />
                                )}
                                <div className="flex justify-between md:w-96 mx-auto flex-wrap gap-4">
                                  <div className="flex gap-x-2 items-center">
                                    {projectMap.technologies.map((item) => (
                                      <span className="bg-gray-700 text-white px-2 py-1">
                                        {item}
                                      </span>
                                    ))}
                                  </div>
                                  <div className="flex items-center gap-x-4">
                                    <a
                                      href={projectMap.github}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                    >
                                      <Github
                                        className="mx-auto hover:text-blue-600 transition-colors"
                                        size={40}
                                      />
                                    </a>
                                    {projectMap.website && (
                                      <a
                                        href={projectMap.website}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                      >
                                        <CodeXml
                                          className="mx-auto hover:text-green-600 transition-colors"
                                          size={40}
                                        />
                                      </a>
                                    )}
                                  </div>
                                </div>
                              </DialogDescription>
                            </DialogHeader>
                          </DialogContent>
                        </Dialog>
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
