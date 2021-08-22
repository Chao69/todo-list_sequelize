# Todo List Sequelize
本次專案將先前mongodb為資料庫的todo list改為使用My SQL做為資料庫，從中理解關連性及非關聯性資料庫的差別並且學習如何建立My SQL且透過

sequelize語法在與資料庫做溝通。

## 功能
使用者可透過註冊取得屬於自己的todo list清單帳戶

使用者可直接透過facebook進行第三方登入

使用者可在todo list中進行增、刪、改、查指定todo

## 編程環境
Node.js v10.24.1

## 使用框架及套件
- express 4.17.1
- express-handlebars 5.3.2
- body-parser 1.19.0
- bootstrap 5.0.2
- jquery 3.6.0.min
- popper 2.9.2
- passport 0.4.1
- passport-facebook  3.0.0
- passport-local 1.0.0
- mysql2 2.3.0
- sequelize 6.6.5

## 安裝方法
- 開啟終端機(terminal)，點擊Code，將HTTPS的URL Clone至本機電腦
- 透過終端機(terminal)進入專案資料夾
- 安裝npm套件 (nodemon套件可裝可不裝)
- 在終端機輸入指令 $ npx sequelize db:seed:all 載入種子資料
- 在終端機輸入指令 $ npm run dev
- 將終端機(terminal)顯示的 http://localhost:3000 複製到瀏覽器即可體驗

體驗帳戶：
root@example.com

123456
