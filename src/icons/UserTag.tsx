
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M630.6 364.8L540.3 274.8C528.3 262.8 512 256 495 256h-79.23c-17.75 0-31.99 14.25-31.99 32l.0147 79.2c0 17 6.647 33.15 18.65 45.15l90.31 90.27c12.5 12.5 32.74 12.5 45.24 0l92.49-92.5C643.1 397.6 643.1 377.3 630.6 364.8zM447.8 343.9c-13.25 0-24-10.62-24-24c0-13.25 10.75-24 24-24c13.38 0 24 10.75 24 24S461.1 343.9 447.8 343.9z"/><path className="fa-secondary" d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM379.8 435c-18.06-18.05-28-42.12-28-67.75v-44.1C328.5 310.7 302.4 304 274.7 304H173.3c-95.73 0-173.3 77.65-173.3 173.4C.0005 496.5 15.52 512 34.66 512h378.7c11.86 0 21.82-6.337 28.07-15.43L379.8 435z"/>
</>],
['light',<>
	<path d="M630.6 364.8L540.4 274.4c-12-12-28.25-18.75-45.13-18.75H415.9c-17.62 0-32 14.38-32 32l-.0588 79.58c0 17 6.647 33.15 18.65 45.15l90.31 90.27C499 508.8 507.3 512 515.4 512c8.25 0 16.33-3.125 22.58-9.375l92.49-92.5C643.1 397.5 643.1 377.3 630.6 364.8zM515.5 479.9l-90.25-90.25c-6-6-9.375-14.12-9.375-22.62V287.6h79.38c8.5 0 16.5 3.375 22.5 9.5l90.25 90.25L515.5 479.9zM463.9 319.9c-8.75 0-16 7.25-16 16s7.195 15.94 15.95 15.94c8.875 0 16-7.25 16-16S472.8 319.9 463.9 319.9zM400 480H34.66c-1.451 0-2.662-1.207-2.662-2.658C31.1 399.4 95.4 336 173.3 336H274.7c19.65 0 38.33 4.1 55.32 11.42c10.39 4.479 21.91-3.477 21.91-14.79c0-6.277-3.576-12.17-9.346-14.64C321.7 309.1 298.8 304 274.7 304H173.3c-95.8 0-173.5 77.56-173.3 173.4C.022 496.4 15.63 512 34.66 512H400c8.836 0 16-7.164 16-16C416 487.2 408.8 480 400 480zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM224 32c52.94 0 96 43.06 96 96c0 52.93-43.06 96-96 96S128 180.9 128 128C128 75.06 171.1 32 224 32z"/>
</>],
['regular',<>
	<path d="M48.71 464C55.38 401.1 108.7 352 173.3 352H274.7c29.74 0 56.82 10.75 78.34 28.12c-.5684-4.26-1.246-8.498-1.246-12.87v-44.1C328.5 310.7 302.4 304 274.7 304H173.3c-95.73 0-173.3 77.65-173.3 173.4C.0005 496.5 15.52 512 34.66 512h378.7c11.86 0 21.82-6.339 28.07-15.43L408.8 464H48.71zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM224 48c44.11 0 80 35.89 80 80c0 44.11-35.89 80-80 80C179.9 208 144 172.1 144 128C144 83.89 179.9 48 224 48zM630.6 364.8L540.3 274.8C528.3 262.8 512 256 495 256h-79.23c-17.75 0-31.99 14.25-31.99 32l.0147 79.2c0 17 6.645 33.15 18.65 45.15l90.31 90.27c12.5 12.5 32.74 12.5 45.24 0l92.49-92.5C643.1 397.6 643.1 377.3 630.6 364.8zM447.8 343.9c-13.25 0-24-10.62-24-24c0-13.25 10.75-24 24-24c13.38 0 24 10.75 24 24S461.1 343.9 447.8 343.9z"/>
</>],
['solid',<>
	<path d="M351.8 367.3v-44.1C328.5 310.7 302.4 304 274.7 304H173.3c-95.73 0-173.3 77.65-173.3 173.4C.0005 496.5 15.52 512 34.66 512h378.7c11.86 0 21.82-6.337 28.07-15.43l-61.65-61.57C361.7 416.9 351.8 392.9 351.8 367.3zM224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM630.6 364.8L540.3 274.8C528.3 262.8 512 256 495 256h-79.23c-17.75 0-31.99 14.25-31.99 32l.0147 79.2c0 17 6.647 33.15 18.65 45.15l90.31 90.27c12.5 12.5 32.74 12.5 45.24 0l92.49-92.5C643.1 397.6 643.1 377.3 630.6 364.8zM447.8 343.9c-13.25 0-24-10.62-24-24c0-13.25 10.75-24 24-24c13.38 0 24 10.75 24 24S461.1 343.9 447.8 343.9z"/>
</>],
['thin',<>
	<path d="M224 256c70.7 0 128-57.31 128-128S294.7 0 224 0C153.3 0 96 57.31 96 128S153.3 256 224 256zM224 16c61.76 0 112 50.24 112 112S285.8 240 224 240S112 189.8 112 128S162.2 16 224 16zM416 496H41.44C27.41 496 16 485.2 16 472C16 388.2 87.41 320 175.2 320h97.69c26.31 0 52.44 6.281 75.5 18.16c3.844 1.938 8.719 .4375 10.78-3.469c2-3.938 .4687-8.75-3.469-10.78C330.3 310.9 301.7 304 272.8 304H175.2C78.56 304 0 379.4 0 472C0 494.1 18.59 512 41.44 512H416c4.406 0 8-3.594 8-8S420.4 496 416 496zM630.6 364.8L540.3 274.8C528.3 262.8 512 256 495 256h-79.23c-17.73 0-31.99 14.25-31.99 32l.0147 79.2c0 17 6.659 33.15 18.65 45.15l90.31 90.27C499 508.9 507.3 512 515.4 512c8.182 0 16.34-3.125 22.58-9.375l92.49-92.5C643.1 397.6 643.1 377.3 630.6 364.8zM619.2 398.8l-92.41 92.5C523.8 494.3 519.8 496 515.5 496c-4.262 0-8.27-1.664-11.29-4.691l-90.28-90.24C404.9 392.1 400 380.1 400 367.3V288c0-8.973 7.016-16 15.97-16h79.18c12.8 0 24.83 4.992 33.91 14.07l90.28 90.11c3.021 3.023 4.68 7.035 4.67 11.29C623.1 391.7 622.3 395.7 619.2 398.8zM448 304c-8.834 0-16 7.166-16 16c0 8.916 7.111 15.94 15.95 15.94c8.916 0 16-7.168 16-16C463.9 311.1 456.9 304 448 304z"/>
</>],

]);

const UserTag: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

UserTag.displayName = "UserTag";

export default UserTag;
