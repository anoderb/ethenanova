import React from "react";

const useDropdownDesktop = () => {
  const [isDropdownHome, setIsDropdownHome] = React.useState(false);
  const [isDropdownBridge, setIsDropdownBridge] = React.useState(false);
  const [isDropdownNFT, setIsDropdownNFT] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsDropdownHome(false);
      setIsDropdownBridge(false);
      setIsDropdownNFT(false);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleDropdownHome = () => {
    setIsDropdownHome(!isDropdownHome);
    if (isDropdownBridge === true) {
      setIsDropdownBridge(false);
    }
    if (isDropdownNFT === true) {
      setIsDropdownNFT(false);
    }
  };

  const handleDropdownNFT = () => {
    setIsDropdownNFT(!isDropdownNFT);
    if (isDropdownBridge === true) {
      setIsDropdownBridge(false);
    }
    if (isDropdownHome === true) {
      setIsDropdownHome(false);
    }
  };

  return {
    isDropdownHome,
    isDropdownNFT,
    handleDropdownHome,
    handleDropdownNFT,
  };
};

export default useDropdownDesktop;
