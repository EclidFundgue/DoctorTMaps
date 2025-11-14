const videoUploaders = {
    oo: {
        name: "OlympicsObserver",
        picture: "https://i0.hdslb.com/bfs/face/cb15658aa3b154936ede75be2b01001395b9948d.jpg@128w_128h_1c_1s.webp",
        homePage: "https://space.bilibili.com/179752461"
    },
    jl: {
        name: "快乐小激佬",
        picture: "https://i2.hdslb.com/bfs/face/47884a29135a7cf435cb5092fbec091ebcf50686.jpg@128w_128h_1c_1s.webp",
        homePage: "https://space.bilibili.com/473965764"
    },
    ss: {
        name: "战神阿瑞斯449",
        picture: "https://i2.hdslb.com/bfs/face/0edc4461bc9137d7b9308a946b1731e3a53de01f.jpg@128w_128h_1c_1s.webp",
        homePage: "https://space.bilibili.com/3546676079888827"
    },
    ncqm: {
        name: "南城浅墨",
        picture: "https://i2.hdslb.com/bfs/face/74f3eb1595aa9dd88b3440821aa8ae68ab54f3e0.jpg@128w_128h_1c_1s.webp",
        homePage: "https://space.bilibili.com/95523670"
    }
}

videoLists = {
    "BV1J6kDBjEec": {
        title: "[海岛奇兵] 小博士69-75（列妹爆本7728%血量加成 突破极限）",
        url: "https://www.bilibili.com/video/BV1J6kDBjEec",
        up: videoUploaders.oo
    },
    "BV1ackyBUEXn": {
        title: "[海岛奇兵] 小博士70-76（76阶段8574%血量加成）",
        url: "https://www.bilibili.com/video/BV1ackyBUEXn",
        up: videoUploaders.oo
    },
    "BV1iz1dBAEKW": {
        title: "海岛奇兵：小博士威胁67（第三梯队），70阶段未曾设想的开局，73阶段逆天蓝血6775%极限拿下，暂时回到第二梯队",
        url: "https://www.bilibili.com/video/BV1iz1dBAEKW",
        up: videoUploaders.ss
    },
    "BV18NkkBMEMt": {
        title: "恐怖小博士69-75阶段，血清神威但是野人",
        url: "https://www.bilibili.com/video/BV18NkkBMEMt",
        up: videoUploaders.jl
    },
    "BV1xVkyB6Eou": {
        title: "11.11小博士，有血清在难度不高74.75阶回放有误差",
        url: "https://www.bilibili.com/video/BV1xVkyB6Eou",
        up: videoUploaders.ncqm
    },
    "BV1tukyBVEn7": {
        title: "海岛奇兵：[完整通关版]小博士威胁68（第三梯队），加速血清的到来对于高阶小博士有没有什么影响？",
        url: "https://www.bilibili.com/video/BV1tukyBVEn7",
        up: videoUploaders.ss
    }
}

