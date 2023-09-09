
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M534.9 267.5C560.1 280 576 305.8 576 334v4.387c0 35.55-23.49 68.35-58.24 75.88c-38.18 8.264-74.96-13.73-86.76-49.14c-.0352-.1035-.0684-.207-.1035-.3125C425.3 347.7 409.6 336 391.6 336H184.4c-17.89 0-33.63 11.57-39.23 28.56L145 365.1c-11.8 35.41-48.58 57.4-86.76 49.14C23.49 406.7 0 373.9 0 338.4v-4.387C0 305.8 15.88 280 41.13 267.5c9.375-4.75 9.375-18.25 0-23C15.88 232 0 206.3 0 178V173.6c0-35.55 23.49-68.35 58.24-75.88c38.18-8.264 74.99 13.82 86.79 49.23C150.7 164.1 166.4 176 184.4 176h207.2c17.89 0 33.63-11.57 39.23-28.56L431 146.9c11.8-35.41 48.58-57.4 86.76-49.14C552.5 105.3 576 138.1 576 173.6v4.387C576 206.3 560.1 232 534.9 244.5C525.5 249.3 525.5 262.8 534.9 267.5z"/>
</>],
['light',<>
	<path d="M536.5 256C565.4 238.3 576 211.6 576 179C576 133.3 537.1 96 491.3 96c-36.5 0-68.88 22.75-80.5 56.63C403.3 175.3 403.6 176 392 176h-208c-11.62 0-11.25-.75-18.75-23.38C153.6 118.8 121.3 96 84.75 96C37.1 96 0 133.3 0 179C0 211.6 10.63 238.3 39.5 256C10.63 273.8 0 300.4 0 333C0 378.8 37.1 416 84.75 416c36.5 0 68.88-22.75 80.5-56.63C172.8 336.8 172.4 336 184 336h208c11.62 0 11.25 .75 18.75 23.38C422.4 393.3 454.8 416 491.3 416C537.1 416 576 378.8 576 333C576 300.4 565.4 273.8 536.5 256zM491.3 384c-22.88 0-43-13.1-50.25-35C432.1 322.4 424.5 304 392 304h-208c-32.5 0-40.13 18.38-49 45C127.8 370 107.6 384 84.75 384C55.75 384 32 361.1 32 333c0-23.38 6.875-41.5 29-52.25C70.63 276.1 76.5 266.5 76.5 256S70.63 236 61 231.4C38.88 220.6 32 202.4 32 179C32 150.9 55.75 128 84.75 128c22.88 0 43 14 50.25 35C143.9 189.6 151.5 208 184 208h208c32.5 0 40.13-18.38 49-45C448.3 142 468.4 128 491.3 128C520.3 128 544 150.9 544 179c0 23.38-6.875 41.5-29 52.25C505.4 235.9 499.5 245.5 499.5 256s5.875 20 15.5 24.62C537.1 291.4 544 309.6 544 333C544 361.1 520.3 384 491.3 384z"/>
</>],
['regular',<>
	<path d="M576 189.7V185.9c0-42.54-30.56-79.58-72.66-88.05c-45.97-9.096-91.81 15.44-107.1 57.76c-2.25 6.345-8.719 12.32-13.31 12.32H193c-4.594 0-11.12-6.095-13.53-12.88c-15-41.79-61.09-66.3-106.8-57.2C30.56 106.4 0 143.4 0 185.9v3.72c0 26.16 11.94 50.14 32.13 66.33C11.91 272.2 0 296.2 0 322.3v3.72c0 42.54 30.56 79.58 72.66 88.05c6.469 1.282 12.91 1.907 19.28 1.907c38.91 0 74.69-23.29 87.78-59.67c2.25-6.345 8.719-12.32 13.31-12.32h189.9c4.625 0 11.12 6.095 13.53 12.88c15.03 41.79 61.09 66.39 106.8 57.2C545.4 405.6 576 368.6 576 326v-3.72c0-26.13-11.91-50.07-32.16-66.33C564.1 239.7 576 215.8 576 189.7zM528 189.7c0 14.69-9.094 28.01-23.88 34.82c-12.5 5.845-20.25 17.94-20.25 31.51s7.75 25.66 20.25 31.51C518.8 294.2 528 307.6 528 322.3v3.72c0 19.75-14.34 37.01-34.09 40.98c-22.78 4.72-45.19-6.783-52.28-26.54c-7.594-21.41-29.19-44.48-58.66-44.48H193c-29.44 0-51 22.94-58.72 44.63c-7 19.6-29.47 30.98-52.22 26.38C62.34 363 48 345.8 48 326v-3.72c0-14.69 9.094-28.01 23.88-34.82c12.5-5.845 20.25-17.94 20.25-31.51s-7.75-25.66-20.41-31.6C57.09 217.7 48 204.3 48 189.7V185.9c0-19.75 14.34-37.01 34.09-40.98c3.375-.6877 6.719-1 10.03-1c19.03 0 36.22 10.72 42.25 27.54c7.624 21.44 29.22 44.48 58.66 44.48h189.9c29.44 0 51-22.94 58.72-44.63c7-19.6 29.44-31.04 52.22-26.38C513.7 148.9 528 166.2 528 185.9V189.7z"/>
</>],
['solid',<>
	<path d="M534.9 267.5C560.1 280 576 305.8 576 334v4.387c0 35.55-23.49 68.35-58.24 75.88c-38.18 8.264-74.96-13.73-86.76-49.14c-.0352-.1035-.0684-.207-.1035-.3125C425.3 347.7 409.6 336 391.6 336H184.4c-17.89 0-33.63 11.57-39.23 28.56L145 365.1c-11.8 35.41-48.58 57.4-86.76 49.14C23.49 406.7 0 373.9 0 338.4v-4.387C0 305.8 15.88 280 41.13 267.5c9.375-4.75 9.375-18.25 0-23C15.88 232 0 206.3 0 178V173.6c0-35.55 23.49-68.35 58.24-75.88c38.18-8.264 74.99 13.82 86.79 49.23C150.7 164.1 166.4 176 184.4 176h207.2c17.89 0 33.63-11.57 39.23-28.56L431 146.9c11.8-35.41 48.58-57.4 86.76-49.14C552.5 105.3 576 138.1 576 173.6v4.387C576 206.3 560.1 232 534.9 244.5C525.5 249.3 525.5 262.8 534.9 267.5z"/>
</>],
['thin',<>
	<path d="M534.9 244.5C560.1 232 576 206.3 576 178V173.6c0-35.55-23.49-68.35-58.24-75.88C512.3 96.56 506.9 96 501.6 96c-32 0-60.5 20.5-70.63 50.88L430.8 147.4C425.2 164.4 409.5 176 391.6 176H184.4c-17.99 0-33.75-11.94-39.38-29.03C134.9 116.6 106.4 96 74.38 96C69.07 96 63.67 96.56 58.24 97.74C23.49 105.3 0 138.1 0 173.6v4.387C0 206.3 15.88 232 41.13 244.5c9.375 4.75 9.375 18.25 0 23C15.88 280 0 305.8 0 334v4.387c0 35.55 23.49 68.35 58.24 75.88C63.67 415.4 69.07 416 74.38 416c32 0 60.5-20.5 70.63-50.88l.1875-.5664C150.8 347.6 166.5 336 184.4 336h207.2c17.98 0 33.68 11.73 39.31 28.81c.0352 .1055 .0684 .209 .1035 .3125C441.1 395.5 469.6 416 501.6 416c5.305 0 10.71-.5625 16.13-1.738C552.5 406.7 576 373.9 576 338.4v-4.387C576 305.8 560.1 280 534.9 267.5C525.5 262.8 525.5 249.3 534.9 244.5zM527.8 281.8C547.7 291.7 560 311.7 560 334v4.387c0 29.18-19.19 54.51-45.63 60.24C510.2 399.5 505.9 400 501.6 400c-25.2 0-47.48-16.05-55.53-40.19C438.3 335.1 416.4 320 391.6 320H184.4c-24.76 0-46.63 15.89-54.59 40.06C121.9 383.1 99.58 400 74.38 400c-4.24 0-8.529-.4629-12.75-1.377C35.19 392.9 16 367.6 16 338.4v-4.387c0-22.33 12.35-42.32 32.36-52.23C58.1 276.8 64.16 266.1 64.16 256S58.1 235.2 48.22 230.2C28.35 220.3 16 200.3 16 178V173.6c0-29.18 19.19-54.51 45.63-60.24C65.85 112.5 70.13 112 74.38 112c25.2 0 47.48 16.05 55.52 40.17C137.7 175.1 159.7 192 184.4 192h207.2c24.76 0 46.63-15.89 54.59-40.07C454.1 128 476.4 112 501.6 112c4.24 0 8.529 .4629 12.75 1.375C540.8 119.1 560 144.4 560 173.6v4.387c0 22.33-12.35 42.32-32.36 52.23C517.9 235.2 511.8 245 511.8 256S517.9 276.8 527.8 281.8z"/>
</>],

]);

const Bone: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Bone.displayName = "Bone";

export default Bone;
