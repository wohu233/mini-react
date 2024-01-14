//v1
// 创建一个div元素
const dom = document.createElement("div")
// 设置该div元素的id为app
dom.id = "app"
// 将该div元素添加到id为root的元素中
document.querySelector('#root').append(dom)


const textNode = document.createTextNode("")
textNode.nodeValue = "app"
dom.append(textNode)

//v2 react → vdom → js object

//dom结构是一颗树
//如何描述子节点
//type props chidren
const textEl = {
    type: "TEXT_ELEMENT",
    props: {
        nodeValue: "app",
        children: [],
    },
}
const el = {
    type: "div",
    props: {
        id: "app",
        children: [textEl],
    },
};