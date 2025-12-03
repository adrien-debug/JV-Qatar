import NavPill from "@/components/ui/NavPill";
import { quickNavItems } from "@/config/navigation";
import { BoltIcon } from "@/components/icons/GeneralIcons";

export default function QuickNavigation() {
  return (
    <div className="mb-16 rounded-2xl bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 p-8 shadow-lg shadow-violet-500/20 dark:from-violet-900/20 dark:via-purple-900/20 dark:to-fuchsia-900/20">
      <div className="mb-6 flex items-center space-x-3">
        <BoltIcon className="h-8 w-8 text-violet-600 dark:text-violet-400" />
        <h2 className="text-2xl font-bold bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
          Navigation Rapide
        </h2>
      </div>
      <div className="flex flex-wrap gap-3">
        {quickNavItems.map((item) => (
          <NavPill key={item.href} href={item.href} label={item.label} />
        ))}
      </div>
    </div>
  );
}

