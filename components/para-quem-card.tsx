import { LucideIcon } from "lucide-react";

interface ParaQuemCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export function ParaQuemCard({ icon: Icon, title, description }: ParaQuemCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-[#E8DDD0] hover:shadow-xl transition-shadow">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#F5F1ED] to-[#E8DDD0] flex items-center justify-center flex-shrink-0">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <h3 className="text-xl md:text-2xl font-semibold text-foreground">
          {title}
        </h3>
      </div>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

