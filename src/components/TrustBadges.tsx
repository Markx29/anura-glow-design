import { Shield, Truck, Leaf, Lock } from "lucide-react";

const TrustBadges = () => {
  const badges = [
    {
      icon: Shield,
      label: "Secure Payment",
    },
    
    {
      icon: Leaf,
      label: "Eco-Friendly",
    },
    {
      icon: Lock,
      label: "Privacy Protected",
    },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
      {badges.map((badge) => (
        <div
          key={badge.label}
          className="flex flex-col items-center gap-2 p-4 rounded-xl bg-secondary/50 transition-all duration-300 hover:bg-secondary hover:shadow-soft"
        >
          <badge.icon className="w-6 h-6 text-primary" />
          <span className="text-xs text-center text-muted-foreground font-medium">
            {badge.label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default TrustBadges;
