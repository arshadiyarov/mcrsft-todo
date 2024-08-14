import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { RefreshCw, Settings, UserCog } from "lucide-react";

interface IProps {
  isSidebarExpanded: boolean;
}

const profileDropDownMenuContent = [
  {
    id: 1,
    title: "Manage accounts",
    icon: <UserCog size={20} strokeWidth={1.75} />,
  },
  {
    id: 2,
    title: "Settings",
    icon: <Settings size={20} strokeWidth={1.75} />,
  },
  {
    id: 3,
    title: "Sync",
    icon: <RefreshCw size={20} strokeWidth={1.75} />,
  },
];

const SidebarProfileDropdown = ({ isSidebarExpanded }: IProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className={"flex items-center gap-3"}>
        <Avatar className={"w-12 h-12"}>
          <AvatarImage src={"https://github.com/shadcn.png"} alt={"User pfp"} />
          <AvatarFallback>AS</AvatarFallback>
        </Avatar>
        {isSidebarExpanded && (
          <div className={"text-left"}>
            <p className={"font-semibold"}>Armat Shadiyarov</p>
            <p className={"text-xs"}>armat2005vip@gmail.com</p>
          </div>
        )}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {profileDropDownMenuContent.map((c) => (
          <>
            <DropdownMenuItem
              key={c.id}
              className={"flex items-center gap-4 py-3 px-4 cursor-pointer"}
            >
              {c.icon}
              <p>{c.title}</p>
            </DropdownMenuItem>
            {profileDropDownMenuContent.length !== c.id && (
              <DropdownMenuSeparator />
            )}
          </>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SidebarProfileDropdown;
