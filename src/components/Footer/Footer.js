function Footer() {
  return (
    <footer
      id="Footer"
      className="bottom-0 left-0 right-0 m-auto mb-8 w-80 rounded-xl bg-green-light py-2 text-xl drop-shadow-md"
    >
      <p className="pb-0.5">
        ☽ Crafted by&nbsp;
        <a
          href="https://github.com/mooniiDev"
          target="_blank"
          rel="noreferrer"
          className="transition duration-75 ease-in-out active:text-green-dark lg:hover:text-green-dark"
        >
          mooniiDev
        </a>
        &nbsp;|&nbsp;
        <a
          href="https://github.com/mooniiDev/memory-game"
          target="_blank"
          rel="noreferrer"
          className="transition duration-75 ease-in-out active:text-green-dark lg:hover:text-green-dark"
        >
          Source
        </a>
        &nbsp;☾
      </p>
    </footer>
  );
}

export default Footer;
