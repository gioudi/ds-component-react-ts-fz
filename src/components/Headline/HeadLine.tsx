import { useState } from "react";

interface HeadLineProps {
  title: string;
  subtitle?: string;
  variant: "normal" | "large" | "hero";
  customClass?: string;
}

const HeadLine: React.FC<HeadLineProps> = ({
  title,
  subtitle,
  variant,
  customClass,
}) => {
  return (
    <div className="container">
      <div className={`fz-headline  fz-headline--${variant} ${customClass} }`}>
        <div className="fz-headline__title">{title}</div>
        <p className="fz-headline__subtitle">{subtitle}</p>
      </div>
    </div>
  );
};

export default HeadLine;
