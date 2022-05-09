function updateDetails(action) {
    let content = document.getElementById("info");
    console.log(action);
    switch (action) {
        case '1uf':
            content.innerHTML = `<img class="productImg" src="img/products/capacitors/${action}.jpg"></img>`;
            break;
        case '10uf':
            content.innerHTML = `<img class="productImg" src="img/products/capacitors/${action}.jpg"></img>`;
            break;
        case '100uf':
            content.innerHTML = `<img class="productImg" src="img/products/capacitors/${action}.jpg"></img>`;
            break;
        case '16ksram':
            content.innerHTML = `<img class="productImg" src="img/products/cmos/${action}.jpg"></img>`;
            break;
        case '64ksram':
            content.innerHTML = `<img class="productImg" src="img/products/cmos/${action}.jpg"></img>`;
            break;
        case '5vdc':
            content.innerHTML = `<img class="productImg" src="img/products/motors/${action}.jpg"></img>`;
            break;
        case '12vdc':
            content.innerHTML = `<img class="productImg" src="img/products/motors/${action}.jpg"></img>`;
            break;
        case '24vdc':
            content.innerHTML = `<img class="productImg" src="img/products/motors/${action}.jpg"></img>`;
            break;
        case '1k':
            content.innerHTML = `<img class="productImg" src="img/products/resistors/${action}.jpg"></img>`;
            break;
        case '10k':
            content.innerHTML = `<img class="productImg" src="img/products/resistors/${action}.jpg"></img>`;
            break;
        case '100k':
            content.innerHTML = `<img class="productImg" src="img/products/resistors/${action}.jpg"></img>`;
            break;
        case 'and':
            content.innerHTML = `<img class="productImg" src="img/products/ttl/${action}.jpg"></img>`;
            break;
        case 'nand':
            content.innerHTML = `<img class="productImg" src="img/products/ttl/${action}.jpg"></img>`;
            break;
        case 'not':
            content.innerHTML = `<img class="productImg" src="img/products/ttl/${action}.jpg"></img>`;
            break;
        default:
            console.log(action);
            break;
    }

    //"<img class='productImg' src='" + imgs[i] + "'></img>";
}