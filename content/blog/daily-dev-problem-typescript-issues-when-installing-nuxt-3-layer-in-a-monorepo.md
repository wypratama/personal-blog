---
title: "Daily Dev Problem: TypeScript Issues When Installing Nuxt 3 Layer in a Monorepo"
description: "In this article, we'll discuss an issue you might encounter when trying to install Nuxt 3 layers within a monorepo using TurboRepo. This issue is related to TypeScript configuration that seemingly fails to recognize Nuxt."
date: 2023-07-02T18:36:38.752Z
preview: ""
draft: false
tags: []
categories:
  - daily dev problem
type: blog
keywords: ""
layout: article
cover: articles/typescript-issue-on-nuxt.png
---
In this article, we'll discuss an issue you might encounter when trying to install Nuxt 3 layers within a monorepo using TurboRepo. This issue is related to TypeScript configuration that seemingly fails to recognize Nuxt.

When attempting to install Nuxt 3 layers within a monorepo using TurboRepo, you may experience issues with TypeScript not being able to find certain elements such as defineNuxtConfig and appConfig. The TypeScript configuration file (tsconfig.json) looks like this:

```ts
{
  "extends": "./.playground/.nuxt/tsconfig.json"
}
```

And it gives error where definitions from Nuxt seems to be not recognized:

To resolve this issue, you need to add the following configuration to the nuxt.config.ts file located in the .playground folder:

```ts
typescript: { includeWorkspace: true, },
```

nuxt.config.ts file inside .playground folder now should look something like this:

```ts
export default defineNuxtConfig({
  extends: '..',
  typescript: {
    shim: false,
    includeWorkspace: true,
  },
});
```

By adding the line of code above, TypeScript will be able to recognize the elements that were previously not found, such as defineNuxtConfig and appConfig. As a result, the TypeScript configuration issues will be resolved.

Installing Nuxt 3 in a monorepo with TurboRepo might present some challenges, one of which is related to TypeScript configuration. However, by adding the proper configuration to the nuxt.config.ts file, you can overcome this issue and continue developing your application using Nuxt 3 and TurboRepo. Good luck!