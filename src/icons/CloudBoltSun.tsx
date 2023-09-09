
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M608 303.9C608 348.1 572.2 384 527.1 384h-16.32c.0137-5.684-.6602-11.38-2.727-16.88c-6.977-18.6-25.03-31.11-44.92-31.11h-7.197l19.33-45.09c8.871-20.71 2.334-44.44-15.89-57.71C451.9 227.2 442.2 224 431.1 224c-11.65 0-22.89 4.24-31.64 11.94l-127.9 111.9c-10.14 8.848-15.43 21.54-15.89 34.56C219.7 375.2 192 342.9 192 304c0-38.75 27.63-71 64.27-78.38c0-.5-.25-1.125-.25-1.625c0-53 43.01-96 96.03-96c32.13 0 60.27 15.88 77.77 40C440.2 163 451.8 160 464.1 160c39.26 0 71.65 28.25 78.52 65.5C579.9 232.3 608.1 264.6 608 303.9z"/><path className="fa-secondary" d="M464 368H408.3l38.45-89.7c2.938-6.859 .7187-14.84-5.312-19.23c-6.096-4.422-14.35-4.031-19.94 .8906l-128 111.1c-5.033 4.391-6.783 11.44-4.439 17.67c2.346 6.25 8.314 10.38 14.97 10.38h55.73l-38.45 89.7c-2.938 6.859-.7187 14.84 5.312 19.23C329.4 510.1 332.7 512 335.1 512c3.781 0 7.531-1.328 10.53-3.953l128-111.1c5.033-4.391 6.783-11.44 4.439-17.67C476.6 372.1 470.7 368 464 368zM156.1 259.8c-37.38-37.38-37.38-98.25 0-135.8c34.63-34.63 89.13-36.88 126.6-7.375c20-13 43.63-20.75 69.25-20.75c.75 0 1.25 .25 2 .25l8.875-26.75c3.375-10.25-6.25-19.75-16.5-16.38L271.1 78.22l-35.5-71c-4.875-9.625-18.5-9.625-23.38 0l-35.5 71L101.5 53.09c-10.25-3.375-19.75 6.25-16.38 16.5l25.12 75.25l-71 35.5c-9.625 4.875-9.625 18.5 0 23.38l71 35.5L85.09 314.5c-3.375 10.25 6.25 19.75 16.5 16.5l59.13-19.75C160.6 308.8 160.1 306.6 160.1 304.1c0-12.5 2.25-24.5 6.125-35.88C162.7 265.5 159.2 262.1 156.1 259.8zM225.8 201.8c4.375-24.5 15.88-46.38 31.88-64C247.1 131.7 236.3 127.1 223.1 127.1c-35.25 0-64 28.75-64 64c0 18.75 8.25 35.38 21.12 47.13C192.3 223.2 207.7 210.2 225.8 201.8z"/>
</>],
['light',<>
	<path d="M496 352h-92.73l88.78-101.5c5.812-6.656 5.141-16.75-1.516-22.56c-6.641-5.844-16.73-5.219-22.58 1.5l-112 128c-4.125 4.719-5.125 11.44-2.516 17.16C356 380.3 361.7 384 368 384h92.73l-88.78 101.5c-5.812 6.656-5.141 16.75 1.516 22.56C376.5 510.7 380.3 512 384 512c4.453 0 8.875-1.844 12.05-5.469l112-128c4.125-4.719 5.125-11.44 2.516-17.16C507.1 355.7 502.3 352 496 352zM575.3 197.3C569.1 158.3 536.5 128 496 128c-8.625 0-17 1.375-25.25 4.25C451.1 109.4 422.6 96 392 96C335.5 96 289.3 141.3 288 197.6C250.3 210.9 224 246.9 224 288c0 46.47 33.31 85.41 77.28 94.16C311 384.1 320 376.3 320 366.4v-.5469c0-7.334-4.928-13.97-12.1-15.51c-26.36-5.674-47.86-26.55-51.37-54C252.2 262.3 275 231.5 308 225.3l.5-.0996c7.918-1.578 13.31-8.979 12.42-17c-.5215-4.684-.3516-2.469-.7598-10.41C321.4 159 353.1 128 392.1 128c24.25 0 46.75 12.25 60.13 32.75l.291 .4473c4.438 6.799 13.36 9.033 20.48 5.123l.3555-.1953c32.75-17.88 70.75 8.125 70.88 40.38l-.0508 3.258c-.1152 7.521 5.17 14.04 12.55 15.49C586.6 231.3 608.1 257.6 608.1 288c-.1094 30.99-22.34 56.96-51.67 62.78C549.1 352.2 544 358.9 544 366.4c0 9.922 8.986 17.74 18.72 15.8C606.7 373.4 640 334.5 640 288C640 246.8 613.4 210.4 575.3 197.3zM160.3 291.8c-3.5-5.375-9.875-8.125-16.38-6.875L87.88 296L99 240c1.25-6.375-1.375-12.75-6.75-16.38l-47.5-31.88L92.25 160c5.375-3.625 8-10.12 6.75-16.38l-11.12-56l56 11.12C150.4 100 156.8 97.25 160.3 91.88L192 44.38l31.75 47.5c3.625 5.375 10 8.125 16.5 6.875L319.6 83c8.625-1.75 14.25-10.12 12.62-18.75c-1.75-8.75-10.38-14.5-18.88-12.62L244.5 65.25l-39.25-58.5c-5.875-9-20.5-9-26.5 0l-39.13 58.5l-69-13.75C65.25 50.38 59.88 52.13 56.25 55.88c-3.875 3.875-5.5 9.25-4.5 14.5l13.75 69L7.125 178.5C2.75 181.5 0 186.4 0 191.8s2.75 10.38 7.125 13.38L65.5 244.3l-13.75 69c-1 5.25 .625 10.62 4.5 14.5c3.75 3.75 9 5.5 14.38 4.375L139.5 318.4l39.13 58.5C181.8 381.5 186.8 384 191.9 384c3.125 0 6.25-.875 8.875-2.75c7.375-4.875 9.375-14.88 4.5-22.12L160.3 291.8zM192 140c26.38 0 48 20 51.13 45.63C247.9 182 252.9 178.8 258.3 175.8c1.5-8.5 3.875-16.5 6.75-24.38C250.8 125.8 223.5 108 192 108c-46.25 0-83.75 37.63-83.75 83.75C108.3 238 145.8 275.6 192 275.6c.25 0 .625-.125 .875-.125c1.125-11.38 3.75-22.38 7.75-32.75C197.8 243.3 195 243.6 192.1 243.6c-28.5 0-51.75-23.25-51.75-51.75C140.3 163.3 163.5 140 192 140z"/>
</>],
['regular',<>
	<path d="M148 176c.0098 18.99 9.012 35.72 22.79 46.71c13.54-32.94 39.09-60.06 72.66-74.8c2.424-4.523 5.293-8.709 8.109-12.93C240.6 123.4 225.2 116 208 116C174.9 116 148 142.9 148 176zM162.5 250.1C137.1 235.5 120 207.9 120 176C120 127.4 159.4 88.01 208 88.01c23.74 0 45.2 9.502 61.03 24.79c10.82-11.24 23.32-20.62 36.88-28.22L300.4 83.59L286.9 8.637c-1.357-7.516-10.04-11.11-16.31-6.754L208 45.31L145.4 1.883C139.2-2.473 130.5 1.121 129.1 8.637L115.6 83.59l-74.94 13.55C33.12 98.5 29.53 107.2 33.88 113.4L77.28 176L33.88 238.6C29.53 244.8 33.12 253.5 40.64 254.9l74.94 13.55l13.54 74.96c1.357 7.516 10.04 11.11 16.31 6.754l26.59-18.46C164.5 314.5 160 295.8 160 276C160 267.5 161 259.1 162.5 250.1zM555.4 183.4C543.4 146.6 508.8 120 468 120c-3.125 0-6.125 .25-9.125 .5C437.3 104.8 411.3 96 384 96c-52.38 0-97.63 31.25-117.3 77.25C223.4 187.3 192 228 192 276c0 47.52 30.93 87.45 73.6 101.9c-3.434-16.45 1.475-33.93 14.14-45.41C256.5 324.2 240 302 240 276c0-33.13 26.88-60 60-60c1.625 0 3.25 .375 4.75 .5C308.6 175.9 342.4 144 384 144c25.25 0 47.38 11.88 62.13 30.12C452.6 170.3 460 168 468 168C492.3 168 512 187.8 512 212c0 1.75-.25 3.375-.5 5.25C539.1 222.6 560 246.8 560 276c0 26.27-17.02 48.38-40.54 56.49c5.658 4.988 10.51 10.93 13.32 18.2c3.387 8.775 3.84 18.18 1.979 27.08C577.2 363.2 608 323.4 608 276C608 237.3 587.3 202.4 555.4 183.4zM488 352h-64.09l43.69-105.9c2.844-6.906 .5156-14.88-5.609-19.19c-6.094-4.281-14.39-3.75-19.95 1.25l-140.8 128c-4.891 4.438-6.547 11.44-4.156 17.62C299.5 379.9 305.4 384 312 384h64.09l-43.69 105.9c-2.844 6.906-.5156 14.88 5.609 19.19C340.8 511 344 512 347.2 512c3.875 0 7.734-1.406 10.77-4.156l140.8-128c4.891-4.438 6.547-11.44 4.156-17.62C500.5 356.1 494.6 352 488 352z"/>
</>],
['solid',<>
	<path d="M464 368H408.3l38.45-89.7c2.938-6.859 .7187-14.84-5.312-19.23c-6.096-4.422-14.35-4.031-19.94 .8906l-128 111.1c-5.033 4.391-6.783 11.44-4.439 17.67c2.346 6.25 8.314 10.38 14.97 10.38h55.73l-38.45 89.7c-2.938 6.859-.7187 14.84 5.312 19.23C329.4 510.1 332.7 512 335.1 512c3.781 0 7.531-1.328 10.53-3.953l128-111.1c5.033-4.391 6.783-11.44 4.439-17.67C476.6 372.1 470.7 368 464 368zM156.1 259.8c-37.38-37.38-37.38-98.25 0-135.8c34.63-34.63 89.13-36.88 126.6-7.375c20-13 43.63-20.75 69.25-20.75c.75 0 1.25 .25 2 .25l8.875-26.75c3.375-10.25-6.25-19.75-16.5-16.38L271.1 78.22l-35.5-71c-4.875-9.625-18.5-9.625-23.38 0l-35.5 71L101.5 53.09c-10.25-3.375-19.75 6.25-16.38 16.5l25.12 75.25l-71 35.5c-9.625 4.875-9.625 18.5 0 23.38l71 35.5L85.09 314.5c-3.375 10.25 6.25 19.75 16.5 16.5l59.13-19.75C160.6 308.8 160.1 306.6 160.1 304.1c0-12.5 2.25-24.5 6.125-35.88C162.7 265.5 159.2 262.1 156.1 259.8zM542.6 225.5C535.7 188.3 503.3 160 464.1 160c-12.25 0-23.88 3-34.26 8C412.3 143.9 384.2 128 352 128C299 128 256 171 256 224c0 .5 .25 1.125 .25 1.625C219.6 233 192 265.3 192 304c0 38.93 27.7 71.22 64.5 78.44c.4609-13.03 5.754-25.72 15.89-34.56l127.9-111.9C409.1 228.2 420.3 224 431.1 224c10.19 0 19.95 3.172 28.27 9.203c18.23 13.27 24.76 36.1 15.89 57.71l-19.33 45.09h7.197c19.89 0 37.95 12.51 44.92 31.11C510.1 372.6 511.7 378.3 511.7 384h16.32C572.2 384 608 348.1 608 303.9C608.1 264.6 579.9 232.3 542.6 225.5zM225.8 201.8c4.375-24.5 15.88-46.38 31.88-64C247.1 131.7 236.3 127.1 223.1 127.1c-35.25 0-64 28.75-64 64c0 18.75 8.25 35.38 21.12 47.13C192.3 223.2 207.7 210.2 225.8 201.8z"/>
</>],
['thin',<>
	<path d="M157.5 300.1l-52.89 17.7C102 319.5 100.4 318.2 99.75 317.5C99.03 316.8 97.94 315.3 98.7 312.1l26.38-79.16L50.56 196.5C48.25 195.3 48 193.2 48 192.4c0-.8457 .25-2.943 2.531-4.102l74.55-37.36l-26.38-79.11C97.89 69.28 99.19 67.62 99.78 67.02c.5469-.5957 2.109-1.926 4.562-1.049l79.03 26.42l37.27-74.64c1.172-2.316 3.266-2.568 4.109-2.568S227.7 15.44 228.8 17.72l37.3 74.67l78.98-26.42c2.438-.8145 4.156 .4531 4.75 1.08c.5781 .5781 1.844 2.176 1.047 4.586l-7.016 21.16c-1.391 4.195 .875 8.734 5.078 10.13c4.141 1.439 8.734-.9082 10.11-5.086L366.1 76.66c2.453-7.434 .5625-15.45-4.922-20.94c-5.5-5.539-13.61-7.434-21.09-4.961L274.2 72.8L243.1 10.53C236-3.498 213.5-3.529 206.3 10.56L175.3 72.8L109.4 50.76C101.1 48.27 93.94 50.18 88.47 55.69C82.95 61.22 81.05 69.29 83.52 76.82l22 65.97L43.34 173.9C36.34 177.5 32 184.5 32 192.4C32 200.2 36.34 207.2 43.38 210.8l62.14 31.11l-22 66.01c-2.438 7.387-.5781 15.4 4.859 20.91c3.938 3.975 9.188 6.119 14.66 6.119c2.156 0 4.344-.3457 6.5-1.018l53-17.73C166.7 314.8 168.1 310.2 167.6 306.1C166.2 301.9 161.7 299.6 157.5 300.1zM171.2 192.3c0-29.61 23.66-53.7 52.75-53.7c9.688 0 19.28 2.863 27.75 8.264c3.703 2.361 8.672 1.299 11.05-2.459c2.375-3.725 1.281-8.686-2.453-11.06c-11.05-7.043-23.61-10.77-36.34-10.77c-37.91 0-68.75 31.27-68.75 69.72c0 19.58 8.031 37.81 22.61 51.33c1.547 1.426 3.484 2.129 5.438 2.129c2.156 0 4.297-.8613 5.875-2.566c3-3.256 2.797-8.326-.4375-11.33C177.4 221.4 171.2 207.3 171.2 192.3zM543.9 218.3c-9.344-39.08-43.16-66.92-82.3-66.92c-10.34 0-20.53 2.035-30.38 6.057c-19.22-24.3-47.06-38.11-77.34-38.11c-53.34 0-97.09 43.43-99.95 99.49C217.7 229.3 192 264 192 303.7c0 48.61 38.11 88.14 84.95 88.14c4.422 0 8-3.584 8-8.012c0-4.43-3.578-8.014-8-8.014C238.9 375.8 208 343.4 208 303.7c0-34.32 23.3-64.04 55.41-70.66l6.156-2.943V223.5c0-48.61 37.83-88.14 84.33-88.14c27.14 0 52 13.35 68.22 36.64l3.953 5.68l6.188-3.098c9.484-4.758 19.36-7.168 29.36-7.168c33.13 0 61.56 24.8 67.64 59L530.2 231.9l5.422 1.016C568.4 239.1 592.1 268.8 592 303.7c0 39.77-30.94 72.12-68.95 72.12h-28.84c-4.422 0-8 3.584-8 8.014c0 4.428 3.578 8.012 8 8.012h28.84C569.9 391.8 608 352.5 608 303.9C608.1 263.3 581.5 228 543.9 218.3zM444 376h-101.1l102.9-106.4c3.078-3.188 2.984-8.25-.1875-11.31c-3.172-3.031-8.219-2.969-11.31 .1875l-116 120c-2.234 2.312-2.875 5.719-1.609 8.688C317.9 390.1 320.8 392 324 392h101.1l-102.9 106.4c-3.078 3.188-2.984 8.25 .1875 11.31C324 511.3 325.1 512 328 512c2.094 0 4.188-.8125 5.75-2.438l116-120c2.234-2.312 2.875-5.719 1.609-8.688C450.1 377.9 447.2 376 444 376z"/>
</>],

]);

const CloudBoltSun: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CloudBoltSun.displayName = "CloudBoltSun";

export default CloudBoltSun;