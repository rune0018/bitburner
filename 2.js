export async function main(ns) {
    var t = 0
    var hostname = await ns.getHostname()
    while(true){
	    if(ns.getServerMaxRam(hostname)-ns.getServerUsedRam(hostname) > 3.15){
    		ns.run('1.js',1,t)
    	}
    	else{
    		await ns.hack(ns.getHostname())
    		if(t == 10){
	    		await ns.grow(ns.getHostname())
	    		await ns.weaken(ns.getHostname())
	    		t = 0
    		}
    	}
    	t++
        ns.sleep(100)
    }
}