import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "听潮公考",
  description: "听潮公考是一个专注于公务员考试备考的平台，提供公基、法律、科技等科目的资料。",
  head: [['link', { rel: 'icon', href: '/logo.svg' }]],
  markdown: {
    toc: { level: [1, 2, 3] },
    container: {
      noteLabel: '注意',
      tipLabel: '提示',
      warningLabel: '警告',
      cautionLabel: '危险',
      infoLabel: '信息',
      importantLabel:'重要',
      detailsLabel: '详细信息',
    },
    math: true
  },
  themeConfig: {
    logo: '/logo.svg',
    logoLink: 'https://tide.iglooblog.top',
    lastUpdated: {
      text: '上次相逢于',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'medium'
      }
    },
    outlineTitle: '目录',
    docFooter: {
      prev: '灯下旧文',
      next: '晨光新章'
    },
    footer: {
      message: 'Released under the CCBY 4.0 License.',
      copyright: 'Copyright © 2025-present Tide'
    },
    // https://vitepress.dev/reference/default-theme-config
    search: {
      provider: 'algolia',
      options: {
        appId: 'U1SFUGWXX3',
        apiKey: '9fbd67e9e9402aa5c5895594b472df38',
        indexName: 'tide',
        askAi: {
          assistantId: 'U4GdQoNHU3QQ'
        },
        locales: {
          root: {
            placeholder: '搜索文档',
            translations: {
              button: {
                buttonText: '搜索文档',
                buttonAriaLabel: '搜索文档'
              },
              modal: {
                searchBox: {
                  clearButtonTitle: '清除查询条件',
                  clearButtonAriaLabel: '清除查询条件',
                  closeButtonText: '关闭',
                  closeButtonAriaLabel: '关闭',
                  placeholderText: '搜索文档',
                  placeholderTextAskAi: '向 AI 提问：',
                  placeholderTextAskAiStreaming: '回答中...',
                  searchInputLabel: '搜索',
                  backToKeywordSearchButtonText: '返回关键字搜索',
                  backToKeywordSearchButtonAriaLabel: '返回关键字搜索'
                },
                startScreen: {
                  recentSearchesTitle: '搜索历史',
                  noRecentSearchesText: '没有搜索历史',
                  saveRecentSearchButtonTitle: '保存至搜索历史',
                  removeRecentSearchButtonTitle: '从搜索历史中移除',
                  favoriteSearchesTitle: '收藏',
                  removeFavoriteSearchButtonTitle: '从收藏中移除',
                  recentConversationsTitle: '最近的对话',
                  removeRecentConversationButtonTitle: '从历史记录中删除对话'
                },
                errorScreen: {
                  titleText: '无法获取结果',
                  helpText: '你可能需要检查你的网络连接'
                },
                footer: {
                  selectText: '选择',
                  submitQuestionText: '提交问题',
                  selectKeyAriaLabel: 'Enter 键',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '向上箭头',
                  navigateDownKeyAriaLabel: '向下箭头',
                  closeText: '关闭',
                  backToSearchText: '返回搜索',
                  closeKeyAriaLabel: 'Esc 键',
                  poweredByText: '搜索提供者'
                },
                noResultsScreen: {
                  noResultsText: '无法找到相关结果',
                  suggestedQueryText: '你可以尝试查询',
                  reportMissingResultsText: '你认为该查询应该有结果？',
                  reportMissingResultsLinkText: '点击反馈'
                },
                askAiScreen: {
                  disclaimerText: '答案由 AI 生成，可能不准确，请自行验证。',
                  relatedSourcesText: '相关来源',
                  thinkingText: '思考中...',
                  copyButtonText: '复制',
                  copyButtonCopiedText: '已复制！',
                  copyButtonTitle: '复制',
                  likeButtonTitle: '赞',
                  dislikeButtonTitle: '踩',
                  thanksForFeedbackText: '感谢你的反馈！',
                  preToolCallText: '搜索中...',
                  duringToolCallText: '搜索 ',
                  afterToolCallText: '已搜索'
                },
              },
            },
          },
        },
      },
    },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '政治',
        items: [
          { text: '马克思主义基本原理', link: '/max/' },
          { text: '马克思主义政治经济学', link: '/maxpe/1' },
          { text: '中国近代史纲要', link: '/zhhistory/1' },
          { text: '毛中特', link: '/mzt/' },
          { text: '思想道德修养', link: '/ideology/1' },
        ]
      },
      {
        text: '行测',
        items: [
          { text: '判断推理', link: '/reason/1' },
          { text: '言语理解', link: '/language-understanding/1' },
          { text: '数量分析', link: '/quantity/1' },
          { text: '资料分析', link: '/data/1' },
        ]
      },
      {
        text: '公基',
        items: [
          { text: '物理', link: '/physics/' },
          { text: '化学', link: '/chemistry/' },
          { text: '生物', link: '/biology/' },
          { text: '信息', link: '/information/' },
        ]
      },
      { text: '申论', link: '/essay/' },
      {
        text: '法律',
        items: [
          { text: '宪法', link: 'https://law.iglooblog.top/constitution/1.html' },
          { text: '民法典', link: 'https://law.iglooblog.top/civillaw/' },
          { text: '刑法', link: 'https://law.iglooblog.top/criminal/1.html' },
          { text: '诉讼法', link: 'https://law.iglooblog.top/proceeding/' },
        ]
      },
    ],

    sidebar: {
      '/essay/': [
        {
          text: '申论',
          items: [
            { text: '阅读材料技巧', link: '/essay/1' },
            { text: '论点论据大集合', link: '/essay/5' },
            { text: '结尾六大技巧', link: '/essay/6' },
          ]
        }
      ],
      '/ideology/': [
        {
          text: '马克思主义政治经济学',
          items: [
            { text: '人生的青春之问', link: '/ideology/1' },
            { text: '人生理想', link: '/ideology/2' },
            { text: '中国精神', link: '/ideology/3' },
            { text: '明大德守公德严私德', link: '/ideology/4' },
            { text: '社会主义核心价值观', link: '/ideology/5' },
            { text: '法治道路与思维', link: '/ideology/6' },
          ]
        }
      ],
      '/language-understanding/': [
        {
          text: '言语理解',
          items: [
            { text: '中心理解题', link: '/language-understanding/1' },
            { text: '细节判断题', link: '/language-understanding/2' },
            { text: '语句排序题', link: '/language-understanding/3' },
            { text: '语句填空题', link: '/language-understanding/4' },
            { text: '接语选择题', link: '/language-understanding/5' },
            { text: '逻辑填空', link: '/language-understanding/6' },
          ]
        }
      ],
      '/max/': [
        {
          text: '马克思主义基本原理',
          items: [
            { text: '马克思主义原理导论', link: '/max/' },
            { text: '物质观与意识观', link: '/max/1' },
            { text: '辩证法', link: '/max/2' },
            { text: '认识论', link: '/max/3' },
            { text: '唯物史观', link: '/max/4' },
            { text: '资本主义的本质与规律', link: '/max/5' },
            { text: '剩余价值的生产与积累', link: '/max/6' },
            { text: '剩余价值的流转与分配', link: '/max/7' },
            { text: '垄断资本主义的发展', link: '/max/8' },
            { text: '科学社会主义', link: '/max/9' },
          ]
        }
      ],
      '/maxpe/': [
        {
          text: '马克思主义政治经济学',
          items: [
            { text: '商品的由来', link: '/maxpe/1' },
            { text: '微观经济学', link: '/maxpe/2' },
            { text: '宏观经济学', link: '/maxpe/3' },
            { text: '社会主义市场经济', link: '/maxpe/4' },
          ]
        }
      ],
      '/mzt/': [
        {
          text: '毛泽东思想与中特理论',
          items: [
            { text: '马克思主义中国化的三次飞跃', link: '/mzt/' },
            { text: '毛泽东思想及其历史地位', link: '/mzt/1' },
            { text: '新民主主义革命理论', link: '/mzt/2' },
            { text: '社会主义改造理论', link: '/mzt/3' },
            { text: '社会主义建设道路初步抿索的理论成果', link: '/mzt/4' },
            { text: '邓小平理论', link: '/mzt/5' },
            { text: '“三个代表”重要思想', link: '/mzt/6' },
            { text: '科学发展观', link: '/mzt/7' },
            { text: '习近平新时代中国特色社会主次思想及其历史地位', link: '/mzt/8' },
            { text: '坚持和发展中国特色社会主义的总任务', link: '/mzt/9' },
            { text: '“五位一体”总体布局(经济)', link: '/mzt/10' },
            { text: '“五位一体”总体布局(政治)', link: '/mzt/11' },
            { text: '“五位一体”总体布局(文化)', link: '/mzt/12' },
            { text: '“五位一体”总体布局(社会)', link: '/mzt/13' },
            { text: '“五位一体”总体布局(生态)', link: '/mzt/14' },
            { text: '“四个全面”战略布局', link: '/mzt/15' },
            { text: '实现中华民族伟大复兴的重要保障', link: '/mzt/16' },
            { text: '中国特色大国外交', link: '/mzt/17' },
            { text: '坚持和加强党的领导', link: '/mzt/18' },
          ]
        }
      ],
      'quantity':[
        {
          text: '数量关系',
          items: [
            { text: '数学思维', link: '/quantity/1' },
            { text: '工程问题', link: '/quantity/2' },
            { text: '费用问题', link: '/quantity/3' },
            { text: '行程问题', link: '/quantity/4' },
            { text: '几何问题', link: '/quantity/5' },
          ]
        }
      ],
      'reason':[
        {
          text: '判断推理',
          items: [
            { text: '图形推理', link: '/reason/1' },
            { text: '类比推理', link: '/reason/2' },
            { text: '定义判断', link: '/reason/3' },
            { text: '逻辑判断', link: '/reason/4' },
            { text: '分析推理', link: '/reason/5' },
          ]
        }
      ],
      '/zhhistory/': [
        {
          text: '中国近代史纲要',
          items: [
            { text: '反抗外国侵略的斗争', link: '/zhhistory/1' },
            { text: '对国家出路的早期探索', link: '/zhhistory/2' },
            { text: '辛亥革命与君主专制制度的终结', link: '/zhhistory/3' },
            { text: '开天辟地的大事件', link: '/zhhistory/4' },
            { text: '中国革命的新道路', link: '/zhhistory/5' },
            { text: '中华民族的抗日战争', link: '/zhhistory/6' },
            { text: '为新中国而奋斗', link: '/zhhistory/7' },
            { text: '社会主义基本制度在中国的确立', link: '/zhhistory/8' },
            { text: '社会主义建设在探索中曲折发展', link: '/zhhistory/9' },
            { text: '中国特色社会主义的开创与接续发展', link: '/zhhistory/10' },
          ]
        },
        {
          text: '中共党史',
          items: [
            { text: '中国共产党成立的条件', link: '/zhhistory/a' },
            { text: '党的成立到大革命失败', link: '/zhhistory/b' },
            { text: '土地革命', link: '/zhhistory/c' },
            { text: '全面抗战', link: '/zhhistory/d' },
            { text: '社会主义制度的确立', link: '/zhhistory/e' },
            { text: '改革开放', link: '/zhhistory/f' },
          ]
        }
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
