const text = document.querySelector(".text");
const modifiedText = document.querySelector(".modifiedText");
const encoder = [["a","487625"],["b","720157"],["c","970265"],["d","983045"],["e","970365"],["f","998402"],["g","18990bb"],["h","105a14f"],["i","8fac57"],["j","22eb64"],["k","16335f7"],["l","5219ec"],["m","184f39f"],["n","189a5d"],["o","245244a"],["p","93be85"],["q","1175810"],["r","704bfb"],["s","151454d"],["t","919a64"],["u","5ef65e"],["v","49f5a9"],["w","49ffef"],["x","8172ca"],["y","33dfcc"],["z","2446538"],["A","122f5bd"],["B","185ebe4"],["C","149bcd"],["D","207aa48"],["E","52fb7c"],["F","48f47f"],["G","1289145"],["H","144d5ce"],["I","2cf3d7"],["J","47ccce"],["K","2375fa0"],["L","100a846"],["M","1675361"],["N","2431d5f"],["O","16845f"],["P","168926a"],["Q","23330a8"],["R","10aebe"],["S","2098282"],["T","542cdf"],["U","2546d9d"],["V","192afdb"],["W","38f9b0"],["X","92217f"],["Y","189186"],["Z","21927af"],[" ","ffa088"],[".","1369157"],[",","72c818"],[";","944010"],["?","227eacb"],["/","f7782aa"],[":","fcc0102"],["'","90ab44"],['"',"87fdd3"],["!","239d995"],["@","8a254b"],["#","1054ed3"],["$","178e5e2"],["%","46bd9e"],["&","943eff"],["*","1945e3a"],["(","66dfe4"],[")","57dec4"],["_","2339f74"],["-","0dbaae2"],["ã","691a79"],["Ã","8,70E+84"],["á","5af1c6"],["Á","5b0ac6"],["é","9ce1c6"],["É","4ac8b1"],["ê","fec997"],["Ê","a55297"],["í","8dba452"],["Í","bea452"],["õ","1126221"],["Õ","241d88"],["ó","5afaa4"],["Ó","458dc6"],["ç","228efa6"],["Ç","1197b7b"]]

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


