import { FaCheckCircle } from "react-icons/fa";

export default function Toast({ open, Message }) {
  if (!open) return null;

  const duration = 3000; // مدة الخط (يجب أن تطابق مدة الإخفاء)

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        left: "20px",
        backgroundColor: "green",
        color: "white",
        fontSize: "18px",
        width: "fit-content",
        padding: "10px 20px",
        border: "2px solid green",
        borderRadius: "5px",
        zIndex: 1000,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        overflow: "hidden", // مهم لإخفاء الخط الزائد
      }}
    >
      {Message}
      <FaCheckCircle style={{ fontSize: "24px" }} />

      {/* خط الأنيميشن */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          height: "4px",
          backgroundColor: "white",
          width: "100%",
          animation: `shrink ${duration}ms linear forwards`,
        }}
      />

      {/* تعريف الأنيميشن */}
      <style>
        {`
          @keyframes shrink {
            from { width: 100%; }
            to { width: 0%; }
          }
        `}
      </style>
    </div>
  );
}
