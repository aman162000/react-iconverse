
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M145.3 0H110.8c-14.58 0-26.5 11.83-26.5 26.41v54.09c0 4.439 1.114 8.976 3.098 12.95l16.66 33.3L104.1 224c0 8.836 7.164 16 16 16h16c8.836 0 16-7.164 16-16L152 126.7l16.59-33.19c2.059-4.117 3.033-8.461 3.033-13.06V26.37C171.6 11.81 159.8 0 145.3 0zM358.1 151v91.63l48 .625V73.38c1.75-1.125 3.5-2.375 5.125-3.75c14.75-14.88 16-38.5 2.625-54.75c-13.25-16.12-36.63-19.62-54.13-8c-16.38 11.13-14 13.25-31.88 96.25c-1.875 9 .875 18.38 7.375 25L358.1 151zM423.1 368h-79.1c-4.375 0-7.1 3.625-7.1 8v16c0 4.375 3.625 8 7.1 8h79.1c4.375 0 7.1-3.625 7.1-8v-16C431.1 371.6 428.4 368 423.1 368zM423.1 303.9h-79.1c-4.375 0-7.1 3.625-7.1 8v16c0 4.375 3.625 8 7.1 8h79.1c4.375 0 7.1-3.625 7.1-8v-16C431.1 307.5 428.4 303.9 423.1 303.9z"/><path className="fa-secondary" d="M505.5 400.9l-26.1-73.5c-6.625-18.25-5.75-38.25 2.625-55.75c4.625-9.75 6.1-20.25 6.1-30.1V212.4c0-8.625-5.875-15.1-14.12-17.1s-16.87 1.875-20.75 9.5l-10.62 20.5c-5.373 10.38-15.37 17-26.62 19L351.1 242.5c-11.25-3-20.87-11-24.1-22.38l-12.1-35.75c-2.875-7.875-11.12-12.63-19.5-11.13c-8.375 1.375-14.37 8.625-14.37 17.13V240.8c0 10.75 2.375 21.25 6.1 30.87c8.25 17.5 9.125 37.63 2.5 55.88l-26.1 73.5C239.1 453.5 278.5 512 335.7 512l96.37-.0005C489.4 511.1 527.1 453.4 505.5 400.9zM431.1 392c0 4.375-3.625 8-7.1 8h-79.1c-4.375 0-7.1-3.625-7.1-8v-16c0-4.375 3.625-8 7.1-8h79.1c4.375 0 7.1 3.625 7.1 8V392zM431.1 327.9c0 4.375-3.625 8-7.1 8h-79.1c-4.375 0-7.1-3.625-7.1-8v-16c0-4.375 3.625-8 7.1-8h79.1c4.375 0 7.1 3.625 7.1 8V327.9zM229.3 300.2c5.5-10.62 8.333-22.37 8.458-34.25c0-29.13-16.1-54.92-43.25-71.17C181.8 186.8 166.1 182.9 152 181L152.1 224c0 8.837-7.163 16-16 16h-16c-8.837 0-16-7.163-16-16L104 180.1c-15 1.875-29.77 5.875-42.65 13.88C54.63 198.1 48.5 203.9 42.88 209.5c-15.37 15.38-24.62 34.1-24.62 56.62c0 11.88 2.875 23.62 8.375 34.12c7.998 15.62 5.998 35.62-4.875 48.75c-13.62 16.5-21.87 36.37-21.75 57.1c-.125 58 57.37 105 127.1 105c41.76 0 78.86-16.46 102.3-41.9l.1187-.6031c-9.251-26.12-8.375-54.75 2.375-80.37l10.25-27.75c-2.625-4.25-5.625-8.5-8.75-12.38C223.2 335.9 221.3 315.9 229.3 300.2zM156.2 332.3c-15.62 15.62-40.87 15.62-56.5 0s-15.62-40.88 0-56.5s40.87-15.62 56.5 0C171.9 291.4 171.9 316.6 156.2 332.3z"/>
</>],
['light',<>
	<path d="M144 180.3V133.8l24.61-40.25c2-4 3.033-8.565 3.033-13.06V26.37C171.6 11.87 159.9 0 145.3 0H110.8c-14.63 0-26.5 11.91-26.5 26.41v54.09c0 4.5 1.098 8.947 3.098 12.95l24.64 40.36v46.54c-24.06 2.146-47.73 7.762-69.13 29.15c-15.38 15.38-24.62 34.1-24.62 56.62c0 11.88 2.875 23.62 8.375 34.12c8 15.62 6 35.62-4.875 48.75c-13.62 16.5-21.87 36.37-21.75 57.1c-.125 58 57.37 105 127.1 105c25.78 0 49.57-6.478 69.6-17.34c7.277-3.945 9.754-13.03 6.225-20.52c-.0469-.0977-.0938-.1953-.1387-.293C199.9 465.8 190.2 462.8 182.4 467C166.5 475.5 147.7 480 128 480c-26.88 0-51.75-8.375-70.25-23.5c-16.63-13.62-25.75-31.25-25.75-49.63c0-16.5 7.875-29.5 14.38-37.38c19.12-23 22.62-56.75 8.75-83.88C51.88 279.6 50.25 272.9 50.25 266c0-25.42 24.49-52.3 61.75-52.4L112 274.9C93.4 281.6 80 299.1 80 320c0 26.5 21.5 48 48 48c26.5 0 48-21.5 48-48c0-20.86-13.41-38.45-32.01-45.06l.0039-61.42c19.12-.0527 34.28 5.824 47.3 19.42C197.6 239.5 207.9 239.7 214.2 233.1c6.646-7.062 5.869-16.33 .5547-21.95C189.8 184.7 159.4 181.7 144 180.3zM116.3 32h23.5v48.5L128 103.3L116.3 80.5V32zM144 320c0 8.875-7.128 15.1-16 15.1S112 328.9 112 320s7.125-16 16-16S144 311.1 144 320zM400 336h-64c-8.801 0-16 7.199-16 16c0 8.799 7.199 16 16 16h64c8.799 0 16-7.201 16-16C416 343.2 408.8 336 400 336zM400 400.1h-64c-8.801 0-16.01 7.136-16.01 15.94c0 8.799 7.199 15.1 15.1 15.1h64c8.799 0 15.1-7.201 15.1-15.1C416 407.3 408.8 400.1 400 400.1zM504.6 386.9l-30.25-50.63c-7.5-20.38-11.62-29.5-2.25-49.25c5.125-10.88 7.875-22.75 7.875-34.75V221.3c0-9.719-6.273-18.78-15.73-21.04c-1.684-.4023-3.367-.5957-5.021-.5957c-7.752 0-14.88 4.248-18.5 11.25l-12 23.12c-6 11.62-12.12 19.75-24.75 22h-20V93.06c20.23-7.189 34.31-27.36 31.69-50.61C412.9 17.92 390.1 0 366.3 0c-20.75 0-38.7 14.38-43.2 34.63C315.6 68.38 305.2 115.5 303.9 121.4C301.5 132 304.8 143.1 312.5 150.9l39.5 31.5V256h-20c-12.75-3.5-18.5-14-23.12-26.88l-14.75-40.25C291.4 181.1 284 176 275.8 176c-5.25 0-10.25 2-14 5.75c-3.625 3.75-5.75 8.75-5.75 13.88v56.63c0 12.12 2.625 24 7.875 34.88c9.25 19.62 5.375 28.75-2.125 49.25L231.4 387C206 446.1 249.4 512 313.8 512h108.4C486.6 511.9 530 446.1 504.6 386.9zM335.2 128c1.369-6.324 11.72-52.97 19.16-86.46C355.6 35.94 360.5 32 366.3 32c8.83 0 16.72 6.295 17.59 14.03c.9824 8.705-4.619 14.75-10.6 16.88c-12.76 4.535-21.28 16.61-21.28 30.15V141.4L335.2 128zM470.4 453.9C459.5 470.5 441.9 479.1 422.1 480h-108.4c-19.72 0-37.26-9.449-48.12-25.93c-10.5-15.94-12.5-35.03-5.588-52.66l29.15-48.57c1.043-1.738 1.916-3.568 2.613-5.471l.6816-1.863c7.715-21.04 15-40.91 .209-72.29c-1.871-3.873-3.188-7.965-3.939-12.23c6.793 10.41 17.54 21.14 34.78 25.88C326.3 287.6 329.2 288 332 288h72c1.883 0 3.762-.166 5.615-.4961c17.33-3.09 28.71-12.07 36.23-21.05c-.709 2.328-1.588 4.613-2.629 6.82c-14.75 31.08-7.492 50.71 .1953 71.5l.9336 2.529c.6855 1.861 1.543 3.656 2.561 5.359l29.04 48.59C482.9 418.9 480.9 438 470.4 453.9z"/>
</>],
['regular',<>
	<path d="M188.1 444.1c-15.37 12.62-37.37 19.87-60.12 19.87s-44.75-7.25-60.12-19.87c-7.375-6.125-19.87-18.1-19.87-37.25c0-9.375 3.625-18.62 10.75-27.25c22.1-27.87 27.37-68.5 10.62-101.2C56.5 253.2 86.38 235.7 86.75 235.5C91.13 232.9 97.13 230.9 103.1 229.5v82.5c0 13.25 10.75 24 24 24c13.25 0 23.1-10.75 23.1-24V229.5c6.875 1.375 12.1 3.375 17.25 5.1c15.1 9.1 25.1 26.12 17.37 42.87c-16.75 32.75-12.37 73.37 10.62 101.1c1.1 2.375 2.1 4.875 4.375 7.375l23.12-62.1C224.1 315.7 225.7 307.5 229.3 300.2c.125-.25 .2083-.5005 .3333-.7505C229.4 294.6 228.1 289.9 226.1 285.4c-6.625-13.1-10.12-29.25-10.12-44.62V212.9c-.1-1.125-1.875-2.375-2.875-3.375C207.5 203.9 201.2 199.1 194.5 194.8C181.7 186.8 167 182.8 152 181L152 126.7l16.59-33.19c1.1-3.1 3.033-8.565 3.033-13.06V26.37C171.6 11.88 159.9 0 145.3 0H110.8c-14.62 0-26.5 11.91-26.5 26.41v54.09c0 4.5 1.098 8.947 3.098 12.95l16.66 33.3l.0001 54.25C89.02 182.9 74.25 186.9 61.38 194.9C54.63 198.1 48.5 203.9 42.88 209.5c-15.37 15.37-24.62 35-24.62 56.62c0 11.88 2.875 23.63 8.375 34.12c7.1 15.62 5.1 35.63-4.875 48.75c-13.62 16.5-21.87 36.38-21.75 57.1c-.125 57.1 57.38 105 127.1 105c28.37 .125 56.12-8.001 79.87-23.5c-8.75-14.87-13.1-31.37-15.25-48.62C190.1 441.5 189.5 442.1 188.1 444.1zM399.1 383.1h-63.1c-8.875 0-15.1 7.125-15.1 15.1l.0074 16.06c0 8.875 7.125 15.1 15.1 15.1h64c8.875 0 15.1-7.125 15.1-15.1l-.0085-16.06C415.1 391.1 408.9 383.1 399.1 383.1zM505.5 400.9l-26.1-73.5c-6.625-18.25-5.75-38.25 2.625-55.75c4.625-9.75 6.1-20.25 6.1-30.1V212.4c0-4.1-1.875-9.625-5.375-13.13c-3.5-3.5-8.125-5.375-13.12-5.375c-6.875 0-13.25 3.875-16.37 10l-10.62 20.5C437.2 234.7 427.2 238 415.1 240h-23.1V73.37c1.75-1.125 3.5-2.375 5.125-3.75c11.62-11.75 15.12-29.25 8.75-44.5C399.6 9.875 384.7 0 368.2 0c-7.1 0-15.87 2.375-22.62 6.875c-16.37 11.13-13.1 13.25-31.87 96.25c-1.875 8.1 .875 18.37 7.375 24.1l22.87 22.87V240h-23.1c-11.25-2.1-20.87-8.501-24.1-19.88L281.1 184.4c-2.5-6.875-9.125-11.5-16.37-11.5c-9.75 0-17.5 7.875-17.5 17.5V240.7c0 10.75 2.375 21.25 6.1 30.1c8.25 17.5 9.125 37.5 2.5 55.75l-26.1 73.5c-22.62 52.5 15.87 110.1 73.12 110.1l128.4 .0009C489.4 511.1 527.1 453.4 505.5 400.9zM432.1 463.1h-128.4c-28.87 0-35.5-29.25-29.12-44.12c.375-.875-2.1 8.5 27.1-75.87C308.1 326.1 311.2 306.9 309.1 288c0 0 116.9 .125 117.7 0c-1.875 18 .25 38.62 6.625 55.87c30.87 84.37 27.5 74.1 27.87 75.87C472.7 446.2 448.4 463.1 432.1 463.1z"/>
</>],
['solid',<>
	<path d="M229.3 300.2c5.5-10.62 8.333-22.37 8.458-34.25c0-29.13-17-54.92-43.25-71.17c-12.75-8-27.48-11.95-42.48-13.83L152 126.7l16.59-33.19c1.1-4 3.033-8.565 3.033-13.06V26.37C171.6 11.87 159.9 0 145.3 0H110.8c-14.62 0-26.5 11.91-26.5 26.41v54.09c0 4.5 1.098 8.947 3.098 12.95l16.66 33.3l.0001 54.25c-14.1 1.875-29.77 5.875-42.65 13.88C54.63 198.1 48.5 203.9 42.88 209.5c-15.37 15.38-24.62 34.1-24.62 56.62c0 11.88 2.875 23.63 8.375 34.12c7.1 15.63 5.1 35.62-4.875 48.75c-13.62 16.5-21.87 36.37-21.75 57.1c-.125 58 57.38 105 127.1 105c39.87 0 75.5-14.1 98.1-38.5c1.25-1.25 2.25-2.751 3.375-4.001c-9.25-26.12-8.375-54.75 2.375-80.37l10.25-27.75c-2.625-4.25-5.625-8.5-8.75-12.38C223.2 335.9 221.3 315.9 229.3 300.2zM156.2 332.3c-15.62 15.62-40.87 15.62-56.5 0c-15.62-15.62-15.62-40.88 0-56.5c15.62-15.62 40.87-15.62 56.5 0C171.9 291.4 171.9 316.6 156.2 332.3zM505.5 400.9l-26.1-73.5c-6.625-18.25-5.75-38.25 2.625-55.75c4.625-9.75 6.1-20.25 6.1-30.1V212.4c0-8.625-5.875-15.1-14.12-17.1c-8.25-2-16.87 1.875-20.75 9.5l-10.62 20.5c-5.375 10.38-15.37 17-26.62 19L407.1 243.2V73.38c1.75-1.125 3.5-2.375 5.125-3.75c14.75-14.87 15.1-38.5 2.625-54.75c-13.25-16.13-36.62-19.63-54.12-8c-16.37 11.13-13.1 13.25-31.87 96.25c-1.875 9 .875 18.38 7.375 24.1L359.1 151v91.62L351.1 242.5c-11.25-3-20.87-10.1-24.1-22.38l-12.1-35.75c-2.875-7.875-11.12-12.62-19.5-11.13c-8.375 1.375-14.37 8.625-14.37 17.13V240.8c0 10.75 2.375 21.25 6.1 30.87c8.25 17.5 9.125 37.62 2.5 55.88l-26.1 73.5C239.1 453.5 278.5 512 335.7 512l96.37-.0005C489.4 511.1 527.1 453.4 505.5 400.9zM431.1 392c0 4.375-3.625 8-7.1 8h-79.1c-4.375 0-7.1-3.625-7.1-8v-16c0-4.375 3.625-8 7.1-8h79.1c4.375 0 7.1 3.625 7.1 8V392zM431.1 327.9c0 4.375-3.625 8-7.1 8h-79.1c-4.375 0-7.1-3.625-7.1-8v-16c0-4.375 3.625-8 7.1-8h79.1c4.375 0 7.1 3.625 7.1 8V327.9z"/>
</>],
['thin',<>
	<path d="M415.1 320h-63.1c-4.406 0-7.1 3.594-7.1 8s3.594 8 7.1 8h63.1c4.406 0 7.1-3.594 7.1-8S420.4 320 415.1 320zM415.1 384h-63.1c-4.406 0-7.1 3.594-7.1 8s3.594 8 7.1 8l63.1-.0006c4.406 0 8.002-3.593 8.002-7.999S420.4 384 415.1 384zM194.7 198.3C187.5 193.8 179 190.5 169.5 188.1c-4.779-1.213-9.465 2.411-9.465 7.342v.795c0 3.49 2.412 6.45 5.787 7.339c7.68 2.022 14.64 4.641 20.49 8.322C192 215.4 197.2 219.6 202.2 224.5c13.56 13.62 20.72 30.12 20.72 47.72c0 9.906-2.406 19.75-6.969 28.53c-6.535 12.8-6.98 28.26-1.973 41.4c1.898 4.984 8.348 6.395 12.51 3.062c2.77-2.211 3.721-5.941 2.457-9.254C225.5 327.1 225.7 316.8 230.1 308.1c5.719-11 8.75-23.38 8.75-35.84c0-21.62-9.031-42.56-25.37-59C207.7 207.4 201.4 202.4 194.7 198.3zM216.4 474.5c-1.791-4.844-7.748-6.549-11.84-3.404c-20.65 15.86-47.73 24.88-76.53 24.88c-33.94 0-65.69-12.31-87.12-33.81c-16.09-16.12-24.94-36.44-24.87-57.22c-.0938-17.47 6.312-34.63 18.56-49.53c12.16-14.72 14.44-37.19 5.5-54.72C35.53 292 33.13 282.2 33.13 272.3c0-17.59 7.156-34.09 20.75-47.75C58.78 219.6 63.97 215.4 69.78 211.9c5.909-3.719 12.88-6.363 20.44-8.371c3.37-.895 5.778-3.851 5.778-7.338V195.4c0-4.936-4.691-8.567-9.472-7.34C77.1 190.4 68.62 193.7 61.35 198.3C54.6 202.4 48.28 207.4 42.53 213.2c-16.37 16.47-25.41 37.41-25.41 59.03c0 12.47 3.031 24.84 8.719 35.78c6.094 11.97 4.594 27.28-3.625 37.25c-14.66 17.84-22.34 38.53-22.22 59.72c-.0625 25 10.44 49.31 29.56 68.5c24.41 24.47 60.28 38.5 98.44 38.5c32.36 0 62.66-10.52 86.08-28.55C216.8 481.4 217.6 477.7 216.4 474.5C216.4 474.5 216.4 474.6 216.4 474.5zM505.4 397.1l-25.28-68.91c-5.387-14.85-4.786-30.77 1.629-44.96c4.812-10.64 7.87-21.99 7.87-33.67l.0002-26.47c0-11.75-7.969-21.91-19.37-24.66c-11.37-2.656-23.16 2.594-28.41 13L431.9 230.6c-2.626 5.051-6.933 8.774-11.71 11.05c-2.573 1.229-4.169 3.847-4.169 6.699v1.098c0 5.497 5.731 9.23 10.71 6.91c8.347-3.887 15.13-10.23 19.35-18.38l9.1-19.28c1.969-3.844 6.312-5.781 10.44-4.75c4.187 1 7.125 4.75 7.125 9.094l-.0001 27.88c0 8.631-2.377 16.98-6.042 24.8c-8.539 18.21-9.42 38.74-2.49 57.89l25.47 69.34c10.63 24.78 5.463 53.75-14.4 73.7c-12.82 12.87-30.75 19.33-48.92 19.33l-88.49-.0001c-22.53 0-43.34-11.22-55.69-30c-12.37-18.75-14.41-42.28-5.375-63.34l25.34-68.94c6.1-19.28 6.062-40.09-2.656-58.56c-3.844-7.969-5.781-16.53-5.781-25.5V202.4c0-4.094 2.844-7.531 6.906-8.188c4.25-.7813 7.1 1.562 9.344 5.312l12.19 33.47c3.106 8.639 9.176 15.82 17.62 20.76c5.008 2.926 11.34-.7941 11.34-6.594l-.0005-1.281c-.0009-2.535-1.229-4.978-3.402-6.283c-4.791-2.878-8.647-6.885-10.5-12.07l-12.22-33.5c-4.062-11.12-15.44-17.66-27.06-15.59c-11.72 1.906-20.22 12-20.22 23.97v47.22c0 11.38 2.469 22.28 7.344 32.38C292.8 296.6 293.5 313 288 328.3l-25.16 68.5c-12.61 29.25-7.459 63.19 14.18 87.65c16.04 18.13 39.75 27.6 63.95 27.6h85.66c24.18 0 47.88-9.366 64.01-27.38C512.6 460.1 517.8 425.1 505.4 397.1zM88 320c0 22.06 17.94 40 39.1 40s39.1-17.94 39.1-40s-17.94-40-39.1-40S88 297.9 88 320zM152 320c0 13.22-10.78 24-23.1 24s-23.1-10.78-23.1-24s10.78-24 23.1-24S152 306.8 152 320zM120 146.9v101.1c0 4.406 3.594 8 7.1 8s7.1-3.594 7.1-8V146.9l30.75-36.88C172.7 102.8 176 93.75 176 84.41V40c0-22.06-17.94-40-39.1-40H120c-22.06 0-39.1 17.94-39.1 40V84.41c0 9.344 3.281 18.44 9.25 25.62L120 146.9zM96 40c0-13.22 10.78-24 23.1-24h15.1c13.22 0 23.1 10.78 23.1 24V84.41c0 5.625-1.969 11.06-5.562 15.38L128 131.5L101.6 99.78C97.97 95.47 96 90.03 96 84.41V40zM375.1 171.3v108.7c0 4.406 3.594 8 7.1 8c4.406 0 7.1-3.594 7.1-8V79.19c18.25-3.719 31.1-19.88 31.1-39.19c0-22.06-17.94-40-39.1-40c-22.56 0-42.56 14.38-49.72 35.81l-15.62 46.91c-4.812 14.44-1.125 30.12 9.687 40.94L375.1 171.3zM333.8 87.78l15.62-46.91c4.969-14.88 18.84-24.88 34.53-24.88c13.22 0 23.1 10.78 23.1 24s-10.78 24-23.1 24c-4.406 0-7.1 3.594-7.1 8v76.69l-36.34-36.34C333.2 105.8 330.9 96.44 333.8 87.78z"/>
</>],

]);

const Guitars: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Guitars.displayName = "Guitars";

export default Guitars;
