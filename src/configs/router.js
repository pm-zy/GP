import pmIndex from '../pages/index.vue'
import pmClass from '../pages/class.vue'
import pmHomework from '../pages/homework.vue'
import pmExam from '../pages/exam.vue'
import pmProblem from '../pages/problem.vue'
import pmInfo from '../pages/info.vue'
import pmUser from '../pages/user.vue'
import pmAbout from '../pages/about.vue'
import cmpJoin from '../components/joinClass'
import cmpTask from '../components/taskList'
import cmpMessage from '../components/messageList'
import cmpMessageDetail from '../components/messageDetail'
import cmpModifyPassword from '../components/modifyPassword'
import cmpDownloadList from '../components/downloadList'
import cmpWarehouse from '../components/warehouse'
import pmMessage from '../pages/message.vue'
import pmLogin from '../pages/login.vue'
import pmExamDetail from '../pages/examDetail.vue'
import pmHomeworkDetail from '../pages/homeworkDetail.vue'
import pmTask from '../pages/task.vue'
import pm404 from '../pages/404.vue'
import pmRegister from '../pages/register.vue'
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
        path: '/info',
        component: pmInfo,
        children: [{
            path: 'download',
            component: cmpDownloadList
        }, {
            path: 'warehouse',
            component: cmpWarehouse
        }],
        redirect: '/info/download'
    },{
        path: '/user/:id',
        component: pmUser,
        children: [{
            path: 'modifyPassword',
            component: cmpModifyPassword
        }]
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
            path: 'read',
			component: cmpMessage
        }, {
			path: 'unread',
			component: cmpMessage,
		}, {
			path: 'detail',
			component: cmpMessageDetail,
		}],
		redirect: '/message/unread'
    }, {
        path: '/login',
        component: pmLogin
    }, {
        path: '/register',
        component: pmRegister
    }, {
        path: '/404',
        component: pm404
    }, {
        path: '/task',
        component: pmTask,
        children: [{
            path: 'undone',
            component: cmpTask
        }, {
            path: 'done',
            component: cmpTask
        }],
        redirect: '/task/undone'
    }, {
        path: '*',
        redirect: '/404'
    },


]
