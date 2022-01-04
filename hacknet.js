/** @param {NS} ns **/
export async function main(ns) {
	while(true){
		await ns.sleep(100)
		for(let i = 0;i<await ns.hacknet.numNodes();i++){
			await ns.hacknet.upgradeLevel(i,10)
			await ns.hacknet.upgradeRam(i,1)
			await ns.hacknet.upgradeCore(i,1)
			await ns.hacknet.purchaseNode(1)
		}
	}
}