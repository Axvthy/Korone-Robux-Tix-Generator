// =================================================================================
// KORONE GENERATOR 2026 (this is a joke before someone says im tryna steal ur stuff
// =================================================================================

(function() {
    if (document.getElementById('fake-robux-inject')) {
        alert("Generator is already running!");
        return;
    }

    // ←←← CHANGE THIS TO YOUR IMAGE URL
    const backgroundUrl = "PASTE_YOUR_DIRECT_IMAGE_URL_HERE";

    const overlay = document.createElement('div');
    overlay.id = 'fake-robux-inject';
    overlay.style.cssText = `
        position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        width: 580px; 
        background: linear-gradient(rgba(60,40,20,0.92), rgba(40,25,10,0.97)), url('${backgroundUrl}');
        background-size: cover; background-position: center;
        border: 4px solid #CD853F; border-radius: 15px;
        padding: 25px; color: #F5E8C7; font-family: Segoe UI, sans-serif; 
        z-index: 2147483647; box-shadow: 0 0 50px #CD853F; text-align: center;
    `;

    overlay.innerHTML = `
        <h2 style="color:#CD853F; margin:0 0 15px 0; text-shadow: 0 0 12px #8B4513; font-size:28px;">
            🚀 FREE KORONE GENERATOR 2026 🚀
        </h2>
        
        <input type="text" id="rb-username" placeholder="Username" style="width:100%; padding:14px; margin:10px 0; background:rgba(40,25,10,0.9); border:2px solid #CD853F; color:#F5E8C7; border-radius:8px; font-size:17px;" />
        
        <select id="rb-robux" style="width:100%; padding:14px; margin:10px 0; background:rgba(40,25,10,0.9); border:2px solid #CD853F; color:#F5E8C7; border-radius:8px; font-size:17px;">
            <option value="500">500 Korone</option>
            <option value="1000">1,000 Korone</option>
            <option value="2500" selected>2,500 Korone</option>
            <option value="5000">5,000 Korone</option>
            <option value="10000">10,000 Korone</option>
            <option value="25000">25,000 Korone</option>
            <option value="100000">100,000 Korone</option>
        </select>
        
        <select id="rb-tix" style="width:100%; padding:14px; margin:10px 0; background:rgba(40,25,10,0.9); border:2px solid #CD853F; color:#F5E8C7; border-radius:8px; font-size:17px;">
            <option value="1000">1,000 Tix</option>
            <option value="5000" selected>5,000 Tix</option>
            <option value="10000">10,000 Tix</option>
            <option value="25000">25,000 Tix</option>
            <option value="50000">50,000 Tix</option>
            <option value="100000">100,000 Tix</option>
        </select>
        
        <button id="generate-btn" style="width:100%; padding:18px; margin-top:15px; background:#CD853F; color:#2C1A0F; border:none; border-radius:8px; font-size:20px; font-weight:bold; cursor:pointer;">
            ✅ GENERATE NOW
        </button>
        
        <div id="rb-status" style="margin-top:20px; display:none; text-align:left;"></div>
    `;

    document.body.appendChild(overlay);

    // Make window draggable
    let isDragging = false, offsetX, offsetY;
    overlay.addEventListener('mousedown', e => {
        if (['BUTTON','INPUT','SELECT'].includes(e.target.tagName)) return;
        isDragging = true;
        const rect = overlay.getBoundingClientRect();
        offsetX = e.clientX - rect.left;
        offsetY = e.clientY - rect.top;
    });
    document.addEventListener('mousemove', e => {
        if (isDragging) {
            overlay.style.left = (e.clientX - offsetX) + 'px';
            overlay.style.top = (e.clientY - offsetY) + 'px';
            overlay.style.transform = 'none';
        }
    });
    document.addEventListener('mouseup', () => isDragging = false);

    // Generate button
    document.getElementById('generate-btn').addEventListener('click', startFakeGenerate);

    function startFakeGenerate() {
        const username = document.getElementById('rb-username').value.trim() || "You";
        const koroneAmount = parseInt(document.getElementById('rb-robux').value);
        const tixAmount = parseInt(document.getElementById('rb-tix').value);
        const status = document.getElementById('rb-status');
        const generateBtn = document.getElementById('generate-btn');

        generateBtn.style.display = 'none';
        status.style.display = 'block';

        status.innerHTML = `
            <div style="margin-bottom:12px; color:#D2B48C;">Processing for <b>${username}</b>...</div>
            
            <div style="width:100%; background:#2C1A0F; height:20px; border-radius:10px; overflow:hidden; border:2px solid #CD853F; margin-bottom:15px;">
                <div id="progress-bar" style="width:0%; height:100%; background:linear-gradient(to right, #CD853F, #FFCC66); transition: width 0.6s linear;"></div>
            </div>
            
            <div id="console-log" style="background:#0F0A05; border:2px solid #8B4513; padding:12px; height:260px; overflow-y:auto; font-family: monospace; font-size:15px; color:#FFFFFF; text-align:left; line-height:1.6;"></div>
        `;

        const progressBar = document.getElementById('progress-bar');
        const consoleLog = document.getElementById('console-log');

        const messages = [
            "Connecting to main servers...",
            "Injecting into Korone Servers...",
            "Bypassing Cloudflare Protection...",
            "Authenticating user credentials...",
            "Establishing encrypted tunnel...",
            "Accessing currency database...",
            "Transferring Korone balance...",
            "Syncing with global nodes...",
            "Verifying transaction integrity...",
            "Finalizing currency injection..."
        ];

        let progress = 0;
        let messageIndex = 0;

        function addLog(message) {
            const now = new Date();
            const time = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}:${now.getSeconds().toString().padStart(2,'0')}`;
            const logLine = document.createElement('div');
            logLine.innerHTML = `<span style="color:#CD853F;">[${time}]</span> ${message}`;
            consoleLog.appendChild(logLine);
            consoleLog.scrollTop = consoleLog.scrollHeight;
        }

        addLog("Initializing generator...");

        // 15 minute duration
        const totalTime = 15 * 60 * 1000;
        const updateInterval = 800;
        const incrementPerStep = 100 / (totalTime / updateInterval);

        const interval = setInterval(() => {
            progress += incrementPerStep;
            if (progress > 100) progress = 100;

            progressBar.style.width = progress + '%';

            if (progress > (messageIndex + 1) * 9 && messageIndex < messages.length) {
                addLog(messages[messageIndex]);
                messageIndex++;
            }

            if (progress >= 100) {
                clearInterval(interval);
                addLog("Transaction completed successfully.");

                updatePageBalances(koroneAmount, tixAmount);

                status.innerHTML = `
                    <h3 style="color:#CD853F; text-align:center;">✅ SUCCESS!</h3>
                    <p style="text-align:center;"><b>${username}</b> has received:</p>
                    <h2 style="color:#FFCC66; text-align:center;">${koroneAmount.toLocaleString()} Korone</h2>
                    <h2 style="color:#88CCFF; text-align:center;">${tixAmount.toLocaleString()} Tix</h2>
                    <button onclick="this.closest('#fake-robux-inject').remove()" style="background:#8B4513; color:white; padding:12px 30px; border:none; border-radius:6px; margin-top:20px; font-size:16px; width:100%;">Close Generator</button>
                `;
            }
        }, updateInterval);
    }

    function updatePageBalances(newKorone, newTix) {
        document.querySelectorAll('span').forEach(span => {
            const text = span.textContent.trim().replace(/,/g, '');
            if (/^\d+$/.test(text)) {
                const num = parseInt(text);
                if (num > 100 && span.closest('a')?.href?.includes('Money')) {
                    span.textContent = newKorone.toLocaleString();
                } else if (span.closest('li')?.textContent.toLowerCase().includes('tix')) {
                    span.textContent = newTix.toLocaleString();
                }
            }
        });
    }
})();
