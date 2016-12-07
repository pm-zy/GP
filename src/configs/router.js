import pmIndex from '../pages/index.vue'
import pmClass from '../pages/class.vue'
import pmHomework from '../pages/homework.vue'
import pmExam from '../pages/exam.vue'
import pmProblem from '../pages/problem.vue'

// 配置路由
export default [{
        path: '/',
        component: pmIndex
    }, {
        path: '/class',
        component: pmClass
    }, {
        path: '/homework',
        component: pmHomework
    }, {
        path: '/exam',
        component: pmExam
    }, {
        path: '/problem',
        component: pmProblem
    },


]
