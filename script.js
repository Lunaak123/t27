function openSheet() {
    const sheetUrl = document.getElementById("sheetUrl").value;
    if (sheetUrl) {
      window.location.href = `sheet.html?url=${encodeURIComponent(sheetUrl)}`;
    } else {
      alert("Please enter a Google Sheet URL.");
    }
  }
  