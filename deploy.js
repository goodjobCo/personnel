// 根据你的路径修改routes,给每个route都新建一个文件夹，把index.html拷贝进去
const routes = [
    'g1iivfrxes6j1701000',
    'g1iivfrxes6j1701001',
    'g3b0pju2vdgj1701002',
    'g4gum8cctlnj1701003',
    'g6vb5bc6wegj1701004',
    'g745ylfzh21j1701005',
    'g917kzq5vvvj1701006',
    'gc786zj39xaj1701007',
    'gdhz6qxid2lj1701008',
    'gfub1a352owj1701009',
    'ggqemio7hgmj1701010',
    'gj8rzk3z7otj1701011',
    'glo44ch8ai4j1701012',
    'gm60gw6mzerj1701013',
    'gng010icoiuj1701014',
    'gq1laylygxhj1701015',
    'grh3hx115qjj1701016',
    'gu4ls6x4lqoj1701017',
    'gvwdcdyv3syj1701018',
    'gwxaosmnjntj1701019',
    'gzybfooy8brj1701020',
]

const fs = require('fs-extra')
const path = require('path')
routes.forEach((route) => {
    fs.copySync(path.join('build', 'index.html'), path.join('build', route, 'index.html'))
})