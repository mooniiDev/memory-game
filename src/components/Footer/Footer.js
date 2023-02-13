function Footer() {
  return (
    <footer
      id="Footer"
      className="absolute bottom-0 left-0 right-0 m-auto mb-5 w-80 rounded-xl bg-green-light py-1 drop-shadow-md"
    >
      <p className="pb-0.5 text-lg">
        ☽ Crafted by&nbsp;
        <a
          href="https://github.com/mooniiDev"
          target="_blank"
          rel="noreferrer"
          className="transition duration-300 ease-in-out hover:text-green-dark"
        >
          mooniiDev
        </a>
        &nbsp;|&nbsp;
        <a
          href="https://github.com/mooniiDev/memory-game"
          target="_blank"
          rel="noreferrer"
          className="transition duration-300 ease-in-out hover:text-green-dark"
        >
          Source
        </a>
        &nbsp;☾
      </p>
    </footer>
  );
}

export default Footer;
