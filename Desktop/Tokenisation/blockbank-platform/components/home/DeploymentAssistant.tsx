import Link from "next/link";

export default function DeploymentAssistant() {
  return (
    <div className="mb-16 rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-8 shadow-xl">
      <div className="text-center">
        <h2 className="mb-4 text-3xl font-bold text-white">
          🤖 Assistant de Déploiement
        </h2>
        <p className="mb-6 text-lg text-indigo-100">
          Générez automatiquement votre schéma légal, statuts et documentation technique
        </p>
        <Link
          href="/deployment-assistant"
          className="inline-block rounded-lg bg-white px-8 py-3 font-semibold text-indigo-600 shadow-lg transition-all hover:bg-indigo-50 hover:shadow-xl"
        >
          Commencer →
        </Link>
      </div>
    </div>
  );
}

