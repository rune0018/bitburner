//bitburner script in javascript
export async function main(ns) {
    var s1 = true;
    while(true){
        var scan = ns.scan();
        for(let i = 0; i < scan.length; i++){
            if(!await ns.hasRootAccess(scan[i])){
                await ns.nuke(scan[i])
                s1 = true;
            }
            else if(s1){
                await ns.wget("https://raw.githubusercontent.com/rune0018/bitburner/master/2.js", "2.js",scan[i]);
                await ns.exec("2.js", scan[i]);
                s1 = false;
            }
        }
        await ns.sleep(1000);
    }
    
}