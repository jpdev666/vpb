import { defineClientConfig } from "vuepress/client";
import CodeTabs from "/Users/lance/code/blog/vpb/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.23_markdown-it@14.0.0_vuepress@2.0.0-rc.7/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeTabs.js";
import { hasGlobalComponent } from "/Users/lance/code/blog/vpb/node_modules/.pnpm/vuepress-shared@2.0.0-rc.23_vuepress@2.0.0-rc.7/node_modules/vuepress-shared/lib/client/index.js";
import { CodeGroup, CodeGroupItem } from "/Users/lance/code/blog/vpb/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.23_markdown-it@14.0.0_vuepress@2.0.0-rc.7/node_modules/vuepress-plugin-md-enhance/lib/client/compact/index.js";
import CodeDemo from "/Users/lance/code/blog/vpb/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.23_markdown-it@14.0.0_vuepress@2.0.0-rc.7/node_modules/vuepress-plugin-md-enhance/lib/client/components/CodeDemo.js";
import MdDemo from "/Users/lance/code/blog/vpb/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.23_markdown-it@14.0.0_vuepress@2.0.0-rc.7/node_modules/vuepress-plugin-md-enhance/lib/client/components/MdDemo.js";
import "/Users/lance/code/blog/vpb/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.23_markdown-it@14.0.0_vuepress@2.0.0-rc.7/node_modules/vuepress-plugin-md-enhance/lib/client/styles/figure.scss";
import { useHint } from "/Users/lance/code/blog/vpb/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.23_markdown-it@14.0.0_vuepress@2.0.0-rc.7/node_modules/vuepress-plugin-md-enhance/lib/client/composables/hint.js";
import "/Users/lance/code/blog/vpb/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.23_markdown-it@14.0.0_vuepress@2.0.0-rc.7/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";
import Tabs from "/Users/lance/code/blog/vpb/node_modules/.pnpm/vuepress-plugin-md-enhance@2.0.0-rc.23_markdown-it@14.0.0_vuepress@2.0.0-rc.7/node_modules/vuepress-plugin-md-enhance/lib/client/components/Tabs.js";

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    if(!hasGlobalComponent("CodeGroup", app)) app.component("CodeGroup", CodeGroup);
    if(!hasGlobalComponent("CodeGroupItem", app)) app.component("CodeGroupItem", CodeGroupItem);
    app.component("CodeDemo", CodeDemo);
    app.component("MdDemo", MdDemo);
    app.component("Tabs", Tabs);
  },
  setup: () => {
useHint();
  }
});
