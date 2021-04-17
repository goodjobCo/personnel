#### 利用 ant.design 快速建立基礎模型 (https://ant.design/docs/react/use-with-create-react-app-cn)
#### 使用 Umi 無法佈署目前不知道原因 (https://ant.design/docs/react/practical-projects-cn)
#### 佈署 github 詳見 ps-ghpages 專案
```
yarn run deploy

部署在Coding Pages上，使用的命令如下：
gh-pages -d build -b master -o coding -r https://e.coding.net/xxx.git
-d表示路徑，默認為'.'
-b表示分支名，默認為gh-pages
-o表示remote 名，默認為origin
-r表示repo url，默認為url for the origin remote of the current dir。
```
#### React+Router+GitHub Pages+Google Analytics踩坑之路 - 無法通過路徑直接訪問頁面
```
(https://zhuanlan.zhihu.com/p/102642360)
解決方法1：使用HashRouter而不是BrowserRouter
將index.js中的router改為：
import { HashRouter as Router } from 'react-router-dom';
這樣鏈接就變為http:// mydomain.com/# /app1，可以直接訪問。原因是#號後面的內容會被忽略。

解決方法2：為每個路徑創建一個文件夾 (https://github.com/LoeiFy/Recordum/issues/15)
例如我有/app1，/app2兩個路徑，我就在build之後在build文件夾里新建app1，app2兩個文件夾，並將index.html拷貝進去。
這樣一來當我訪問http:// mydomain.com/app1的時候，GitHub Pages就會去/app1文件夾下找index.html，返回回來。
每次都複製一遍未免有些複雜，我們可以自動化這個過程。
在項目根目錄新建 deploy.js 並修改修改 package.json：每次build的时候自动执行deploy.js

```

#### 使用 firebase (https://console.firebase.google.com/project/test-6b4d7/database/test-6b4d7/data?hl=zh-tw)
```
搭配 React Router 打造一個動態麵包屑
```
#### 如何將Google表格轉換為REST API並將其與React應用程序一起使用

```
(https://www.freecodecamp.org/news/react-and-googlesheets/)
sheet.best: https://sheet.best/admin
文件: https://docs.sheet.best/#post-add-rows
sheet: https://docs.google.com/spreadsheets/d/1py458-lF9d2O577ftkpoErpdDDbKyztgyHwAqt35vEY/edit#gid=0
```
