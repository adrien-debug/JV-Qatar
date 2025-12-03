import Link from "next/link";
import { SparklesIcon2, RocketIcon } from "@/components/icons/GeneralIcons";
import { BuildingIcon, RocketIcon as RocketIconSection, RobotIcon } from "@/components/icons/SectionIcons";
import OverviewSection from "@/components/legalblock/OverviewSection";
import AdvisorBlockSection from "@/components/legalblock/AdvisorBlockSection";
import OpportunityFormSection from "@/components/legalblock/OpportunityFormSection";
import AnalysisProcessSection from "@/components/legalblock/AnalysisProcessSection";
import DocumentGenerationSection from "@/components/legalblock/DocumentGenerationSection";
import TechnicalModulesSection from "@/components/legalblock/TechnicalModulesSection";
import LegalFlowSection from "@/components/legalblock/LegalFlowSection";
import DispatchLogicSection from "@/components/legalblock/DispatchLogicSection";
import TokenizationLogicSection from "@/components/legalblock/TokenizationLogicSection";
import GovernanceSection from "@/components/legalblock/GovernanceSection";

export default function LegalBlockPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
      {/* Hero */}
      <div className="mb-16 text-center">
        <div className="mb-6 inline-flex items-center space-x-2 rounded-full bg-gradient-to-r from-violet-100 to-purple-100 px-6 py-2 dark:from-violet-900/30 dark:to-purple-900/30">
          <SparklesIcon2 className="h-5 w-5 text-violet-600 dark:text-violet-400" />
          <span className="text-sm font-semibold text-violet-700 dark:text-violet-300">
            Plateforme Premium
          </span>
        </div>
        <h1 className="mb-4 flex items-center justify-center space-x-3 bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 bg-clip-text text-6xl font-bold text-transparent">
          <BuildingIcon className="h-12 w-12 text-violet-600 dark:text-violet-400" />
          <span>LEGALBLOCK</span>
        </h1>
        <p className="mx-auto flex items-center justify-center gap-2 max-w-3xl text-xl text-slate-700 dark:text-slate-300">
          <RocketIcon className="h-6 w-6 text-violet-600 dark:text-violet-400" />
          <span>Plateforme d'automatisation juridique complète pour la tokenisation d'actifs réels</span>
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            href="/legalblock/new-opportunity"
            className="group inline-flex items-center space-x-3 rounded-xl bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-violet-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-violet-500/60"
          >
            <RocketIconSection className="h-6 w-6 text-white" />
            <span>Créer une nouvelle opportunité</span>
          </Link>
          <Link
            href="/legalblock/advisor"
            className="group inline-flex items-center space-x-3 rounded-xl bg-gradient-to-r from-purple-600 via-fuchsia-600 to-pink-600 px-8 py-4 text-lg font-semibold text-white shadow-lg shadow-purple-500/50 transition-all hover:scale-105 hover:shadow-xl hover:shadow-purple-500/60"
          >
            <RobotIcon className="h-6 w-6 text-white" />
            <span>AdvisorBlock</span>
          </Link>
        </div>
      </div>

      {/* Sections */}
      <div className="space-y-20">
        <OverviewSection />
        <AdvisorBlockSection />
        <OpportunityFormSection />
        <AnalysisProcessSection />
        <DocumentGenerationSection />
        <TechnicalModulesSection />
        <LegalFlowSection />
        <DispatchLogicSection />
        <TokenizationLogicSection />
        <GovernanceSection />
      </div>
    </div>
  );
}

