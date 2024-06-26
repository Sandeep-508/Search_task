let search = document.querySelector(".search");

function Enter(event) {
    if (event.key === "Enter") {
        let value = search.value.trim();
        if (value === "") {
            window.alert("Please enter a search term.");
            return;
        }
        let search_text = new RegExp("\\b" + value + "\\b", 'gi');

        let content = document.querySelector(".content");
        let matches = content.innerHTML.match(search_text);

        if (!matches) {
            window.alert("No match found.");
        } else {
            let highlightedElements = content.querySelectorAll('.highlight');
            highlightedElements.forEach(element => {
                element.outerHTML = element.innerHTML;
            });
            content.innerHTML = content.innerHTML.replace(search_text, "<span class='highlight'>$&</span>");
        }
    }
}

search.addEventListener("keypress", Enter);