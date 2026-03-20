import { Award, Globe, Leaf, Clock } from "lucide-react";

const badges = [
  { icon: Clock, label: "Est. 2006", sub: "Trusted for 19+ years" },
  { icon: Globe, label: "300+ Stores", sub: "Worldwide franchise" },
  { icon: Leaf, label: "Taiwan Tea", sub: "Premium quality leaves" },
  { icon: Award, label: "4 Countries", sub: "Global presence" },
];

const TrustBadges = () => (
  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
    {badges.map((badge) => (
      <div
        key={badge.label}
        className="flex flex-col items-center text-center p-5 rounded-2xl bg-background border border-border"
      >
        <badge.icon className="text-primary mb-3" size={32} />
        <span className="font-bold text-foreground text-sm">{badge.label}</span>
        <span className="text-muted-foreground text-xs mt-1">{badge.sub}</span>
      </div>
    ))}
  </div>
);

export default TrustBadges;
