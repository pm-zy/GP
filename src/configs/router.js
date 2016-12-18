import pmIndex from '../pages/index.vue'
import pmClass from '../pages/class.vue'
import pmHomework from '../pages/homework.vue'
import pmExam from '../pages/exam.vue'
import pmProblem from '../pages/problem.vue'
import pmUser from '../pages/user.vue'
import pmAbout from '../pages/about.vue'
import cmpJoin from '../components/joinClass'
import pmMessage from '../pages/message.vue'
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
        component: pmHomework
    }, {
        path: '/exam',
        component: pmExam
    }, {
        path: '/problem',
        component: pmProblem
    },{
        path: '/user/:id',
        component: pmUser
    }, {
        path: '/about',
        component: pmAbout
    }, {
        path: '/message',
        component: pmMessage,
        children: [{
            path: 'received',
            
        }]
    }


]
