export default function Header() {
  return (
    <nav className="absolute top-0 left-0 right-0 z-50 flex justify-end gap-6 p-6 bg-transparent">
      <a href="/" className="hover:text-gray-300 transition-colors">
        Home
      </a>
      <a href="/about" className="hover:text-gray-300 transition-colors">
        About
      </a>
      <a href="/blog" className="hover:text-gray-300 transition-colors">
        Blog
      </a>
      <a href="/schedule" className="hover:text-gray-300 transition-colors">
        Schedule
      </a>
      <a href="/media" className="hover:text-gray-300 transition-colors">
        Media
      </a>
      <a href="/shop" className="hover:text-gray-300 transition-colors">
        Shop
      </a>
      <a href="/training" className="hover:text-gray-300 transition-colors">
        Training
      </a>
      <a href="/videos" className="hover:text-gray-300 transition-colors">
        Video
      </a>
    </nav>
  );
}
