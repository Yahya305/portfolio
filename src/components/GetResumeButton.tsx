import React from "react";
import { FiDownload } from "react-icons/fi";

export default function GetResumeButton() {
    return (
        <button className="flex items-center gap-2 relative p-8 border rounded-[50px] bg-background hover:bg-border my-10 z-10">
            Get Resume <FiDownload size={20} />
        </button>
    );
}
