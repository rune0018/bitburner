/** @param {NS} ns **/
export async function main(ns) {
	await ns.deleteServer(ns.args[0])
}