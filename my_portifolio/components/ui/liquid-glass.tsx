import React from "react";

interface LiquidGlassViewProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  interactive?: boolean;
  effect?: string;
}

const LiquidGlassView: React.FC<LiquidGlassViewProps> = ({
  children,
  style,
  interactive,
}) => {
  return (
    <div
      style={{
        backdropFilter: "blur(10px)",
        backgroundColor: "rgba(255,255,255,0.005)",
        border: "1px solid rgba(255,255,255,0.06)",
        borderRadius: "20px",
        ...style,
      }}
      className={interactive ? "cursor-pointer" : ""}
    >
      {children}
    </div>
  );
};

export default LiquidGlassView;
