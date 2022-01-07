//bitburner script in javascript
async function injectscan (name){
    let {ip} = await ns.getServer(name)
    throw "......"
    var scan = await ns.scan(name)
    for(let k = 0; k < deeperScan.length;k++){
        injectscan(scan)
        await ns.sleep(100)
    }
    await ns.run('maxinject.js',1,ip)
    await ns.sleep(100)
}
export async function main(ns) {
    ns.injectscan = Object.assign(ns.injectscan,injectscan)
    while(true){
        var scan = ns.scan();
        for(let i = 0; i < scan.length; i++){
            if(scan[i] == 'darkweb'){
                break;
            }
            var deepScan = await ns.scan(scan[i]);
            let {ip} = await ns.getServer(scan[i])
            for(let j = 0; j < deepScan.length; j++){
                await ns.injectscan(deepScan[j])
                //let server2 = await ns.getServer(deepScan[j])
                ////await ns.tprint(server2.ip)
                //var deeperScan = await ns.scan(deepScan[j])
                //for(let k = 0; k < deeperScan.length;k++){
                //    let server3 = await ns.getServer(deeperScan[j])
                //    //await ns.tprint(server3.ip)
                //    await ns.run('maxinject.js',1,server3.ip)
                //    await ns.sleep(100)
                //}
                //await ns.run('maxinject.js',1,server2.ip)
                //await ns.sleep(100)
            }
        
            await ns.run('maxinject.js',1,ip)

            await ns.sleep(100);
        }
        await ns.sleep(1000);
    }
    
//    await ns.wget("https://raw.githubusercontent.com/rune0018/bitburner/master/2.js", "2.js");
//    await ns.run('2.js',Math.floor(await ns.getServerMaxRam(await ns.getHostname())/await ns.getScriptRam('2.js')),await ns.getHostname())
}