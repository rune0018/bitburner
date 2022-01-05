/** @param {NS} ns **/
export async function main(ns) {
	var ram = 2
	var player = ns.getPlayer()
	while(await ns.getPurchasedServerCost(ram)<player["money"]){
		ram = ram*2
	}
	ram =ram/2
	var {ip} = await ns.getServer(ns.args[0])
	var servername = await ns.purchaseServer(ram+'gb'+ns.args[0],ram)
	await ns.wget("https://raw.githubusercontent.com/rune0018/bitburner/master/2.js", "2.js",servername)
	await ns.sleep(10)
	var result = await ns.exec('2.js',servername,ram/2,ip)
	if(result == 0){
		ns.tprint("it didnt execute trying via ip")
		let Pserverip = await ns.getServer(servername)
		var result2 = await ns.exec('2.js',Pserverip["ip"],ram/2,ip)
		if(result2 == 0){
			await ns.tprint("manually try: run 2.js "+ip+" -t 32 on "+servername)
		}
	}
}