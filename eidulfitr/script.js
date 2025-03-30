document.addEventListener("DOMContentLoaded", function () {
    // Get elements
    const receiverName = document.querySelector("#reciver");
    const senderName = document.querySelector("#sender");

    // Fetch URL parameters
    const urlParams = new URLSearchParams(location.search);
    const sender = urlParams.get("sender") || "RANA HUNAIN ALI"; // Default sender
    const receiver = urlParams.get("reciver") || "Family And Friends"; // Default receiver

    // Update content dynamically
    if (senderName) senderName.innerText = sender;
    if (receiverName) receiverName.innerText = receiver ? `. ${receiver}` : "";;
    
});

function generateUrl() {
    const sender = document.getElementById("senderInput").value.trim();
    const receiver = document.getElementById("receiverInput").value.trim();

    if (sender === "" || receiver === "") {
        alert("Please enter both names!");
        return;
    }

    const baseUrl = window.location.origin + window.location.pathname;
    const shareUrl = `${baseUrl}?sender=${encodeURIComponent(sender)}&reciver=${encodeURIComponent(receiver)}`;

    document.getElementById("shareLink").value = shareUrl;
    document.getElementById("generatedUrl").style.display = "block";
}

function copyLink() {
    const copyText = document.getElementById("shareLink");
    copyText.select();
    document.execCommand("copy");
    alert("Link copied: " + copyText.value);
}

function shareOnWhatsApp() {
    let link = document.getElementById("shareLink").value;
    if (link) {
        let whatsappUrl = `https://wa.me/?text=${encodeURIComponent(link)}`;
        window.open(whatsappUrl, "_blank");
    } else {
        alert("Generate the link first!");
    }
}
let year= document.getElementById("year");
year.innerHTML=new Date().getFullYear();