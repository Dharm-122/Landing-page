export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/70 bg-cream-50/90 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-center px-5 sm:px-6 lg:px-8">
        <div className="select-none text-center">
          <img
            src="/dharm-logo.png"
            alt="Dharm Bhatta"
            className="h-16 w-auto max-w-[220px] object-contain"
          />
        </div>
      </div>
    </header>
  );
}
