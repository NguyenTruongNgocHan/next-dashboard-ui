import { LucideIcon } from 'lucide-react';

interface StatCardProps {
  icon: LucideIcon;
  label: string;
  value: string;
  change: string;
  changeType: 'increase' | 'decrease';
}

export default function StatCard({
  icon: Icon,
  label,
  value,
  change,
  changeType
}: StatCardProps) {
  const isIncrease = changeType === 'increase';

  return (
    <div className="bg-black text-white border border-yellow-400 p-4 rounded-xl space-y-2">
      <div className="flex items-center gap-2 text-yellow-300">
        <Icon className="w-5 h-5" />
        <span className="font-medium">{label}</span>
      </div>
      <div className="text-3xl font-bold">{value}</div>
      <div className={isIncrease ? 'text-green-400' : 'text-red-400'}>
        {isIncrease ? '▲' : '▼'} {change}
      </div>
    </div>
  );
}
