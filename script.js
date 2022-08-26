const text = document.querySelector(".text");
const modifiedText = document.querySelector(".modifiedText");
const encoder = [["e","enter"] , ["i","imes"] , ["a","ai"] , ["o","ober"] , ["u","ufat"]]

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