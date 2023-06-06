const button = document.getElementById("button");
if (button) {
  button.addEventListener("click", (event) => {
    const number = document.getElementById("number").value;
    const typed = new Typed("#typed", {
      strings: [
        "Analyzing brainwaves...",
        "Scanning memories...",
        "Decoding thoughts...",
      ],
      typeSpeed: 50,
      onComplete: (self) => {
        self.el.innerText = `You are thinking of the number ${number}.`;
      },
    });
  });
}
