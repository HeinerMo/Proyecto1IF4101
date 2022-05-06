function update(action) {
    let content = document.getElementById("information");

    if (action == "capacitors") {

        let imgs = ["img/products/capacitors/1uf.jpg"
            ,"img/products/capacitors/10uf.jpg"
            ,"img/products/capacitors/100uf.jpg"];
        
        result = "";
        for (i = 0; i < imgs.length; i++) {
            result += "<img class='productImg' src='" + imgs[i] + "'></img>";
            result += "<p>Capacitor</p>"
            console.log(imgs[i]);
        } 
        content.innerHTML = result;

    } else if (action == "resistors") {
        let imgs = ["img/products/resistors/1k.jpg"
            ,"img/products/resistors/10k.jpg"
            ,"img/products/resistors/100k.jpg"];
        
        result = "";
        for (i = 0; i < imgs.length; i++) {
            result += "<img class='productImg' src='" + imgs[i] + "'></img>";
            result += "<p>Resistor</p>"
            console.log(imgs[i]);
        } 
        content.innerHTML = result;
        
    } else if (action == "ttl") {
        let imgs = ["img/products/ttl/and.jpg"
            ,"img/products/ttl/nand.jpg"
            ,"img/products/ttl/not.jpg"];
        
        result = "";
        for (i = 0; i < imgs.length; i++) {
            result += "<img class='productImg' src='" + imgs[i] + "'></img>";
            result += "<p>Lógica Transistor-Transistor</p>"
            console.log(imgs[i]);
        } 
        content.innerHTML = result;
        
    } else if (action == "cmos") {
       let imgs = ["img/products/cmos/16kram.jpg"
        ,"img/products/cmos/64ksram.jpg"];

        result = "";
        for (i = 0; i < imgs.length; i++) {
            result += "<img class='productImg' src='" + imgs[i] + "'></img>";
            result += "<p>Lógica CMOS</p>"
            console.log(imgs[i]);
        } 
        content.innerHTML = result;

    } else if (action == "motors") {
        let imgs = ["img/products/motores/5vdc.jpg"
            ,"img/products/motores/12vdc.jpg"
            ,"img/products/motores/24vdc.jpg"];
        
        result = "";
        for (i = 0; i < imgs.length; i++) {
            result += "<img class='productImg' src='" + imgs[i] + "'></img>";
            result += "<p>Lógica CMOS</p>"
            console.log(imgs[i]);
        } 
        content.innerHTML = result;
        
    }
}