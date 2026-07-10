"use client";

import Badge from "@/components/ui/Badge";

const techs = [
  "Excel",
  "SQL",
  "Python",
  "Machine Learning",
  "Deep Learning",
  "power BI",
  //"Statistics",
];

export default function TechBadges() {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {techs.map((tech) => (
        <Badge
          key={tech}
          text={tech}
        />
      ))}
    </div>
  );
}