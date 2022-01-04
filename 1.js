//bitburner script in javascript
export async function main(ns) {
    var cycles = 5;
    while(cycles>1){
        var scan = ns.scan();
        for(let i = 0; i < scan.length; i++){
            //var deepScan = ns.scan(scan[i]);
            //for(let j = 0; j < deepScan.length; j++){
            //    if(!await ns.hasRootAccess(scan[i])&&await ns.getServerNumPortsRequired(scan[i]) == 0 && await ns.getServerRequiredHackingLevel(host)< await ns.getHackingLevel()){
            //        await ns.nuke(deepScan[i])
            //    }
            //    if(await ns.hasRootAccess(deepScan[j])&& await ns.getScriptRam('2.js', deepScan[j])< 1){
            //        await ns.wget("https://raw.githubusercontent.com/rune0018/bitburner/master/2.js", "2.js",scan[i]);
            //        await ns.exec("2.js", deepScan[i])
            //    }
            //    await ns.sleep(100)
            //}
            if(!await ns.hasRootAccess(scan[i])&&await ns.getServerNumPortsRequired(scan[i]) == 0 && await ns.getServerRequiredHackingLevel(host)< await ns.getHackingLevel()){
                await ns.nuke(scan[i])
            }
            if(await ns.hasRootAccess(scan[i])&& await ns.getScriptRam('1.js', scan[i])< 1){
                await ns.wget("https://raw.githubusercontent.com/rune0018/bitburner/master/1.js", "1.js",scan[i]);
                await ns.exec("1.js", scan[i]);
                cycles++;
            }

            await ns.sleep(100);
        }
        cycles--;
        await ns.sleep(1000);
    }
    await ns.wget("https://raw.githubusercontent.com/rune0018/bitburner/master/2.js", "2.js");
    await ns.run('2.js',Math.floor(await ns.getServerMaxRam(hostname)/await ns.getScriptRam('2.js')),ns.args[0])
}