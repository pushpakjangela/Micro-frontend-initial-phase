import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import {createMemoryHistory,createBrowserHistory} from "history";
const mount = (element,{onSignIn,onNavigate,defaultHistory,initialPath}) => {
    // we use this because we are using react router in the child app and we want to use the same history
    const history = defaultHistory || createMemoryHistory({
        initialEntries:[initialPath]
    });

    if (onNavigate) {
        history.listen(onNavigate);
    }

    ReactDOM.render(
        <App history={history} onSignIn={onSignIn}/>,
        element
    );

    // this function is called by the container app to update the route when the child app navigates
    return {
        onParentNavigate: ({pathname:nextPathname}) => {
            console.log("location in auth",history.location)
            const {pathname} = history.location;
            if (pathname !== nextPathname) {
                history.push(nextPathname);
            }
        }
    }
};
if(process.env.NODE_ENV === 'development') {
    const devRoot = document.querySelector('#_auth-dev-root');
    if (devRoot) {
        mount(devRoot,{defaultHistory:createBrowserHistory()});
    }
}
export {mount};