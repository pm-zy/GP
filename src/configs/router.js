import pmIndex from '../pages/index.vue'
import pmClass from '../pages/class.vue'
import pmHomework from '../pages/homework.vue'
import pmExam from '../pages/exam.vue'
import pmProblem from '../pages/problem.vue'
import pmUser from '../pages/user.vue'
import pmAbout from '../pages/about.vue'
import cmpJoin from '../components/joinClass'
import pmMessage from '../pages/message.vue'
import TEST from '../components/Hello.vue'
// 配置路由
export default [{
        path: '/',
        redirect: '/index'
    }, {
        path: '/index',
        component: pmIndex
    }, {
        path: '/class',
        component: pmClass,
        children: [{
            path: 'join',
            component: cmpJoin
        }]
    }, {
        path: '/homework',
        component: pmHomework,
        children: [{
            path: 'undone',
            component: TEST
        }, {
            path: 'done',
            component: TEST
        }],
        redirect: '/homework/undone'
    }, {
        path: '/exam',
        component: pmExam,
        children: [{
            path: 'undone',
            component: TEST
        }, {
            path: 'done',
            component: TEST
        }],
        redirect: '/exam/undone'
    }, {
        path: '/problem',
        component: pmProblem
    },{
        path: '/user/:id',
        component: pmUser
    },
    {
        path: '/exam/:id',
        component: pmUser
    },
    {
        path: '/homework/:id',
        component: pmUser
    }, {
        path: '/about',
        component: pmAbout
    }, {
        path: '/message',
        component: pmMessage,
        children: [{
            path: 'received',
			component: TEST
        }, {
			path: 'send',
			component: TEST,
		}],
		redirect: '/message/received'
    }


]
