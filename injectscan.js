/** @param {NS} ns **/
export async function main(ns) {
	let server2 = await ns.getServer(ns.args[0])
    //await ns.tprint(server2.ip)
    var deeperScan = await ns.scan(ns.args[0])
    if(deeperScan.length > 1){
        for(let k = 0; k < deeperScan.length;k++){
            let server3 = await ns.getServer(deeperScan[k])
            await ns.run('injectscan.js',1,server3.ip)
            await ns.sleep(100)
        }
    }
    await ns.run('maxinject.js',1,server2.ip)
    await ns.sleep(100)
}