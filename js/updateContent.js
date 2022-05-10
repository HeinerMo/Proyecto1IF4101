function update(action) {
    let section = document.getElementById("information");


    switch (action) {
        case "capacitors":
            items = ["1uf"
                , "10uf"
                , "100uf"];

            result = "<h2>Capacitores</h2><div class='products'>"
            for (i = 0; i < items.length; i++) {
                result += `<a href=javascript:updateDetails("${items[i]}")>${items[i]}</a>`;
            }
            section.innerHTML = result += "</div>";
            break;
        case "resistors":
            items = ["1k"
                , "10k"
                , "100k"];

            result = "<h2>Resistencias</h2><div class='products'>"
            for (i = 0; i < items.length; i++) {
                result += `<a href=javascript:updateDetails("${items[i]}")>${items[i]}</a>`;
            }
            section.innerHTML = result += "</div>";
            break;
        case "ttl":
            items = ["and"
                , "nand"
                , "not"];

            result = "<h2>Lógica TTL</h2><div class='products'>"
            for (i = 0; i < items.length; i++) {
                result += `<a href=javascript:updateDetails("${items[i]}")>${items[i]}</a>`;
            }
            section.innerHTML = result += "</div>";
            break;
        case "cmos":
            items = ["16ksram"
                , "64ksram"];

            result = "<h2>Lógica CMOS</h2><div class='products'>"
            for (i = 0; i < items.length; i++) {
                result += `<a href=javascript:updateDetails("${items[i]}")>${items[i]}</a>`;
            }
            section.innerHTML = result += "</div>";
            break;
        case "motors":
            items = ["5vdc"
                , "12vdc"
                , "24vdc"];

            result = "<h2>Motores</h2><div class='products'>"
            for (i = 0; i < items.length; i++) {
                result += `<a href=javascript:updateDetails("${items[i]}")>${items[i]}</a>`;
            }
            section.innerHTML = result += "</div>";
            break;
    }

}