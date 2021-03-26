const inputs = document.querySelectorAll(".controls input");

function handleUpdate() {
  const px = this.dataset.sizing || "";

  document.documentElement.style.setProperty(`--${this.name}`, this.value + px);
}

inputs.forEach((input) => input.addEventListener("mousemove", handleUpdate));
