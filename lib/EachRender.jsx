import { Children } from "react";

const EachRender = ({ render, of }) => Children.toArray(of?.map((item, index) => render(item, index)));

export default EachRender;
