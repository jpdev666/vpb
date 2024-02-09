export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "v-4ec95bbd" */"/Users/lance/code/blog/vpb/src/.vuepress/.temp/pages/index.html.js"), meta: {"y":"h","t":"主页","i":"home"} }],
  ["/demo/", { loader: () => import(/* webpackChunkName: "v-53116c3d" */"/Users/lance/code/blog/vpb/src/.vuepress/.temp/pages/demo/index.html.js"), meta: {"y":"a","t":"主要功能与配置演示","i":"laptop-code"} }],
  ["/demo/disable.html", { loader: () => import(/* webpackChunkName: "v-c3be2b32" */"/Users/lance/code/blog/vpb/src/.vuepress/.temp/pages/demo/disable.html.js"), meta: {"y":"a","t":"布局与功能禁用","i":"gears","O":4} }],
  ["/demo/encrypt.html", { loader: () => import(/* webpackChunkName: "v-64ab010a" */"/Users/lance/code/blog/vpb/src/.vuepress/.temp/pages/demo/encrypt.html.js"), meta: {"y":"a","t":"密码加密的文章","i":"lock"} }],
  ["/demo/layout.html", { loader: () => import(/* webpackChunkName: "v-74022db9" */"/Users/lance/code/blog/vpb/src/.vuepress/.temp/pages/demo/layout.html.js"), meta: {"y":"a","t":"布局","i":"object-group","O":2} }],
  ["/demo/markdown.html", { loader: () => import(/* webpackChunkName: "v-793f96d8" */"/Users/lance/code/blog/vpb/src/.vuepress/.temp/pages/demo/markdown.html.js"), meta: {"y":"a","t":"Markdown 展示","i":"fab fa-markdown","O":2} }],
  ["/demo/page.html", { loader: () => import(/* webpackChunkName: "v-124387f4" */"/Users/lance/code/blog/vpb/src/.vuepress/.temp/pages/demo/page.html.js"), meta: {"y":"a","t":"页面配置","i":"file","O":3} }],
  ["/guide/", { loader: () => import(/* webpackChunkName: "v-cd2467a0" */"/Users/lance/code/blog/vpb/src/.vuepress/.temp/pages/guide/index.html.js"), meta: {"y":"a","t":"指南","i":"lightbulb"} }],
  ["/guide/bar/", { loader: () => import(/* webpackChunkName: "v-29664b2c" */"/Users/lance/code/blog/vpb/src/.vuepress/.temp/pages/guide/bar/index.html.js"), meta: {"y":"a","t":"Bar 功能","i":"lightbulb"} }],
  ["/guide/bar/baz.html", { loader: () => import(/* webpackChunkName: "v-06b35a7a" */"/Users/lance/code/blog/vpb/src/.vuepress/.temp/pages/guide/bar/baz.html.js"), meta: {"y":"a","t":"Baz","i":"circle-info"} }],
  ["/guide/foo/", { loader: () => import(/* webpackChunkName: "v-b61a46ce" */"/Users/lance/code/blog/vpb/src/.vuepress/.temp/pages/guide/foo/index.html.js"), meta: {"y":"a","t":"Foo 功能","i":"lightbulb"} }],
  ["/guide/foo/ray.html", { loader: () => import(/* webpackChunkName: "v-411f5e7e" */"/Users/lance/code/blog/vpb/src/.vuepress/.temp/pages/guide/foo/ray.html.js"), meta: {"y":"a","t":"Ray","i":"circle-info"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "v-8fe89ed2" */"/Users/lance/code/blog/vpb/src/.vuepress/.temp/pages/404.html.js"), meta: {"y":"p","t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
