const products = [
    { id: 1, img: "content/main/Flash-Sales-Cards/HAVIT-HV-G92-Gamepad/HAVIT-HV-G92-Gamepad.svg", name:"HAVIT HV-G92 Gamepad", price:"120" },

    { id: 2, img: "content/main/Flash-Sales-Cards/AK-900-Wired-Keyboard/AK-900-Wired-Keyboard.svg", name:"AK-900 Wired Keyboard", price:"960" },

    { id: 3, img: "content/main/Flash-Sales-Cards/IPS-LCD-Gaming-Monitor/IPS-LCD-Gaming-Monitor.svg", name:"IPS LCD Gaming Monitor", price:"370" },

    { id: 4, img: "content/main/Flash-Sales-Cards/S-Series-Comfort-Chair/S-Series-Comfort-Chair.svg", name:"S-Series Comfort Chair", price:"375" },
    
    { id: 5, img: "content/main/Best-Selling-Products/The-North-Face-x-Gucci/The-North-Face-x-Gucci-coat.svg", name:"The north coat", price:"260" },

    { id: 6, img: "content/main/Best-Selling-Products/Gucci-duffle-bag/Gucci-Savoy-medium-duffle-bag.svg", name:"Gucci duffle bag", price:"960" },

    { id: 7, img: "content/main/Best-Selling-Products/RGB-Cooler/gammaxx-l240-rgb.svg", name:"RGB liquid CPU Cooler", price:"160" },

    { id: 8, img: "content/main/Best-Selling-Products/Small-Bookself/small-bookself.svg", name:"Small BookSelf", price:"360" },
    
    
    { id: 9, img: "content/main/Our-Products/Breed-Dry-Dog-Food/Breed-Dry-Dog-Food.svg",  name:"Breed Dry Dog Food", price:"100" },

    { id: 10, img: "content/main/Our-Products/CANON-EOS-DSLR-Camera/CANON-EOS-DSLR-Camera.svg", name:"CANON EOS DSLR Camera", price:"360" },

    { id: 11, img: "content/main/Our-Products/ASUS-FHD-Gaming-Laptop/ASUS-FHD-Gaming-Laptop.svg", name:"ASUS FHD Gaming Laptop", price:"700" },

    { id: 12, img: "content/main/Our-Products/Curology-Product-Set/Curology-Product-Set.svg", name:"Curology Product Set", price:"500" },

    { id: 13, img: "content/main/Our-Products/Kids-Electric-Car/Kids-Electric-Car.svg", name:"Kids Electric Car", price:"960" },

    { id: 14, img: "content/main/Our-Products/JR-Zoom-Soccer-Cleats/JR-Zoom-Soccer-Cleats.svg", name:"Jr. Zoom Soccer Cleats", price:"1160" },

    { id: 15, img: "content/main/Our-Products/GP11-Shooter-USB-Gamepad/GP11-Shooter-USB-Gamepad.svg", name:"GP11 Shooter USB Gamepad", price:"660" },

    { id: 16, img: "content/main/Our-Products/Quilted-Satin-Jacket/Quilted-Satin-Jacket.svg",  name:"Quilted Satin Jacket", price:"660" },
  ];

  // Весь функционал для карт
  const addToCartButtons = document.querySelectorAll(
    "button[data-product-id]"
  );
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
      const productId = event.target.getAttribute("data-product-id");
      const product = products.find((p) => p.id == productId);

      let cart = JSON.parse(localStorage.getItem("cart")) || [];
      const existingProduct = cart.find((p) => p.id == productId);
      if (existingProduct) {
        existingProduct.quantity++;
      } else {
        cart.push({ ...product, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    });
  });