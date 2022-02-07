//bitburner script in javascript
export async function main(ns) {
    while(true){
        var scan = ns.scan();
        for(let i = 0; i < scan.length; i++){
            if(scan[i] == 'darkweb'){
                break;
            }
            await ns.run('injectscan.js',1,scan[i])
            await ns.sleep(100);
        }
        await ns.sleep(1000);
    }
    
//    await ns.wget("https://raw.githubusercontent.com/rune0018/bitburner/master/2.js", "2.js");
//    await ns.run('2.js',Math.floor(await ns.getServerMaxRam(await ns.getHostname())/await ns.getScriptRam('2.js')),await ns.getHostname())
}