---
title: 规范驱动的 AI 开发：使用 OpenSpec 提升需求与实现一致性
date: 2025-11-28T10:00:00+08:00
tags:
  - AI
  - 规范驱动
  - OpenSpec
---

# 什么是规范驱动开发？OpenSpec 又是什么？

规范驱动开发（Specification-Driven Development）以机器可读的规范为唯一真相：需求、设计、实现与测试都以规范为依据。
而 OpenSpec 是用来达到这个目的的工具。它本质就是提示词工程。可以让 AI Agent 严格根据规范来生成代码，从而解决 AI 生成代码质量不可控，代码不达预期等等的一系列问题。

# 为什么要引入规范驱动开发？

1. 为了让 AI 代码交付质量符合预期
2. 代码生成可控
3. 有复用效应，利于团队协作。只要制定一次规范上传 git，那么所有成员都可以共享。随着时间增长，规范越来越多，AI 会越来越聪明知道你的编码习惯。
4. 减少团队新人上手门槛。试想一下只要规范足够多，约束够多。新人只要会用 AI 就可以生成近似于半个老手程序员的代码了。

# 忍住！不要写代码！

在接到需求时候，我们不应该马上动笔写代码。而是改变行为习惯从"面向代码实现编程"变成"面向文档编程"。一份优质的需求文档，可以让 AI 更容易生成符合预期的代码！虽然你可能觉得这么简单为什么我还有走和这个流程，几行代码的事情。为了复利效应忍住！你虽然知道怎么写，不代表你团队的新人知道怎么写。从团队利益最大化角度上看我们应该忍住不要写代码走流程让 AI 实现。

# Claude Code + OpenSpec 最佳实践提人效工作流

## 了解 OpenSpec 流程

上来不要叫 AI 写代码，先提案！每一个流程对应一个斜线指令。

```text
┌────────────────────┐
│ Draft Change       │
│ Proposal           │
└────────┬───────────┘
         │ share intent with your AI
         ▼
┌────────────────────┐
│ Review & Align     │
│ (edit specs/tasks) │◀──── feedback loop ──────┐
└────────┬───────────┘                          │
         │ approved plan                        │
         ▼                                      │
┌────────────────────┐                          │
│ Implement Tasks    │──────────────────────────┘
│ (AI writes code)   │
└────────┬───────────┘
         │ ship the change
         ▼
┌────────────────────┐
│ Archive & Update   │
│ Specs (source)     │
└────────────────────┘
```

## 项目初始化

Step 1: 安装 OpenSpec

```shell
npm install -g @fission-ai/openspec@latest
```

Step 2: 用 OpenSpec 初始化你的项目

```shell
cd my-project
openspec init
```

这样 OpenSpec 就会把一些工作流的提示词植入到你项目中，以后 Agent 开发就会按照工作流走了。

他会建一个 openspec 文件夹存放。

Step 3: 填充 project.md

进入 Claude Code，让 AI 帮你填充 openspec/project.md
提示词示例：

```text
填写你的项目上下文：
“请阅读 openspec/project.md，并帮我用有关我项目、技术栈和规范的详细信息进行补充。”
```

## 使用命令执行 openspec 流程

进入 Claude Code 执行斜线指令（初始化时候 OpenSpec 已经植入了）

```shell
# 提案
/openspec:proposal 你的需求
# 实现
/openspec:apply
# 归档
/openspec:archive
```

然后把这个流程循环就好了。

# 下集预告

你第一次使用这个流程是不是觉得生成代码还是没有符合你的预期。那是因为规范还是不到位约束太少了。下一期我们聊一下怎么提高规范的约束准确度。得闲喝茶 🍵
