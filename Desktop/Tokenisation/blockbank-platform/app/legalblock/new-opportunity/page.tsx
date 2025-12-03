"use client";

import { useState } from "react";
import OpportunityCockpit from "@/components/legalblock/OpportunityCockpit";

export default function NewOpportunityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-violet-50 via-purple-50 to-fuchsia-50 dark:from-slate-900 dark:via-violet-900/10 dark:to-fuchsia-900/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <OpportunityCockpit />
      </div>
    </div>
  );
}

