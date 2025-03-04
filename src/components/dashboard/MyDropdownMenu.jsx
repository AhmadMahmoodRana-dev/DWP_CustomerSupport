import React from "react";
import { BsThreeDots } from "react-icons/bs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
const MyDropdownMenu = () => {
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button className="cursor-pointer flex justify-center items-center">
            <BsThreeDots />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56 bg-[#212121] border-none">
          <DropdownMenuGroup>
            <DropdownMenuItem className={"text-white"}>
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className={"text-white"}>
              Billing
            </DropdownMenuItem>
            <DropdownMenuItem className={"text-white"}>
              Settings
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default MyDropdownMenu;
