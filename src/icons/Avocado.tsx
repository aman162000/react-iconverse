
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M319.5 264.7c0 60.74-58.63 119.3-119.1 119.3c-54.51 0-72.49-43.59-72.49-72.66c0-60.75 58.64-119.3 119.1-119.3C301.5 191.1 319.5 235.6 319.5 264.7z"/><path className="fa-secondary" d="M371.5-.0006c-39.21 0-78.72 15.74-108.1 45.17C232.4 76.31 192.1 97.3 150.6 108.9c-35.27 9.666-150.6 61.92-150.6 197.8c0 113.4 92.35 205.3 205.1 205.3c52.37 0 104.7-20.04 144.7-60.13c67.65-67.86 42.56-130 115.1-203.7l4.357-4.371c27.94-28.03 41.91-64.77 41.91-101.5C512 70.27 455.6-.0006 371.5-.0006zM200.4 383.1c-54.51 0-72.49-43.58-72.49-72.66c0-60.75 58.64-119.3 119.1-119.3c54.52 0 72.5 43.59 72.5 72.66C319.5 325.4 260.9 383.1 200.4 383.1z"/>
</>],
['light',<>
	<path d="M512 142.3c0-72.05-56.44-142.3-140.5-142.3c-39.21 0-78.71 15.73-108.1 45.17C232.4 76.31 192.1 97.3 150.6 108.9C115.4 118.6 .0005 170.8 .0005 306.7c0 113.8 92.76 205.3 205.1 205.3c52.37 0 104.7-20.04 144.7-60.13c67.65-67.87 42.56-130 115.1-203.7l4.357-4.371C498 215.8 512 179.1 512 142.3zM479.1 142.3c0 29.51-11.7 58.04-32.57 78.98l-4.357 4.371c-32.82 32.93-57.16 76.5-72.33 129.5C356.6 404.6 304.3 480 205.1 480c-75.36 0-173-60.5-173-173.3c0-80.95 55.22-147.2 127.1-166.9C287.8 104.5 283.4 32 371.5 32C439.4 32 479.1 89.86 479.1 142.3zM247 176c-68.1 0-134.9 65.3-134.9 135.4c0 59.15 44.98 88.59 88.34 88.59c.0313 0 0 0 0 0c69 0 134.9-65.3 134.9-135.4C335.3 205.4 290.4 176 247 176zM303.6 264.7c0 50.51-49.57 102.7-103.7 102.7c-43.79 0-56.09-33.89-56.09-56.1C143.8 260.2 194.8 208 247 208C281.5 208 303.6 231.7 303.6 264.7z"/>
</>],
['regular',<>
	<path d="M512 142.3c0-72.05-56.44-142.3-140.5-142.3c-39.21 0-78.71 15.73-108.1 45.17C232.4 76.31 192.1 97.3 150.6 108.9C115.4 118.6 .0005 170.8 .0005 306.7c0 113.8 92.76 205.3 205.1 205.3c52.37 0 104.7-20.04 144.7-60.13c67.65-67.87 42.56-130 115.1-203.7l4.357-4.371C498 215.8 512 179.1 512 142.3zM463.1 142.3c0 25.29-10.03 49.74-27.9 67.67l-4.357 4.371C334.2 312.2 366.7 464 205.1 464c-68.51 0-157.1-55.16-157.1-157.3c0-73.22 50.04-133.6 115.3-151.5C295.8 118.9 291.1 48 371.5 48C429.8 48 463.1 97.93 463.1 142.3zM247 191.1c-60.51 0-119.1 58.66-119.1 119.3c0 28.31 17.39 72.66 72.49 72.66c60.51 0 119.1-58.66 119.1-119.3C319.5 236.3 302.1 191.1 247 191.1z"/>
</>],
['solid',<>
	<path d="M512 142.3c0-72.05-56.44-142.3-140.5-142.3c-39.2 0-78.72 15.74-108.1 45.17C232.4 76.31 192.1 97.3 150.6 108.9C115.4 118.6 .0005 170.8 .0005 306.7c0 113.4 92.35 205.3 205.1 205.3c52.37 0 104.7-20.04 144.7-60.13c67.65-67.86 42.56-130 115.1-203.7l4.357-4.371C498 215.8 512 179.1 512 142.3zM319.5 264.7c0 60.74-58.63 119.3-119.1 119.3c-54.51 0-72.49-43.59-72.49-72.66c0-60.75 58.64-119.3 119.1-119.3C301.5 191.1 319.5 235.6 319.5 264.7z"/>
</>],
['thin',<>
	<path d="M512 142.3c0-72.05-56.44-142.3-140.5-142.3c-39.21 0-78.71 15.73-108.1 45.17C232.4 76.31 192.1 97.3 150.6 108.9C115.4 118.6 .0005 170.8 .0005 306.7c0 113.8 92.76 205.3 205.1 205.3c40.2 0 160.1-21.1 196.4-148.1C439.8 230.2 512 246.4 512 142.3zM495.1 142.2c0 92.07-71.42 82.92-109.9 217.2C370.6 413.6 313.5 496 205.1 496c-47.77 0-188.1-38.1-188.1-189.3c0-88.62 60.35-160.9 138.8-182.4C281.2 89.72 275 16 371.5 16C449.6 16 495.1 82.39 495.1 142.2zM246.7 184c-64.68 0-126.7 62.16-126.7 127.4c0 39.64 27.32 80.82 79.14 80.82c64.75 0 128.2-61.06 128.2-127.6C327.4 203.1 278.8 184 246.7 184zM311.5 264.7c0 56.41-55.24 111.4-111.2 111.4c-48.77 0-64.4-38.82-64.4-64.68c0-56.32 55.2-111.4 111.3-111.4C296 199.1 311.5 238.9 311.5 264.7z"/>
</>],

]);

const Avocado: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Avocado.displayName = "Avocado";

export default Avocado;
