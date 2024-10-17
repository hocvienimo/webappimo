import React from "react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Link from "next/link";

interface Crumb {
  href: string;
  label: string;
  id?: string | number; // Nếu bạn sử dụng 'id' cho key, thêm nó vào đây
}

interface MyBreadcrumbProps {
  crumbs: Crumb[];
}

const MyBreadcrumb: React.FC<MyBreadcrumbProps> = ({ crumbs = [] }) => {
  return (
    <Breadcrumb className="crumb-post">
      <BreadcrumbList>
        {crumbs.map((crumb, index) => {
          const isCurrentPage = index === crumbs.length - 1;
          return (
            <React.Fragment key={crumb.id || index}>
              <BreadcrumbItem>
                <Link href={crumb.href} passHref legacyBehavior>
                  <BreadcrumbLink
                    href={crumb.href}
                    aria-current={isCurrentPage ? "page" : undefined}
                    className={`md:text-[16px] font-semibold ${
                      isCurrentPage ? "text-[#F7F7F7]" : "text-secondary"
                    }`}
                  >
                    {crumb.label}
                  </BreadcrumbLink>
                </Link>
              </BreadcrumbItem>
              {index < crumbs.length - 1 && (
                <BreadcrumbSeparator className="mx-2 text-[#FC7631]">
                  /
                </BreadcrumbSeparator>
              )}
            </React.Fragment>
          );
        })}
      </BreadcrumbList>
    </Breadcrumb>
  );
};

export default MyBreadcrumb;
