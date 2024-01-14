//V1
// 创建一个div元素
const dom = document.createElement("div")
// 设置该div元素的id为app
dom.id="app"
// 将该div元素添加到id为root的元素中
document.querySelector('#root').append(dom)


const textNode = document.createTextNode("")
textNode.nodeValue = "app"
dom.append(textNode)