interface TrustBadgeProps {
  icon?: string;
  text: string;
}

export default function TrustBadge({ icon, text }: TrustBadgeProps) {
  return (
    <div className="flex items-center gap-2 text-sm text-primary-lighter">
      {icon && <span className="text-lg">{icon}</span>}
      <span>{text}</span>
    </div>
  );
}




