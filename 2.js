export async function main(ns) {
    var t = 0
    var hostname = await ns.getHostname()
    while(true){
	    if(await ns.getServerMaxRam(hostname)-await ns.getServerUsedRam(hostname) > 3.15){
    		await ns.run('1.js',1,t)
    	}
    	else{
    		await ns.hack(hostname)
    		if(t == 10){
	    		await ns.grow(hostname)
	    		await ns.weaken(hostname)
	    		t = 0
    		}
    	}
    	t++
        await ns.sleep(100)
    }
}