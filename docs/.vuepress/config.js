module.exports = {
    base:"/wheel-ui/",
    title: 'wheel UI',
    description: '一个自制的简易UI框架',
    themeConfig: {
      displayAllHeaders: true,
        nav: [
          { text: 'Home', link: '/' },
          { text: 'Guide', link: '/guide/' },
          { text: 'External', link: 'https://google.com' },
        ],
        sidebar: [
            {
                title:'开始使用',
                collapsable: false, // 可选的, 默认值是 true,
                children: [
                  '/guide/',
                  '/get-start/',
                ]
               
              },
              {
                title: '组件',
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth:0,    // 可选的, 默认值是 1
                children: [
                  '/components/grid',
                  '/components/container',
                  '/components/tabs',
                  '/components/popover',
                  '/components/toast',
                  '/components/collapse',
                  '/components/button',
                  '/components/input',
                  '/components/icon',
                  
                ],
              }
           
           
          ]
      }
  }