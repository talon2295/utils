import * as fs from 'fs'



export class JsonDB {
    [k: string]: any;

    private __basefile: string = "" ;
    //private __db = {};

    constructor(filename: string = "database.json") {
        this.__basefile = filename ;
        if(!fs.existsSync(filename)){
            this.flush();
        }
        this.loadJson()
    }

    private generateJson(toFile = true) {
        let db = {
            keys: [],
            values: {},
        };
        Object.getOwnPropertyNames(this).filter(p => p != '__basefile').forEach(p => {
            db.keys.push(p)
            db.values[p] = this[p]
        })
        return toFile ? db : db.values ;
    }
    private loadJson() {
        let data = JSON.parse(fs.readFileSync(this.__basefile).toString())
        data.keys.forEach(p => {
            this[p] = data.values[p]
        })
    }

    flush(verbose = false) {
        let jDb = this.generateJson()
        fs.writeFileSync(this.__basefile,JSON.stringify(jDb))
        if(verbose)
            console.log("JSON DB FLUSH", jDb)
    }

    json() {
        return this.generateJson(false) ;
    }

    log() {
        console.log(this.generateJson(false)) ;
    }
}