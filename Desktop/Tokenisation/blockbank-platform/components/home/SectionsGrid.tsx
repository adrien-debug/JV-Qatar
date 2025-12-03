import SectionGroup from "@/components/ui/SectionGroup";
import SectionCard from "@/components/ui/SectionCard";
import { sectionsData } from "@/config/sections";

export default function SectionsGrid() {
  return (
    <div className="mb-16 space-y-16">
      {sectionsData.map((section) => (
        <SectionGroup
          key={section.title}
          title={section.title}
          subtitle={section.subtitle}
          color={section.color}
        >
          <div className={`grid gap-6 ${section.gridCols}`}>
            {section.cards.map((card) => (
              <SectionCard
                key={card.href}
                title={card.title}
                description={card.description}
                href={card.href}
                icon={card.icon}
                category={card.category}
              />
            ))}
          </div>
        </SectionGroup>
      ))}
    </div>
  );
}

