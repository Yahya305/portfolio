"use client";
import React from "react";
import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@components/ui/pagination";
import Link from "next/link";
import { useSearchParams } from "next/navigation";

type ComponentProps = {
    totalPages: number;
};

export default function PaginationComponent({ totalPages }: ComponentProps) {
    const searchParams = useSearchParams();
    const page = searchParams.get("page")
        ? parseInt(searchParams.get("page") as string, 10)
        : 1;
    return (
        <Pagination>
            <PaginationContent>
                <PaginationItem>
                    <PaginationPrevious
                        disabled={page <= 1}
                        href={`/blogs?page=${page - 1}`}
                    />
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        disabled={page <= 1}
                        href={`/blogs?page=${page - 1}`}
                    >
                        {page - 1}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink href="#" isActive>
                        {page}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    <PaginationLink
                        disabled={page >= totalPages - 1}
                        href={`/blogs?page=${page + 1}`}
                    >
                        {page + 1}
                    </PaginationLink>
                </PaginationItem>
                <PaginationItem>
                    {page <= totalPages - 1 && <PaginationEllipsis />}
                </PaginationItem>
                <PaginationItem>
                    <PaginationNext
                        disabled={page === totalPages}
                        href={`/blogs?page=${page + 1}`}
                    />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}
