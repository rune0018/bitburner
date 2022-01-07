/** @param {NS} ns **/
export async function main(ns) {
	try{
		ns.brutessh(ns.args[0])
	}catch{

	}
	try{
		ns.ftpcrack(ns.args[0])
	}catch{

	}
	try{
		ns.relaysmtp(ns.args[0])
	}catch{

	}
	try{
		ns.httpworm(ns.args[0])
	}catch{

	}
	try{
		ns.sqlinject(ns.args[0])
	}catch{
		
	}
	try{
		ns.nuke(ns.args[0])
	}catch{
		ns.tprint("couldnt open "+ns.args[0])
	}
}