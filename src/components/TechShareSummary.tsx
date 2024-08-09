import React, { useState, ReactNode } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { CheckCircle, Cpu, Users, Code, Palette, LineChart } from 'lucide-react';

interface IconWrapperProps {
  children: ReactNode;
}

const IconWrapper: React.FC<IconWrapperProps> = ({ children }) => (
  <div className="rounded-full bg-blue-100 p-2 mb-2">
    {children}
  </div>
);

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-center text-center p-4">
    <IconWrapper>{icon}</IconWrapper>
    <h3 className="font-semibold mb-2">{title}</h3>
    <p className="text-sm text-gray-600">{description}</p>
  </div>
);

const TechShareSummary: React.FC = () => {
  const [activeTab, setActiveTab] = useState('concept');

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">TechShare ビジネスプラン サマリー</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="concept">コンセプト</TabsTrigger>
          <TabsTrigger value="tech">技術スタック</TabsTrigger>
          <TabsTrigger value="ux">UX/UI 戦略</TabsTrigger>
        </TabsList>
        
        <TabsContent value="concept">
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
        </TabsContent>
        
        <TabsContent value="tech">
          <Card>
            <CardHeader>
              <CardTitle>技術スタック</CardTitle>
              <CardDescription>最新のテクノロジーを活用した堅牢なアーキテクチャ</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Feature
                  icon={<Code size={24} className="text-indigo-500" />}
                  title="フロントエンド"
                  description="Flutter (iOS, Android, Web)"
                />
                <Feature
                  icon={<Cpu size={24} className="text-red-500" />}
                  title="バックエンド"
                  description="Hono, Cloudflare Workers"
                />
                <Feature
                  icon={<CheckCircle size={24} className="text-green-500" />}
                  title="データベース"
                  description="Cloudflare D1, KV for caching"
                />
                <Feature
                  icon={<Users size={24} className="text-blue-500" />}
                  title="認証"
                  description="Cloudflare Access"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="ux">
          <Card>
            <CardHeader>
              <CardTitle>UX/UI 戦略</CardTitle>
              <CardDescription>美しさと使いやすさを両立したデザイン</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-4">
                <Feature
                  icon={<Palette size={24} className="text-pink-500" />}
                  title="UI デザイン"
                  description="Netflix風の美しいインターフェース"
                />
                <Feature
                  icon={<Users size={24} className="text-yellow-500" />}
                  title="UX 設計"
                  description="Amazon風のユーザーファーストな体験"
                />
                <Feature
                  icon={<CheckCircle size={24} className="text-green-500" />}
                  title="アクセシビリティ"
                  description="包括的で使いやすいデザイン"
                />
                <Feature
                  icon={<LineChart size={24} className="text-blue-500" />}
                  title="パフォーマンス"
                  description="高速で応答性の高いアプリケーション"
                />
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TechShareSummary;