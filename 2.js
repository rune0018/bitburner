export async function main(ns) {
    var t = 0
    while(true){
	    if(ns.getServerMaxRam(ns.getHostname())-ns.getServerUsedRam(ns.getHostname()) > 3.15){
    		ns.run('1.js',1,t)
    	}
    	else{
    		ns.hack(ns.getHostname())
    		if(t == 10){
	    		ns.grow(ns.getHostname())
	    		ns.weaken(ns.getHostname())
	    		t = 0
    		}
    	}
    	t++
        ns.sleep(100)
    }
}