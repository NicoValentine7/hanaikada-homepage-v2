"use client"

// React と Radix UI の Tabs コンポーネントをインポート
import * as React from "react"
import * as TabsPrimitive from "@radix-ui/react-tabs"

// ユーティリティ関数をインポート
import { cn } from "../../lib/utils"

// Tabs コンポーネントの基本となる Root を定義
const Tabs = TabsPrimitive.Root

// TabsList コンポーネントを定義
const TabsList = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.List>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.List
    ref={ref}
    // クラス名を結合。デフォルトのスタイルとカスタムクラスを組み合わせる
    className={cn(
      "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
      className
    )}
    {...props}
  />
))
// コンポーネントの表示名を設定
TabsList.displayName = TabsPrimitive.List.displayName

// TabsTrigger コンポーネントを定義（タブのボタン部分）
const TabsTrigger = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Trigger
    ref={ref}
    // スタイルを適用。アクティブ状態や無効状態など、様々な状態に対応
    className={cn(
      "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm",
      className
    )}
    {...props}
  />
))
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName

// TabsContent コンポーネントを定義（タブの内容を表示する部分）
const TabsContent = React.forwardRef<
  React.ElementRef<typeof TabsPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof TabsPrimitive.Content>
>(({ className, ...props }, ref) => (
  <TabsPrimitive.Content
    ref={ref}
    // コンテンツ部分のスタイルを適用
    className={cn(
      "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
      className
    )}
    {...props}
  />
))
TabsContent.displayName = TabsPrimitive.Content.displayName

// 定義したコンポーネントをエクスポート
export { Tabs, TabsList, TabsTrigger, TabsContent }