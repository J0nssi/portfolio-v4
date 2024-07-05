"use client";
import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export const TransitionLink = ({ children, href, animationClass, overlayText, ...props }) => {
  const router = useRouter();

  const handleTransition = async (e) => {
    e.preventDefault();
    const body = document.querySelector("body");

    // Create and insert the transition overlay
    const overlay = document.createElement("div");
    overlay.classList.add("transition-overlay");
    if (animationClass) {
      overlay.classList.add(animationClass);
    }
    overlay.innerText = overlayText || children; // Use overlayText if provided, otherwise fallback to children
    body?.appendChild(overlay);

    body?.appendChild(overlay);

    // Trigger the animation
    requestAnimationFrame(() => {
      overlay.classList.add("active");
    });

    await sleep(800); // Wait for the overlay to stay longer covering the screen

    // Navigate to the new page and apply exit transition
    overlay.classList.remove("active");
    overlay.classList.add("exit");
    if (animationClass) {
      overlay.classList.add(`${animationClass}-exit`);
    }
    router.push(href);

    await sleep(1000); // Wait for the exit transition to complete faster

    // Clean up
    body?.removeChild(overlay);
  };

  return (
    <Link {...props} href={href} onClick={handleTransition}>
      {children}
    </Link>
  );
};
