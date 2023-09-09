
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M392.5 89.39c-94.93-99.56-213.1-58.11-308.5 36.84c-95.42 94.96-112 232.4-37.02 307c74.98 74.61 213.1 58.12 308.5-36.84C450.9 301.5 487.5 188.1 392.5 89.39zM374.9 214.9c-18.18 18.18-57.49 8.355-87.79-21.95c-30.3-30.3-40.13-69.61-21.95-87.79c18.18-18.18 57.49-8.354 87.79 21.95C383.2 157.4 393.1 196.7 374.9 214.9z"/><path className="fa-secondary" d="M374.9 214.9c-18.18 18.18-57.49 8.355-87.79-21.95c-30.3-30.3-40.13-69.61-21.95-87.79c18.18-18.18 57.49-8.354 87.79 21.95C383.2 157.4 393.1 196.7 374.9 214.9z"/>
</>],
['light',<>
	<path d="M392.5 89.39C354.2 49.21 312.1 32 269.3 32C205.9 32 140.9 69.6 83.99 126.2c-95.42 94.96-112 232.4-37.02 307C78.59 464.7 121.5 480 167.6 480c63.27 0 132.7-28.67 187.9-83.58C450.9 301.5 487.5 188.1 392.5 89.39zM332.9 373.7C285.5 420.9 225.2 448 167.6 448c-39.56 0-73.48-12.94-98.08-37.42c-24.55-24.44-37.53-58.11-37.54-97.37c0-57.26 27.18-117.1 74.56-164.3C161.6 94.16 219.4 64 269.3 64c36.39 0 70.07 15.97 100.1 47.48C460.8 207.3 399.1 307 332.9 373.7zM348.2 131.8c-37.09-37.08-85.66-46.78-110.4-21.95C212.1 134.6 222.7 183.1 259.7 220.2c23.22 23.22 50.91 35.69 74.47 35.69c14.06 0 26.69-4.453 35.97-13.73C394.1 217.4 385.3 168.9 348.2 131.8zM347.6 219.6c-10.19 10.14-40.25 2.969-65.19-21.95c-24.91-24.94-32.13-54.97-21.94-65.17c10.12-10.2 40.22-3 65.19 21.95C350.5 179.3 357.7 209.4 347.6 219.6z"/>
</>],
['regular',<>
	<path d="M392.5 89.39C354.2 49.21 312.1 32 269.3 32C205.9 32 140.9 69.6 83.99 126.2c-95.42 94.96-112 232.4-37.02 307C78.59 464.7 121.5 480 167.6 480c63.27 0 132.7-28.67 187.9-83.58C450.9 301.5 487.5 188.1 392.5 89.39zM321.6 362.4C277.8 405.1 220.3 432 167.6 432c-24.58 0-59.58-5.684-86.79-32.76c-27.12-26.99-32.82-61.68-32.82-86.03c0-52.25 26.11-109.4 69.84-152.1C169.9 108.5 223.6 80 269.3 80c32.29 0 61.25 13.91 88.53 42.52C423.1 191.9 411.8 272.7 321.6 362.4zM336.9 143.1c-30.3-30.3-69.61-40.13-87.79-21.95c-18.18 18.18-8.355 57.49 21.95 87.79c30.3 30.3 69.61 40.13 87.79 21.95C377.1 212.7 367.2 173.4 336.9 143.1z"/>
</>],
['solid',<>
	<path d="M392.5 89.39c-94.93-99.56-213.1-58.11-308.5 36.84c-95.42 94.96-112 232.4-37.02 307c74.98 74.61 213.1 58.12 308.5-36.84C450.9 301.5 487.5 188.1 392.5 89.39zM374.9 214.9c-18.18 18.18-57.49 8.355-87.79-21.95c-30.3-30.3-40.13-69.61-21.95-87.79c18.18-18.18 57.49-8.354 87.79 21.95C383.2 157.4 393.1 196.7 374.9 214.9z"/>
</>],
['thin',<>
	<path d="M392.5 89.39C354.2 49.21 312.1 32 269.3 32C205.9 32 140.9 69.6 83.99 126.2c-95.42 94.96-112 232.4-37.02 307C78.59 464.7 121.5 480 167.6 480c63.27 0 132.7-28.67 187.9-83.58C450.9 301.5 487.5 188.1 392.5 89.39zM344.2 385.1C293.8 435.2 229.4 464 167.6 464c-43.88 0-81.7-14.55-109.4-42.07c-27.64-27.5-42.25-65.1-42.25-108.7c0-61.48 28.89-125.5 79.27-175.6C136.3 96.71 199.9 48 269.3 48c40.94 0 78.51 17.64 111.7 52.44C486.6 211.2 403.3 326.3 344.2 385.1zM381.6 191.5c-5-20.05-17.41-40.72-34.91-58.22s-38.19-29.89-58.22-34.89c-21.38-5.344-39.88-1.75-51.84 10.2s-15.59 30.38-10.22 51.86c5 20.05 17.41 40.72 34.91 58.22s38.19 29.89 58.22 34.91c6.469 1.625 12.69 2.438 18.53 2.438c13.47 0 24.97-4.297 33.31-12.64C383.3 231.4 386.1 213 381.6 191.5zM360.1 232.1c-7.812 7.828-20.81 9.984-36.66 6c-17.28-4.328-35.31-15.22-50.78-30.7s-26.38-33.52-30.69-50.78c-3.969-15.83-1.844-28.84 6-36.67c5.25-5.25 12.84-7.938 22.06-7.938c4.5 0 9.406 .6406 14.59 1.938c17.28 4.312 35.31 15.22 50.78 30.69c15.47 15.48 26.38 33.52 30.69 50.8C370 211.2 367.9 224.3 360.1 232.1z"/>
</>],

]);

const Olive: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Olive.displayName = "Olive";

export default Olive;