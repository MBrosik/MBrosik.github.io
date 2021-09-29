function xhttpFetch(link) {
    return new Promise((resolve) => {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function () {
            if (this.readyState == 4 && this.status == 200) {
                // showResult(xhttp.responseXML);
                resolve(xhttp.responseXML)
            }
        };
        xhttp.open("GET", link, true);
        xhttp.send();
    })
}


function showDOM(xml, path) {
    /**@type {String[]} */
    let table = [];

    if (xml.evaluate) {
        var nodes = xml.evaluate(path, xml, null, XPathResult.ANY_TYPE, null);
        console.log(nodes)
        var result = nodes.iterateNext();
        while (result) {
            table.push(result.childNodes[0].nodeValue)
            result = nodes.iterateNext();
        }
        // Code For Internet Explorer
    } else if (window.ActiveXObject || xhttp.responseType == "msxml-document") {
        xml.setProperty("SelectionLanguage", "XPath");
        nodes = xml.selectNodes(path);
        for (i = 0; i < nodes.length; i++) {
            table.push(result.childNodes[0].nodeValue)
        }
    }
    return table
}



window.onload = async () => {
    let aa = await xhttpFetch("./TERC_Urzedowy_2021-09-09.xml");
    console.log(aa);

    let results = showDOM(aa, "//teryt/catalog/row[NAZWA_DOD='województwo']/NAZWA")


    results.forEach(el => {
        // console.log("aa")
        // console.log(el)
        let html = $("<button>")
            .text(el)
            .on("click", () => {
                let id = showDOM(aa, `//teryt/catalog/row[NAZWA_DOD='województwo' and NAZWA='${el}']/WOJ`)[0]
                console.log(id);

                let cities = [...new Set(showDOM(aa, `//teryt/catalog/row[(NAZWA_DOD='miasto na prawach powiatu' or NAZWA_DOD='miasto' or NAZWA_DOD='miasto stołeczne, na prawach powiatu' or NAZWA_DOD='gmina miejska') and WOJ='${id}']/NAZWA`))]

                console.log("asjkbgruyg8tlugrabiyigh3igigtfgifgb");
                console.log(cities)


                $("#cities-table").html(cities.reduce((previousValue, currentValue, index, array) => {
                    return `${previousValue}<li>${currentValue}</li>`
                }, ""));

            });

        $("#container > #button-container").append(html);

    })


    console.log(results)
}