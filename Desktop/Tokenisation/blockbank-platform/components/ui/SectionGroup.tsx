type Color = "purple" | "blue" | "green" | "orange";

interface SectionGroupProps {
  title: string;
  subtitle: string;
  color: Color;
  children: React.ReactNode;
}

const colorClasses: Record<Color, string> = {
  purple: "from-purple-50 to-indigo-50 dark:from-purple-900/20 dark:to-indigo-900/20",
  blue: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
  green: "from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20",
  orange: "from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20",
};

export default function SectionGroup({
  title,
  subtitle,
  color,
  children,
}: SectionGroupProps) {
  return (
    <div className={`rounded-2xl bg-gradient-to-br ${colorClasses[color]} p-8 shadow-lg`}>
      <div className="mb-6">
        <h2 className="mb-2 text-3xl font-bold text-slate-900 dark:text-white">
          {title}
        </h2>
        <p className="text-lg text-slate-600 dark:text-slate-400">{subtitle}</p>
      </div>
      {children}
    </div>
  );
}

