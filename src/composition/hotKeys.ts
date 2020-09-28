const hotKeys = (func: Function, ...codes: string[]) => {
    let pressed = new Set();

    document.addEventListener('keydown', event => {
        pressed.add(event.code);

        for (let code of codes) {
            if (!pressed.has(code)) {
                return;
            }
        }

        pressed.clear();
        func();
    });

    document.addEventListener('keyup', event => pressed.delete(event.code));
};

export default hotKeys
