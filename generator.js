// KORONE GENERATOR 2026 - TROLL EDITION
(function() {
    const backgroundUrl = "PASTE_YOUR_DIRECT_IMAGE_URL_HERE";

    const overlay = document.createElement('div');
    overlay.id = 'robux-inject';
    overlay.style.cssText = `
        position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%);
        width: 580px; background: linear-gradient(rgba(60,40,20,0.92), rgba(40,25,10,0.97)), url('${backgroundUrl}');
        background-size: cover; background-position: center;
        border: 4px solid #CD853F; border-radius: 15px;
        padding: 25px; color: #F5E8C7; font-family: Segoe UI, sans-serif; z-index: 2147483647;
        box-shadow: 0 0 50px #CD853F; text-align: center;
    `;

    overlay.innerHTML = `
        <h2 style="color:#CD853F; margin:0 0 15px 0; text-shadow: 0 0 12px #8B4513; font-size:28px;">
            🚀 FREE KORONE ROBUX/TIX GENERATOR 2026 🚀
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

    // Draggable + rest of the logic (same as last version)
    // ... [I can give you the complete file if you want]

})();
