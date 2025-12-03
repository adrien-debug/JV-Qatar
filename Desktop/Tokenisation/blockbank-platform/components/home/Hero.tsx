import Link from "next/link";
import { SparklesIcon2, RocketIcon } from "@/components/icons/GeneralIcons";
import { BuildingIcon, RocketIcon as RocketIconSection } from "@/components/icons/SectionIcons";

export default function Hero() {
  return (
    <div className="mb-16 text-center">
      <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-6 py-2 dark:from-violet-900/30 dark:to-purple-900/30">
        <SparklesIcon2 className="h-5 w-5 text-violet-600 dark:text-violet-400" />
        <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">
          Plateforme Premium
        </span>
      </div>
      <h1 className="mb-4 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-6xl font-bold text-transparent">
        BlockBank Platform
      </h1>
      <p className="mx-auto mb-8 flex items-center justify-center gap-2 text-xl text-slate-700 dark:text-slate-300">
        <RocketIcon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
        <span>Plateforme d'automatisation juridique pour la tokenisation d'actifs réels</span>
      </p>
      <div className="flex flex-wrap justify-center gap-4">
        <Link
          href="/legalblock"
          className="group inline-flex items-center space-x-3 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-violet-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-violet-500/60"
        >
          <BuildingIcon className="h-6 w-6 text-white" />
          <span>LegalBlock</span>
        </Link>
        <Link
          href="/legalblock/new-opportunity"
          className="group inline-flex items-center space-x-3 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-purple-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/60"
        >
          <RocketIconSection className="h-6 w-6 text-white" />
          <span>Créer une Opportunité</span>
        </Link>
      </div>
    </div>
  );
}

