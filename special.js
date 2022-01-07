/** @param {NS} ns **/
export async function main(ns) {
	while(true){
		if(ns.getServerMaxMoney(ns.args[0]) != ns.getServerMoneyAvailable(ns.args[0])){
			await ns.grow(ns.args[0])
		}else if(ns.getServerSecurityLevel(ns.args[0]) != ns.getServerMinSecurityLevel(ns.args[0])){
			await ns.weaken(ns.args[0])
		}else{
			await ns.hack(ns.args[0])
		}
	}

}