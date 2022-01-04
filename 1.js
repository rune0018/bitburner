//bitburner script in javascript
export async function main(ns) {
    while(true){
        var scan = ns.scan();
        for(let i = 0; i < scan.length; i++){
            var deepScan = ns.Scan(scan[i]);
            for(let j = 0; j < deepScan.length; j++){
                if(!await ns.hasRootAccess(scan[i])&&await ns.getServerNumPortsRequired(scan[i]) == 0 && await ns.getServerRequiredHackingLevel(host)< await ns.getHackingLevel()){
                    await ns.nuke(scan[i])
                }
                if(await ns.hasRootAccess(deepScan[j])){
                    await ns.wget("https://raw.githubusercontent.com/rune0018/bitburner/master/2.js", "2.js",scan[i]);
                    await ns.exec("2.js", scan[i])
                }
                await ns.sleep(100)
            }
            if(!await ns.hasRootAccess(scan[i])&&await ns.getServerNumPortsRequired(scan[i]) == 0 && await ns.getServerRequiredHackingLevel(host)< await ns.getHackingLevel()){
                await ns.nuke(scan[i])
            }
            if(await ns.hasRootAccess(scan[i])){
                await ns.wget("https://raw.githubusercontent.com/rune0018/bitburner/master/2.js", "2.js",scan[i]);
                await ns.exec("2.js", scan[i]);
            }
            await ns.sleep(100);
        }
        await ns.sleep(1000);
    }
    
}