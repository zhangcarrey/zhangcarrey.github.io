(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{556:function(t,s,n){"use strict";n.r(s);var a=n(12),e=Object(a.a)({},(function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[n("h5",{attrs:{id:"这里共展示两类三种方式。"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#这里共展示两类三种方式。"}},[t._v("#")]),t._v(" 这里共展示两类三种方式。")]),t._v(" "),n("h3",{attrs:{id:"_1-git-pull-获取最新代码到本地-并自动合并到当前分支"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_1-git-pull-获取最新代码到本地-并自动合并到当前分支"}},[t._v("#")]),t._v(" 1.git pull：获取最新代码到本地，并自动合并到当前分支")]),t._v(" "),n("p",[t._v("命令展示")]),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查询当前远程的版本")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 直接拉取并合并最新代码")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin master "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("示例1：拉取远端origin/master分支并合并到当前分支"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" pull origin dev "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("示例2：拉取远端origin/dev分支并合并到当前分支"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br")])]),n("p",[t._v("分析：不推荐这种方式，因为是直接合并，无法提前处理冲突。")]),t._v(" "),n("h3",{attrs:{id:"_2-git-fetch-merge-获取最新代码到本地-然后手动合并分支"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-git-fetch-merge-获取最新代码到本地-然后手动合并分支"}},[t._v("#")]),t._v(" 2.git fetch + merge: 获取最新代码到本地，然后手动合并分支")]),t._v(" "),n("h4",{attrs:{id:"_2-1-额外建立本地分支"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-额外建立本地分支"}},[t._v("#")]),t._v(" 2.1.额外建立本地分支")]),t._v(" "),n("p",[t._v("代码展示")]),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看当前远程的版本")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v \n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 获取最新代码到本地临时分支(本地当前分支为[branch]，获取的远端的分支为[origin/branch])")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch origin master:master1  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("示例1：在本地建立master1分支，并下载远端的origin/master分支到master1分支中"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch origin dev:dev1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("示例1：在本地建立dev1分支，并下载远端的origin/dev分支到dev1分支中"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看版本差异")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" master1 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("示例1：查看本地master1分支与当前分支的版本差异"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("diff")]),t._v(" dev1    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("示例2：查看本地dev1分支与当前分支的版本差异"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并最新分支到本地分支")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge master1    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("示例1：合并本地分支master1到当前分支"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge dev1   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("示例2：合并本地分支dev1到当前分支"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 删除本地临时分支")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D master1    "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("示例1：删除本地分支master1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" branch -D dev1 "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("示例1：删除本地分支dev1"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br"),n("span",{staticClass:"line-number"},[t._v("12")]),n("br"),n("span",{staticClass:"line-number"},[t._v("13")]),n("br"),n("span",{staticClass:"line-number"},[t._v("14")]),n("br")])]),n("p",[t._v("备注：不推荐这种方式，还需要额外对临时分支进行处理。")]),t._v(" "),n("h4",{attrs:{id:"_2-2-不额外建立本地分支"}},[n("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-不额外建立本地分支"}},[t._v("#")]),t._v(" 2.2.不额外建立本地分支")]),t._v(" "),n("p",[t._v("代码展示")]),t._v(" "),n("div",{staticClass:"language-sh line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-sh"}},[n("code",[n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查询当前远程的版本")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" remote -v\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#获取最新代码到本地(本地当前分支为[branch]，获取的远端的分支为[origin/branch])")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch origin master  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("示例1：获取远端的origin/master分支"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" fetch origin dev "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("示例2：获取远端的origin/dev分支"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#查看版本差异")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -p master"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("origin/master "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("示例1：查看本地master与远端origin/master的版本差异"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" log -p dev"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v("origin/dev   "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("示例2：查看本地dev与远端origin/dev的版本差异"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),n("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 合并最新代码到本地分支")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge origin/master  "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("示例1：合并远端分支origin/master到当前分支"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n$ "),n("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" merge origin/dev "),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("示例2：合并远端分支origin/dev到当前分支"),n("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[t._v("1")]),n("br"),n("span",{staticClass:"line-number"},[t._v("2")]),n("br"),n("span",{staticClass:"line-number"},[t._v("3")]),n("br"),n("span",{staticClass:"line-number"},[t._v("4")]),n("br"),n("span",{staticClass:"line-number"},[t._v("5")]),n("br"),n("span",{staticClass:"line-number"},[t._v("6")]),n("br"),n("span",{staticClass:"line-number"},[t._v("7")]),n("br"),n("span",{staticClass:"line-number"},[t._v("8")]),n("br"),n("span",{staticClass:"line-number"},[t._v("9")]),n("br"),n("span",{staticClass:"line-number"},[t._v("10")]),n("br"),n("span",{staticClass:"line-number"},[t._v("11")]),n("br")])]),n("p",[t._v("备注： 推荐这种方式")])])}),[],!1,null,null,null);s.default=e.exports}}]);