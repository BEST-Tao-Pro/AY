import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component:  ()=>import ("@/views/home/index.vue")
    },
    {
      path: '/login',
      
      component:  ()=>import ("@/views/home/login.vue")
    },
    {
      path:'/mangerhome',
      component:()=>import("@/views/back/index.vue"),
      children:[

        {
          path:'self',
          component:()=>import('@/views/back/zujian/self.vue'),

        },
        {
          path:'other',
          component:()=>import('@/views/back/zujian/others.vue'),

        },

        {
              path:'all',
              component:()=>import('@/views/back/zujian/allinone.vue')
      
              },
              {
                path:'usermanger',
                component:()=>import('@/views/back/zujian/usermanger.vue'),
                
        
                },

    ]
    },
  ]
})

export default router
