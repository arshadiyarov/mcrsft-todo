"use client";

import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  House,
  SquareChartGantt,
  Star,
  SunMedium,
  UserRound,
} from "lucide-react";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    id: 1,
    title: "Tasks",
    icon: <House size={20} strokeWidth={1.75} />,
    link: "/",
  },
  {
    id: 2,
    title: "Important",
    icon: <Star size={20} strokeWidth={1.75} />,
    link: "/important",
  },
  {
    id: 3,
    title: "Planned",
    icon: <SquareChartGantt size={20} strokeWidth={1.75} />,
    link: "/planned",
  },
  {
    id: 4,
    title: "Assigned to me",
    icon: <UserRound size={20} strokeWidth={1.75} />,
    link: "/assigned-to-me",
  },
  {
    id: 5,
    title: "My day",
    icon: <SunMedium size={20} strokeWidth={1.75} />,
    link: "/my-day",
  },
];

interface IProps {
  isSidebarExpanded: boolean;
}

type Link = {
  id: number;
  title: string;
  icon: React.ReactNode;
  link: string;
};

const SidebarLinks = ({ isSidebarExpanded }: IProps) => {
  const pathname = usePathname();

  const getContentToShow = () => {
    switch (isSidebarExpanded) {
      case true:
        return (
          <nav className={"flex flex-col gap-1"}>
            {navLinks.map((li) => (
              <Button
                key={li.id}
                variant={pathname === li.link ? "" : "ghost"}
                className={"items-center justify-start gap-4"}
                asChild
              >
                <Link href={li.link}>
                  {li.icon}
                  <p>{li.title}</p>
                </Link>
              </Button>
            ))}
          </nav>
        );
      case false:
        return (
          <nav className={"flex flex-col gap-1"}>
            {navLinks.map((li) => (
              <Button
                key={li.id}
                variant={pathname === li.link ? "" : "outline"}
                size={"icon"}
                asChild
              >
                <Link href={li.link}>{li.icon}</Link>
              </Button>
            ))}
          </nav>
        );
    }
  };

  return getContentToShow();
};

export default SidebarLinks;
