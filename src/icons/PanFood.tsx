
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M177.8 177.9l-32 32c-7.781 7.812-7.781 20.47 0 28.28C149.8 242 154.9 244 160 244s10.25-1.953 14.16-5.859l32-32c7.781-7.812 7.781-20.47 0-28.28C198.3 170 185.7 170 177.8 177.9zM567.2 125l-43.16-67.34c-16.69-25.95-51.38-33.64-77.34-16.92l-23.84 16.92C382.8 30.53 335.6 16 287.8 16c-44.34 0-89.18 12.27-129.3 37.97C75.83 106.1 36.73 202.2 51.03 293.3L25.79 309.5c-26 16.64-33.63 51.34-16.94 77.38l43.16 67.34c10.69 16.66 28.78 25.77 47.25 25.77c10.31-.0156 20.78-2.859 30.09-8.844l23.79-16.89C193.2 481.5 240.3 496 288.2 496c44.34 0 89.18-12.27 129.3-37.97c82.68-53 121.8-148.2 107.5-239.4l25.25-16.21C576.2 185.8 583.8 151.1 567.2 125zM103.5 430.8c-2.469 1.531-4.844 1.328-6.031 1.078c-1.219-.2656-3.469-1.078-5.031-3.5L49.25 361c-2.375-3.719-1.312-8.688 2.438-11.08l12.26-7.857c5.744 14.91 13.07 29.46 22.03 43.44c8.814 13.75 19.1 25.91 30.04 37.21L103.5 430.8zM475.5 297c-10.96 50.09-40.77 92.92-83.94 120.6C360.6 437.5 324.8 448 288.2 448c-65.86 0-126.4-33.04-161.8-88.4C98.71 316.4 89.51 265.1 100.5 214.1C111.4 164.9 141.2 122.1 184.4 94.38C215.4 74.51 251.2 64 287.8 64c65.86 0 126.4 33.04 161.8 88.4C477.3 195.6 486.5 246.9 475.5 297zM524.3 162L512 169.9c-5.742-14.89-13.06-29.43-22.01-43.39c-8.824-13.77-19.12-25.94-30.07-37.25l12.58-8.061c2.438-1.547 4.781-1.359 6.031-1.078c1.219 .2656 3.469 1.078 5.031 3.5l43.16 67.33C529.1 154.7 528.1 159.6 524.3 162zM272 216c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24s24-10.75 24-24C296 226.7 285.3 216 272 216zM417.8 209.8l-80 80c-1.5 1.5-2.344 3.531-2.344 5.656s.8438 4.156 2.344 5.656c12.59 12.58 29.12 18.88 45.66 18.88s33.06-6.297 45.66-18.88C441.3 288.9 448 272.7 448 255.4s-6.719-33.47-18.91-45.66C425.9 206.6 420.9 206.7 417.8 209.8z"/><path className="fa-secondary" d="M449.6 152.4C414.1 97.04 353.6 64 287.8 64C251.2 64 215.4 74.51 184.4 94.38C141.2 122.1 111.4 164.9 100.5 214.1C89.51 265.1 98.71 316.4 126.4 359.6C161.9 414.1 222.4 448 288.2 448c36.62 0 72.37-10.51 103.4-30.38c43.17-27.67 72.98-70.5 83.94-120.6C486.5 246.9 477.3 195.6 449.6 152.4zM288 88c35.28 0 64 28.7 64 64c0 4.422-3.594 8-8 8h-112c-4.406 0-8-3.578-8-8C224 116.7 252.7 88 288 88zM296 240c0 13.25-10.75 24-24 24s-24-10.75-24-24c0-13.26 10.75-24 24-24S296 226.7 296 240zM145.8 238.1c-7.781-7.812-7.781-20.47 0-28.28l32-32c7.812-7.812 20.5-7.812 28.31 0c7.781 7.812 7.781 20.47 0 28.28l-32 32C170.3 242 165.1 244 160 244S149.8 242 145.8 238.1zM272 416c-26.47 0-48-21.53-48-48v-25.38L197.5 316.1C194.6 318.3 191.3 319.6 187.9 319.6c-4.094 0-8.188-1.562-11.31-4.688c-6.25-6.234-6.25-16.38 0-22.62l19.69-19.7c6.25-6.25 16.38-6.25 22.62 0c5.732 5.717 5.949 14.59 1.166 20.87l26.55 26.55H272c26.47 0 48 21.53 48 48S298.5 416 272 416zM368 392c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24C392 381.3 381.3 392 368 392zM429.1 301.1c-12.59 12.58-29.12 18.88-45.66 18.88s-33.06-6.297-45.66-18.88c-1.5-1.5-2.344-3.531-2.344-5.656s.8438-4.156 2.344-5.656l80-80c3.094-3.094 8.156-3.156 11.31 0c12.19 12.19 18.91 28.41 18.91 45.66S441.3 288.9 429.1 301.1z"/>
</>],
['light',<>
	<path d="M568.4 121.5l-43.19-67.32C518.3 43.34 507.6 35.89 495.1 33.14c-12.56-2.688-25.38-.4219-36.16 6.484L441 51.11C396.5 17.86 342.6 0 287.8 0C240.5 0 192.6 13.09 149.8 40.51C56.25 100.5 15.13 211.1 38.77 313.5l-16.67 10.68c-22.28 14.26-28.81 44.01-14.53 66.32l43.19 67.32c6.908 10.79 17.63 18.25 30.13 20.1c3.469 .75 6.938 1.125 10.38 1.125c9.062 0 17.97-2.594 25.78-7.607l17.93-11.49C179.5 494.1 233.4 512 288.2 512c47.3 0 95.14-13.09 137.9-40.5c93.59-59.98 134.7-170.6 111.1-273l16.67-10.68C576.2 173.5 582.7 143.8 568.4 121.5zM99.79 445.4c-3.625 2.311-7.875 3.061-12.06 2.154c-4.156-.9062-7.719-3.389-10.03-6.998l-43.19-67.32c-4.75-7.436-2.594-17.36 4.846-22.12l8.844-5.67c6.252 16.7 14.25 33.02 24.26 48.65c10.78 16.82 23.43 31.64 37.15 45.02L99.79 445.4zM506.8 303.9c-12.79 58.44-47.57 108.4-97.95 140.7c-36.18 23.19-77.9 35.45-120.7 35.45c-76.84 0-147.4-38.55-188.8-103.1C67.11 326.5 56.37 266.6 69.15 208.1C81.94 149.7 116.7 99.73 167.1 67.44c36.18-23.19 77.9-35.45 120.7-35.45c76.84 0 147.4 38.56 188.8 103.1C508.9 185.5 519.6 245.4 506.8 303.9zM536.6 160.8l-8.844 5.67c-6.252-16.7-14.25-33.03-24.26-48.65c-10.78-16.82-23.43-31.64-37.15-45.02l9.816-6.291c3.656-2.297 7.969-3.016 12.06-2.156c4.156 .9062 7.719 3.391 10.03 7l43.19 67.32C546.2 146.2 544.1 156.1 536.6 160.8zM256 320H214.6l-16-16l.6875-.6875c6.25-6.25 6.25-16.38 0-22.62s-16.38-6.25-22.62 0l-24 24c-6.25 6.25-6.25 16.38 0 22.62C155.8 330.4 159.9 332 164 332s8.188-1.562 11.31-4.688L176 326.6l16 16v41.38c0 35.3 28.72 64 64 64s64-28.7 64-64S291.3 320 256 320zM256 416c-17.66 0-32-14.36-32-32v-32h32c17.66 0 32 14.36 32 32S273.7 416 256 416zM433.5 180.7l-92.78 92.78c-6.25 6.25-6.25 16.38 0 22.62c15.41 15.42 35.91 23.91 57.72 23.91c21.78 0 42.28-8.484 57.69-23.91S480 260.2 480 238.4s-8.5-42.28-23.91-57.7C449.8 174.4 439.7 174.4 433.5 180.7zM433.5 273.5c-15.44 15.42-38.5 18.53-56.97 9.438l66.41-66.41C452 235 448.8 258.1 433.5 273.5zM224 160h128c8.844 0 16-7.156 16-16c0-44.11-35.88-80-80-80s-80 35.89-80 80C208 152.8 215.2 160 224 160zM288 96c20.88 0 38.66 13.38 45.25 32h-90.5C249.3 109.4 267.1 96 288 96zM256 240c0 8.836 7.164 16 16 16s16-7.164 16-16c0-8.838-7.164-16-16-16S256 231.2 256 240zM368 384c-8.836 0-16 7.162-16 16c0 8.836 7.164 16 16 16s16-7.164 16-16C384 391.2 376.8 384 368 384zM171.3 180.7c-6.25-6.25-16.38-6.25-22.62 0l-32 32c-6.25 6.25-6.25 16.38 0 22.62C119.8 238.4 123.9 240 128 240s8.188-1.562 11.31-4.688l32-32C177.6 197.1 177.6 186.9 171.3 180.7z"/>
</>],
['regular',<>
	<path d="M567.2 125l-43.16-67.34c-16.69-25.95-51.38-33.64-77.34-16.92l-23.84 16.92C382.8 30.53 335.6 16 287.8 16c-44.34 0-89.18 12.27-129.3 37.97C75.83 106.1 36.73 202.2 51.03 293.3L25.79 309.5c-26 16.64-33.63 51.34-16.94 77.38l43.16 67.34c10.69 16.66 28.78 25.77 47.25 25.77c10.31-.0156 20.78-2.859 30.09-8.844l23.79-16.89C193.2 481.5 240.3 496 288.2 496c44.34 0 89.18-12.27 129.3-37.97c82.68-53 121.8-148.2 107.5-239.4l25.25-16.21C576.2 185.8 583.8 151.1 567.2 125zM103.5 430.8c-2.469 1.531-4.844 1.328-6.031 1.078c-1.219-.2656-3.469-1.078-5.031-3.5L49.25 361c-2.375-3.719-1.312-8.688 2.438-11.08l12.26-7.857c5.744 14.91 13.07 29.46 22.03 43.44c8.814 13.75 19.1 25.91 30.04 37.21L103.5 430.8zM475.5 297c-10.96 50.09-40.77 92.92-83.94 120.6C360.6 437.5 324.8 448 288.2 448c-65.86 0-126.4-33.04-161.8-88.4C98.71 316.4 89.51 265.1 100.5 214.1C111.4 164.9 141.2 122.1 184.4 94.38C215.4 74.51 251.2 64 287.8 64c65.86 0 126.4 33.04 161.8 88.4C477.3 195.6 486.5 246.9 475.5 297zM524.3 162L512 169.9c-5.742-14.89-13.06-29.43-22.01-43.39c-8.824-13.77-19.12-25.94-30.07-37.25l12.58-8.061c2.438-1.547 4.781-1.359 6.031-1.078c1.219 .2656 3.469 1.078 5.031 3.5l43.16 67.33C529.1 154.7 528.1 159.6 524.3 162zM272 320H246.6L220.1 293.4c4.783-6.275 4.566-15.15-1.166-20.87c-6.25-6.25-16.38-6.25-22.62 0L176.6 292.3c-6.25 6.25-6.25 16.39 0 22.62c3.125 3.125 7.219 4.688 11.31 4.688c3.412 0 6.697-1.346 9.547-3.516L224 342.6v25.38c0 26.47 21.53 48 48 48s48-21.53 48-48S298.5 320 272 320zM417.8 209.8l-80 80c-1.5 1.5-2.344 3.531-2.344 5.656s.8438 4.156 2.344 5.656c12.59 12.58 29.12 18.88 45.66 18.88s33.06-6.297 45.66-18.88C441.3 288.9 448 272.7 448 255.4s-6.719-33.47-18.91-45.66C425.9 206.6 420.9 206.7 417.8 209.8zM232 160h112c4.406 0 8-3.578 8-8c0-35.3-28.72-64-64-64s-64 28.7-64 64C224 156.4 227.6 160 232 160zM248 240c0 13.25 10.75 24 24 24s24-10.75 24-24c0-13.26-10.75-24-24-24S248 226.7 248 240zM368 344c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24s24-10.75 24-24C392 354.7 381.3 344 368 344zM206.2 206.1c7.781-7.812 7.781-20.47 0-28.28c-7.812-7.812-20.5-7.812-28.31 0l-32 32c-7.781 7.812-7.781 20.47 0 28.28C149.8 242 154.9 244 160 244s10.25-1.953 14.16-5.859L206.2 206.1z"/>
</>],
['solid',<>
	<path d="M567.2 125.1l-43.16-67.35c-16.69-25.95-51.38-33.64-77.34-16.92l-23.6 16.76c-77.08-52.42-181.1-57.13-264.6-3.637C75.81 106.1 36.71 202.2 51.04 293.4L25.79 309.6c-26 16.64-33.63 51.35-16.94 77.38l43.16 67.35c10.69 16.66 28.78 25.77 47.25 25.77c10.31-.0156 20.78-2.86 30.09-8.844l23.66-16.8c77.08 52.39 181.1 57.08 264.5 3.602c82.66-52.99 121.8-148.2 107.5-239.3l25.24-16.2C576.2 185.9 583.8 151.1 567.2 125.1zM103.5 430.8c-2.469 1.531-4.844 1.328-6.031 1.078c-1.219-.2656-3.469-1.078-5.031-3.5l-43.16-67.33c-2.375-3.719-1.312-8.688 2.438-11.08l12.27-7.87c5.742 14.89 13.06 29.43 22.01 43.39c8.795 13.72 18.78 26.22 29.69 37.5L103.5 430.8zM320 87.99c35.28 0 64 28.71 64 64c0 4.422-3.594 8.001-8 8.001h-112c-4.406 0-8-3.578-8-8.001C256 116.7 284.7 87.99 320 87.99zM272 215.1c13.25 0 24 10.74 24 24c0 13.25-10.75 24-24 24S248 253.3 248 240C248 226.7 258.7 215.1 272 215.1zM145.8 206.1c-7.781-7.813-7.781-20.47 0-28.28l32-32c7.812-7.813 20.5-7.813 28.31 0c7.781 7.813 7.781 20.47 0 28.28l-32 32C170.3 210 165.1 211.1 160 211.1S149.8 210 145.8 206.1zM256 416c-26.47 0-48-21.53-48-48v-25.38l-26.55-26.55C178.6 318.3 175.3 319.6 171.9 319.6c-4.094 0-8.188-1.563-11.31-4.688c-6.25-6.235-6.25-16.38 0-22.63l19.69-19.7c6.25-6.25 16.38-6.25 22.62 0c5.732 5.717 5.949 14.59 1.166 20.87l26.55 26.55H256c26.47 0 48 21.53 48 48C304 394.5 282.5 416 256 416zM368 392c-13.25 0-24-10.75-24-24c0-13.26 10.75-24 24-24s24 10.74 24 24C392 381.3 381.3 392 368 392zM429.1 285.1c-12.59 12.58-29.12 18.88-45.66 18.88s-33.06-6.297-45.66-18.88c-1.5-1.5-2.344-3.531-2.344-5.657s.8438-4.157 2.344-5.657l80-80.01c3.094-3.11 8.156-3.141 11.31 0C441.3 205.1 448 222.2 448 239.4S441.3 272.9 429.1 285.1zM524.3 162.1L512.1 169.9c-5.746-14.91-13.07-29.47-22.03-43.45c-8.783-13.7-18.75-26.18-29.64-37.45l12.15-7.788c2.438-1.547 4.781-1.359 6.031-1.078c1.219 .2656 3.469 1.078 5.031 3.5l43.16 67.33C529.1 154.7 528.1 159.7 524.3 162.1z"/>
</>],
['thin',<>
	<path d="M569.7 117.8l-43.16-67.34c-5.781-8.998-14.69-15.2-25.13-17.48c-10.44-2.344-21.13-.375-30.13 5.391l-25.67 16.45C400.2 19.25 344.5 0 287.8 0C240.5 0 192.6 13.09 149.8 40.51C52.96 102.6 12 218.1 41.22 324.3l-22.81 14.62c-18.56 11.89-24 36.68-12.1 55.26l43.16 67.34c5.781 8.998 14.69 15.2 25.13 17.48c2.875 .6406 5.75 .9375 8.627 .9375c7.562 0 14.97-2.156 21.5-6.328l25.67-16.45C175.8 492.8 231.5 512 288.2 512c47.3 0 95.15-13.09 137.9-40.51c96.87-62.08 137.8-178.5 108.6-283.8l22.81-14.62C576.2 161.2 581.6 136.4 569.7 117.8zM96.1 460.2c-11.12 7.109-26 3.891-33.16-7.25l-43.16-67.33c-7.156-11.16-3.906-26.03 7.25-33.17l19.36-12.41c6.486 18.6 14.96 36.8 26.06 54.12c12.79 19.95 27.99 37.39 44.82 52.47L96.1 460.2zM522.5 307.3c-13.7 62.63-50.97 116.2-104.9 150.8c-38.76 24.85-83.46 37.98-129.3 37.98c-82.31 0-157.9-41.31-202.3-110.5c-34.6-53.97-46.11-118.2-32.41-180.8c13.7-62.63 50.97-116.2 104.9-150.8c38.76-24.85 83.46-37.98 129.3-37.98c82.31 0 157.9 41.31 202.3 110.5C524.6 180.4 536.2 244.7 522.5 307.3zM548.1 159.6L529.6 171.1c-6.486-18.61-14.96-36.8-26.07-54.12c-12.79-19.95-27.99-37.39-44.82-52.47l21.17-13.57c11.12-7.125 25.97-3.875 33.16 7.25l43.16 67.33C563.4 137.6 560.1 152.4 548.1 159.6zM256 320H203.3l-24-24l6.344-6.344c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0l-24 24c-3.125 3.125-3.125 8.188 0 11.31C151.9 315.2 153.9 316 156 316s4.094-.7813 5.656-2.344L168 307.3l24 24V384c0 35.3 28.72 64 64 64s64-28.7 64-64S291.3 320 256 320zM256 432c-26.47 0-48-21.53-48-48v-48H256c26.47 0 48 21.53 48 48S282.5 432 256 432zM444.4 178.3l-106 106c-3.125 3.125-3.125 8.188 0 11.31C354 311.4 374.8 320 397 320c.0313 0 .0313 0 .0313 0c22.16 0 43-8.641 58.66-24.31c32.34-32.36 32.34-85 0-117.3C452.6 175.2 447.5 175.2 444.4 178.3zM444.4 284.4C431.7 297 414.9 304 397 304c-15.22 0-29.62-5.031-41.38-14.3l94.03-94.06C458.1 207.4 464 221.8 464 237C464 254.9 457 271.7 444.4 284.4zM208 160h160c4.406 0 8-3.578 8-8C376 103.5 336.5 64 288 64S200 103.5 200 152C200 156.4 203.6 160 208 160zM288 80c37 0 67.56 28.05 71.56 64H216.4C220.4 108 251 80 288 80zM256 240C256 248.8 263.2 256 272 256S288 248.8 288 240C288 231.2 280.8 224 272 224S256 231.2 256 240zM368 384c-8.836 0-16 7.162-16 16c0 8.836 7.164 16 16 16s16-7.164 16-16C384 391.2 376.8 384 368 384zM165.7 186.3c-3.125-3.125-8.188-3.125-11.31 0l-32 32c-3.125 3.125-3.125 8.188 0 11.31C123.9 231.2 125.9 232 128 232s4.094-.7813 5.656-2.344l32-32C168.8 194.5 168.8 189.5 165.7 186.3z"/>
</>],

]);

const PanFood: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PanFood.displayName = "PanFood";

export default PanFood;