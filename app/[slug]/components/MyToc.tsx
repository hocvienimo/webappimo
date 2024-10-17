// components/MyToc.tsx
"use client";
import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import parse from "html-react-parser";

interface TOCProps {
  tocHtml: string;
}

const TOC: React.FC<TOCProps> = ({ tocHtml }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("h2, h3");
      const scrollPos = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement;
        const sectionTop =
          sectionElement.getBoundingClientRect().top + window.scrollY;

        if (
          scrollPos >= sectionTop &&
          scrollPos < sectionTop + sectionElement.offsetHeight
        ) {
          setActiveId(sectionElement.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const tocElements = parse(tocHtml);

  return (
    <Accordion type="single" collapsible defaultValue="toc">
      <AccordionItem value="toc" className="border-b-0">
        <div className="table-content bg-white rounded-xl shadow-md md:px-8 px-3 py-4">
          <AccordionTrigger className="text-xl font-secondary text-primary font-bold">
            Mục Lục Bài Viết
          </AccordionTrigger>
          <AccordionContent>
            <ul className="toc text-[15px] leading-[22px] text-gray-700">
              {React.Children.map(tocElements.props.children, (element) => {
                if (React.isValidElement(element) && element.type === "li") {
                  const link = element.props.children;
                  const isH3 = element.props.className === "h3";

                  if (React.isValidElement(link) && link.type === "a") {
                    const id = link.props.href?.substring(1);
                    const isActive = activeId === id;

                    return (
                      <li
                        key={id}
                        className={`${isH3 ? "ml-4" : "h2 font-medium"} ${
                          isActive ? "text-thirdary" : ""
                        }`}
                      >
                        <a
                          href={`#${id}`}
                          className={isActive ? "text-thirdary font-bold" : ""}
                        >
                          {link.props.children}
                        </a>
                      </li>
                    );
                  }
                }
                return null;
              })}
            </ul>
          </AccordionContent>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default TOC;
