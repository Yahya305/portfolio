import Card from "@components/ui/Card";
import Wrapper from "@components/Wrapper";
import React from "react";

export default function Services() {
    return (
        <Wrapper className="bg-secondary p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </div>
        </Wrapper>
    );
}
