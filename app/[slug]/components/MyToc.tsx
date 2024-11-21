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
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

interface TOCProps {
  tocHtml: string;
}

// Định nghĩa kiểu cho phần tử TOC
interface TOCElement extends React.ReactElement {
  props: {
    children: React.ReactNode; // Định nghĩa kiểu cho children
  };
}

// Định nghĩa kiểu cho Link
interface CustomLinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string; // Định nghĩa href là một thuộc tính cần thiết
}

const TOC: React.FC<TOCProps> = ({ tocHtml }) => {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("h2, h3");
      const scrollPos = window.scrollY + 200;

      sections.forEach((section) => {
        const sectionElement = section as HTMLElement; // Ép kiểu section về HTMLElement
        const sectionTop =
          sectionElement.getBoundingClientRect().top + window.scrollY;

        // Kiểm tra điều kiện activeId
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

  const tocElements = parse(tocHtml) as TOCElement; // Chỉ định kiểu cho tocElements
  const tocItems = tocElements.props.children; // Truy cập vào children

  return (
    <Accordion type="single" collapsible defaultValue="toc">
      <AccordionItem value="toc" className="border-b-0">
        <div className="table-content bg-white rounded-xl shadow-xl md:px-8 px-3 py-4">
          <AccordionTrigger className="text-xl font-secondary text-thirdary font-bold">
            Mục Lục Bài Viết
          </AccordionTrigger>
          <AccordionContent>
            <ScrollArea className="h-96">
              <ul className="toc text-[15px] leading-[22px] text-gray-700">
                {React.Children.map(tocItems, (element) => {
                  if (React.isValidElement(element) && element.type === "li") {
                    const link = element.props.children; // Lấy children

                    // Kiểm tra và ép kiểu cho link
                    if (React.isValidElement(link) && link.type === "a") {
                      const linkProps = link.props as CustomLinkProps; // Ép kiểu cho props của link
                      const id = linkProps.href?.substring(1);
                      const isActive = activeId === id;

                      return (
                        <li
                          key={id}
                          className={`${
                            element.props.className === "h3"
                              ? "ml-4"
                              : "h2 font-medium"
                          } ${isActive ? "text-thirdary" : ""}`}
                        >
                          <Link
                            href={`#${id}`}
                            className={
                              isActive ? "text-thirdary font-bold" : ""
                            }
                          >
                            {linkProps.children} {/* Sử dụng linkProps */}
                          </Link>
                        </li>
                      );
                    }
                  }
                  return null; // Trả về null nếu không phải là một li element
                })}
              </ul>
            </ScrollArea>
          </AccordionContent>
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default TOC;
