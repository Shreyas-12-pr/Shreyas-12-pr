import fs from "fs";

const svg = `<?xml version="1.0" encoding="UTF-8"?>
<svg width="1200" height="400" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="400" fill="#0d1117"/>

  <text x="40" y="60"
        fill="#58a6ff"
        font-size="24"
        font-family="Consolas">
    shreyas@github:~$ ./profile.sh
  </text>

  <text x="40" y="120"
        fill="#c9d1d9"
        font-size="18"
        font-family="Consolas">
    👤 Name : Shreyas P R
  </text>

  <text x="40" y="160"
        fill="#c9d1d9"
        font-size="18"
        font-family="Consolas">
    💻 Languages : Python • C++ • C
  </text>
</svg>`;

fs.mkdirSync("assets", { recursive: true });
fs.writeFileSync("assets/terminal-dashboard.svg", svg);

console.log("terminal-dashboard.svg generated successfully!");