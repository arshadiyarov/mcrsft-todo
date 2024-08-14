import React from "react";
import { Button } from "@/components/ui/button";
import { PackagePlus, Plus } from "lucide-react";

interface IProps {
  isSidebarExpanded: boolean;
}

const SidebarBottomContent = ({ isSidebarExpanded }: IProps) => {
  const getContentToShow = () => {
    if (isSidebarExpanded) {
      return (
        <Button variant={"ghost"} className={"flex items-center gap-2 flex-1"}>
          <Plus size={20} strokeWidth={1.75} />
          <p>New list</p>
        </Button>
      );
    } else {
      return (
        <Button variant={"ghost"} size={"icon"}>
          <Plus size={20} strokeWidth={1.75} />
        </Button>
      );
    }
  };

  return (
    <div
      className={`flex items-center ${!isSidebarExpanded && "flex-col-reverse"}`}
    >
      {getContentToShow()}
      <Button size={"icon"} variant={"ghost"}>
        <PackagePlus size={20} strokeWidth={1.75} />
      </Button>
    </div>
  );
};

export default SidebarBottomContent;
