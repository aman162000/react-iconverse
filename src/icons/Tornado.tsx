
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M358.8 95.98H4.945c1.869 11.29 4.246 21.95 7.104 32h336.6C348.6 118.2 351.8 107.7 358.8 95.98zM257.1 351.1c11.15 9.299 20.34 19.99 27.99 32h148.6c4.68-10.91 7.824-21.53 10.19-32H257.1zM410.1 223.1H65.2c11.04 11.95 22.87 22.57 35.26 32h331.2C425.7 244.5 418.6 233.9 410.1 223.1z"/><path className="fa-secondary" d="M387.7 195.9c-22-25.31-38.93-44.9-39-67.93H12.05c11.48 40.4 30.36 71.34 53.15 96h345.8C403.4 214.1 395.4 204.8 387.7 195.9zM407.8 42.09c7.531-6.562 10.22-17.12 6.688-26.5C410.1 6.219 401.1 0 391.1 0L24.16 .0313c-13 0-23.66 10.38-24 23.38c-.7051 26.94 1.188 50.8 4.789 72.57h353.9C367.9 80.74 383.4 63.37 407.8 42.09zM431.7 255.1H100.5C127 276.2 155.8 291.6 182.4 305.8c28.17 15.03 54.03 28.87 74.73 46.14h186.8C446.4 341.1 447.1 330.4 448 320C448 295.4 441.4 274.6 431.7 255.1zM303.6 485.3c-1.125 10.12 4.251 19.84 13.44 24.28C320.3 511.2 323.9 512 327.4 512c6.219 0 12.34-2.406 16.94-7c43.71-43.59 73.32-83.65 89.35-121h-148.6C300.8 408.6 308.6 440 303.6 485.3z"/>
</>],
['light',<>
	<path d="M387.4 199.6c-24-27.44-44.72-51.16-42.78-79.16c1.812-26.06 22.94-56.25 64.56-92.34c5.061-4.375 6.842-11.44 4.529-17.69C411.4 4.156 405.4 0 398.7 0L16.17 .0313c-8.688 0-15.75 6.906-16 15.56C-4.676 199.2 96.1 252.6 185 299.8L190.7 302.8v1.107h2.08c76.63 40.81 135.7 76.09 122.9 190.3c-.75 6.75 2.844 13.22 8.938 16.19C326.8 511.5 329.2 512 331.6 512c4.125 0 8.217-1.594 11.28-4.656C413.6 437.2 447.1 376.7 448 322.2C448 268.1 415.8 232.1 387.4 199.6zM32.04 32.03L358.6 32c-29.25 30.91-44.03 58.81-45.9 86.22c-.2324 3.338 .0313 6.508 .1758 9.719h-265.2C38.13 101.6 32.41 70.24 32.04 32.03zM200 271.5C147.1 243.9 94.92 215.6 62.72 159.9h257.5c9.504 22.19 26.45 41.68 43.1 60.72c14.19 16.24 28.49 32.86 38.67 51.28H200.8C200.5 271.8 200.3 271.7 200 271.5zM256.8 303.9h157.2C415.2 309.8 416 315.9 416 322.2c-.0313 38.03-21.94 81.44-66.81 132C345.8 376.1 305.8 335.5 256.8 303.9z"/>
</>],
['regular',<>
	<path d="M387.7 195.9c-43.47-50-67.41-77.53 20.13-153.8c7.531-6.562 10.22-17.12 6.688-26.5C410.1 6.219 401.1 0 391.1 0L24.16 .0313c-13 0-23.66 10.38-24 23.38C-4.626 206.1 99.07 261.4 182.4 305.8c74.44 39.72 133.3 71.09 121.2 179.5c-1.125 10.12 4.251 19.84 13.44 24.28C320.3 511.2 323.9 512 327.4 512c6.219 0 12.34-2.406 16.94-7C414.1 435.5 447.1 375 448 320C448 265.3 415.1 228.5 387.7 195.9zM62.01 127.9c-7.859-22.31-12.83-48.43-13.82-79.91L334.8 48c-24.65 30.33-34.01 56.62-34.23 79.94H62.01zM192 256.5C151.9 234.9 114 212.4 87.12 175.9h226.1c10.08 18.96 24.63 35.82 38.24 51.47c8.291 9.547 16.34 18.93 23.52 28.53H192V256.5zM273 303.9h125.3C399.3 309.1 400 314.4 400 319.1c-.0313 30.88-16.12 66-49 106.6C342.7 367.8 311.1 331.4 273 303.9z"/>
</>],
['solid',<>
	<path d="M407.8 42.09c7.531-6.562 10.22-17.12 6.688-26.5C410.1 6.219 401.1 0 391.1 0L24.16 .0313c-13 0-23.66 10.38-24 23.38C-.5495 50.32 1.349 74.22 4.945 95.98h353.9C367.9 80.76 383.4 63.34 407.8 42.09zM387.7 195.9c-22.02-25.33-38.96-44.87-39-67.93H12.05c11.47 40.4 30.38 71.34 53.15 96h345.8C403.4 214.1 395.4 204.8 387.7 195.9zM303.6 485.3c-1.125 10.12 4.249 19.84 13.44 24.28C320.3 511.2 323.9 512 327.4 512c6.219 0 12.34-2.406 16.94-7c43.73-43.61 73.32-83.63 89.35-121h-148.6C300.8 408.6 308.7 440 303.6 485.3zM431.7 255.1H100.5C127.1 276.3 155.8 291.6 182.4 305.8c28.14 15.01 54.04 28.9 74.73 46.14h186.8C446.4 341.1 447.1 330.4 448 320C448 295.4 441.4 274.6 431.7 255.1z"/>
</>],
['thin',<>
	<path d="M387.2 203.3c-25.06-28.56-48.75-55.53-46.53-87.97c2.031-29.31 24.94-62.44 69.1-101.3c2.531-2.188 3.437-5.719 2.281-8.844S408.8 0 405.4 0L8.17 .0313c-4.344 0-7.875 3.469-7.1 7.781C-4.736 192.2 97.42 246.1 187.6 293.7c82.97 43.81 154.6 81.63 140.2 209.4c-.4062 3.375 1.406 6.625 4.437 8.094C333.3 511.8 334.5 512 335.7 512c2.062 0 4.094-.7813 5.625-2.312C413.1 438.9 447.1 378.3 448 324.4C448 272.6 415.7 235.8 387.2 203.3zM16.01 16.03L384.6 16c-38.62 36.34-57.75 67.88-59.84 98.28c-.1348 1.943 .1035 3.76 .1055 5.656H30.32C20.88 91.33 15.6 57.32 16.01 16.03zM195 279.6C132.3 246.4 68.15 212.3 36.42 135.9h290c5.924 28.8 26.71 52.86 48.75 77.94c17.1 20.5 36.28 41.5 47.09 66.06H195.7L195 279.6zM225.5 295.9h202.4c2.488 8.975 4.084 18.36 4.076 28.47c-.0313 45.53-28.41 97.5-86.59 158.4C349.8 377.3 293 333.3 225.5 295.9z"/>
</>],

]);

const Tornado: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Tornado.displayName = "Tornado";

export default Tornado;