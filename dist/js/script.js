window.addEventListener("DOMContentLoaded", () => {
  const formBtn = document.querySelector("#formBtn");
  const fileInput = document.querySelector("#file-input-img");
  const taskInput = document.querySelector("#file-input-task");
  const textInput = document.querySelector("#textarea");
  const textContainer = document.querySelector(".data__item-descr");
  const imageContainer = document.querySelector(".data__item-images");

  formBtn.addEventListener("click", () => {
    const value = textInput.value;
    textInput.value = "";

    textContainer.textContent = value;
  });

  fileInput.addEventListener("change", function () {
    const files = fileInput.files;

    for (let i = 0; i < files.length; i++) {
      const file = files[i];

      if (file) {
        const imageUrl = URL.createObjectURL(file);
        const image = new Image();
        const item = document.createElement("div");
        const underText = document.createElement("div");
        image.src = imageUrl;
        image.style.width = "175px";
        image.style.height = "136px";
        image.style.objectFit = "cover";
        underText.innerHTML = `${file.name}`;
        image.classList.add("uploaded-image");

        item.appendChild(image);
        item.appendChild(underText);
        imageContainer.appendChild(item);
      }
    }
  });

  taskInput.addEventListener("change", function (e) {
    const fileInput = e.target;
    const fileContainer = document.querySelector(".data__item-task");

    if (fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const fileType = file.type;

      if (
        fileType === "application/pdf" ||
        fileType === "application/msword" ||
        fileType ===
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document"
      ) {
        const fileName = fileInput.files[0].name;
        fileContainer.textContent = `${fileInput.files[0].name}`;
      }
    } else {
      alert(
        "Неправильный формат ТЗ. Плс, загрузите файл .pdf, .doc или .docx формата"
      );
    }
  });

  $(document).ready(function () {
    $(".slider").slick({
      speed: 1000,
      autoplay: false,
      autoplaySpeed: 3000,
      arrows: false,
      infinite: true,
      slidesToShow: 3,
      dots: true,
      /* adaptiveHeight: true, */
      responsive: [
        {
          breakpoint: 1300,
          settings: {
            autoplay: false,
            arrows: false,
            slidesToShow: 1,
            dots: true
          }
        }
      ]
    });
  });
});
