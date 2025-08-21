import { useState, useRef } from "react";

function App() {
  const [text, setText] = useState("");
  const qrRef = useRef(null);

  const handleGenerate = () => {
    if (text) {
      qrRef.current.innerHTML = "";
      new window.QRCode(qrRef.current, {
        text: text,
        width: 200,
        height: 200,
      });
    }
  };

  const handleDownload = () => {
    const img =
      qrRef.current.querySelector("img") ||
      qrRef.current.querySelector("canvas");
    if (img) {
      const link = document.createElement("a");
      link.href = img.src || img.toDataURL("image/png");
      link.download = "qrcode.png";
      link.click();
    }
  };

  const handleShare = async () => {
    const img =
      qrRef.current.querySelector("img") ||
      qrRef.current.querySelector("canvas");

    if (img) {
      const dataUrl = img.src || img.toDataURL("image/png");

      try {
        if (navigator.share && navigator.canShare) {
          const blob = await (await fetch(dataUrl)).blob();
          const file = new File([blob], "qrcode.png", { type: blob.type });

          await navigator.share({
            title: "QR Code",
            text: "Check out this QR Code",
            files: [file],
          });
        } else {
          alert("Sharing not supported on this browser.");
        }
      } catch (err) {
        console.error("Share failed:", err);
      }
    }
  };

  return (
    <>
      <div
        style={{
          backgroundImage: "url('/Assets/qa-bg.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          width: "100%",
        }}
        className="flex flex-col justify-center w-fit mx-auto p-[1rem] items-center h-full"
      >

        <div>
          <img src="./Assets/Logo.svg" alt="Logo" />
        </div>

        <div
          tabIndex="0"
          className="bg-[#030616] mt-[45px] md:w-[60rem] w-[45rem] rounded-[16px] focus-within:outline-2 focus-within:outline-[#263FA9] flex justify-between p-[0.8rem]"
        >
          <input
            placeholder="Enter an url"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border-none pl-[1rem] w-1/2 text-white text-[1.8rem] outline-0"
            type="text"
          />
          <button
            onClick={handleGenerate}
            className="text-white bg-[#263FA9] text-[1.8rem] font-semibold py-[1.2rem] px-[2.8rem] rounded-[1.2rem]"
          >
            QR Code
          </button>
        </div>

        <div
          className="mt-[45px] bg-white p-[24px] rounded-[24px]"
          ref={qrRef}
        ></div>

        {text && (
          <div className="mt-[24px] flex gap-[18px]">

            <button
              onClick={handleDownload}
              className="flex items-center text-white bg-[#263FA9] text-[1.6rem] font-semibold py-[1.2rem] px-[2.2rem] rounded-[1.2rem]"
            >
              Download QR
              <img
                className="pl-[6px]"
                src="./Assets/download-icon.svg"
                alt="icon"
              />
            </button>

            <button
              onClick={handleShare}
              className="flex items-center text-white bg-[#16A34A] text-[1.6rem] font-semibold py-[1.2rem] px-[2.2rem] rounded-[1.2rem]"
            >
              Share QR
              <img
                className="pl-[6px]"
                src="./Assets/share-icon.svg"
                alt="icon"
              />
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default App;
