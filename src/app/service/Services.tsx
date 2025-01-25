import Card from "@components/ui/Card";
import Wrapper from "@components/Wrapper";
import React from "react";
import { services } from "../../data/Services";

export default function Services() {
    return (
        <Wrapper className="bg-secondary p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => {
                    return service;
                })}
            </div>
        </Wrapper>
    );
}
