const terminalLines = [
  ">>> Menjalankan program permintaan maaf...",
  ">>> Memuat perasaan...",
  ">>> Mengakses memori...",
  "",
  "Halo kamu...",
  "Aku cuma mau bilang satu hal...",
  "Maafkan aku.",
  "Aku sadar aku telah mengecewakanmu.",
  "Tapi aku benar-benar ingin memperbaikinya.",
  "Maukah kamu memberiku kesempatan lagi?",
  "-- Selesai --"
];

const terminal = document.getElementById("terminal");
const music = document.getElementById("bg-music");

function checkPassword() {
  const input = document.getElementById("password").value;
  if (input.toLowerCase() === "sayang") {
    document.getElementById("password-container").classList.add("hidden");
    terminal.classList.remove("hidden");
    printLine();
    music.play();
  } else {
    alert("Password salah. Coba lagi ya!");
  }
}

let i = 0;
function printLine() {
  if (i < terminalLines.length) {
    terminal.innerHTML += terminalLines[i] + "\n";
    i++;
    setTimeout(printLine, 1000);
  } else {
    document.getElementById("reply").classList.remove("hidden");
  }
}

function replyMessage() {
  alert("Terima kasih udah maafin aku. Aku janji bakal lebih baik.");
}
