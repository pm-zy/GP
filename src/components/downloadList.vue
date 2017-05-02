<template>
    <div class="download-list">
        <ul>
            <li v-for="item in downloadList">
                <a :href="item.url">
                    <div class="pic">
                        <img :src="item.img" alt="图片" />
                    </div>
                    <h4>{{item.name}}</h4>
                    <p>{{item.desc}}</p>
                </a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data() {
        return {
            downloadList: []
        }
    },
    created() {
        this.getDownloadList();
    },
    methods: {
        getDownloadList() {
            this.downloadList = [
                {
                    id: 1234,
                    url: '/fsdfsdf',
                    name: '下载1',
                    desc: '资源下载测试',
                    size: '5.2M'
                }, {
                    id: 1235,
                    url: '/fsdfsdf',
                    name: '下载2资源下载测试资源下载测试资源下载测试资源下载测试',
                    desc: '资源下载测试资源下载测试资源下载测试资源下载测试资源下载测试资源下载测试资源下载测试',
                    size: '5.2M'
                }, {
                    id: 1236,
                    url: '/fsdfsdf',
                    name: '下载3',
                    desc: '资源下载测试',
                    size: '5.2M'
                }, {
                    id: 1236,
                    url: '/fsdfsdf',
                    name: '下载3',
                    desc: '资源下载测试',
                    size: '5.2M'
                }, {
                    id: 1236,
                    url: '/fsdfsdf',
                    name: '下载3',
                    desc: '资源下载测试',
                    size: '5.2M'
                }, {
                    id: 1236,
                    url: '/fsdfsdf',
                    name: '下载3',
                    desc: '资源下载测试',
                    size: '5.2M'
                }, {
                    id: 1236,
                    url: '/fsdfsdf',
                    name: '下载3',
                    desc: '资源下载测试',
                    size: '5.2M'
                }, {
                    id: 1236,
                    url: '/fsdfsdf',
                    name: '下载3',
                    desc: '资源下载测试',
                    size: '5.2M'
                }
            ];
            this.downloadList.forEach((d) => {
                d.img = `/static/assets/${new Date().getTime() % 21}.jpg`
            })
        }
    }
}
</script>

<style lang="less">
.download-list {
    margin-left: 180px;
    padding: 20px;
    ul {
        li {
            display: inline-block;
            background-color: rgba(3, 80, 193, 0.15);
            padding: 10px 10px;
            margin: 10px 10px;
            box-sizing: border-box;
            height: 330px;
            width: 220px;
            overflow: hidden;
            a {
                color: #333;
                .pic {
                    height: 200px;
                    width: 200px;
                    overflow: hidden;
                    text-align: center;
                    background-color: rgba(255, 255, 255, 0.4);
                }
                h4 {
                    height: 2em;
                    overflow: hidden;
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 2;
                    -webkit-box-orient: vertical;
                }
                p {
                    overflow: hidden;
                    display: -webkit-box;
                    text-overflow: ellipsis;
                    -webkit-line-clamp: 3;
                    -webkit-box-orient: vertical;
                }
            }

        }
    }
}
</style>
