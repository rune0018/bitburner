export async function main(ns) {
    var t = 0
    while(true){
	    if(getServerMaxRam(getHostname())-getServerUsedRam(getHostname()) > 3.15){
    		run('1.js',1,t)
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
    }
}