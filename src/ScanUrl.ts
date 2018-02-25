export class ScanUrl {
    req: XMLHttpRequest;
    apikey:string;
    apiurl:string;
    url:string;

    constructor(url:string) {
        this.url = url;
        this.req = new XMLHttpRequest();
        this.apikey = '34f9a86b556a3673b3d5beecad1750ee64e29af72eb355a94e7a14bdc3e2e6ce';
        this.apiurl = 'https://www.virustotal.com/vtapi/v2/url/scan';
    }

    scan() {
        this.response()
        this.req.open('POST', this.apiurl, true);
        this.req.send(`apikey=${this.apikey}&url=${this.url}`);
    }

    response(){
        this.req.onreadystatechange = function(event) {
            if (this.readyState === XMLHttpRequest.DONE) {
                if (this.status === 200) {
                    console.log("Réponse reçue: %s", this.responseText);
                } else {
                    console.log("Status de la réponse: %d (%s)", this.status, this.statusText);
                }
            }
        };
    }

} 