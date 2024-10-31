window.onload = async function() {
    const urlParams = new URLSearchParams(window.location.search);
    const sheetUrl = urlParams.get("url");
  
    if (sheetUrl) {
      loadSheetData(sheetUrl);
    } else {
      document.getElementById("sheetContainer").innerText = "No Google Sheet URL provided.";
    }
  };
  
  async function loadSheetData(sheetUrl) {
    // Load Google Sheet data here (simplified using iframe for demo)
    document.getElementById("sheetContainer").innerHTML = `<iframe src="${sheetUrl}" style="width: 100%; height: 100%; border: none;"></iframe>`;
  
    // Placeholder: Display sample sheet tabs in the custom toolbar
    const sheets = ["Sheet1", "Sheet2", "Sheet3"];
    const sheetTabs = document.getElementById("sheetTabs");
  
    sheets.forEach((sheet, index) => {
      const tab = document.createElement("button");
      tab.textContent = sheet;
      tab.onclick = () => loadSheet(sheet);
      if (index === 0) tab.classList.add("active");
      sheetTabs.appendChild(tab);
    });
  }
  
  function loadSheet(sheetName) {
    // Handle switching sheet views here
    document.querySelectorAll(".sheet-tabs button").forEach(button => button.classList.remove("active"));
    event.target.classList.add("active");
    alert(`Switching to ${sheetName}`);
  }
  