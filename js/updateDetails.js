function updateDetails(action) {
    let content = document.getElementById("info");
    switch (action) {
        case '1uf':
            content.innerHTML = `<a href="javascript:openImage('img/products/capacitors/${action}.jpg')"><img class="productImg" src="img/products/capacitors/${action}.jpg"></img></a><p>Capacitor 1 micro faradio</p>`;
            break;
        case '10uf':
            content.innerHTML = `<a href="javascript:openImage('img/products/capacitors/${action}.jpg')""><img class="productImg" src="img/products/capacitors/${action}.jpg"></img></a><p>Capacitor 10 micro faradios</p>`;
            break;
        case '100uf':
            content.innerHTML = `<a href="javascript:openImage('img/products/capacitors/${action}.jpg')""><img class="productImg" src="img/products/capacitors/${action}.jpg"></img></a><p>Capacitor 100 micro faradios</p>`;
            break;
        case '16ksram':
            content.innerHTML = `<a href="javascript:openImage('img/products/cmos/${action}.jpg')""><img class="productImg" src="img/products/cmos/${action}.jpg"></img></a><p>RAM estática 16k CMOS</p>`;
            break;
        case '64ksram':
            content.innerHTML = `<a href="javascript:openImage('img/products/cmos/${action}.jpg')""><img class="productImg" src="img/products/cmos/${action}.jpg"></img></a><p>RAM estática 64k CMOS</p>`;
            break;
        case '5vdc':
            content.innerHTML = `<a href="javascript:openImage('img/products/motors/${action}.jpg')""><img class="productImg" src="img/products/motors/${action}.jpg"></img></a><p>Motor DC 5v</p>`;
            break;
        case '12vdc':
            content.innerHTML = `<a href="javascript:openImage('img/products/motors/${action}.jpg')""><img class="productImg" src="img/products/motors/${action}.jpg"></img></a><p>Motor DC 12v</p>`;
            break;
        case '24vdc':
            content.innerHTML = `<a href="javascript:openImage('img/products/motors/${action}.jpg')""><img class="productImg" src="img/products/motors/${action}.jpg"></img></a><p>Motor DC 12v</p>`;
            break;
        case '1k':
            content.innerHTML = `<a href="javascript:openImage('img/products/resistors/${action}.jpg')""><img class="productImg" src="img/products/resistors/${action}.jpg"></img></a><p>Resistencia 1k Ohm</p>`;
            break;
        case '10k':
            content.innerHTML = `<a href="javascript:openImage('img/products/resistors/${action}.jpg')""><img class="productImg" src="img/products/resistors/${action}.jpg"></img></a><p>Resistencia 10k Ohm</p>`;
            break;
        case '100k':
            content.innerHTML = `<a href="javascript:openImage('img/products/resistors/${action}.jpg')""><img class="productImg" src="img/products/resistors/${action}.jpg"></img></a><p>Resistencia 100k Ohm</p>`;
            break;
        case 'and':
            content.innerHTML = `<a href="javascript:openImage('img/products/ttl/${action}.jpg')""><img class="productImg" src="img/products/ttl/${action}.jpg"></img></a><p>Compuerta AND 4x TTL</p>`;
            break;
        case 'nand':
            content.innerHTML = `<a href="javascript:openImage('img/products/ttl/${action}.jpg')""><img class="productImg" src="img/products/ttl/${action}.jpg"></img><p>Compuerta NAND 4x TTL</p>`;
            break;
        case 'not':
            content.innerHTML = `<a href="javascript:openImage('img/products/ttl/${action}.jpg')""><img class="productImg" src="img/products/ttl/${action}.jpg"></img><p>Compuerta NOT 8x TTL</p>`;
            break;
        default:
            console.log(action);
            break;
    }

    //"<img class='productImg' src='" + imgs[i] + "'></img>";
}