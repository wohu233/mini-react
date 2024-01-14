//v1
// 创建一个div元素
// const dom = document.createElement("div")
// // 设置该div元素的id为app
// dom.id = "app"
// // 将该div元素添加到id为root的元素中
// document.querySelector('#root').append(dom)
//
//
// const textNode = document.createTextNode("")
// textNode.nodeValue = "app"
// dom.append(textNode)

//v2 react → vdom → js object

//dom结构是一颗树
//如何描述子节点
//type props chidren
// const textEl = {
//     type: "TEXT_ELEMENT",
//     props: {
//         nodeValue: "app",
//         children: [],
//     },
// }

function createTextNode(text){
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    }
}

// const el = {
//     type: "div",
//     props: {
//         id: "app",
//         children: [textEl],
//     },
// };

function createElement(type,props,...children){
    return {
        type,
        props: {
            ...props,
            children,
        },
    }
}

const textEl = createTextNode("我真正想要显示的1");
const App = createElement("div",{id:"idApp"},textEl)

const dom = document.createElement(App.type)
// 设置该div元素的id为app
// dom.id = App.props.id
dom.id = "App.props.id"
// 将该div元素添加到id为root的元素中
document.querySelector('#root').append(dom)

const textNode = document.createTextNode("")
textNode.nodeValue = App.props.children[0].props.nodeValue
dom.append(textNode)

/**
 * 1.创建元素(element)节点(node)
 * 2.设置节点属性props
 * 3.将节点添加到父级节点之后
 */