const timelineData = [
    {
        number: -13,
        mainImage: "images/stage23.jpg",
        info: [
            {
                date: "10.21",
                stage: "68阶",
            },
        ],
        variants: []
    },
    {
        number: -12,
        mainImage: "images/stage22.jpg",
        info: [
            {
                date: "10.21",
                stage: "69阶",
            },
            { date: "10.18", stage: "66阶" },
        ],
        variants: []
    },
    {
        number: -11,
        mainImage: "images/stage21.jpg",
        info: [
            { date: "10.21", stage: "70阶" },
            {
                date: "10.18",
                stage: "67阶",
            },
        ],
        variants: []
    },
    {
        number: -10,
        mainImage: "images/stage20.jpg",
        info: [
            { date: "10.21", stage: "71阶" },
            { date: "10.28", stage: "67阶" },
            { date: "10.18", stage: "68阶" },
        ],
        variants: []
    },
    {
        number: -9,
        mainImage: "images/stage19.jpg",
        info: [
            { date: "10.21", stage: "72阶" },
            { date: "10.28", stage: "68阶" },
            { date: "10.18", stage: "69阶" },
        ],
        variants: ["images/stage19_v1.jpg"]
    },
    {
        number: -8,
        mainImage: "images/stage18.jpg",
        info: [
            { date: "11.4", stage: "65阶" },
            { date: "10.28", stage: "69阶" },
            { date: "10.25", stage: "66阶" },
            { date: "10.18", stage: "70阶" },
        ],
        variants: []
    },
    {
        number: -7,
        mainImage: "images/stage17.jpg",
        info: [
            { date: "11.4", stage: "66阶" },
            { date: "10.28", stage: "70阶" },
            { date: "10.25", stage: "67阶" },
            { date: "10.18", stage: "71阶" },
        ],
        variants: ["images/stage17_v1.jpg"]
    },
    {
        number: -6,
        mainImage: "images/stage13.jpg",
        info: [
            { date: "11.4", stage: "67阶" },
            { date: "10.28", stage: "71阶" },
            { date: "10.25", stage: "68阶" },
            { date: "10.18", stage: "72阶" },
        ],
        variants: []
    },
    {
        number: -5,
        mainImage: "images/stage14.jpg",
        info: [
            { date: "11.4", stage: "68阶" },
            { date: "10.28", stage: "72阶" },
            { date: "10.25", stage: "69阶" },
        ],
        variants: []
    },
    {
        number: -4,
        mainImage: "images/stage15.jpg",
        info: [
            { date: "11.4", stage: "69阶" },
            { date: "10.28", stage: "73阶" },
        ],
        variants: ["images/stage15_v1.jpg"]
    },
    {
        number: -3,
        mainImage: "images/stage16.jpg",
        info: [
            { date: "11.4", stage: "70阶" },
            { date: "11.1", stage: "67阶" },
        ],
        variants: []
    },
    {
        number: -2,
        mainImage: "images/stage10.jpg",
        info: [
            { date: "11.11", stage: "67阶" },
            { date: "11.4", stage: "71阶" },
            { date: "11.1", stage: "68阶" },
        ],
        variants: []
    },
    {
        number: -1,
        mainImage: "images/stage9.jpg",
        info: [
            {
                date: "11.11",
                stage: "68阶",
                videos: [
                    "BV1tukyBVEn7",
                ]
            },
            { date: "11.4", stage: "72阶" },
            { date: "11.1", stage: "69阶" },
        ],
        variants: ["images/stage9_v1.jpg"]
    },
    {
        number: 0,
        mainImage: "images/stage8.jpg",
        info: [
            {
                date: "11.11",
                stage: "69阶",
                videos: [
                    "BV18NkkBMEMt",
                    "BV1tukyBVEn7",
                ]
            },
            { date: "11.4", stage: "73阶" },
            { date: "11.1", stage: "70阶" },
        ],
        variants: ["images/stage8_v1.jpg"]
    },
    {
        number: 1,
        mainImage: "images/stage1.jpg",
        info: [
            {
                date: "11.11",
                stage: "70阶",
                videos: [
                    "BV1ackyBUEXn",
                    "BV18NkkBMEMt",
                    "BV1tukyBVEn7",
                ]
            },
            {
                date: "11.8",
                stage: "67阶",
                videos: [
                    "BV1iz1dBAEKW",
                ]
            },
            { date: "11.4", stage: "74阶" },
            { date: "11.1", stage: "71阶" },
        ],
        variants: ["images/stage1_v1.jpg"]
    },
    {
        number: 2,
        mainImage: "images/stage2.jpg",
        info: [
            {
                date: "11.11",
                stage: "71阶",
                videos: [
                    "BV1ackyBUEXn",
                    "BV18NkkBMEMt",
                    "BV1tukyBVEn7",
                ]
            },
            {
                date: "11.8",
                stage: "68阶",
                videos: [
                    "BV1iz1dBAEKW",
                ]
            },
            { date: "11.1", stage: "72阶" },
        ],
        variants: []
    },
    {
        number: 3,
        mainImage: "images/stage3.jpg",
        info: [
            {
                date: "11.11",
                stage: "72阶",
                videos: [
                    "BV1ackyBUEXn",
                    "BV18NkkBMEMt",
                    "BV1tukyBVEn7",
                ]
            },
            {
                date: "11.8",
                stage: "69阶",
                videos: [
                    "BV1J6kDBjEec",
                    "BV1iz1dBAEKW",
                ]
            },
            { date: "11.1", stage: "73阶" },
        ],
        variants: []
    },
    {
        number: 4,
        mainImage: "images/stage4.jpg",
        info: [
            {
                date: "11.11",
                stage: "73阶",
                videos: [
                    "BV1ackyBUEXn",
                    "BV18NkkBMEMt",
                    "BV1tukyBVEn7",
                ]
            },
            {
                date: "11.8",
                stage: "70阶",
                videos: [
                    "BV1J6kDBjEec",
                    "BV1iz1dBAEKW",
                ]
            },
            { date: "11.1", stage: "74阶" },
        ],
        variants: ["images/stage4_v1.jpg"]
    },
    {
        number: 5,
        mainImage: "images/stage5.jpg",
        info: [
            {
                date: "11.11",
                stage: "74阶",
                videos: [
                    "BV1ackyBUEXn",
                    "BV18NkkBMEMt",
                    "BV1tukyBVEn7",
                    "BV1xVkyB6Eou",
                ]
            },
            {
                date: "11.8",
                stage: "71阶",
                videos: [
                    "BV1J6kDBjEec",
                    "BV1iz1dBAEKW",
                ]
            },
        ],
        variants: ["images/stage5_v1.jpg"]
    },
    {
        number: 6,
        mainImage: "images/stage6.jpg",
        info: [
            {
                date: "11.11",
                stage: "75阶",
                videos: [
                    "BV1ackyBUEXn",
                    "BV18NkkBMEMt",
                    "BV1xVkyB6Eou",
                ]
            },
            {
                date: "11.8",
                stage: "72阶",
                videos: [
                    "BV1J6kDBjEec",
                    "BV1iz1dBAEKW",
                ]
            },
        ],
        variants: ["images/stage6_v1.jpg"]
    },
    {
        number: 7,
        mainImage: "images/stage7.jpg",
        info: [
            {
                date: "11.11",
                stage: "76阶",
                videos: [
                    "BV1ackyBUEXn",
                ]
            },
            {
                date: "11.8",
                stage: "73阶",
                videos: [
                    "BV1J6kDBjEec",
                    "BV1iz1dBAEKW",
                ]
            },
        ],
        variants: []
    },
    {
        number: 8,
        mainImage: "images/stage11.jpg",
        info: [
            {
                date: "11.8",
                stage: "74阶",
                videos: [
                    "BV1J6kDBjEec",
                ]
            },
        ],
        variants: []
    },
    {
        number: 9,
        mainImage: "images/stage12.jpg",
        info: [
            {
                date: "11.8",
                stage: "75阶",
                videos: [
                    "BV1J6kDBjEec",
                ]
            },
        ],
        variants: []
    },
];