  const filterItem = document.querySelector(".items");
  const filterImg = document.querySelectorAll(".gallery .image");
  let currentIndex = 0;
  let visibleImages = [];

  window.onload = () => {
    updateVisibleImages();

    // Filter click
    filterItem.onclick = (selectedItem) => {
      if (selectedItem.target.classList.contains("item")) {
        filterItem.querySelector(".active").classList.remove("active");
        selectedItem.target.classList.add("active");
        let filterName = selectedItem.target.getAttribute("data-name");

        filterImg.forEach((image, index) => {
          let imageCategory = image.getAttribute("data-name");
          if (filterName === "all" || filterName === imageCategory) {
            image.classList.remove("hide");
            image.classList.add("show");
          } else {
            image.classList.add("hide");
            image.classList.remove("show");
          }
        });

        updateVisibleImages();
      }
    };

    // Set up click for preview
    filterImg.forEach((img, i) => {
      img.addEventListener("click", () => preview(img));
    });
  };

  const previewBox = document.querySelector(".preview-box"),
        categoryName = previewBox.querySelector(".title p"),
        previewImg = previewBox.querySelector(".image-box img"),
        closeIcon = previewBox.querySelector(".icon"),
        shadow = document.querySelector(".shadow"),
        prevBtn = document.querySelector(".prev-btn"),
        nextBtn = document.querySelector(".next-btn");

  function updateVisibleImages() {
    visibleImages = Array.from(document.querySelectorAll(".gallery .image.show"));
  }

  function preview(element) {
    updateVisibleImages();
    currentIndex = visibleImages.indexOf(element);
    showPreview(currentIndex);
    document.body.classList.add("no-scroll");
    previewBox.classList.add("show");
    shadow.classList.add("show");
  }

  function showPreview(index) {
    const selectedImg = visibleImages[index].querySelector("img").src;
    const selectedCategory = visibleImages[index].getAttribute("data-name");
    previewImg.src = selectedImg;
    categoryName.textContent = selectedCategory;
  }

  closeIcon.onclick = () => {
    previewBox.classList.remove("show");
    shadow.classList.remove("show");
    document.body.classList.remove("no-scroll");
  };

  prevBtn.onclick = () => {
    if (currentIndex > 0) {
      currentIndex--;
      showPreview(currentIndex);
    }
  };

  nextBtn.onclick = () => {
    if (currentIndex < visibleImages.length - 1) {
      currentIndex++;
      showPreview(currentIndex);
    }
  };