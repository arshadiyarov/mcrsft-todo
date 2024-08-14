import { ChevronFirst, ChevronLast } from "lucide-react";
import { Button } from "@/components/ui/button";

interface IPops {
  isExpanded: boolean;
  toggleExpansion: () => void;
}

const SidebarExpandButton = ({ isExpanded, toggleExpansion }: IPops) => {
  return (
    <Button variant={"outline"} size={"icon"} onClick={toggleExpansion}>
      {isExpanded ? (
        <ChevronFirst size={20} strokeWidth={1.75} />
      ) : (
        <ChevronLast size={20} strokeWidth={1.75} />
      )}
    </Button>
  );
};

export default SidebarExpandButton;
