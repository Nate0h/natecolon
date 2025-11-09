'use client';

export default function CloudBackgroundCSS() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-40">
      <div className="clouds-1 absolute top-0 left-0 right-0 h-[500px] bg-repeat-x animate-clouds-1" />
      <div className="clouds-2 absolute top-0 left-0 right-0 h-[500px] bg-repeat-x animate-clouds-2" />
      <div className="clouds-3 absolute top-0 left-0 right-0 h-[500px] bg-repeat-x animate-clouds-3" />
    </div>
  );
}
