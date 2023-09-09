
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M364.2 267.2l-104.8-15.28L212.6 156.7c-8.375-17-32.72-17.13-41.22 0l-46.87 95.25L19.73 267.2C.8552 269.1-6.744 293.2 7.006 306.5L82.88 380.5l-17.1 104.6c-3.125 18.88 16.72 33.05 33.35 24.18l93.77-49.38l93.75 49.38c7.75 4.126 17.14 3.363 24.26-1.762c7-5.126 10.61-13.89 9.108-22.39l-17.9-104.6l75.9-74C390.7 293.3 383.1 269.1 364.2 267.2z"/><path className="fa-secondary" d="M312.1 7.031c-9.375-9.375-24.56-9.375-33.94 0l-48 48c-9.375 9.375-9.375 24.56 0 33.94C235.7 93.66 241.9 96 248 96s12.28-2.344 16.97-7.031l48-48C322.3 31.59 322.3 16.41 312.1 7.031zM504.1 7.031c-9.375-9.375-24.56-9.375-33.94 0l-160 160c-9.375 9.375-9.375 24.56 0 33.94C315.7 205.7 321.9 208 328 208s12.28-2.344 16.97-7.031l160-160C514.3 31.59 514.3 16.41 504.1 7.031zM471 199l-48 48c-9.375 9.375-9.375 24.56 0 33.94C427.7 285.7 433.9 288 440 288s12.28-2.344 16.97-7.031l48-48c9.375-9.375 9.375-24.56 0-33.94S480.4 189.7 471 199z"/>
</>],
['light',<>
	<path d="M364.2 267.2l-104.8-15.28L212.6 156.7C208.7 148.8 200.7 143.9 191.9 143.9C183.2 143.8 175.1 148.8 171.4 156.7l-46.87 95.25L19.73 267.2C.9807 269.9-6.619 293.1 7.006 306.5L82.88 380.5l-17.1 104.6c-1.25 6.75 .67 13.51 5.045 18.63C74.3 509 80.64 512 87.51 512c3.625 0 7.465-.9557 10.72-2.706l93.77-49.38l93.75 49.38c3.25 1.625 7.028 2.685 10.65 2.685c6.75 0 13.2-2.98 17.57-8.23c4.25-5.125 6.274-11.98 5.149-18.61l-17.9-104.6l75.9-74C390.6 293 383.1 269.1 364.2 267.2zM266.7 369.3l17.62 103.1l-92.5-48.75l-92.5 48.75l17.62-103.1L42.22 296.1l103.4-15l46.38-93.88l46.13 93.88l103.5 15L266.7 369.3zM240 96c4.094 0 8.188-1.562 11.31-4.688l64-64c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-64 64c-6.25 6.25-6.25 16.38 0 22.62C231.8 94.44 235.9 96 240 96zM324.7 187.3C327.8 190.4 331.9 192 336 192s8.188-1.562 11.31-4.688l160-160c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-160 160C318.4 170.9 318.4 181.1 324.7 187.3zM484.7 196.7l-64 64c-6.25 6.25-6.25 16.38 0 22.62C423.8 286.4 427.9 288 432 288s8.188-1.562 11.31-4.688l64-64c6.25-6.25 6.25-16.38 0-22.62S490.9 190.4 484.7 196.7z"/>
</>],
['regular',<>
	<path d="M364.2 267.2l-104.8-15.28L212.6 156.7C208.7 148.8 200.7 143.9 191.9 143.9c-8.748 0-16.69 4.913-20.56 12.79l-46.87 95.25L19.73 267.2C.8577 269.1-6.742 293.1 7.006 306.5L82.88 380.5l-17.1 104.6c-1.125 6.625 .67 13.51 5.045 18.63C74.3 509 80.76 512 87.51 512c3.748 0 7.34-.9557 10.72-2.706l93.77-49.38l93.75 49.38c3.375 1.75 6.903 2.685 10.65 2.685c6.748 0 13.2-2.98 17.57-8.23c4.375-5.125 6.274-11.98 5.149-18.61l-17.9-104.6l75.9-74C390.7 293.1 383.1 269.1 364.2 267.2zM249.6 363.8l13.62 79.38l-71.24-37.5l-71.11 37.5l13.62-79.38L76.75 307.5l79.61-11.62l35.62-72.25l35.62 72.25l79.74 11.62L249.6 363.8zM311 200.1C315.7 205.7 321.9 208 328 208s12.28-2.344 16.97-7.031l160-160c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0l-160 160C301.7 176.4 301.7 191.6 311 200.1zM248 96c6.141 0 12.28-2.344 16.97-7.031l48-48c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0l-48 48c-9.375 9.375-9.375 24.56 0 33.94C235.7 93.66 241.9 96 248 96zM471 199l-48 48c-9.375 9.375-9.375 24.56 0 33.94C427.7 285.7 433.9 288 440 288s12.28-2.344 16.97-7.031l48-48c9.375-9.375 9.375-24.56 0-33.94S480.4 189.7 471 199z"/>
</>],
['solid',<>
	<path d="M364.2 267.2l-104.8-15.28L212.6 156.7c-8.377-17-32.72-17.13-41.22 0l-46.87 95.25L19.73 267.2C.8538 269.1-6.744 293.2 7.006 306.5L82.88 380.5l-17.1 104.6c-3.125 18.88 16.72 33.05 33.35 24.18l93.77-49.38l93.75 49.38c7.75 4.127 17.14 3.365 24.26-1.762c7-5.125 10.61-13.89 9.108-22.39l-17.9-104.6l75.9-74C390.7 293.3 383.1 269.1 364.2 267.2zM311 200.1C315.7 205.7 321.9 208 328 208s12.28-2.344 16.97-7.031l160-160c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0l-160 160C301.7 176.4 301.7 191.6 311 200.1zM248 96c6.141 0 12.28-2.344 16.97-7.031l48-48c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0l-48 48c-9.375 9.375-9.375 24.56 0 33.94C235.7 93.66 241.9 96 248 96zM471 199l-48 48c-9.375 9.375-9.375 24.56 0 33.94C427.7 285.7 433.9 288 440 288s12.28-2.344 16.97-7.031l48-48c9.375-9.375 9.375-24.56 0-33.94S480.4 189.7 471 199z"/>
</>],
['thin',<>
	<path d="M364.2 267.2l-104.8-15.28L212.6 156.7C208.4 148.2 200.2 143.9 191.9 143.9c-8.188 0-16.32 4.239-20.56 12.79l-46.87 95.25L19.73 267.2C.8577 269.1-6.742 293.2 7.006 306.5L82.88 380.5l-17.1 104.6C62.41 500 74.23 512 87.51 512c3.543 0 7.215-.8365 10.72-2.706l93.77-49.38l93.75 49.38c3.352 1.783 7.007 2.685 10.65 2.685c4.783 0 9.568-1.541 13.61-4.448c6.998-5.125 10.61-13.89 9.108-22.39l-17.9-104.6l75.9-74C390.7 293.3 383.1 269.1 364.2 267.2zM365.9 295.1l-81.88 79.86l19.3 112.1c.4336 2.447-.6992 5.133-2.709 6.605c-1.27 .9121-2.736 1.395-4.246 1.395c-1.109 0-2.166-.2637-3.199-.8125l-101.2-53.3L90.71 495.2C89.67 495.7 88.63 496 87.56 496c-2.006 0-4.031-.9766-5.418-2.611c-1.34-1.578-1.838-3.467-1.498-5.518l19.42-112.9L18.12 295C15.44 292.4 15.87 289.5 16.36 287.1c.4082-1.266 1.777-4.27 5.709-4.842l113.1-16.46l50.56-102.8C187.4 160.5 190.4 160 191.1 160c1.312 0 4.547 .377 6.264 3.859L248.8 266.7l113.1 16.46c3.938 .5742 5.32 3.594 5.732 4.865C368.1 289.5 368.6 292.5 365.9 295.1zM232 96c2.047 0 4.094-.7813 5.656-2.344l80-80c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0l-80 80c-3.125 3.125-3.125 8.188 0 11.31C227.9 95.22 229.1 96 232 96zM498.3 194.3l-80 80c-3.125 3.125-3.125 8.188 0 11.31C419.9 287.2 421.1 288 424 288s4.094-.7813 5.656-2.344l80-80c3.125-3.125 3.125-8.188 0-11.31S501.5 191.2 498.3 194.3zM322.3 189.7C323.9 191.2 325.1 192 328 192s4.094-.7813 5.656-2.344l176-176c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0l-176 176C319.2 181.5 319.2 186.5 322.3 189.7z"/>
</>],

]);

const StarShooting: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

StarShooting.displayName = "StarShooting";

export default StarShooting;
