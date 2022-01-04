export async function main(ns) {
    var t = 0
    var hostname = ns.args
    while(true){
        await ns.hack(hostname)
        if(t == 10){
            await ns.grow(hostname)
            await ns.weaken(hostname)
            t = 0
        }
    	t++
        await ns.sleep(100)
    }
}