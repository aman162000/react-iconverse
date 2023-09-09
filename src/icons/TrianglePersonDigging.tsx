
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M292 215.1c15.5 0 27.1-12.5 27.1-28s-12.5-28-27.1-28c-15.5 0-27.1 12.5-27.1 28S276.5 215.1 292 215.1zM273.4 372.3L190.3 318.7l-29.75 109c-.3644 1.397-.5386 2.797-.5386 4.173c0 5.253 3.861 16.08 16.04 16.08c7.25 0 13.5-4.875 15.5-11.75l18.25-67l46.25 30v32.75c0 8.875 7.124 16 15.1 16s15.1-7.125 15.1-16v-32.75C288 388.3 282.5 378.2 273.4 372.3zM348 417.1l-12.01 30.01l198.8-.0091l-71.75-112c-2.942-4.473-7.99-7.283-13.37-7.283c-6.523 0-11.83 3.559-14.5 8.783l-21.12 42.5l-87.62-54L315.8 273.2C312 254.7 297.7 239.1 280.3 236.1L255.7 228.8c-3.496-.7849-7.019-1.167-10.51-1.167c-14.86 0-29.15 6.92-38.36 19.17l-11.5 15.5C193.1 265.2 192.1 268.6 192.1 272.1c0 8.438 6.183 12.63 7.616 13.51l103.9 64c.125 0 0 0 0 0l94.93 58.38h-35.62C356.3 407.1 350.4 411.1 348 417.1z"/><path className="fa-secondary" d="M640 463.9c0-9.199-2.645-18.39-7.845-26.36l-271.1-417.1c-8.859-13.6-24.51-20.4-40.17-20.4c-15.66 0-31.31 6.799-40.17 20.4l-271.1 417.1c-5.2 7.978-7.848 17.17-7.848 26.37C-.0001 489.4 20.55 512 48.02 512h543.1C619.2 512 640 489.8 640 463.9zM292 159.1c15.5 0 27.1 12.5 27.1 28s-12.5 28-27.1 28c-15.5 0-27.1-12.5-27.1-28S276.5 159.1 292 159.1zM288 431.1c0 8.875-7.124 16-15.1 16s-15.1-7.125-15.1-16v-32.75l-46.25-30l-18.25 67c-2 6.875-8.249 11.75-15.5 11.75c-12.16 0-16.04-10.8-16.04-16.08c0-1.376 .1742-2.776 .5386-4.173l29.75-109l83.12 53.63c9.125 5.875 14.62 16 14.62 26.88V431.1zM336 447.1l12.01-30.01c2.375-6 8.249-10 14.87-10h35.62l-94.93-58.38c0 0 .125 0 0 0l-103.9-64c-1.433-.8782-7.616-5.071-7.616-13.51c0-3.504 1.08-6.893 3.241-9.741l11.5-15.5c9.211-12.25 23.5-19.17 38.36-19.17c3.492 0 7.015 .3821 10.51 1.167l24.62 7.25C297.7 239.1 312 254.7 315.8 273.2l10.62 52.75l87.62 54l21.12-42.5c2.668-5.208 7.961-8.783 14.5-8.783c5.38 0 10.43 2.81 13.37 7.283l71.75 112L336 447.1z"/>
</>],
['light',<>
	<path d="M296 208C309.3 208 320 197.3 320 184C320 170.7 309.3 160 296 160S272 170.7 272 184C272 197.3 282.7 208 296 208zM289.4 372L206.4 318.3l-29.75 109.4c-.407 1.492-.5972 2.954-.5972 4.367c0 8.932 7.606 15.88 16.1 15.88c7.125-.125 13.5-4.875 15.37-11.87l18.25-66.1l46.24 29.1v32.75c0 8.873 7.125 15.1 15.1 15.1s16-7.002 16-15.88l-.0052-32.87C304 388 298.5 377.9 289.4 372zM640 463.9c0-8.956-2.609-17.66-7.789-25.39L361.4 20.9c-8.998-13.94-25.18-20.9-41.37-20.9S287.6 6.968 278.6 20.9L7.789 438.5c-5.18 7.735-7.789 16.44-7.789 25.39c0 7.685 1.921 15.62 5.789 22.6c8.568 15.77 25.16 25.5 43.03 25.5l542.4 0C617.4 511.1 640 490.5 640 463.9zM607.9 464.1c0 10.3-9.725 15.8-16.72 15.8H48.82c-6.967 0-16.72-5.553-16.72-15.8c0-2.832 .8181-5.656 2.435-8.081L305.4 38.4C308.8 33.65 314.1 30.78 320 30.78s11.25 2.875 14.62 7.625l270.8 417.6C607.1 458.4 607.9 461.3 607.9 464.1zM461 310.7C457.1 306.5 453.1 304 447.1 304c-.0313 0 0 0 0 0c-5.219 .0313-10.09 2.562-13.06 6.812l-35.19 50.25l-57.47-35.43l-10.5-52.87c-3.75-18.75-18.12-33.5-35.5-37.25L271.6 228.1C268.4 227.4 264.9 227 261.4 227c-13.58 0-28.4 5.638-38.49 19.23l-11.62 15.5C209.5 264.1 208.1 267.9 208.1 271.9c0 4.736 1.959 9.8 7.565 13.24l103.9 64.12c.125 0 0 0 0 0L375.1 384H360c-5.031 0-9.781 2.375-12.81 6.406l-24 32c-2.147 2.871-3.183 6.232-3.183 9.567c0 8.768 7.093 16 16.02 16c4.864 0 9.636-2.179 12.78-6.384L368 416h24c5.219 0 10.12-2.562 13.09-6.812l43.03-61.47l66.84 93.59C518.1 445.7 523 448 528 448c11.79 0 16.01-10.46 16.01-16.01c0-3.22-.967-6.473-2.976-9.303L461 310.7zM247.4 266.9c3.527-4.852 7.576-7.842 13.58-7.842c.9247 0 1.896 .0709 2.918 .2169l23.25 6.875C292 267.8 298.6 269.7 300.4 278.9l4.75 23.62L247.4 266.9z"/>
</>],
['regular',<>
	<path d="M324 215.1c15.5 0 27.1-12.5 27.1-27.1S339.5 159.1 324 159.1S296 172.5 296 187.1S308.5 215.1 324 215.1zM305.4 356.4L222.4 302.7l-29.75 108.1c-.4001 1.453-.5909 2.91-.5909 4.339c0 5.207 3.847 15.91 15.97 15.91c7.25 0 13.5-4.875 15.37-11.75l18.25-66.1l46.37 29.1v32.75c0 8.875 7.119 15.88 15.99 15.88c8.875 0 16-7.002 16-15.88v-32.75C320 372.4 314.5 362.2 305.4 356.4zM440.4 347.1l-13.1 20.87l-68.12-41.1l-10.5-52.75c-3.75-18.62-18.12-33.25-35.5-37.12L287.6 228.9C284.1 228.1 280.6 227.7 277.1 227.7c-14.86 0-29.13 6.92-38.24 19.17L227.3 262.2C225.1 265.1 224 268.6 224 272c0 8.456 6.174 12.58 7.616 13.46l174.7 107.6l-21.67-.0023c-8.004 0-15.11 4.971-17.95 12.5l-9.125 26.37h163.9l-54.37-84.62c-2.875-4.5-7.875-7.25-13.25-7.375C448.5 339.1 443.4 342.6 440.4 347.1zM631.1 427.9L367.4 25.25c-10.62-15.75-28.38-25.25-47.38-25.25S283.3 9.5 272.6 25.25L8.903 427.9C2.987 436.7 0 446.1 0 457.2c0 8.788 2.205 17.59 6.653 25.56C16.47 500.8 35.44 512 55.94 512h528.2C599 512 640 499.9 640 457.3C640 447 637 436.7 631.1 427.9zM591.1 457.2c0 3.198-3.167 6.82-8.221 6.82H56.28c-4.98 0-8.178-3.515-8.178-6.736c0-1.087 .316-2.187 .928-3.139L312.8 51.5C314.5 49.25 317.3 47.1 320 47.1c2.875 0 5.5 1.25 7.25 3.5l263.7 402.7C591.7 455.1 591.1 456.1 591.1 457.2z"/>
</>],
['solid',<>
	<path d="M640 463.9c0-8.814-2.424-18.05-7.845-26.36l-271.1-417.1c-8.858-13.6-24.51-20.4-40.17-20.4c-15.65 0-31.31 6.799-40.17 20.4l-271.1 417.1c-5.429 8.331-7.848 17.56-7.848 26.37C-.0001 488.1 19.89 512 48.02 512h543.1C620.2 512 640 488.9 640 463.9zM292 159.1c15.5 0 27.1 12.5 27.1 28s-12.5 28-27.1 28c-15.5 0-27.1-12.5-27.1-28S276.5 159.1 292 159.1zM288 431.1c0 8.875-7.126 16-15.1 16c-8.873 0-15.1-7.125-15.1-16v-32.75l-46.25-30l-18.25 67c-1.1 6.875-8.25 11.75-15.5 11.75c-12.16 0-16.04-10.8-16.04-16.08c0-1.376 .1743-2.776 .5386-4.173l29.75-109l83.12 53.63c9.123 5.875 14.62 16 14.62 26.88V431.1zM336 447.1l12.01-30.01c2.375-6 8.25-10 14.87-10h35.62l-94.93-58.38c0 0 .125 0 0 0l-103.9-64c-1.438-.8818-7.616-5.075-7.616-13.51c0-3.504 1.081-6.893 3.241-9.741l11.5-15.5c9.209-12.25 23.5-19.17 38.36-19.17c3.491 0 7.016 .3821 10.51 1.167l24.62 7.25C297.7 239.1 312 254.7 315.8 273.2l10.62 52.75l87.62 54l21.12-42.5c2.656-5.186 7.938-8.783 14.5-8.783c5.379 0 10.43 2.81 13.37 7.283l71.75 112L336 447.1z"/>
</>],
['thin',<>
	<path d="M454.3 323.1c-1.827-2.318-3.928-3.119-5.896-3.119c-3.009 0-5.709 1.872-6.65 3.056l-55.25 69.07L320 348.7V277.7c0-16.45-9.859-31.03-25.14-37.14L259.1 226.2c-4.764-1.902-9.724-2.821-14.64-2.821c-13.18 0-26.04 6.601-33.97 18.57l-17.59 34.39C192.3 277.5 191.1 278.8 191.1 279.1c0 2.628 1.294 5.188 3.626 6.71L369.3 400h-17.35c-2.516 0-4.891 1.188-6.406 3.203l-24 32c-1.11 1.482-1.609 3.137-1.609 4.752C319.1 444.1 323.3 448 328 448h208c4.765 0 8.008-3.919 8.008-8.053c0-1.675-.5321-3.385-1.711-4.885L454.3 323.1zM303.1 338.3L210.4 277.2l13.86-27.19C228.8 243.2 236.4 239.4 244.3 239.4c2.967 0 5.965 .5484 8.838 1.692l35.78 14.31c9.156 3.672 15.08 12.42 15.08 22.3V338.3zM344 432l12-16h28c2.438 0 4.734-1.109 6.25-3l57.69-72.13L519.5 432H344zM288 224c17.72 0 32.02-14.29 32.02-32.02S305.7 159.1 288 159.1S256 174.3 256 191.1S270.3 224 288 224zM288 175.1c8.832 0 16.02 7.186 16.02 16.02S296.9 208 288 208c-8.83 0-16.02-7.186-16.02-16.02S279.2 175.1 288 175.1zM204.6 321.5c-1.394-.9707-2.992-1.43-4.572-1.43c-3.376 0-6.669 2.096-7.709 5.773l-32 112c-.1443 .503-.2273 1.14-.2273 1.85C160.1 443 161.9 448 167.1 448c3.484 0 6.688-2.281 7.688-5.797l28.92-101.2l67.39 47.19V440c0 4.422 3.578 8 8 8c4.422 0 8-3.578 8-8V384c0-2.609-1.281-5.062-3.406-6.547L204.6 321.5zM640 463.9c0-9.199-2.645-18.39-7.845-26.36l-271.1-417.1c-8.859-13.6-24.51-20.4-40.17-20.4c-15.66 0-31.31 6.799-40.17 20.4l-271.1 417.1c-5.2 7.978-7.848 17.17-7.848 26.37C-.0001 489.4 20.55 512 48.02 512h543.1C619.2 512 640 489.8 640 463.9zM624 463.9c0 16.9-13.54 32.12-32 32.12H47.1c-18.36 0-32-15.05-32-32.13c0-6.143 1.755-12.27 5.233-17.61L293.2 29.13C298.6 20.91 308.6 15.1 320 15.1c11.4 0 21.41 4.91 26.77 13.14l271.1 417.1C622.2 451.6 624 457.7 624 463.9z"/>
</>],

]);

const TrianglePersonDigging: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TrianglePersonDigging.displayName = "TrianglePersonDigging";

export default TrianglePersonDigging;