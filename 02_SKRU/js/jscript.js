    // ===== Mobile panel toggle =====
    const burger = document.getElementById("burger");
    const mobilePanel = document.getElementById("mobilePanel");

    burger.addEventListener("click", () => {
      const isOpen = mobilePanel.classList.toggle("show");
      burger.setAttribute("aria-expanded", String(isOpen));
    });

    // ===== Desktop dropdown (click to open) =====
    const dds = document.querySelectorAll(".dd");
    dds.forEach(dd => {
      const btn = dd.querySelector(".dd-toggle");
      btn.addEventListener("click", (e) => {
        e.stopPropagation();
        // ปิดตัวอื่นก่อน (ถ้าไม่อยากให้ปิดตัวอื่น ให้ลบบล็อคนี้)
        dds.forEach(x => { if (x !== dd) x.classList.remove("open"); });
        dd.classList.toggle("open");
      });
    });

    // ===== Mobile accordion (click to open) =====
    const mItems = document.querySelectorAll(".m-item");
    mItems.forEach(item => {
      const btn = item.querySelector(".m-toggle");
      btn.addEventListener("click", () => {
        // ปิดตัวอื่นก่อน (ถ้าไม่อยากให้ปิดตัวอื่น ให้ลบบล็อคนี้)
        mItems.forEach(x => { if (x !== item) x.classList.remove("open"); });
        item.classList.toggle("open");
      });
    });

    // ===== Click outside to close desktop dropdown =====
    document.addEventListener("click", () => {
      dds.forEach(dd => dd.classList.remove("open"));
    });

    // ===== ESC to close =====
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        dds.forEach(dd => dd.classList.remove("open"));
        mobilePanel.classList.remove("show");
        burger.setAttribute("aria-expanded", "false");
      }
    });



    // Slider ข่าวสาร
    const slides = [
        "images/slide1.jpg",
        "images/slide2.png",
        "images/slide3.png"
    ];

    let index = 0;
    const slideImg = document.getElementById("slide");

    setInterval(() => {
        index = (index + 1) % slides.length;
        slideImg.src = slides[index];
    }, 4000);