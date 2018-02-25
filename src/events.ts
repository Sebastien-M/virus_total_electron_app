import { ScanUrl } from "./ScanUrl";

let scanbutton: HTMLButtonElement = document.body.querySelector('.scan');

scanbutton.addEventListener('click', () => {
    console.log('aa');
    let url:HTMLInputElement = document.body.querySelector('#url');
    let scan = new ScanUrl(url.value);
    scan.scan();
})