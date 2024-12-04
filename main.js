
let vergisiz_tiras=350
let vergi=0.20 // %20
let vergi_hesaplamam = vergisiz_tiras * vergi
let toplam_fiyat = vergisiz_tiras + vergi_hesaplamam

console.log("vergisiz tiras: ", vergisiz_tiras,"TL")
console.log("vergi borcu: ", vergi_hesaplamam,"TL")
console.log("toplam fiyat: ", toplam_fiyat,"TL")

if (toplam_fiyat > 100) {
    console.log("fiyat yüksek");
} else {
    console.log("fiyat kabul edilebilir");
}


