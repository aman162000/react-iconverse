
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M634.9 502.8c-8.125 10.41-23.19 12.28-33.69 4.078L9.189 42.89c-10.44-8.172-12.25-23.26-4.062-33.7C9.845 3.156 16.91 0 24.03 0c5.156 0 10.37 1.672 14.78 5.109l591.1 463.1C641.2 477.3 643.1 492.4 634.9 502.8z"/><path className="fa-secondary" d="M310.9 204.5C310.7 157.8 264.7 119.5 258.5 114.9c-12.5 10.93-23.79 23.39-32.72 36.75L308.8 216.7C309.7 212.7 310.7 208.7 310.9 204.5zM424 128c0 6.861 5.367 24 24 24c6.156 0 12.28-2.344 16.97-7.031l104-104C573.7 36.28 576 30.14 576 24C576 10.29 564.8 0 552 0c-6.141 0-12.28 2.344-16.97 7.031l-104 104C426.3 115.7 424 121.9 424 128zM552 96c-6.141 0-12.28 2.344-16.97 7.031l-72.07 72.11c-.0625 .0625 .0605-.0625 0 0c-5.77 .3672-11.35 .6211-16.62 .6211c-15.55 0-29.07-1.295-41.22-2.117c-.6016-4.271-4.867-24.05-4.867-50.47c0-3.191 .0625-6.48 .2012-9.852c.1562-.1484 .3672-.1914 .5215-.3457l72-72C477.7 36.28 480 30.14 480 24C480 10.29 468.8 0 456 0c-6.141 0-12.28 2.344-16.97 7.031l-44.08 44.08c-13.7-20.87-30.96-35.31-34.59-38.08c-27.87 24.37-50.87 55.99-51.1 89.49c1.125 28.5 18.62 56.49 40.87 78.99l-37.5 37.5l50.73 39.77l32.02-32.02C417.2 249.5 444.9 266.9 473.9 267.9c33.25-1.25 65.75-24.88 89.75-52.25c-8.939-10.25-22.55-23.62-38.1-34.31l44.36-44.36C573.7 132.3 576 126.1 576 120C576 106.3 564.8 96 552 96zM270.5 367.3c-6.625 0-13 1.125-19.25 2.75l42.83-42.83L243.3 287.4l-37.35 37.34c1.625-5.996 2.75-11.1 3-18.37C208.9 276.5 190.2 250.3 175.1 233.9L154.1 218.2c-27.11 24.17-49.13 55.15-50.24 87.97c1 28.5 18.62 56.37 40.88 78.99l-72.25 72.24C67.13 463.6 64 471.8 64 479.1C64 498.2 78.91 512 96 512c8.184 0 16.37-3.127 22.62-9.381l72.25-72.25c22.75 22.75 50.37 40.12 79.37 41.12c33.25-1.25 65.75-24.87 89.75-52.24C342.1 399.8 309.7 368.6 270.5 367.3zM372.2 265.5c-.3496 0-.6602 .1328-1.008 .1387l80.14 62.81c3.633-3.59 7.158-7.281 10.49-11.08C444.9 298 411.5 266.8 372.2 265.5z"/>
</>],
['light',<>
	<path d="M305.5 138.3c0-16.35 6.252-32.7 18.8-45.19l22.38-22.5l23.13 23.12c12.34 12.34 18.63 28.58 18.63 44.95c0 15.07-5.344 30.25-16.23 42.55l-19.26 19.25l25.65 20.25l13.71-13.62c12.5-12.5 28.85-18.75 45.21-18.75s32.74 6.25 45.3 18.75l22.63 22.62l-22.5 22.5c-11.49 11.43-26.24 17.37-41.25 18.32l32.08 25.33c11.71-4.748 22.5-11.78 31.73-20.96l22.56-22.56c6.002-6.002 9.375-14.14 9.375-22.63s-3.373-16.63-9.375-22.63l-20.25-20.24l63.5-63.5C574.4 120.2 576 116.1 576 112c0-9.141-7.473-16-16-16c-4.094 0-8.188 1.562-11.31 4.688l-66.92 66.92c-12.3-6.441-25.76-10.22-39.89-10.86l129.4-129.4C574.4 24.19 576 20.09 576 16c0-9.141-7.473-16-16-16c-4.094 0-8.188 1.562-11.31 4.688l-128.8 128.8c-.7578-14.07-4.602-27.45-11.12-39.63l66.52-66.52C478.4 24.19 480 20.09 480 16c0-9.141-7.473-16-16-16c-4.094 0-8.188 1.562-11.31 4.688l-63.32 63.32l-20.08-20.08c-6-6.002-14.14-9.371-22.63-9.371c-8.5 .0117-16.69 3.406-22.69 9.434l-22.38 22.5C283.6 88.37 273.7 112.3 273.5 137.7l40.56 32.02C308.5 159.1 305.5 149.2 305.5 138.3zM633.9 483.4L25.92 3.42c-6.938-5.453-17-4.25-22.48 2.641c-5.469 6.938-4.281 17 2.641 22.48l608 480C617 510.9 620.5 512 623.1 512c4.734 0 9.422-2.094 12.58-6.078C642 498.1 640.8 488.9 633.9 483.4zM324.5 365.3c-18.14-18.13-42.24-28.12-67.88-28.12c-6.541 0-12.97 .6855-19.24 1.955c1.342-6.383 2.197-12.88 2.197-19.48c0-25.56-9.977-49.61-28.09-67.73L188.4 228.8C182.1 222.6 173.9 219.4 165.8 219.4S149.4 222.6 143.1 228.8L120.7 251.2C102.6 269.3 92.62 293.4 92.62 319.1c0 25.64 9.988 49.74 28.13 67.88l22.85 22.84l-74.9 74.9C65.56 487.8 64 491.9 64 496C64 505.1 71.47 512 80 512c4.094 0 8.188-1.562 11.31-4.688l74.91-74.44c.0762 .0762-.0762-.0762 0 0l22.85 22.75c18.07 18.07 42.16 28.06 67.76 28.06s49.68-9.988 67.82-28.12l22.44-22.31c6.029-5.994 9.426-14.14 9.438-22.65c.0117-8.504-3.361-16.66-9.375-22.67L324.5 365.3zM166.2 387.2l-22.85-22.84c-12.5-12.5-18.75-28.88-18.75-45.25s6.25-32.75 18.75-45.25l22.38-22.38l23.13 23.12c12.31 12.3 18.72 28.63 18.72 45.1c0 15.02-5.328 30.15-16.37 42.49L166.2 387.2zM302 432.9c-12.5 12.5-28.85 18.75-45.19 18.75c-16.35 0-32.69-6.25-45.2-18.75l-22.75-22.62l22.5-22.38c12.5-12.5 28.88-18.75 45.26-18.75c16.38 0 32.75 6.25 45.26 18.75l22.63 22.62L302 432.9z"/>
</>],
['regular',<>
	<path d="M630.8 469.1l-179.8-140.9l2.297-2.307c3.053-3.053 4.559-6.99 4.559-10.95c0-3.338-1.068-6.693-3.184-9.551c16.13-4.125 31.38-12.12 44-24.75l33.75-33.88c3.125-3.125 4.688-7.219 4.688-11.31s-1.562-8.189-4.688-11.31l-25.28-25.32l61.82-61.82C573.7 132.3 576 126.1 576 120C576 106.3 564.8 96 552 96c-6.141 0-12.28 2.344-16.97 7.031L473.2 164.8l-14.05-14.07l109.8-109.8C573.7 36.28 576 30.14 576 24C576 10.29 564.8 0 552 0c-6.141 0-12.28 2.344-16.97 7.031l-109.8 109.8l-14.05-14.07l61.76-61.76C477.7 36.28 480 30.14 480 24C480 10.29 468.8 0 456 0c-6.141 0-12.28 2.344-16.97 7.031l-61.73 61.73l-25.75-25.79c-3.125-3.125-7.219-4.688-11.3-4.688s-8.141 1.562-11.2 4.688l-34.13 34C282.3 89.6 274.3 104.1 270.2 121.1C266.8 118.6 263.6 117.7 260.7 117.7c-6.469 0-10.96 4.555-11.05 4.643L222.7 149.3L38.81 5.109C34.41 1.672 29.19 0 24.03 0C16.91 0 9.845 3.156 5.127 9.187c-8.188 10.44-6.375 25.53 4.062 33.7l591.1 463.1c10.5 8.203 25.56 6.328 33.69-4.078C643.1 492.4 641.2 477.3 630.8 469.1zM357.3 184.5l-11.5 11.38l-17-16.88C319.4 169.6 314.7 157.3 314.7 145c0-12.3 4.689-24.61 14.06-34.05l11.5-11.5l17 17c9.328 9.391 14.02 21.7 14.02 34.02C371.3 162.8 366.7 175.1 357.3 184.5zM396.8 246.6l-16.88-16.88l11.25-11.38c9.375-9.375 21.66-14.06 33.94-14.06c12.28 0 24.56 4.688 33.94 14.06l16.88 17L464.7 246.6c-9.375 9.438-21.66 14.16-33.94 14.16C418.5 260.8 406.2 256 396.8 246.6zM154.4 217.7L136.8 235.4C118 254.1 108.7 278.7 108.7 303.3c0 24.6 9.377 49.19 28.13 67.94l17 17L71.03 470.1C66.34 475.7 64 481.8 64 487.1s2.344 12.31 7.031 17C75.78 509.6 81.91 512 88.03 512c6.125 0 12.25-2.375 17-7l82.63-82.88l16.88 17c18.75 18.75 43.31 28.13 67.88 28.13c24.56 0 49.13-9.377 67.88-28.13l34-34.13c3.102-3.035 4.602-6.977 4.602-10.95c0-.1855-.1699-.3438-.1758-.5293L154.4 217.7zM198.9 342.9l-11.25 11.38l-17-17c-9.375-9.375-14.06-21.66-14.06-33.94c0-12.28 4.688-24.56 14.06-33.94l11.25-11.38l17 17C208 284.1 213 296.1 213 308.1C213 321.9 208 333.9 198.9 342.9zM306.4 405.1C297 414.6 284.8 419.3 272.5 419.3c-12.28 0-24.56-4.719-33.94-14.16l-17-16.88l11.62-11.62c9.346-9.346 21.54-14 33.75-14c12.29 0 24.59 4.719 34 14.13l16.88 16.88L306.4 405.1z"/>
</>],
['solid',<>
	<path d="M270.5 367.3c-6.625 0-13 1.125-19.25 2.75l42.83-42.83L243.3 287.4l-37.35 37.34c1.625-5.996 2.75-11.1 3-18.37C208.9 276.5 190.2 250.3 175.1 233.9L154.1 218.2c-27.11 24.17-49.13 55.15-50.24 87.97c1 28.5 18.62 56.37 40.88 78.99l-72.25 72.24C67.13 463.6 64 471.8 64 479.1C64 498.2 78.91 512 96 512c8.184 0 16.37-3.127 22.62-9.381l72.25-72.25c22.75 22.75 50.37 40.12 79.37 41.12c33.25-1.25 65.75-24.87 89.75-52.24C342.1 399.8 309.7 368.6 270.5 367.3zM424 128c0 6.861 5.367 24 24 24c6.156 0 12.28-2.344 16.97-7.031l104-104C573.7 36.28 576 30.14 576 24C576 10.29 564.8 0 552 0c-6.141 0-12.28 2.344-16.97 7.031l-104 104C426.3 115.7 424 121.9 424 128zM630.8 469.1l-179.4-140.6c3.633-3.59 7.158-7.281 10.49-11.08c-16.1-19.38-50.37-50.62-89.62-51.87c-.3496 0-.6602 .1328-1.008 .1387l-8.764-6.867l32.02-32.02C417.2 249.5 444.9 266.9 473.9 267.9c33.25-1.25 65.75-24.88 89.75-52.25c-8.939-10.25-22.55-23.62-38.1-34.31l44.36-44.36C573.7 132.3 576 126.1 576 120C576 106.3 564.8 96 552 96c-6.141 0-12.28 2.344-16.97 7.031l-72.07 72.11c-.0625 .0625 .0605-.0625 0 0c-5.77 .3672-11.35 .6211-16.62 .6211c-15.55 0-29.07-1.295-41.22-2.117c-.6016-4.271-4.867-24.05-4.867-50.47c0-3.191 .0625-6.48 .2012-9.852c.1562-.1484 .3672-.1914 .5215-.3457l72-72C477.7 36.28 480 30.14 480 24C480 10.29 468.8 0 456 0c-6.141 0-12.28 2.344-16.97 7.031l-44.08 44.08c-13.7-20.87-30.96-35.31-34.59-38.08c-27.87 24.37-50.87 55.99-51.1 89.49c1.125 28.5 18.62 56.49 40.87 78.99l-37.5 37.5L308.8 216.7c.8555-4.023 1.898-8.002 2.062-12.21C310.7 157.8 264.7 119.5 258.5 114.9c-12.5 10.93-23.79 23.39-32.72 36.75L38.81 5.109C34.41 1.672 29.19 0 24.03 0C16.91 0 9.845 3.156 5.127 9.187c-8.188 10.44-6.375 25.53 4.062 33.7l591.1 463.1c10.5 8.203 25.56 6.328 33.69-4.078C643.1 492.4 641.2 477.3 630.8 469.1z"/>
</>],
['thin',<>
	<path d="M424 64c2.062 0 4.094-.7813 5.656-2.344l40-40C471.2 20.09 472 18.05 472 16c0-4.57-3.736-8-8-8c-2.047 0-4.094 .7813-5.656 2.344l-40 40C416.8 51.91 416 53.95 416 56C416 58.91 418.3 64 424 64zM568 112c0-4.57-3.736-8-8-8c-2.047 0-4.094 .7813-5.656 2.344l-40 40C512.8 147.9 512 149.1 512 152C512 154.9 514.3 160 520 160c2.062 0 4.094-.7813 5.656-2.344l40-40C567.2 116.1 568 114 568 112zM377.6 209.8l196.1-196.1C575.2 12.09 576 10.05 576 8C576 3.43 572.3 0 568 0c-2.047 0-4.094 .7813-5.656 2.344l-197.4 197.4L377.6 209.8zM343.9 183c-5.736-10.94-34.7-33.78-35.99-71.48c.7813-24.03 14.72-50.25 39.41-74.44c11.75 10.97 39.41 40.32 39.5 74.1c-.377 9.859-2.736 15.09-2.736 17.77c0 3.955 3.154 7.992 7.934 7.992c3.557 0 6.891-2.352 7.818-5.982c1.797-7 2.75-13.09 2.984-19.5c-.1445-52.01-50.71-93.24-55.69-93.24c-9.062 0-53.73 47.11-55.21 93.33C292.4 124.5 296.7 137.8 302.4 149.1L343.9 183zM447.8 265.6l22.67 18.02c37.91-3.826 69.4-32.22 85.15-49.53c1.385-1.518 2.08-3.443 2.08-5.373c0-4.432-41.41-53.59-92.67-55.32c-6.297 0-12.89 .9062-20.19 2.75c-3.619 .9238-6.031 4.17-6.031 7.738c0 4.018 3.152 8.035 7.908 8.035c2.832 0 8.432-2.521 18.04-2.521c30.94 1.031 58.08 23.1 73.94 39.32c-23.94 24.41-50.64 38.72-73.64 39.56C458.8 268.1 453.2 267 447.8 265.6zM264.1 374.2c-6.234 0-12.64 .875-20.16 2.75c-3.635 .9023-6.064 4.17-6.064 7.756c0 3.926 3.096 8.002 7.914 8.002c2.75 0 8.803-2.508 18.04-2.508c30.94 1.033 58.06 23.1 73.92 39.35c-23.94 24.38-50.66 38.72-73.64 39.57c-42.95-1.416-66.72-37.42-75.37-37.42c-2.924 0-7.994 2.205-7.994 7.967c0 9.475 43.89 44.15 83.39 45.46c52.26-1.943 92.61-51.65 92.61-55.57c0-1.92-.6914-3.842-2.078-5.369C338.3 406.1 304.8 375.6 264.1 374.2zM262.5 302.2l-196.1 196.1C64.78 499.9 64 501.1 64 504C64 506.9 66.28 512 72 512c2.062 0 4.094-.7813 5.656-2.344L275.1 312.3L262.5 302.2zM191.1 337.8c3.617 0 6.945-2.33 7.879-5.959c1.797-7 2.75-13.06 2.969-19.47C201.9 260.1 151.4 219.2 146.3 219.2c-9.09 0-53.75 47.09-55.22 93.26c1.312 38.96 36.58 82.76 45.2 82.76c4.977 0 8.004-4.191 8.004-8.021c0-9.188-35.78-32.97-37.21-74.77c.7656-24 14.7-50.22 39.42-74.41c11.73 10.88 39.39 40.13 39.47 74.13c-.3438 9.732-2.721 15.07-2.721 17.72C183.3 333.7 186.3 337.8 191.1 337.8zM636.1 497.7L12.99 1.73C11.53 .5664 9.771 0 8.025 0C5.674 0 3.336 1.029 1.738 3.012c-2.75 3.469-2.172 8.5 1.281 11.25l623.1 496C628.5 511.4 630.2 512 631.1 512c2.344 0 4.688-1.031 6.266-3.016C641 505.5 640.4 500.5 636.1 497.7z"/>
</>],

]);

const WheatAwnSlash: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

WheatAwnSlash.displayName = "WheatAwnSlash";

export default WheatAwnSlash;