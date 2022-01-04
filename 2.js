export async function main(ns) {
    var t = 0
    var hostname = ns.args
    while(true){
        await ns.hack(hostname[0])
        if(t == 10){
            await ns.grow(hostname[0])
            await ns.weaken(hostname[0])
            t = 0
        }
    	t++
        await ns.sleep(100)
    }
}