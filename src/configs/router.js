import pmIndex from '../pages/index.vue'
import pmClass from '../pages/class.vue'
import pmHomework from '../pages/homework.vue'
import pmExam from '../pages/exam.vue'
import pmProblem from '../pages/problem.vue'
import pmUser from '../pages/user.vue'
import pmAbout from '../pages/about.vue'
import cmpJoin from '../components/joinClass'
import pmMessage from '../pages/message.vue'
import pmLogin from '../pages/login.vue'
import pmExamDetail from '../pages/examDetail.vue'
import pmHomeworkDetail from '../pages/homeworkDetail.vue'
import pm404 from '../pages/404.vue'
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
        component: pmExamDetail
    },
    {
        path: '/homework/:id',
        component: pmHomeworkDetail
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
    }, {
        path: '/login',
        component: pmLogin
    }, {
        path: '/404',
        component: pm404
    }


]
