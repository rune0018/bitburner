/** @param {NS} ns **/
export async function main(ns) {
	if(!await ns.hasRootAccess(ns.args[0])&& await ns.getServerRequiredHackingLevel(ns.args[0])<= await ns.getHackingLevel()){
            await ns.run('unlock.js',1,ns.args[0])
    }
    if(await ns.fileExists('2.js',ns.args[0])&&await ns.getRunningScript('2.js',ns.args[0],ns.args[0]) == null){
        await ns.rm('2.js',ns.args[0])
    }
    if(await ns.hasRootAccess(ns.args[0])&& await ns.getScriptRam('2.js', ns.args[0])< 1){
        await ns.wget("https://raw.githubusercontent.com/rune0018/bitburner/master/2.js", "2.js",ns.args[0]);
        await ns.exec("2.js", ns.args[0],Math.floor(await ns.getServerMaxRam(ns.args[0])/await ns.getScriptRam('2.js')),ns.args[0]);
    }
}