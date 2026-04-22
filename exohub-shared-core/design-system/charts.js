import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

/**
 * Exo-Chart: 유저의 포인트 성장 곡선을 그려주는 컴포넌트
 */
export const PointChart = ({ data }) => (
  <div className="h-64 w-full bg-white p-4 rounded-xl shadow-sm">
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <XAxis dataKey="name" hide />
        <YAxis hide domain={['auto', 'auto']} />
        <Tooltip 
          contentStyle={{ borderRadius: '10px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}
        />
        <Line 
          type="monotone" 
          dataKey="points" 
          stroke="#4E9F3D" 
          strokeWidth={3} 
          dot={false} 
          activeDot={{ r: 6 }} 
        />
      </LineChart>
    </ResponsiveContainer>
  </div>
);
