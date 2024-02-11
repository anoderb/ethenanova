import React from "react";

const useDropdownMobile = () => {
  const [isDropdownHomeMobile, setIsDropdownHomeMobile] = React.useState(false);
  // eslint-disable-next-line
  const [isDropdownBridgeMobile, setIsDropdownBridgeMobile] =
    React.useState(false);
  const [isDropdownNFTMobile, setIsDropdownNFTMobile] = React.useState(false);
  const [isHamburgerMenu, setIsHamburgerMenu] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsDropdownHomeMobile(false);
      setIsDropdownBridgeMobile(false);
      setIsDropdownNFTMobile(false);
      setIsHamburgerMenu(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownHomeMobile = () => {
    setIsDropdownHomeMobile(!isDropdownHomeMobile);
    if (isDropdownBridgeMobile === true) {
      setIsDropdownBridgeMobile(false);
    }
    if (isDropdownNFTMobile === true) {
      setIsDropdownNFTMobile(false);
    }
  };

  const handleDropdownBridgeMobile = () => {
    setIsDropdownBridgeMobile(!isDropdownBridgeMobile);
    if (isDropdownHomeMobile === true) {
      setIsDropdownHomeMobile(false);
    }
    if (isDropdownNFTMobile === true) {
      setIsDropdownNFTMobile(false);
    }
  };

  const handleDropdownNFTMobile = () => {
    setIsDropdownNFTMobile(!isDropdownNFTMobile);
    if (isDropdownBridgeMobile === true) {
      setIsDropdownBridgeMobile(false);
    }
    if (isDropdownHomeMobile === true) {
      setIsDropdownHomeMobile(false);
    }
  };

  const handleMenu = () => {
    setIsHamburgerMenu(!isHamburgerMenu);
  };

  return {
    isHamburgerMenu,
    isDropdownHomeMobile,
    isDropdownBridgeMobile,
    handleDropdownHomeMobile,
    handleDropdownBridgeMobile,
    handleDropdownNFTMobile,
    handleMenu,
  };
};

export default useDropdownMobile;
