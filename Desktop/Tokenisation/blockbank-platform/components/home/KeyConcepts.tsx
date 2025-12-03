import ConceptFlowCard from "@/components/ui/ConceptFlowCard";
import { conceptFlows } from "@/config/concepts";

export default function KeyConcepts() {
  return (
    <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
      <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-white">
        Concepts Clés
      </h2>
      <div className="grid gap-8 md:grid-cols-3">
        {conceptFlows.map((flow) => (
          <ConceptFlowCard
            key={flow.title}
            title={flow.title}
            steps={flow.steps}
            color={flow.color}
          />
        ))}
      </div>
    </div>
  );
}

