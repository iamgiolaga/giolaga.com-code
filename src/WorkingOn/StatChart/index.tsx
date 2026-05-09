import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import { DataPoint } from '../api';
import './style.css';

interface StatChartProps {
  title: string;
  data: DataPoint[];
  color: string;
  loading?: boolean;
  weeklyLabel?: string;
}

function getWeeklyGrowth(data: DataPoint[]): number {
  if (data.length < 2) return 0;
  const current = data[data.length - 1].stat;
  // Find the entry closest to 7 days ago
  const target = Math.max(0, data.length - 8);
  const previous = data[target].stat;
  if (previous === 0) return 0;
  return parseFloat(((current - previous) / previous * 100).toFixed(1));
}

const StatChart = ({ title, data, color, loading, weeklyLabel }: StatChartProps) => {
  const current = data.length > 0 ? data[data.length - 1].stat : 0;
  const growth = getWeeklyGrowth(data);
  const gradientId = `gradient-${title.replace(/[^a-zA-Z]/g, '')}`;

  if (loading) {
    return (
      <div className="stat-card">
        <div className="stat-card-header">
          <span className="stat-card-title">{title}</span>
        </div>
        <div className="stat-card-skeleton" />
      </div>
    );
  }

  return (
    <div className="stat-card">
      <div className="stat-card-header">
        <span className="stat-card-title">{title}</span>
        <div className="stat-card-values">
          <span className="stat-card-current">
            {current.toLocaleString()}
          </span>
          {data.length >= 2 && (
            <span
              className={`stat-card-growth ${growth > 0 ? 'positive' : growth < 0 ? 'negative' : 'neutral'}`}
            >
              {growth > 0 ? '+' : ''}
              {growth}% {weeklyLabel}
            </span>
          )}
        </div>
      </div>
      <div className="stat-card-chart">
        <ResponsiveContainer width="100%" height={120}>
          <AreaChart
            data={data}
            margin={{ top: 5, right: 5, left: 5, bottom: 0 }}
          >
            <defs>
              <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.4} />
                <stop offset="100%" stopColor={color} stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <XAxis
              dataKey="date"
              axisLine={false}
              tickLine={false}
              tick={{ fill: '#6c757d', fontSize: 10 }}
              interval="preserveStartEnd"
            />
            <YAxis hide domain={['auto', 'auto']} />
            <Tooltip
              contentStyle={{
                background: '#1a1a2e',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: '8px',
                color: '#fff',
                fontSize: '12px',
              }}
              formatter={(value: number) => [value.toLocaleString(), 'Value']}
            />
            <Area
              type="monotone"
              dataKey="stat"
              stroke={color}
              strokeWidth={2}
              fill={`url(#${gradientId})`}
              dot={false}
              activeDot={{ r: 4, fill: color, stroke: '#fff', strokeWidth: 2 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default StatChart;
