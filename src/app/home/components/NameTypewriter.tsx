"use client"
import React from "react";
import TypewriterComponent from "typewriter-effect";

export default function NameTypewriter() {
    return (
        <>
            <TypewriterComponent
                onInit={(typewriter) => {
                    typewriter
                        .typeString("Yahya Salman")
                        .pauseFor(1500)
                        .start();
                }}
                options={{ loop: true,  }}
            />
        </>
    );
}
