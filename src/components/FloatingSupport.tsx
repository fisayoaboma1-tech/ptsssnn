"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Headset } from "lucide-react";

export default function FloatingSupport() {
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const [isBouncing, setIsBouncing] = useState(true);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [position, setPosition] = useState<{ x: number; y: number } | null>(null);

  useEffect(() => {
    // Set initial position after mount (coordinates known)
    if (buttonRef.current) {
      const padding = 24;
      setPosition({
        x: window.innerWidth - buttonRef.current.offsetWidth - padding,
        y: window.innerHeight - buttonRef.current.offsetHeight - padding,
      });
    }
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isDragging && buttonRef.current) {
        const newX = e.clientX - dragOffset.x;
        const newY = e.clientY - dragOffset.y;

        const maxX = window.innerWidth - buttonRef.current.offsetWidth;
        const maxY = window.innerHeight - buttonRef.current.offsetHeight;

        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleMouseUp = () => {
      setIsDragging(false);
      setIsBouncing(true);
    };

    if (isDragging) {
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    }

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDragging, dragOffset]);

  const handleMouseDown = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
      setIsDragging(true);
      setIsBouncing(false);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLButtonElement>) => {
    if (buttonRef.current && e.touches[0]) {
      const rect = buttonRef.current.getBoundingClientRect();
      setDragOffset({
        x: e.touches[0].clientX - rect.left,
        y: e.touches[0].clientY - rect.top,
      });
      setIsDragging(true);
      setIsBouncing(false);
    }
  };

  useEffect(() => {
    const handleTouchMove = (e: TouchEvent) => {
      if (isDragging && buttonRef.current && e.touches[0]) {
        const newX = e.touches[0].clientX - dragOffset.x;
        const newY = e.touches[0].clientY - dragOffset.y;

        const maxX = window.innerWidth - buttonRef.current.offsetWidth;
        const maxY = window.innerHeight - buttonRef.current.offsetHeight;

        setPosition({
          x: Math.max(0, Math.min(newX, maxX)),
          y: Math.max(0, Math.min(newY, maxY)),
        });
      }
    };

    const handleTouchEnd = () => {
      setIsDragging(false);
      setIsBouncing(true);
    };

    if (isDragging) {
      document.addEventListener("touchmove", handleTouchMove);
      document.addEventListener("touchend", handleTouchEnd);
    }

    return () => {
      document.removeEventListener("touchmove", handleTouchMove);
      document.removeEventListener("touchend", handleTouchEnd);
    };
  }, [isDragging, dragOffset]);

  return (
    <Link
      href="/contactdetails"
      passHref
      onClick={(e) => {
        if (isDragging) {
          e.preventDefault();
        }
      }}
    >
      <button
        ref={buttonRef}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className="fixed z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg cursor-pointer transition-colors duration-200 select-none"
        style={{
          bottom: "24px",
          right: "24px",
          left: position ? `${position.x}px` : "auto",
          top: position ? `${position.y}px` : "auto",
        }}
        aria-label="Support"
      >
        <Headset className="w-6 h-6 text-black pointer-events-none" />
      </button>
    </Link>
  );
}