import User from './components/user/User.vue';
import Home from './components/Home.vue';
import UserStart from './components/user/UserStart.vue';
import UserEdit from './components/user/UserEdit.vue';
import UserDetails from './components/user/UserDetails.vue';
import Header from './components/Header.vue';

export const routes = [
  {
    path: '',
    name: 'Home',
    components: {
      default: Home,
      'header-top': Header,
    }
  },
  {
    path: '/user',
    components: {
      default: User,
      'header-bottom': Header
    },
    children: [
      {
        path: '',
        component: UserStart
      },
      {
        path: ':id',
        component: UserDetails
      },
      {
        path: ':id/edit',
        component: UserEdit,
        name: 'userEdit'
      }
    ]
  },
];

