/**
 * Define all of your application routes here
 * for more information on routes, see the
 * official documentation https://router.vuejs.org/en/
 */
export default [
  {
    path: '/login',
    // Relative to /src/views
    view: 'Login'
  },
  {
    path: '/register',
    // Relative to /src/views
    view: 'Register'
  },
  {
    path: '/every-class',
    name: 'EveryClass',
    view: 'EveryClass'
  },
  {
    path: '/every-classroom',
    name: 'EveryClassroom',
    view: 'EveryClassroom'
  },
  ,
  {
    path: '/classroom',
    name: 'Classroom',
    view: 'Classroom'
  },
  {
    path: '/history',
    name: 'History',
    view: 'History'
  },
  ,
  {
    path: '/history-detail',
    name: 'HistoryDetail',
    view: 'HistoryDetail'
  },
  {
    path: '/profile',
    name: 'ข้อมูลส่วนบุคคล',
    view: 'Profile'
  },
]
