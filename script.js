// ✅ Custom Alert Function (Same content, only new styling)
function showPrettyAlert(message, type = "info", timeout = 4000) {
    const container = document.getElementById("alert-container");

    const alert = document.createElement("div");
    alert.classList.add("alert", type);
    alert.innerText = message;

    // Click to remove
    alert.addEventListener("click", () => alert.remove());

    container.appendChild(alert);

    // Auto remove
    setTimeout(() => {
        alert.style.opacity = "0";
        setTimeout(() => alert.remove(), 300);
    }, timeout);
}

// ✅ Your code (unchanged logic, unchanged wording)
document.addEventListener("DOMContentLoaded", () => {
    const colorCheckboxes = document.querySelectorAll('input[name="color"]');

    colorCheckboxes.forEach((checkbox) => {
        checkbox.addEventListener("change", () => {
            const checked = Array.from(colorCheckboxes).filter(cb => cb.checked);
            if (checked.length > 2) {
                checkbox.checked = false;

                // ✅ replaced alert() with pretty alert
                showPrettyAlert(
                    "You can only select up to 2 colors. Please deselect one.",
                    "warning"
                );
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    limitCheckboxSelection("input[name='color']", 2);
    limitCheckboxSelection("input[name='maleColor']", 2);
    limitCheckboxSelection("input[name='femaleColor']", 2);

    function limitCheckboxSelection(selector, max) {
        const checkboxes = document.querySelectorAll(selector);

        checkboxes.forEach((checkbox) => {
            checkbox.addEventListener("change", () => {
                const checked = Array.from(checkboxes).filter(cb => cb.checked);
                if (checked.length > max) {
                    checkbox.checked = false;

                    // ✅ replaced alert() with pretty alert
                    showPrettyAlert(
                        `You can only select up to ${max} colors. Please deselect one.`,
                        "warning"
                    );
                }
            });
        });
    }
});


function orderProduct(productName) {
    const phone = '265996893890';
    const message = encodeURIComponent(`Hi, I want to buy the ${productName}`);
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

//pop up
function showLarge(img) {
  document.getElementById("popup-img").src = img.src; // or a different high-res version
  document.getElementById("popup").style.display = "flex";
}

function hideLarge() {
  document.getElementById("popup").style.display = "none";
}


//ordering couples bangles
function submitCouplesOrder() {
  const phone = '265996893890'; // Replace with your actual WhatsApp number

  // Get selected male colors
  const maleColors = Array.from(document.querySelectorAll("input[name='maleColor']:checked"))
    .map(cb => cb.value).join(", ") || "None";

  // Get selected female colors
  const femaleColors = Array.from(document.querySelectorAll("input[name='femaleColor']:checked"))
    .map(cb => cb.value).join(", ") || "None";

  // Get words for him and her
  const maleWords = document.getElementById("maleWords").value.trim() || "None";
  const femaleWords = document.getElementById("femaleWords").value.trim() || "None";

  // Get selected ornament (optional)
  const ornament = document.querySelector("input[name='coupleOrnament']:checked");
  const ornamentValue = ornament ? ornament.value : "None";

  // Compose the message
  let message = `Hi, I want to order a custom couple bangle set.%0A`;
  message += `👑 For Him:%0A - Colors: ${maleColors}%0A - Words: ${maleWords}%0A`;
  message += `%0A👑 For Her:%0A - Colors: ${femaleColors}%0A - Words: ${femaleWords}%0A`;
  message += `%0A💍 Shared Ornament: ${ornamentValue}`;

  // Open WhatsApp
  window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}


function submitCustom() {
    //my phone number declared
    const phone = '265996893890';

    const colors = Array.from(document.querySelectorAll("input[name='color']:checked"))
    .map(cb => cb.value).join(", ") || "None";;

    const accessory = Array.from(document.querySelectorAll("input[name='accessory']:checked"));
    const accessoryValue = accessory ? accessory.value : "None" ;

    const customName = document.getElementById("customName").value.trim() || "None";

    let message = `Hi, I want to order a custom bangle set.%0A`;
    message += `Colors: ${colors}%0 - Words: ${customName}%0A`; 
    message += `Accessory: ${accessory}%0A`;

    window.open(`https://wa.me/${phone}?text=${message}`, '_blank');
}

function toggleMenu() {
  const nav = document.getElementById('navbar');
  nav.classList.toggle('show');
}

