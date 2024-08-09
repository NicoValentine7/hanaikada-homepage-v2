import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Smartphone, Zap, Shield, Smile } from 'lucide-react';
import { Feature } from './feature';

const UXTab: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>TechShare UX/UI 戦略</CardTitle>
      <CardDescription>ユーザー中心のデザインアプローチ</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 gap-4">
        <Feature
          icon={<Smartphone size={24} className="text-blue-500" />}
          title="レスポンシブデザイン"
          description="あらゆるデバイスで最適な表示"
        />
        <Feature
          icon={<Zap size={24} className="text-yellow-500" />}
          title="高速パフォーマンス"
          description="素早い読み込みと滑らかな操作感"
        />
        <Feature
          icon={<Shield size={24} className="text-green-500" />}
          title="セキュアな取引"
          description="安全な決済システムと個人情報保護"
        />
        <Feature
          icon={<Smile size={24} className="text-pink-500" />}
          title="直感的な操作性"
          description="わかりやすいUI設計と使いやすさの追求"
        />
      </div>
    </CardContent>
  </Card>
);

export default UXTab;