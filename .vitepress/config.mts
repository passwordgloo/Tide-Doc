import { defineConfig } from 'vitepress'
import fs from 'node:fs'
import path from 'node:path'
import type { Dirent } from 'node:fs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  lang: 'zh-CN',
  title: "听潮公考",
  description: "听潮公考是一个专注于公考备考的平台，提供公基、法律、科技等方向的备考资料。",
  markdown: {
    container: {
      tipLabel: '提示',
      warningLabel: '警告',
      dangerLabel: '危险',
      infoLabel: '信息',
      importantLabel:'重要',
      detailsLabel: '详细信息',
    }
  },
  themeConfig: {
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
          { text: '判断推理', link: '/preface/' },
          { text: '言语理解', link: '/language-understanding/1' },
          { text: '数量分析', link: '/number-analysis/' }
        ]
      },
      {
        text: '公基',
        items: [
          { text: '科技史', link: '/technology-history/' },
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

    // 自动生成侧边栏配置
    sidebar: (() => {
      // 解析Markdown文件的标题
      const getMarkdownTitle = (filePath: string): string => {
        try {
          const content = fs.readFileSync(filePath, 'utf-8');
          
          // 先尝试从frontmatter中获取title
          const frontmatterMatch = content.match(/^---\s*([\s\S]*?)\s*---/);
          if (frontmatterMatch) {
            const frontmatter = frontmatterMatch[1];
            const titleMatch = frontmatter.match(/title:\s*(['"]?)(.*?)\1\s*$/m);
            if (titleMatch) {
              return titleMatch[2];
            }
          }
          
          // 如果没有frontmatter，尝试获取第一个H1标题
          const h1Match = content.match(/^#\s+(.*)$/m);
          if (h1Match) {
            return h1Match[1];
          }
          
          // 如果都没有，返回文件名（去掉扩展名）
          return path.basename(filePath, '.md');
        } catch (error) {
          console.error(`Error reading file ${filePath}:`, error);
          return path.basename(filePath, '.md');
        }
      };
      
      // 根据目录结构生成侧边栏配置
      const generateSidebar = (dir: string): Record<string, any[]> => {
        const sidebar: Record<string, any[]> = {};
        // 使用__dirname代替process.cwd()
        const basePath = path.join(__dirname, '..', dir);
        
        try {
          const dirs = fs.readdirSync(basePath, { withFileTypes: true })
            .filter((dirent: Dirent) => dirent.isDirectory())
            .map((dirent: Dirent) => dirent.name);
          
          dirs.forEach((dirName: string) => {
            const fullPath = path.join(basePath, dirName);
            const files = fs.readdirSync(fullPath)
              .filter((file: string) => file.endsWith('.md'))
              .sort();
            
            if (files.length > 0) {
              const items: any[] = [];
              
              // 检查是否有index.md文件
              const indexFile = files.find((file: string) => file === 'index.md');
              
              // 处理其他md文件（不包括index.md）
              files.forEach((file: string) => {
                if (file !== 'index.md') {
                  const fileName = path.basename(file, '.md');
                  items.push({
                    text: getMarkdownTitle(path.join(fullPath, file)),
                    link: `/${dirName}/${fileName}`
                  });
                }
              });
              
              // 使用目录对应的index.md的标题作为分组标题
              const groupTitle = indexFile 
                ? getMarkdownTitle(path.join(fullPath, indexFile))
                : dirName;
              
              // 只有当有其他文件或者没有index.md时才添加侧边栏配置
              if (items.length > 0 || !indexFile) {
                sidebar[`/${dirName}/`] = [{
                  text: groupTitle,
                  items
                }];
              }
            }
          });
        } catch (error) {
          console.error('Error generating sidebar:', error);
        }
        
        return sidebar;
      };
      
      // 生成侧边栏配置
      const sidebarConfig = generateSidebar('.');
      
      // 可以在这里添加自定义配置覆盖自动生成的配置
      // 例如：sidebarConfig['/custom/'] = [{ text: 'Custom', items: [...] }];
      
      return sidebarConfig;
    })(),


    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
