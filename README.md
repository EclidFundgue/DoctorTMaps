# 🏝️ 海岛奇兵 - 恐怖博士地图合集

一个用于展示海岛奇兵（Boom Beach）恐怖博士（小博士）各阶段地图和打法的在线工具。

## ✨ 特性

- 📅 **时间轴展示** - 按时间顺序展示恐怖博士各阶段的地图
- 🖼️ **图片放大查看** - 支持点击图片放大查看细节
- 🎬 **视频攻略链接** - 集成相关视频攻略和UP主信息
- 📱 **响应式设计** - 完美支持桌面端和移动端浏览
- 🔄 **动态加载** - 分批加载历史数据，提升页面性能
- 🎯 **变异阵型** - 展示同一关卡的不同变异原型

## 🌐 在线访问

访问网站：[https://eclidfundgue.github.io/DoctorTMaps](https://eclidfundgue.github.io/DoctorTMaps)

## 📸 界面预览

网站提供横屏和竖屏两种浏览模式，支持左右滑动查看历史阶段。

## 🚀 本地运行

由于本项目是纯静态网站，可以直接通过浏览器打开 `index.html` 文件，或使用本地服务器运行：

### 使用 Python

```bash
# Python 3
python -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

### 使用 Node.js

```bash
npx http-server
```

然后在浏览器中访问 `http://localhost:8000`

## 📁 项目结构

```
DoctorTMaps/
├── index.html          # 主页面
├── styles.css          # 样式文件
├── script.js           # 主要JavaScript逻辑
├── data/               # 数据文件
│   ├── timeline.js     # 时间轴数据（地图阶段信息）
│   ├── videos.js       # 视频信息数据
│   └── uploaders.js    # UP主信息数据
├── images/             # 地图图片资源
│   └── stage*.jpg      # 各阶段地图图片
├── avatar/             # UP主头像资源
├── README.md           # 项目说明文档
└── LICENSE             # MIT许可证
```

## 🔧 数据更新

### 添加新地图阶段

编辑 `data/timeline.js` 文件，在 `timelineData` 数组中添加新的地图数据：

```javascript
{
    number: 1,
    mainImage: "images/stageX.jpg",
    info: [
        {
            date: "MM.DD",
            stage: "XX阶",
            videos: ["BV1xxxxxxxxx"]  // 可选
        }
    ],
    variants: ["images/stageX_v1.jpg"]  // 变异阵型（可选）
}
```

### 添加视频信息

编辑 `data/videos.js` 文件，添加视频和UP主信息：

```javascript
videoLists["BV1xxxxxxxxx"] = {
    url: "视频链接",
    title: "视频标题",
    up: {
        name: "UP主名称",
        homePage: "UP主主页链接",
        picture: "avatar/xxx.jpg"
    }
};
```

### 添加UP主信息

编辑 `data/uploaders.js` 文件，添加UP主的基本信息。

## 💡 使用说明

1. **浏览地图**：页面加载后会显示最近的地图阶段
2. **加载更多**：点击"加载更多"按钮查看更早的历史阶段
3. **查看详情**：点击地图图片可以放大查看
4. **观看视频**：将鼠标悬停在日期/阶段标签上查看相关视频攻略
5. **横向滑动**：在桌面端可以左右拖动时间轴进行浏览

## 🤝 贡献指南

欢迎贡献地图数据、视频攻略或代码改进！

1. Fork 本仓库
2. 创建你的特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交你的改动 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启一个 Pull Request

### 贡献内容建议

- 📷 新的地图阶段图片（高清截图）
- 🎬 优质的打法视频链接
- 🐛 Bug修复
- ✨ 新功能建议
- 📝 文档改进

## 📄 许可证

本项目采用 MIT 许可证 - 详见 [LICENSE](LICENSE) 文件

## 🙏 鸣谢

感谢所有提供地图数据和视频攻略的玩家与UP主！

---

**注意**：本项目仅供游戏玩家交流学习使用，与 Supercell 公司无关。
