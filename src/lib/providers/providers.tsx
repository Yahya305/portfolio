"use client";

import { Sheet } from "@components/ui/sheet";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
    return <Sheet>{children}</Sheet>;
}
