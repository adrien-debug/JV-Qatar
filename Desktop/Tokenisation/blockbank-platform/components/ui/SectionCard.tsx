import Link from "next/link";

type Category = "légal" | "mécanisme" | "code" | "analyse";

interface SectionCardProps {
  title: string;
  description: string;
  href: string;
  icon: string;
  category: Category;
}

const categoryColors: Record<Category, string> = {
  légal: "border-purple-200 hover:border-purple-400 dark:border-purple-800 dark:hover:border-purple-600",
  mécanisme: "border-blue-200 hover:border-blue-400 dark:border-blue-800 dark:hover:border-blue-600",
  code: "border-green-200 hover:border-green-400 dark:border-green-800 dark:hover:border-green-600",
  analyse: "border-orange-200 hover:border-orange-400 dark:border-orange-800 dark:hover:border-orange-600",
};

export default function SectionCard({
  title,
  description,
  href,
  icon,
  category,
}: SectionCardProps) {
  return (
    <Link
      href={href}
      className={`group rounded-xl border-2 ${categoryColors[category]} bg-white p-6 shadow-md transition-all hover:shadow-xl dark:bg-slate-800`}
    >
      <div className="mb-4 text-4xl">{icon}</div>
      <h3 className="mb-3 text-xl font-semibold text-slate-900 group-hover:text-indigo-600 dark:text-white dark:group-hover:text-indigo-400">
        {title}
      </h3>
      <p className="text-sm leading-relaxed text-slate-600 dark:text-slate-400">
        {description}
      </p>
    </Link>
  );
}

