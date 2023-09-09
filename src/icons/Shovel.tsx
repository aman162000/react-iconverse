
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M152.1 224.1c-12.5-12.5-32.75-12.5-45.25 0L38.97 291.1c-50.01 50-45.26 181-22.63 203.7c22.63 22.63 153.6 27.38 203.6-22.63l67.88-67.89c12.5-12.5 12.5-32.75 0-45.25L152.1 224.1z"/><path className="fa-secondary" d="M502.6 99.88l-90.51-90.51c-12.5-12.5-32.75-12.51-45.26 0l-45.25 45.25c-29.46 29.46-35.37 73.31-18.46 108.1L197.4 269.4l45.26 45.26l105.8-105.8c35.65 16.91 79.51 11 108.1-18.46l45.26-45.25C515.1 132.6 515.1 112.4 502.6 99.88zM412.1 145.1c-12.48 12.48-32.78 12.47-45.26 0c-12.47-12.47-12.48-32.77 0-45.26l22.63-22.63l45.25 45.26L412.1 145.1z"/>
</>],
['light',<>
	<path d="M501.5 86.12l-75.63-75.62C418.9 3.5 409.7 0 400.6 0c-9.126 0-18.38 3.5-25.25 10.5l-29.25 29.12c-16.88 17-26.13 39.62-26.13 63c0 24.62 9.751 41.88 16 50.75L208.6 280.8l-56.5-56.64C145.9 217.9 137.6 214.7 129.5 214.7c-8.251 0-16.37 3.14-22.62 9.39L38.97 291.1c-50 50-45.25 181-22.63 203.7C26.22 505.5 56.75 512 92.13 512c45.75 0 99.61-10.73 127.9-38.98l67.88-67.89c12.5-12.5 12.5-32.75 0-45.25L231.2 303.4L358.6 176c8.876 6.25 26.25 16 50.75 16c23.38 0 46-9.25 63-26.12l29.13-29.25C515.5 122.8 515.5 100 501.5 86.12zM197.4 450.4c-36.63 36.75-134.4 32.75-158.1 22.25c-10.75-22.12-13.63-122 22.38-158L129.5 246.8l135.8 135.7L197.4 450.4zM478.9 114L449.7 143.2c-52.75 52.75-134.1-27.87-81-81l29.25-29.12c1.375-1.5 3.75-1.5 5.25 0l75.63 75.63C480.4 110.2 480.4 112.6 478.9 114z"/>
</>],
['regular',<>
	<path d="M502.7 89.5l-80.25-80.25C416.2 3.125 408.1 0 399.1 0s-16.25 3.125-22.37 9.25l-31.62 31.63c-16.75 16.75-25.87 39.25-25.87 62.5c0 20.5 6.875 35.25 11.37 43.25l-124.2 124.3L154.5 218.2C148.4 212 140.1 208.9 131.1 208.9c-8.25 0-16.37 3.125-22.62 9.375L39.74 287.9c-50.1 50.88-46.12 184.4-23.12 207.5C26.74 505.4 57.74 512 93.86 512c46.62 0 101.6-11 130.2-39.75l69.62-69.62c12.5-12.5 12.5-32.75 0-45.13L241.1 304.8l124.4-124.3c17.75 9.875 34.12 11.38 43.25 11.38c24.62 0 48.12-11.63 65.62-29.12l28.37-28.38C515.1 122 515.1 102 502.7 89.5zM190.2 438.4C174.9 453.8 136.1 464 93.86 464c-19.5 0-33.87-2.25-41.87-4.25c-7.875-29.38-5.375-111.1 21.62-138l58.25-58.38L248.5 380L190.2 438.4zM440.5 128.8c-9.625 9.625-21.12 15.12-32.75 15.12c-34.1 0-53.12-43.75-27.75-69.13l19.1-20L457.2 112L440.5 128.8z"/>
</>],
['solid',<>
	<path d="M502.6 99.88l-90.51-90.51c-12.5-12.5-32.75-12.51-45.26 0l-45.25 45.25c-29.46 29.46-35.37 73.31-18.46 108.1L197.4 269.4L152.1 224.1c-12.5-12.5-32.75-12.5-45.25 0L38.97 291.1c-50.01 50-45.26 181-22.63 203.7c22.63 22.63 153.6 27.38 203.6-22.63l67.88-67.89c12.5-12.5 12.5-32.75 0-45.25L242.6 314.6l105.8-105.8c35.65 16.91 79.51 11 108.1-18.46l45.26-45.25C515.1 132.6 515.1 112.4 502.6 99.88zM412.1 145.1c-12.48 12.48-32.78 12.47-45.26 0c-12.47-12.47-12.48-32.77 0-45.26l22.63-22.63l45.25 45.26L412.1 145.1z"/>
</>],
['thin',<>
	<path d="M509.7 87.89l-85.61-85.64c-3-3-8.312-3-11.31 0l-34.38 34.44c-12.94 12.91-20.08 30.13-20.08 48.45c0 15.59 5.443 30.21 14.97 42.23L214.3 286.3L152.1 224.1c-6.25-6.254-14.44-9.39-22.63-9.39c-8.188 0-16.37 3.136-22.62 9.39L38.97 291.1c-50.01 50.01-45.26 181-22.63 203.7C26.22 505.5 56.71 512 92.13 512c45.74 0 99.68-10.79 127.9-38.98l67.88-67.89c12.5-12.5 12.5-32.75 0-45.25l-62.22-62.26l158.9-158.1c11.76 9.158 26.63 14.53 42.24 14.53c18.41 0 36.05-7.125 48.41-19.56l34.42-34.41C511.2 97.71 512 95.67 512 93.55S511.2 89.39 509.7 87.89zM276.6 371.2c3.025 3.025 4.691 7.045 4.691 11.32c0 4.27-1.666 8.289-4.691 11.31l-67.88 67.9c-25.28 25.29-76.77 34.29-116.5 34.29c-39.53 0-60.84-8.006-64.5-11.66c-4.971-4.973-13.67-34.25-11.26-79.41c2.395-44.82 15.06-82.82 33.89-101.7l67.89-67.9c3.023-3.023 7.039-4.689 11.31-4.689s8.289 1.666 11.31 4.691L276.6 371.2zM463.9 122.3C463.9 122.3 463.9 122.3 463.9 122.3c-18.78 18.88-55.43 18.89-74.21-.0156c-9.953-9.906-15.42-23.13-15.42-37.16s5.469-27.22 15.39-37.13L418.4 19.22l74.3 74.33L463.9 122.3z"/>
</>],

]);

const Shovel: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Shovel.displayName = "Shovel";

export default Shovel;