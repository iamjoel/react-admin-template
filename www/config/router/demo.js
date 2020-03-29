export default {
  path: '/demo',
  component: '@/layouts/BlankLayout',
  routes: [
    {
      path: '/demo/user',
      component: '@/layouts/UserLayout',
      routes: [
        {
          path: '/demo/user',
          redirect: '/demo/user/login',
        },
        {
          name: 'login',
          icon: 'smile',
          path: '/demo/user/login',
          component: '@/pages/demo/user/login',
        },
        {
          name: 'register-result',
          icon: 'smile',
          path: '/demo/user/register-result',
          component: '@/pages/demo/user/register-result',
        },
        {
          name: 'register',
          icon: 'smile',
          path: '/demo/user/register',
          component: '@/pages/demo/user/register',
        },
        
        {
          component: '404',
        },
      ],
    },
    {
      path: '/demo/',
      component: '@/layouts/BasicLayout',
      Routes: ['src/pages/Authorized'],
      authority: ['admin', 'user'],
      routes: [
        {
          path: '/demo/dashboard',
          name: 'dashboard',
          icon: 'dashboard',
          routes: [
            {
              name: 'analysis',
              icon: 'smile',
              path: '/demo/dashboard/analysis',
              component: '@/pages/demo/dashboard/analysis',
            },
            {
              name: 'monitor',
              icon: 'smile',
              path: '/demo/dashboard/monitor',
              component: '@/pages/demo/dashboard/monitor',
            },
            {
              name: 'workplace',
              icon: 'smile',
              path: '/demo/dashboard/workplace',
              component: '@/pages/demo/dashboard/workplace',
            },
          ],
        },
        {
          path: '/demo/form',
          icon: 'form',
          name: 'form',
          routes: [
            {
              name: 'basic-form',
              icon: 'smile',
              path: '/demo/form/basic-form',
              component: '@/pages/demo/form/basic-form',
            },
            {
              name: 'step-form',
              icon: 'smile',
              path: '/demo/form/step-form',
              component: '@/pages/demo/form/step-form',
            },
            {
              name: 'advanced-form',
              icon: 'smile',
              path: '/demo/form/advanced-form',
              component: '@/pages/demo/form/advanced-form',
            },
          ],
        },
        {
          path: '/demo/list',
          icon: 'table',
          name: 'list',
          routes: [
            {
              path: '/demo/list/search',
              name: 'search-list',
              component: '@/pages/demo/list/search',
              routes: [
                {
                  path: '/demo/list/search',
                  redirect: '/demo/list/search/articles',
                },
                {
                  name: 'articles',
                  icon: 'smile',
                  path: '/demo/list/search/articles',
                  component: '@/pages/demo/list/search/articles',
                },
                {
                  name: 'projects',
                  icon: 'smile',
                  path: '/demo/list/search/projects',
                  component: '@/pages/demo/list/search/projects',
                },
                {
                  name: 'applications',
                  icon: 'smile',
                  path: '/demo/list/search/applications',
                  component: '@/pages/demo/list/search/applications',
                },
              ],
            },
            {
              name: 'table-list',
              icon: 'smile',
              path: '/demo/list/table-list',
              component: '@/pages/demo/list/table-list',
            },
            {
              name: 'basic-list',
              icon: 'smile',
              path: '/demo/list/basic-list',
              component: '@/pages/demo/list/basic-list',
            },
            {
              name: 'card-list',
              icon: 'smile',
              path: '/demo/list/card-list',
              component: '@/pages/demo/list/card-list',
            },
          ],
        },
        {
          path: '/demo/profile',
          name: 'profile',
          icon: 'profile',
          routes: [
            {
              name: 'basic',
              icon: 'smile',
              path: '/demo/profile/basic',
              component: '@/pages/demo/profile/basic',
            },
            {
              name: 'advanced',
              icon: 'smile',
              path: '/demo/profile/advanced',
              component: '@/pages/demo/profile/advanced',
            },
          ],
        },
        {
          name: 'result',
          icon: 'CheckCircleOutlined',
          path: '/demo/result',
          routes: [
            {
              name: 'success',
              icon: 'smile',
              path: '/demo/result/success',
              component: '@/pages/demo/result/success',
            },
            {
              name: 'fail',
              icon: 'smile',
              path: '/demo/result/fail',
              component: '@/pages/demo/result/fail',
            },
            {
              name: '注册结果页',
              icon: 'smile',
              path: '/demo/result/userregisterresult',
              component: '@/pages/demo/result/userRegisterResult',
            },
          ],
        },
        {
          name: 'exception',
          icon: 'warning',
          path: '/exception',
          routes: [
            {
              name: '403',
              icon: 'smile',
              path: '/exception/403',
              component: '@/pages/exception/403',
            },
            {
              name: '404',
              icon: 'smile',
              path: '/exception/404',
              component: '@/pages/404',
            },
            {
              name: '500',
              icon: 'smile',
              path: '/exception/500',
              component: '@/pages/exception/500',
            },
          ],
        },
        {
          name: 'account',
          icon: 'user',
          path: '/demo/account',
          routes: [
            {
              name: 'center',
              icon: 'smile',
              path: '/demo/account/center',
              component: '@/pages/demo/account/center',
            },
            {
              name: 'settings',
              icon: 'smile',
              path: '/demo/account/settings',
              component: '@/pages/demo/account/settings',
            },
          ],
        },
        {
          name: 'editor',
          icon: 'highlight',
          path: '/demo/editor',
          routes: [
            {
              name: 'flow',
              icon: 'smile',
              path: '/demo/editor/flow',
              component: '@/pages/demo/editor/flow',
            },
            {
              name: 'mind',
              icon: 'smile',
              path: '/demo/editor/mind',
              component: '@/pages/demo/editor/mind',
            },
            {
              name: 'koni',
              icon: 'smile',
              path: '/demo/editor/koni',
              component: '@/pages/demo/editor/koni',
            },
          ],
        },
        {
          path: '/demo/',
          redirect: '/demo/dashboard/analysis',
          authority: ['admin', 'user'],
        },
      ],
    },
  ],
}