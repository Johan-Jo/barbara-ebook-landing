interface ParaQuemCardProps {
  title: string;
  description: string;
}

export function ParaQuemCard({ title, description }: ParaQuemCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 md:p-8 shadow-lg border border-[#E8DDD0] hover:shadow-xl transition-shadow">
      <h3 className="text-xl md:text-2xl font-semibold mb-4 text-foreground">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>
    </div>
  );
}

