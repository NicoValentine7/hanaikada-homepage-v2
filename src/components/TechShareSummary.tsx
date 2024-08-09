import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs"
import ConceptTab from './conceptTab';
import TechTab from './techTab';
import UXTab from './uxTab';

const tabConfig = [
  { value: 'concept', label: 'コンセプト', component: ConceptTab },
  { value: 'tech', label: '技術スタック', component: TechTab },
  { value: 'ux', label: 'UX/UI 戦略', component: UXTab },
];

const TechShareSummary: React.FC = () => {
  const [activeTab, setActiveTab] = useState('concept');

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-6">株式会社花筏</h1>
      
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-3">
          {tabConfig.map(tab => (
            <TabsTrigger key={tab.value} value={tab.value}>{tab.label}</TabsTrigger>
          ))}
        </TabsList>
        
        {tabConfig.map(tab => (
          <TabsContent key={tab.value} value={tab.value}>
            <tab.component />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default TechShareSummary;