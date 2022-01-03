//bitburner script in javascript
export async function main(ns) {
    var s1 = true;
    var s2 = true;
    var s3 = true;
    var s4 = true;
    var s5 = true;
    var s6 = true;
//    var s7 = true;
    while(true){
        
        if(!await ns.hasRootAccess("n00dles")){
            await ns.nuke("n00dles")
        }
        else if(s1){
            await ns.wget("https://raw.githubusercontent.com/rune0018/bitburner/master/2.js", "2.js","n00dles");
            await ns.exec("2.js", "n00dles");
            s1=false;
        }
        
        
        if(!await ns.hasRootAccess("foodnstuff")){
            await ns.nuke("foodnstuff");
        }
        else if(s2){
            await ns.wget("https://raw.githubusercontent.com/rune0018/bitburner/master/2.js", "2.js","foodnstuff");
            await ns.exec("2.js", "foodnstuff");
            s2=false;
        }

        if(!await ns.hasRootAccess("sigma-cosmetics") && 5 < await ns.getHackingLevel()){
            await ns.nuke("sigma-cosmetics");
        }
        else if(s3){
            await ns.wget("https://raw.githubusercontent.com/rune0018/bitburner/master/2.js", "2.js","sigma-cosmetics");
            await ns.exec("2.js", "sigma-cosmetics");
            s3=false;
        }
        
        if(!await ns.hasRootAccess("joesguns")&& 10 < await ns.getHackingLevel()){
            await ns.nuke("joesguns");
        }
        else if(s4){
            await ns.wget("https://raw.githubusercontent.com/rune0018/bitburner/master/2.js", "2.js","joesguns");
            await ns.exec("2.js", "joesguns");
            s4=false;
        }
    
        if(!await ns.hasRootAccess("hong-fang-tea")&& 30 < await ns.getHackingLevel()){
            await ns.nuke("hong-fang-tea");
        }
        else if(s5){
            await ns.wget("https://raw.githubusercontent.com/rune0018/bitburner/master/2.js", "2.js","hong-fang-tea");
            await ns.exec("2.js", "hong-fang-tea");
            s5=false;
        }

        if(await ns.hasRootAccess("harakiri-sushi")&& await ns.getHackingLevel()>=40){
            await ns.exec("2.js", "harakiri-sushi");
        }
        else if(s6){
            await ns.wget("https://raw.githubusercontent.com/rune0018/bitburner/master/2.js", "2.js","harakiri-sushi");
            await ns.exec("2.js", "harakiri-sushi");
            s6=false;
        }

        //if(await ns.hasRootAccess("iron-gym")&& await ns.getHackingLevel()>=100){
        //    await ns.nuke("iron-gym");
        //}
        //else if(s7){
        //    await ns.wget("https://raw.githubusercontent.com/rune0018/bitburner/master/2.js", "2.js","iron-gym");
        //    await ns.exec("2.js", "iron-gym");
        //    s7=false;
        //}
        //
        await ns.sleep(1000);
    }
    
}