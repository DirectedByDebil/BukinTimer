export function dispatchEventUtil(module, type, detail) {
    
    if (!module || !type || !detail) {
        console.error("empty module, type or detail!");
        return;
    }

    const event = new CustomEvent(type, {
        bubbles: true,
        cancelable: false,
        detail: detail
    });

    const origin = window[module] || window;

    if (typeof origin.dispatchEvent === 'function') {
        origin.dispatchEvent(event);
    }
    else {
        window.dispatchEvent(event);
    }
}


export function setEventTargetBehavior(...objects){

    const eventTarget = new EventTarget();

    for (const obj of objects) {
        if(!obj) continue;

        obj.addEventListener = eventTarget.addEventListener.bind(eventTarget);
        obj.removeEventListener = eventTarget.removeEventListener.bind(eventTarget);
        obj.dispatchEvent = eventTarget.dispatchEvent.bind(eventTarget);
    }
}