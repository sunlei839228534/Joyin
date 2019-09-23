import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    alert: {
      flag: false,
      showBlock: {
        name: '',
        type: '',
      },
      help: {
        waitPayment: false,
        paymentErr: false,
        paymentDoubt: false,
      },
      prompt: {
        pin: false,
        signal: false,
      },
      inquire: {
        show: false,
      },
    },
    stageText: {
      plan: '未开始',
      ongoing: '应援中',
      done: '结束',
    },
    bannerList: [
      {
        url: 'http://starmaker.joyin.online/banner/banner-01.png',
        goto: 'nawukere',
        color: '#3c0e76',
      },
      {
        url: 'http://starmaker.joyin.online/banner/banner-03.png',
        goto: 'twinkle',
        color: '#ffb100ab',
      },
    ],
    project: {
      nawukere: {
        id: '05b69ca3-12d2-403e-b7e3-471b7b0b134b',
        type: 'nawukere',
        stateUrl: 'https://h5.youzan.com/v2/goods/2x48j87masj73',
        stage: 'ongoing',
        title: '带上和那吾克热一起制作的点滴～迎接新年',
        target: 61208,
        intro: '从写真画册，到海带丝们专属的“那吾指针”系列，都是我和团队精心准备的，希望和你们一起创造独家记忆。',
        isOnShelves: true,
        posters: [
          {
            id: '93e6dee7-97ae-40fd-a4be-1c4c513e0951',
            url: 'http://starmaker.joyin.online/nawu/video/nawu.mp4',
            type: 'video',
            cover: 'http://starmaker.joyin.online/nawu/video/nawu_video.jpg',
          },
          {
            id: '93e6dee7-97ae-40fd-a4be-1c4c513e0951',
            url: 'http://starmaker.joyin.online/nawu/nawu-01.png',
            type: 'image',
            cover: '',
          },
        ],
        detailItems: [
          {
            id: '026e35ca-9c25-4f68-bf8a-5060a9a9acb1',
            url: 'http://starmaker.joyin.online/nawu/TOP.png',
            name: null,
            tags: [

            ],
            type: 'image',
            cover: null,
            alt: null,
            createdAt: '2018-12-07T01:52:20.664Z',
            updatedAt: '2018-12-07T01:52:20.664Z',
            version: 1,
          },
          {
            id: '825faf2c-f89f-4696-a943-bb00f8609410',
            url: 'http://starmaker.joyin.online/nawu/02.jpeg',
            name: null,
            tags: [

            ],
            type: 'image',
            cover: null,
            alt: null,
            createdAt: '2018-12-07T01:52:32.132Z',
            updatedAt: '2018-12-07T01:52:32.132Z',
            version: 1,
          },
          {
            id: '18d90e87-fb6b-4d56-b33e-e3bf87d5aad1',
            url: 'http://starmaker.joyin.online/nawu/03.png',
            name: null,
            tags: [

            ],
            type: 'image',
            cover: null,
            alt: null,
            createdAt: '2018-12-07T01:52:59.656Z',
            updatedAt: '2018-12-07T01:52:59.656Z',
            version: 1,
          },
          {
            id: '6d323382-bbaa-4e7d-bc7b-2392745d1b42',
            url: 'http://starmaker.joyin.online/nawu/004.png',
            name: null,
            tags: [

            ],
            type: 'image',
            cover: null,
            alt: null,
            createdAt: '2018-12-07T01:52:44.071Z',
            updatedAt: '2018-12-07T01:52:44.071Z',
            version: 1,
          },
          {
            id: '929054fe-a323-41a2-9b65-0a3138a424ae',
            url: 'http://starmaker.joyin.online/nawu/LAST.png',
            name: null,
            tags: [

            ],
            type: 'image',
            cover: null,
            alt: null,
            createdAt: '2018-12-07T01:53:14.428Z',
            updatedAt: '2018-12-07T01:53:14.428Z',
            version: 1,
          },
        ],
        funders: [
          {
            id: 'f174b649-98fa-4476-a60c-154d9759ee83',
            name: '梦响当然',
            avatarUrl: {
              id: 'aeac51b5-34df-4650-bf82-5cfe7073b316',
              url: 'http://starmaker.joyin.online/nawu/funderfunder_logo.jpg',
              type: 'image',
              cover: null,
            },
            createdAt: '2018-12-07T00:00:56.954Z',
            updatedAt: '2018-12-07T00:00:56.954Z',
            version: 1,
          },
        ],
        createdAt: '2018-12-06T23:56:40.937Z',
        updatedAt: '2018-12-07T03:26:40.000Z',
        version: 30,
        moments: [

        ],
        noticeList: [
          {
            condition: '200%追加',
            reward: '限量那吾指针系列嘻哈毛巾（SET3及以上可获得）',
          },
          {
            condition: '前150名SET3和SET4制作人',
            reward: '可获得那吾专场演唱会380元签名典藏版门票1张',
          },
        ],
        parapacks: [
          {
            id: 'c75caefa-2e01-4d55-b91c-21b2a0aceb73',
            title: 'SET1',
            price: 12.8,
            list: [
              '特别制作人电子证书（含那吾电子签名）',
            ],
            total: 0,
            status: true,
            isOnShelves: true,
            createdAt: '2018-12-07T00:08:24.200Z',
            updatedAt: '2018-12-07T00:08:24.000Z',
            version: 2,
          },
          {
            id: 'cd139121-325b-4f8e-ab69-94b6ee340eb8',
            title: 'SET2',
            price: 312.08,
            list: [
              '特别制作人电子证书（含那吾电子签名）',
              '珍藏现场版签名写真集1本（NOT FOR SALE限定版）',
              '感谢视频（电子版）',
              '写真集特别制作人感谢名单提名（名单将印制在所有实体刊物内，多次购买可获多次提名）',
            ],
            total: 0,
            status: true,
            isOnShelves: true,
            createdAt: '2018-12-07T00:08:18.838Z',
            updatedAt: '2018-12-07T00:08:19.000Z',
            version: 2,
          },
          {
            id: '6e6f133b-7f76-4f51-bfa5-4259f9c41f46',
            title: 'SET3',
            price: 512.08,
            list: [
              '特别制作人电子证书（含那吾电子签名）',
              '珍藏现场版签名写真集1本（NOT FOR SALE限定版）',
              '感谢视频（电子版）',
              '写真集特别制作人感谢名单提名（名单将印制在所有实体刊物内，多次购买可获多次提名）',
              '“那吾指针”项链',
              '那吾定制手机铃声文件（电子版）',
            ],
            total: 0,
            status: true,
            isOnShelves: true,
            createdAt: '2018-12-07T00:08:11.982Z',
            updatedAt: '2018-12-07T00:08:12.000Z',
            version: 2,
          },
          {
            id: 'adb203c7-d24b-4709-bd90-b63eda6756d4',
            title: 'SET4',
            price: 812.08,
            list: [
              '特别制作人电子证书（含那吾电子签名）',
              '珍藏现场版签名写真集1本（NOT FOR SALE限定版）',
              '感谢视频（电子版）',
              '写真集特别制作人感谢名单提名（名单将印制在所有实体刊物内，多次购买可获多次提名）',
              '“那吾指针”项链',
              '那吾定制手机铃声文件（电子版）',
              '那吾限量签名明信片套盒1套',
              '那吾同款“那吾指针”系列鸭舌帽1顶',
              '那吾定制款指针系列嘻哈卫衣1件',
            ],
            total: 0,
            status: true,
            isOnShelves: true,
            createdAt: '2018-12-07T00:08:05.219Z',
            updatedAt: '2018-12-07T00:08:05.000Z',
            version: 2,
          },
          {
            id: '087da5b0-24a5-4e58-94c6-a400c327401d',
            title: 'SET5',
            price: 1312.08,
            list: [
              '特别制作人电子证书（含那吾电子签名）',
              '珍藏现场版签名写真集1本（NOT FOR SALE限定版）',
              '感谢视频（电子版）',
              '写真集特别制作人感谢名单提名（名单将印制在所有实体刊物内，多次购买可获多次提名）',
              '那吾专场演唱会380元签名典藏版门票2张',
              '“那吾指针”项链',
              '那吾定制手机铃声文件（电子版）',
              '那吾限量签名明信片套盒1套',
              '那吾同款“那吾指针”系列鸭舌帽1顶',
              '那吾定制款指针系列嘻哈卫衣1件',
              '那吾15号成都签售会现场合影机会1次（单独合影机会）',
              '演唱会彩排现场观摩体验Special Ticket1张',
              '12.15成都签售会特别嘉宾邀请',
            ],
            total: 50,
            status: true,
            isOnShelves: true,
            createdAt: '2018-12-07T00:04:05.724Z',
            updatedAt: '2018-12-07T00:04:05.000Z',
            version: 2,
          },
          {
            id: 'a7efad4d-73d7-45d6-bea7-126773a198d4',
            title: 'SET6',
            price: 2612.08,
            list: [
              '特别制作人电子证书（含那吾电子签名）',
              '珍藏现场版签名写真集1本（NOT FOR SALE限定版）',
              '感谢视频（电子版）',
              '写真集特别制作人感谢名单提名（名单将印制在所有实体刊物内，多次购买可获多次提名）',
              '那吾专场演唱会380元签名典藏版门票2张',
              '“那吾指针”项链',
              '那吾定制手机铃声文件（电子版）',
              '那吾限量签名明信片套盒2套',
              '那吾同款“那吾指针”系列鸭舌帽2顶',
              '那吾定制款指针系列嘻哈卫衣1件',
              '那吾15号成都签售会现场合影机会1次（单独合影机会）',
              '演唱会彩排现场观摩体验Special Ticket2张',
              '12.15成都签售会特别嘉宾邀请',
              '共同命名和一起选片',
            ],
            total: 1,
            status: true,
            isOnShelves: true,
            createdAt: '2018-12-07T00:03:36.484Z',
            updatedAt: '2018-12-07T00:03:36.000Z',
            version: 2,
          },
        ],
        dateRange: {
          startOn: '2018-12-11',
          endOn: '2019-01-14',
        },
        youzanUrl: 'http://api-youzan-daily.blissr.cn/starmaker/youzan/item/get/446059346',
      },
      twinkle: {
        id: '05b69ca3-12d2-403e-b7e3-471b7b0b134b-asd1',
        youzanUrl: 'http://api-youzan-daily.blissr.cn/starmaker/youzan/item/get/446708419',
        type: 'twinkle',
        stateUrl: 'https://h5.youzan.com/v2/goods/3f0g8ax8pm9fj',
        stage: 'ongoing',
        title: '让新年的每一天都有TWINKLE陪你',
        target: 22019,
        intro: '耀莱影视重磅打造的TWINKLE女团，希望和粉丝们一起打造只属于我们的新年台历，2019年让你的每一天都有我们陪伴吧！',
        isOnShelves: true,
        posters: [
          {
            id: '93e6dee7-97ae-40fd-a4be-0951-1a23dqw2',
            url: 'http://starmaker.joyin.online/TW/video/TW-1.mp4',
            type: 'video',
            cover: 'http://starmaker.joyin.online/TW/video/cover.png',
          },
          {
            id: '93e6dee7-97ae-40fd-a4be-0951-121ea23dqw2',
            url: 'http://starmaker.joyin.online/TW/video/cover.png',
            type: 'image',
            cover: '',
          },
        ],
        detailItems: [
          {
            id: '026e35ca-9c25-4f68-bf8a-5060a9a9acb1',
            url: 'http://starmaker.joyin.online/TW/TOP.png',
            name: null,
            tags: [

            ],
            type: 'image',
            cover: null,
            alt: null,
            createdAt: '2018-12-07T01:52:20.664Z',
            updatedAt: '2018-12-07T01:52:20.664Z',
            version: 1,
          },
          {
            id: '825faf2c-f89f-4696-a943-bb00f8609410',
            url: 'http://starmaker.joyin.online/TW/01.jpeg',
            name: null,
            tags: [

            ],
            type: 'image',
            cover: null,
            alt: null,
            createdAt: '2018-12-07T01:52:32.132Z',
            updatedAt: '2018-12-07T01:52:32.132Z',
            version: 1,
          },
          {
            id: '18d90e87-fb6b-4d56-b33e-e3bf87d5aad1',
            url: 'http://starmaker.joyin.online/TW/002.png',
            name: null,
            tags: [

            ],
            type: 'image',
            cover: null,
            alt: null,
            createdAt: '2018-12-07T01:52:59.656Z',
            updatedAt: '2018-12-07T01:52:59.656Z',
            version: 1,
          },
          {
            id: '6d323382-bbaa-4e7d-bc7b-2392745d1b42',
            url: 'http://starmaker.joyin.online/TW/003.png',
            name: null,
            tags: [

            ],
            type: 'image',
            cover: null,
            alt: null,
            createdAt: '2018-12-07T01:52:44.071Z',
            updatedAt: '2018-12-07T01:52:44.071Z',
            version: 1,
          },
          {
            id: '929054fe-a323-41a2-9b65-0a3138a424ae',
            url: 'http://starmaker.joyin.online/TW/LAST.png',
            name: null,
            tags: [

            ],
            type: 'image',
            cover: null,
            alt: null,
            createdAt: '2018-12-07T01:53:14.428Z',
            updatedAt: '2018-12-07T01:53:14.428Z',
            version: 1,
          },
        ],
        funders: [
          {
            id: 'f174b649-98fa-4476-a60c-154d9759ee83',
            name: 'TWINKLE女团',
            avatarUrl: {
              id: 'aeac51b5-34df-4650-bf82-5cfe7073b316',
              url: 'http://starmaker.joyin.online/TW/funder_logo.png',
              type: 'image',
              cover: null,
            },
            createdAt: '2018-12-07T00:00:56.954Z',
            updatedAt: '2018-12-07T00:00:56.954Z',
            version: 1,
          },
        ],
        createdAt: '2018-12-06T23:56:40.937Z',
        updatedAt: '2018-12-07T03:26:40.000Z',
        version: 40,
        moments: [

        ],
        noticeList: [
          {
            condition: '200%追加',
            reward: 'TWINKLE全员新年LOOK签名明信片',
          },
        ],
        parapacks: [
          {
            id: 'c75caefa-2e01-4d55-b91c-21b2a0aceb73',
            title: 'SET1',
            price: 98,
            list: [
              'Twinkle签名限量版2019新春台历1本',
              '新春台历特别制作人提名（名单将印在实体台历里，多次购买可获得多次提名）',
            ],
            total: 0,
            status: true,
            isOnShelves: true,
            createdAt: '2018-12-07T00:08:24.200Z',
            updatedAt: '2018-12-07T00:08:24.000Z',
            version: 2,
          },
          {
            id: 'cd139121-325b-4f8e-ab69-94b6ee340eb8',
            title: 'SET2',
            price: 198,
            list: [
              'Twinkle限量版2019新春台历1本（定向粉丝签名）',
              '名誉制作人电子证书（含成员电子签名）',
              'Twinkle独家未公开花絮视频（参与制作人将获得视频提名）',
              '指定一名成员的专属答谢视频',
            ],
            total: 0,
            status: true,
            isOnShelves: true,
            createdAt: '2018-12-07T00:08:18.838Z',
            updatedAt: '2018-12-07T00:08:19.000Z',
            version: 2,
          },
          {
            id: '6e6f133b-7f76-4f51-bfa5-4259f9c41f46',
            title: 'SET3',
            price: 598,
            list: [
              'Twinkle签名限量版2019新春台历1本（定向粉丝签名）',
              '名誉制作人电子证书（含成员电子签名）',
              '新春台历特别制作人提名（名单将印在实体台历里，多次购买可获得多次提名）',
              '4名成员的专属答谢视频',
              '与Twinkle成员面对面的视频电话时间（15分钟）',
            ],
            total: 0,
            status: true,
            isOnShelves: true,
            createdAt: '2018-12-07T00:08:11.982Z',
            updatedAt: '2018-12-07T00:08:12.000Z',
            version: 2,
          },
        ],
        dateRange: {
          startOn: '2018-12-14',
          endOn: '2019-01-22',
        },
      },
      wangmengyun: {
        id: '05b69ca3-12d2-403e-b7e3-asdasd-zxc',
        youzanUrl: 'http://api-youzan-daily.blissr.cn/starmaker/youzan/item/get/446708419',
        type: 'wangmengyun',
        stateUrl: 'https://h5.youzan.com/v2/goods/3f0g8ax8pm9fj',
        stage: 'ongoing',
        title: '福布斯女孩汪梦云首张环球旅行专辑项目',
        target: 110304,
        intro: '走遍了大半个地球的福布斯精英汪梦云，用写真专辑和面对面的神秘event回馈粉丝，满足你的一切好奇。',
        isOnShelves: true,
        posters: [
          {
            id: '93e6dee7-97ae-40fd-a4be-0951-1a23dqw2',
            url: 'http://starmaker.joyin.online/wangmengyun/wang.mp4',
            type: 'video',
            cover: 'http://starmaker.joyin.online/wangmengyun/wang.png',
          },
          {
            id: '93e6dee7-97ae-40fd-a4be-0951-121ea23dqw2',
            url: 'http://starmaker.joyin.online/wangmengyun/wang.png',
            type: 'image',
            cover: '',
          },
        ],
        detailItems: [
          {
            id: '026e35ca-9c25-4f68-bf8a-5060a9a9acb1',
            url: 'http://starmaker.joyin.online/wangmengyun/001.png',
            name: null,
            tags: [

            ],
            type: 'image',
            cover: null,
            alt: null,
            createdAt: '2018-12-07T01:52:20.664Z',
            updatedAt: '2018-12-07T01:52:20.664Z',
            version: 1,
          },
          {
            id: '825faf2c-f89f-4696-a943-bb00f8609410',
            url: 'http://starmaker.joyin.online/wangmengyun/002.png',
            name: null,
            tags: [

            ],
            type: 'image',
            cover: null,
            alt: null,
            createdAt: '2018-12-07T01:52:32.132Z',
            updatedAt: '2018-12-07T01:52:32.132Z',
            version: 1,
          },
          {
            id: '18d90e87-fb6b-4d56-b33e-e3bf87d5aad1',
            url: 'http://starmaker.joyin.online/wangmengyun/003.png',
            name: null,
            tags: [

            ],
            type: 'image',
            cover: null,
            alt: null,
            createdAt: '2018-12-07T01:52:59.656Z',
            updatedAt: '2018-12-07T01:52:59.656Z',
            version: 1,
          },
          // {
          //   id: '6d323382-bbaa-4e7d-bc7b-2392745d1b42',
          //   url: 'http://starmaker.joyin.online/wangmengyun/004.png',
          //   name: null,
          //   tags: [

          //   ],
          //   type: 'image',
          //   cover: null,
          //   alt: null,
          //   createdAt: '2018-12-07T01:52:44.071Z',
          //   updatedAt: '2018-12-07T01:52:44.071Z',
          //   version: 1,
          // },
          {
            id: '929054fe-a323-41a2-9b65-0a3138a424ae',
            url: 'http://starmaker.joyin.online/wangmengyun/004.png',
            name: null,
            tags: [

            ],
            type: 'image',
            cover: null,
            alt: null,
            createdAt: '2018-12-07T01:53:14.428Z',
            updatedAt: '2018-12-07T01:53:14.428Z',
            version: 1,
          },
        ],
        funders: [
          {
            id: 'f174b649-98fa-4476-a60c-154d9759ee83',
            name: '汪梦云',
            avatarUrl: {
              id: 'aeac51b5-34df-4650-bf82-5cfe7073b316',
              url: 'http://starmaker.joyin.online/wangmengyun/logo.jpg',
              type: 'image',
              cover: null,
            },
            createdAt: '2018-12-07T00:00:56.954Z',
            updatedAt: '2018-12-07T00:00:56.954Z',
            version: 1,
          },
        ],
        createdAt: '2018-12-06T23:56:40.937Z',
        updatedAt: '2018-12-07T03:26:40.000Z',
        version: 40,
        moments: [

        ],
        noticeList: [
          {
            condition: '150%追加',
            reward: '未公开限量签名专属礼物',
          },
          {
            condition: '300%追加',
            reward: '所有签名和感谢均升级为专属1对1签名',
          },
        ],
        parapacks: [
          {
            id: 'c75caefa-2e01-4d55-b91c-21b2a0aceb73',
            title: 'SET1',
            price: 4.3,
            list: [
              '特别制作人电子证书（含汪梦云电子签名）',
            ],
            total: 0,
            status: true,
            isOnShelves: true,
            createdAt: '2018-12-07T00:08:24.200Z',
            updatedAt: '2018-12-07T00:08:24.000Z',
            version: 2,
          },
          {
            id: 'cd139121-325b-4f8e-ab69-94b6ee340eb8',
            title: 'SET2',
            price: 143,
            list: [
              '特别制作人电子证书（含汪梦云电子签名）',
              '旅行专辑1本（NOT FOR SALE限定版）         ',
              '感谢视频（电子版）1对1的感谢视频              ',
            ],
            total: 0,
            status: true,
            isOnShelves: true,
            createdAt: '2018-12-07T00:08:18.838Z',
            updatedAt: '2018-12-07T00:08:19.000Z',
            version: 2,
          },
          {
            id: '6e6f133b-7f76-4f51-bfa5-4259f9c41f46',
            title: 'SET3',
            price: 243,
            list: [
              '特别制作人电子证书（含汪梦云电子签名）',
              '旅行专辑1本（NOT FOR SALE限定版）         ',
              '感谢视频（电子版）1对1的感谢视频              ',
              '专辑特别制作人感谢名单提名（名单将印制在所有实体刊物内） ',
              '汪梦云个人品牌睡眠面膜                              '
            ],
            total: 0,
            status: true,
            isOnShelves: true,
            createdAt: '2018-12-07T00:08:11.982Z',
            updatedAt: '2018-12-07T00:08:12.000Z',
            version: 2,
          },
          {
            id: '6e6f133b-7f76-4f51-bfa5-4259f9c41f46',
            title: 'SET4',
            price: 643,
            list: [
              '特别制作人电子证书（含汪梦云电子签名）',
              '专属签名旅行专辑1本（NOT FOR SALE限定版）+签名旅行专辑1本（出版发售版）',
              '1对1的感谢视频（电子版）+特别微博感谢',
              '专辑特别制作人感谢名单提名（名单将印制在所有实体刊物内） ',
              '汪梦云个人品牌睡眠面膜                              ',
              '汪梦云特别旅行写真签名明信片1套            ',
              '汪梦云定制早安、晚安闹铃文件（电子版）',
              '汪梦云旅行专辑发布会专属嘉宾邀请函1张+现场合影    ',
            ],
            total: 0,
            status: true,
            isOnShelves: true,
            createdAt: '2018-12-07T00:08:11.982Z',
            updatedAt: '2018-12-07T00:08:12.000Z',
            version: 2,
          },
          {
            id: '6e6f133b-7f76-4f51-bfa5-4259f9c41f46',
            title: 'SET5',
            price: 1043,
            list: [
              '特别制作人电子证书（含汪梦云电子签名）',
              '专属签名旅行专辑1本（NOT FOR SALE限定版）+专属签名旅行专辑1本（出版发售版）',
              '1对1的感谢视频（电子版）+特别微博感谢',
              '专辑特别制作人感谢名单提名（名单将印制在所有实体刊物内） ',
              '汪梦云个人品牌睡眠面膜                              ',
              '汪梦云特别旅行写真签名明信片1套            ',
              '汪梦云定制早安、晚安闹铃文件（电子版）',
              '汪梦云旅行专辑发布会专属嘉宾邀请函1张+现场合影    ',
              '1对1的视频谈话——和你一起规划人生，满足你的一切好奇心',
              '“如何成为福布斯女孩“手把手教你做旅行自媒体KOL（视频课程）',
            ],
            total: 0,
            status: true,
            isOnShelves: true,
            createdAt: '2018-12-07T00:08:11.982Z',
            updatedAt: '2018-12-07T00:08:12.000Z',
            version: 2,
          },
          {
            id: '6e6f133b-7f76-4f51-bfa5-4259f9c41f46',
            title: 'SET6',
            price: 9843,
            list: [
              '特别制作人电子证书（含汪梦云电子签名）',
              '专属签名旅行专辑1本（NOT FOR SALE限定版）+专属签名旅行专辑3本（出版发售版）',
              '1对1的感谢视频（电子版）+特别微博感谢',
              '专辑特别制作人感谢名单提名（名单将印制在所有实体刊物内） ',
              '汪梦云个人品牌睡眠面膜                              ',
              '汪梦云特别旅行写真签名明信片1套            ',
              '汪梦云定制早安、晚安闹铃文件（电子版）',
              '汪梦云旅行专辑发布会专属嘉宾邀请函1张+现场合影    ',
              '1对1的视频谈话——和你一起规划人生，满足你的一切好奇心',
              '“如何成为福布斯女孩“手把手教你做旅行自媒体KOL（视频课程）',
              '和梦云一起出国旅行（含全程行程费用，旅行目的地暂定：东南亚及周边国家海岛）',
              '和梦云本次同行旅行专辑共同命名权',
              '点名生日祝福视频或点名品牌助力视频',
            ],
            total: 0,
            status: true,
            isOnShelves: true,
            createdAt: '2018-12-07T00:08:11.982Z',
            updatedAt: '2018-12-07T00:08:12.000Z',
            version: 2,
          },
        ],
        dateRange: {
          startOn: '2018-12-14',
          endOn: '2019-01-22',
        },
      },
    },
  },
  mutations: {
    changeAlert(state, block) {
      const dataList = state;
      const e = dataList.alert.showBlock;
      if (!block) {
        dataList.alert[e.name][e.type] = false;
        dataList.alert.flag = false;
        dataList.alert.showBlock = {
          name: '',
          type: '',
        };
        return;
      }
      if (e.type !== '') {
        dataList.alert[e.name][e.type] = false;
      }
      dataList.alert[block.name][block.type] = block.flag;
      dataList.alert.flag = block.flag;
      dataList.alert.showBlock.name = block.name;
      dataList.alert.showBlock.type = block.type;
    },
  },
  actions: {

  },
});
