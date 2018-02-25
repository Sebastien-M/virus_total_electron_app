
let holder: HTMLDivElement = document.body.querySelector('#drag-file');

holder.ondragover = () => {
    return false;
};

holder.ondragleave = () => {
    return false;
};

holder.ondragend = () => {
    return false;
};

holder.ondrop = (e) => {
    e.preventDefault();

    console.log(e.dataTransfer.files[0].path)

    return false;
};
