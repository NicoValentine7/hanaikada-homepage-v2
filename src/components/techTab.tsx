import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Code, Server, Database, LucideIcon } from 'lucide-react';
import { Feature } from './feature';

interface Technology {
  name: string;
  category: string;
}

interface TechStack {
    mobile: Technology[];
  frontend: Technology[];
  backend: Technology[];
  others: Technology[];
}

interface TechCategory {
  title: string;
  icon: LucideIcon;
  technologies: Technology[];
}

const techStack: TechStack = {
  mobile: [
    { name: "Flutter", category: "フレームワーク" },
    { name: "Dart", category: "言語" },
  ],
  frontend: [
    { name: "React", category: "フレームワーク" },
    { name: "TypeScript", category: "言語" },
    { name: "Tailwind CSS", category: "スタイリング" }
  ],
  backend: [
    { name: "deno or cloudflare worker", category: "ランタイム" },
    { name: "Hono", category: "フレームワーク" },
    { name: "Supabase", category: "データベース" },

  ],
  others: [
    { name: "PostgreSQL", category: "リレーショナル" },
    { name: "Redis", category: "キーバリュー" }
  ]
};

const techCategories: TechCategory[] = [
  { title: "フロントエンド", icon: Code, technologies: techStack.frontend },
  { title: "バックエンド", icon: Server, technologies: techStack.backend },
  { title: "Others", icon: Database, technologies: techStack.others },
];

const TechTab: React.FC = () => (
  <Card>
    <CardHeader>
      <CardTitle>TechShare 技術スタック</CardTitle>
      <CardDescription>最新のテクノロジーを活用したプラットフォーム</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-2 gap-4">
        {techCategories.map((category, index) => (
          <Feature
            key={index}
            icon={<category.icon size={24} className={`text-${['blue', 'green', 'purple', 'orange'][index]}-500`} />}
            title={category.title}
            description={category.technologies.map(tech => `${tech.name} (${tech.category})`).join(', ')}
          />
        ))}
      </div>
    </CardContent>
  </Card>
);

export default TechTab;