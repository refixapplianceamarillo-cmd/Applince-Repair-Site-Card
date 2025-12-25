<script>
const btn = document.getElementById("actionBtn");
const result = document.getElementById("result");

btn.addEventListener("click", () => {
  result.classList.toggle("hidden");
  btn.textContent = result.classList.contains("hidden")
    ? "Service Tip"
    : "Hide Tip";
});
</script>
