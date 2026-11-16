import React from "react";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}

/**
 * Responsive fluid container with wide premium editorial bounds (1440px max width).
 * Strictly implements the user's responsive padding specifications:
 * - Desktop/Notebook: 50px side padding (lg:px-[50px])
 * - iPad/Tablet: 30px side padding (md:px-[30px])
 * - Phone/Mobile: 20px side padding (px-[20px])
 */
export function Container({
  children,
  className = "",
  as: Component = "div"
}: ContainerProps) {
  return (
    <Component
      className={`w-full max-w-[1440px] mx-auto px-[20px] md:px-[30px] lg:px-[50px] ${className}`}
    >
      {children}
    </Component>
  );
}
