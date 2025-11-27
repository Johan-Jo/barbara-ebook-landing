import { ReactNode } from "react";

interface BenefitCardProps {
  icon?: string;
  title: string;
  description: string;
  children?: ReactNode;
}

export default function BenefitCard({
  icon,
  title,
  description,
  children,
}: BenefitCardProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow border border-border">
      {icon && (
        <div className="text-3xl mb-4 text-accent">{icon}</div>
      )}
      <h3 className="text-xl font-semibold mb-2 text-primary">{title}</h3>
      <p className="text-primary-light leading-relaxed">{description}</p>
      {children}
    </div>
  );
}




