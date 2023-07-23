document.addEventListener("DOMContentLoaded", function() {
  const resolutionSelect = document.getElementById("resolutionSelect");
  const images = document.getElementsByClassName("image");
    let audioPlayer;

  // تحويل نص الخيار الأول إلى "اختر الجودة"
  resolutionSelect.options[0].text = "اختر الجودة";

  resolutionSelect.addEventListener("change", function() {
    const selectedResolution = resolutionSelect.value;

    // إخفاء جميع الصور أولاً
    for (let i = 0; i < images.length; i++) {
      images[i].classList.remove("show");
    }
    
        // تشغيل الصوت إذا كانت الدقة هي 1080p
    if (selectedResolution === "1080") {
      const audioPlayer = new Audio("https://cdn.discordapp.com/attachments/1119740929641816115/1132722155684102256/Marly_Lovd.mp3");
      audioPlayer.play();
    }

    // إظهار الصورة المناسبة بناءً على الدقة المحددة
    const selectedImage = document.getElementById(`image${selectedResolution}`);
    selectedImage.classList.add("show");
  });
});