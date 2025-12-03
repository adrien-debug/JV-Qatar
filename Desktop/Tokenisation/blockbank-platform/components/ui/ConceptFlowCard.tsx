type Color = "blue" | "purple" | "green";

interface ConceptFlowCardProps {
  title: string;
  steps: string[];
  color: Color;
}

const colorClasses: Record<Color, string> = {
  blue: "border-blue-200 bg-blue-50 dark:border-blue-800 dark:bg-blue-900/20",
  purple: "border-purple-200 bg-purple-50 dark:border-purple-800 dark:bg-purple-900/20",
  green: "border-green-200 bg-green-50 dark:border-green-800 dark:bg-green-900/20",
};

export default function ConceptFlowCard({
  title,
  steps,
  color,
}: ConceptFlowCardProps) {
  return (
    <div className={`rounded-xl border-2 ${colorClasses[color]} p-6`}>
      <h3 className="mb-4 text-lg font-semibold text-slate-900 dark:text-white">
        {title}
      </h3>
      <div className="space-y-2">
        {steps.map((step, idx) => (
          <div
            key={idx}
            className="flex items-center text-sm text-slate-700 dark:text-slate-300"
          >
            <span className="mr-3 text-indigo-600 dark:text-indigo-400">→</span>
            <span>{step}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

