let formula = "p(2,-32)*#3#*gb+p(2,#)*#3#*byte+p(2,-13)*#1#*kb+p(2,-21)*#2#*mb-p(2,14)*#9#*bit";

    let kb = 8 * 1024;
    let bit = 1;
    let gb = 8 * 1024 * 1024 * 1024;
    let mb = 8 * 1024 * 1024;
    let byte = 8;

    let p = Math.pow;

    function r() {
        let rt = Math.round(13 * (Math.random() * 1));
        if (rt == 0) rt = "";
        return rt.toString();
    }
    function pr(range) { return Math.round(range * Math.random()); }
    let arrNum = [];

    let arr = formula.split("#");

    for (v in arr) arrNum[v] = r();


    function render(str, arNum, islog) {
        let result = ""; arr = str.split("#");
        for (v in arr) {
            let ch = arNum[v];
            if (arr[v][0] == ")" && ch == "") ch = 0;
            result = result + (v == 0 ? "" : ch)
                + arr[v];
        }
        return result;
    }

    function calcRender(str, arNum, islog) { return Math.abs(eval(render(str, arNum, islog))); }

    function chnge(arrn) { arrn[pr(arrn.length)] = r(); }

    function check(str, arrn, last) {

        if (last == undefined) last = calcRender(str, arrn, false);
        let narr = arrn.slice();
        chnge(narr);
        let nr = calcRender(str, narr, false);

        if (last > nr) { console.log(render(str, narr, true) + " = " + nr.toString()); return [narr, nr]; }
        console.log("no mutation");
        return [arrn, last];
    }


    let last = undefined;
    while (last != 0) {

        let ppp = check(formula, arrNum, last);
        last = ppp[1];
        arrNum = ppp[0];
    }
