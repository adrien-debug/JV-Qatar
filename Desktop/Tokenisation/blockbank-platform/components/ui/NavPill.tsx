import Link from "next/link";

interface NavPillProps {
  href: string;
  label: string;
}

export default function NavPill({ href, label }: NavPillProps) {
  return (
    <Link
      href={href}
      className="rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-4 py-2 text-sm font-medium text-violet-700 transition-all hover:from-violet-200 hover:to-purple-200 hover:shadow-md hover:scale-105 dark:from-violet-900/50 dark:to-purple-900/50 dark:text-violet-300 dark:hover:from-violet-900/70 dark:hover:to-purple-900/70"
    >
      {label}
    </Link>
  );
}

