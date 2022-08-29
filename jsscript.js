const text = document.querySelector(".text");
const modifiedText = document.querySelector(".modifiedText");
const encoder = [["a","173835"],["b","918f6b"],["c","6b04af"],["d","1964cb0"],["e","232dad6"],["f","156df11"],["g","18990bb"],["h","105a14f"],["i","244b33e"],["j","22eb64"],["k","16335f7"],["l","5219ec"],["m","184f39f"],["n","189a5d"],["o","245244a"],["p","93be85"],["q","1175810"],["r","704bfb"],["s","151454d"],["t","919a64"],["u","5ef65e"],["v","49f5a9"],["w","49ffef"],["x","8172ca"],["y","33dfcc"],["z","2446538"],[" ","1117088"],["A","122f5bd"],["B","185ebe4"],["C","149bcd"],["D","207aa48"],["E","52fb7c"],["F","48f47f"],["G","1289145"],["H","144d5ce"],["I","2cf3d7"],["J","47ccce"],["K","2375fa0"],["L","100a846"],["M","1675361"],["N","2431d5f"],["O","16845f"],["P","168926a"],["Q","23330a8"],["R","10aebe"],["S","2098282"],["T","542cdf"],["U","2546d9d"],["V","192afdb"],["W","38f9b0"],["X","92217f"],["Y","189186"],["Z","21927af"],[".","1369157"],[",","72c818"],[";","944010"],["?","227eacb"],["!","239d995"],["@","9,25E+14"],["#","1054ed3"],["$","178e5e2"],["%","46bd9e"],["&","943eff"],["*","1945e3a"],["(","66dfe4"],[")","57dec4"],["_","2339f74"],["ã","691a79"],["Ã","8,70E+84"],["õ","1126221"],["Õ","241d88"],["ç","228efa6"],["Ç","1197b7b"],["0","100b261"],["1","111455d"],["2","476228"],["3","1465426"],["4","181c80"],["5","155c729"],["6","2245cde"],["7","24567fd"],["8","1268f8f"],["9","70ef50"]]

function encrypt(){
    let encryptText = text.value;
    for (i = 0; i < encoder.length; i++){
        if(text.value.includes(encoder[i][0])){    
            encryptText = encryptText.replaceAll(encoder[i][0] , encoder[i][1]);
            modifiedText.value = encryptText;
        }      
    }
}

function decrypt() {
    let decryptText = text.value;
    for (i = 0; i < encoder.length; i++){
        if(text.value.includes(encoder[i][1])){
            decryptText = decryptText.replaceAll(encoder[i][1] , encoder[i][0]);
            modifiedText.value = decryptText;
        }
    }
}

function copy(){
    document.querySelector(".modifiedText").select();
    document.execCommand("copy");
    document.querySelector(".modifiedText").value="Copiado!";
    document.querySelector(".text").select();
}
