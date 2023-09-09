
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M186.8 64.47c-17.44 2.906-29.22 19.4-26.31 36.81l64 383.1c2.594 15.66 16.09 26.7 31.47 26.7c1.75 0 3.562-.0833 5.344-.3958c17.44-2.906 29.22-19.4 26.31-36.81L223.6 90.76C220.7 73.32 204.1 61.41 186.8 64.47zM127.3 185.3c-3.719-17.25-20.59-28.5-38-24.56C72 164.4 61 181.5 64.72 198.7l47.99 223.1c3.219 14.1 16.48 25.28 31.26 25.28c2.219 0 4.469-.2187 6.75-.7187C168 443.6 179 426.6 175.3 409.3L127.3 185.3zM479.6 91.13c-2.594-17.47-18.54-29.07-36.38-26.76c-17.47 2.625-29.53 18.94-26.91 36.4l48.01 319.1c2.375 15.87 16.02 27.25 31.62 27.25c1.562 0 3.156-.125 4.781-.3437c17.47-2.625 29.53-18.94 26.91-36.4L479.6 91.13zM315.5 .3466c-17.5 2.5-29.66 18.72-27.16 36.22l64.01 447.1C354.6 500.5 368.2 512 383.9 512c1.5 0 3.125-.0937 4.656-.3124c17.5-2.5 29.66-18.72 27.16-36.22l-64-447.1C349.2 10 332.1-2.247 315.5 .3466z"/><path className="fa-secondary" d="M67.51 178.7C66.96 179.8 66.05 180.7 65.64 181.9L40.94 256H31.1C14.33 256 0 270.3 0 287.1c0 17.67 14.33 32.02 31.1 32.02H64c9.547 0 18.34-4.218 24.31-11.19L64.72 198.7C63.19 191.6 64.64 184.8 67.51 178.7zM160.8 89.74c-.0879 .4492-.3652 .7984-.4336 1.255L138.4 237.4l36.84 171.9c.8828 4.105 .8184 8.177 .1543 12.08c.0371-.2168 .1719-.3956 .2051-.6143l18.02-120.1L160.4 101.3C159.8 97.32 160.1 93.46 160.8 89.74zM608 256h-8.94l-24.18-72.54c-3.727-11.18-12.7-20.42-24.26-22.77c-17.89-3.632-34.32 7.829-37.93 24.59L501.6 237.3l26.09 173.9c.625 4.152 .3027 8.21-.6094 12.07c.0508-.2168 .2031-.3818 .25-.6006l24.39-113.9C557.7 315.8 566.5 320 576 320h32C625.7 320 640 305.7 640 287.1C640 270.3 625.7 256 608 256zM416.9 89.42c-.1016 .4746-.3966 .8423-.4767 1.325l-30 180l29.25 204.7c.5547 3.877 .1387 7.628-.6445 11.24c.1113-.5136 .4297-.9266 .5176-1.448l30.78-184.6l-29.1-199.9C415.8 96.87 416.1 93.08 416.9 89.42zM288.9 25.82C288.8 26.42 288.4 26.87 288.3 27.48L253.6 270.8l34 203.1c.6445 3.865 .3203 7.63-.3848 11.27c.1016-.5253 .418-.9539 .4941-1.489L319.1 258.3L288.3 36.56C287.8 32.86 288.2 29.29 288.9 25.82z"/>
</>],
['light',<>
	<path d="M383.9 512C383.8 512 383.1 512 383.9 512c-7.938-.0937-14.81-6.031-15.86-13.88L320 137.3L271.1 498.1C270.9 505.1 264.2 511.9 256.3 512c-.0781 0 .0625 0 0 0c-7.844 0-14.7-5.688-15.95-13.47L192.9 202.8l-33.06 231.5C158.7 441.1 152.2 447.8 144.4 448c-7.875 .1562-14.59-5.25-16.12-12.88L92.13 254.2L79.17 293.1C77 299.6 70.89 304 64 304L15.98 303.1C7.156 303.1 0 296.8 0 287.1C0 279.1 7.172 271.1 16 271.1L52.47 272l28.36-85.06C83.11 180.1 89.45 175.3 97 176c7.234 .4375 13.27 5.719 14.69 12.84l29.69 148.4l34.78-243.5C177.3 85.91 183.1 80.06 191.9 80c7.922 1.125 14.69 5.656 15.94 13.47l46.86 292.3L304.1 13.88C305.2 5.938 311.1 0 320 0s14.8 5.938 15.86 13.88l49.48 371.9l46.86-292.3C433.5 85.66 441.7 80.56 448.1 80c7.906 .0625 14.58 5.906 15.7 13.75l34.78 243.5l29.69-148.4c1.422-7.125 7.453-12.41 14.69-12.84c7.469-.6875 13.88 4.031 16.17 10.91L587.5 272L624 271.1c8.828 0 16 7.169 16 16.01c0 8.812-7.156 15.99-15.98 15.99L576 304c-6.891 0-13-4.406-15.17-10.94l-12.95-38.84l-36.19 180.9C510.2 442.8 503.3 448 495.6 448c-7.797-.2187-14.3-6.031-15.41-13.75l-33.06-231.5l-47.42 295.8C398.4 506.3 391.7 512 383.9 512z"/>
</>],
['regular',<>
	<path d="M640 287.1c0 11.04-8.953 19.94-19.1 19.94h-60.01c-9.311 0-17.39-6.424-19.49-15.5l-4.625-19.1l-36.38 159.1c-2.25 9.873-10.5 15.1-20.38 15.5c-9.625-.3749-17.5-7.623-18.88-17.25L433.8 241.4l-29.88 252.8c-1.125 9.998-9.875 17.62-20 17.75c-10 0-18.38-7.373-19.63-17.37L320 170.3L275.8 494.6c-1.375 9.998-9.719 17.45-19.84 17.33c-10 0-18.66-7.706-19.78-17.7L206.2 241.4l-26.5 189.3c-1.375 9.498-9.25 16.62-18.75 17.12c-10.5 0-18.25-5.749-20.5-15.5L104.1 272.4L99.5 292.4C97.4 301.5 89.32 307.9 80 307.9H19.99C8.951 307.9 0 299 0 287.1c0-11.04 8.953-20.05 19.1-20.05H64.12l20.38-92.48C86.62 166.5 94.75 159.1 104 159.1s17.38 6.373 19.5 15.5l31.75 140.2l33-234.4c1.375-9.998 10-17.37 20-17.25c10 .125 18.5 7.623 19.63 17.62l29.5 249.9l42.87-314.3C301.6 7.373 309.1 0 320 0c9.1 0 18.38 7.373 19.75 17.25l42.87 314.3l29.5-249.9c1.125-9.998 9.625-17.5 19.63-17.62c10-.125 18.62 7.248 20 17.12l33 234.6l31.75-140.2C518.6 166.3 526.8 159.1 536 159.1c9.25 .125 17.38 6.498 19.5 15.5l20.38 92.48h44.13C631 267.9 640 276.9 640 287.1z"/>
</>],
['solid',<>
	<path d="M640 287.1c0 17.67-14.33 32.02-31.1 32.02H576c-9.547 0-18.34-4.218-24.31-11.19l-24.39 113.9c-3.25 15.12-17.25 25.09-32.3 25.28c-15.45-.5-28.37-11.97-30.65-27.25L446.3 300.7l-30.78 184.6C412.1 500.7 399.5 512 383.9 512c-15.78-.1875-29.34-11.84-31.55-27.47L319.1 258.3l-32.33 226.2C285.5 500.2 272.1 511.8 256.3 512l-.375-.0416c-15.64 0-28.9-11.27-31.47-26.7L193.7 300.6l-18.02 120.1c-2.281 15.28-15.19 26.75-30.64 27.25c-15.94-.2813-29.05-10.15-32.29-25.28L88.31 308.8C82.34 315.8 73.55 320 64 320H31.1C14.33 320 0 305.7 0 287.1S14.33 256 31.1 256h8.939l24.7-74.12c5.545-16.58 23.98-25.93 41.16-20.13c10.86 3.664 18.39 13.67 20.79 24.88l10.85 50.72l21.96-146.4c2.327-15.51 15.65-26.1 31.34-26.1c15.64 0 29.26 11.33 31.83 26.76l30 180l34.77-243.3c2.517-17.62 19.11-30.21 37.43-26.98c13.94 2.458 24.16 14.65 26.16 28.67l34.52 241.6l30-180C419 75.32 432.4 64 448 64c15.68 0 29.3 11.62 31.63 27.13l21.94 146.2l11.14-52.05c3.605-16.76 20.04-28.22 37.93-24.59c11.55 2.345 20.53 11.59 24.26 22.77l24.18 72.54h8.94C625.7 256 640 270.3 640 287.1z"/>
</>],
['thin',<>
	<path d="M640 287.1C640 292.4 636.4 296 632 296H576c-3.438 0-6.5-2.219-7.594-5.469l-22.72-68.19l-41.88 195.3C503 421.5 499.8 424.2 495.8 424c-3.875-.125-7.094-3-7.656-6.812l-40.5-270l-55.69 334.2C391.3 485.2 387.9 488 384 488c-3.938-.0313-7.375-2.969-7.906-6.875L320 88.56L263.9 481.1C263.4 485 260 487.1 256.1 488c-3.906 0-7.344-2.812-8-6.688L192.4 147.2l-40.5 270C151.3 421 148.1 423.9 144.3 424c-4.625 .125-7.25-2.531-8.062-6.312L94.31 222.3L71.59 290.5C70.5 293.8 67.44 296 64 296H8C3.594 296 0 292.4 0 287.1S3.594 280 8 280h50.22l30.19-90.53C89.56 186 92.72 183.1 96.44 184c3.594 .2187 6.625 2.781 7.375 6.312l38.81 181l41.47-276.5C184.7 90.88 187.2 87.5 192 88c3.906 0 7.25 2.812 7.906 6.688l55.5 333L312.1 30.88C312.7 26.94 316 24 320 24s7.344 2.938 7.906 6.875l56.69 396.8l55.5-333C440.8 90.75 443.7 88.34 448.1 88C452 88.03 455.3 90.91 455.9 94.81l41.47 276.5l38.81-181C536.9 186.8 539.1 184.2 543.6 184c3.688-.0938 6.875 2.031 8.031 5.469L581.8 280H632C636.4 280 640 283.6 640 287.1z"/>
</>],

]);

const Waveform: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Waveform.displayName = "Waveform";

export default Waveform;