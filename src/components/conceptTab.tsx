import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { CheckCircle, Cpu, Users, LineChart } from 'lucide-react';
import { Feature } from './feature';

const ConceptTab: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>TechShare コンセプト</CardTitle>
      <CardDescription>最新テクノロジー製品のシェアリングプラットフォーム</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 gap-4">
        <Feature
          icon={<CheckCircle size={24} className="text-green-500" />}
          title="ハイブリッドモデル"
          description="自社保有製品と個人所有製品のシェアリング"
        />
        <Feature
          icon={<Users size={24} className="text-blue-500" />}
          title="ターゲット市場"
          description="テクノロジー愛好家、クリエイター、学生、企業"
        />
        <Feature
          icon={<Cpu size={24} className="text-purple-500" />}
          title="主要製品"
          description="VRヘッドセット、最新ガジェット、高性能カメラなど"
        />
        <Feature
          icon={<LineChart size={24} className="text-orange-500" />}
          title="成長戦略"
          description="段階的な機能拡張とグローバル展開"
        />
      </div>
    </CardContent>
  </Card>
);

export default ConceptTab;