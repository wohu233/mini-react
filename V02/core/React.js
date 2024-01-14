//v2 react → vdom → js object

function createTextNode(text) {
    return {
        type: "TEXT_ELEMENT",
        props: {
            nodeValue: text,
            children: [],
        },
    }
}


function createElement(type, props, ...children) {
    return {
        type,
        props: {
            ...props,
            children: children.map((child) => {
                return typeof child === "string" ? createTextNode(child) : child;
            }),
        },
    };
}

/**
 * 1.创建元素(element)节点(node)
 * 2.设置节点属性props
 * 3.将节点添加到父级节点之后
 */


function render(blueprint, parentNode) {
    //todo 學習一下dom的數據結構
    const dom =
        blueprint.type === "TEXT_ELEMENT"
            ? document.createTextNode("")
            : document.createElement(blueprint.type);

    //id class
    Object.keys(blueprint.props).forEach(
        (key) => {
            if (key !== "children") {
                dom[key] = blueprint.props[key];
            }
        }
    )
    const children = blueprint.props.children;
    children.forEach(
        (child) => {
            render(child, dom);
        }
    )
    parentNode.append(dom);
}

const React = {
    render,
    createElement,
}

export default React