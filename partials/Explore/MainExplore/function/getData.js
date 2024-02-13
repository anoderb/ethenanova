import bridge from "../data/bridge";
import defi from "../data/defi";
import nfts from "../data/nfts";
import onramps from "../data/onramps";
import social from "../data/social";
import tools from "../data/tools";

const getData = (query) => {
  let data;

  switch (query) {
    case "bridge":
      data = bridge;
      break;
    case "onramps":
      data = onramps;
      break;
    case "nfts":
      data = nfts;
      break;
    case "defi":
      data = defi;
      break;
    case "tools":
      data = tools;
      break;
    case "social":
      data = social;
      break;

    default:
      data = bridge;
      break;
  }

  return data;
};

export default getData;
