"use client";

import React, { useEffect, useState } from "react";
import SidebarProfileDropdown from "@/components/sidebar-profile-dropdown";
import SidebarExpandButton from "@/components/sidebar-expand-button";
import SidebarSearchForm from "@/components/sidebar-search-form";
import SidebarLinks from "@/components/sidebar-links";
import { Separator } from "@/components/ui/separator";
import SidebarBottomContent from "@/components/sidebar-bottom-content";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState<boolean>(
    Boolean(localStorage.getItem("isNavExpanded")),
  );

  useEffect(() => {
    const isNavExpanded = localStorage.getItem("isNavExpanded");
    setIsExpanded(isNavExpanded === "true");
  }, [isExpanded]);

  const toggleExpansion = () => {
    setIsExpanded((prevState) => {
      localStorage.setItem("isNavExpanded", String(!prevState));
      return !prevState;
    });
  };

  return (
    <aside className={"h-screen border-r transition-all duration-300"}>
      <div className={"h-full flex flex-col justify-between py-3 px-4"}>
        <div className={`flex flex-col gap-3 ${!isExpanded && "items-center"}`}>
          <div
            className={`flex items-center justify-between ${isExpanded ? "gap-4" : "flex-col gap-3"}`}
          >
            <SidebarProfileDropdown isSidebarExpanded={isExpanded} />
            <SidebarExpandButton
              isExpanded={isExpanded}
              toggleExpansion={toggleExpansion}
            />
          </div>
          {isExpanded ? (
            <SidebarSearchForm />
          ) : (
            <Button size={"icon"} variant={"outline"} onClick={toggleExpansion}>
              <Search size={20} strokeWidth={1.75} />
            </Button>
          )}
          <Separator />
          <SidebarLinks isSidebarExpanded={isExpanded} />
          <Separator className={"h-[0.5px]"} />
        </div>
        <SidebarBottomContent isSidebarExpanded={isExpanded} />
      </div>
    </aside>
  );
};

export default Sidebar;
