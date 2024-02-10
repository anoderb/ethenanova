import { Children } from "react";

const EachRender = ({ render, of }) => Children.toArray(of?.map((item) => render(item)));

export default EachRender;
