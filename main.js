var downloadButton = document.getElementById("downloadCV");
if (downloadButton) {
    downloadButton.addEventListener("click", function (event) {
        event.preventDefault();
        var link = document.createElement("a");
        link.href = "/Resume (1).pdf";
        link.download = "Resume.pdf";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}
