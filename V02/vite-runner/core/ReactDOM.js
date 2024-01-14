import React from "./React.js";
const ReactDOM = {
    createRoot(parentNode){
        return {
            render(App){
                React.render(App,parentNode)
            },
        };
    },
};

export default ReactDOM;