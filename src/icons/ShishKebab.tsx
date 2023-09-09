
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M364.6 277.2L234.7 147.4c-11.87-12-31.37-12-43.25 0L149.1 189.6c-11.87 12-11.87 31.38 0 43.38L278.1 362.9c12 11.88 31.37 11.88 43.25 0l42.37-42.38C376.5 308.6 376.5 289.1 364.6 277.2zM126.5 255.6c-11.87-12-31.25-12-43.25 0l-42.25 42.25c-11.1 12-11.1 31.38 0 43.25l129.9 129.9c11.87 12 31.25 12 43.25 0l42.25-42.25c12-12 12-31.38 0-43.38L126.5 255.6z"/><path className="fa-secondary" d="M174.6 303.7l33.95 33.92L231.2 315.1L197.2 281.1L174.6 303.7zM7.054 470.1c-9.396 9.375-9.403 24.61-.0166 33.99c9.381 9.383 24.6 9.388 33.98 .0049l81.91-81.9l-33.94-33.94L7.054 470.1zM511.2 84.12c-3.875-29.75-21.13-55.75-47.5-71.25c-30.37-17.62-67.1-17.13-97.87 1.375c-42.62 26.75-58.12 79.75-35.87 124.6c1.5 2.875 2.25 7.125 0 9.5l-47.12 47.12l33.94 33.94l47.14-47.19c16.62-16.75 20.29-42.13 9.042-64.63c-9.625-19.5-5.999-48.25 19.62-63.37c14.12-8.5 31.62-8.583 45.87-.5833c14.25 8 23.21 20.96 25.21 36.46c1.25 10.38-.855 20.96-5.978 30.09c-3.75 6.375-3.354 14.29 1.896 19.54l12.25 12.29c6.75 6.75 18.12 6.126 23.5-1.749C508.6 130.9 514.2 107.4 511.2 84.12z"/>
</>],
['light',<>
	<path d="M483.9 27.26c-36.25-36.35-99.5-36.35-135.8 0C329.1 45.42 320 69.57 320 95.26c0 20.27 6.219 39.57 17.73 55.72l-21.2 21.25l-42.49-42.58c-24.56-24.49-64.29-24.49-88.86 0L142.8 172.2C130.2 184.8 123.5 202.2 124.5 220.1C106.7 219.1 89.32 225.7 76.78 238.4L34.42 280.1c-24.56 24.49-24.56 64.3 0 88.91l42.38 42.51l-72.11 72.24c-6.25 6.26-6.25 16.4 0 22.66C7.813 510.4 11.91 512 16 512s8.188-1.566 11.31-4.697l72.1-72.22l42.42 42.56c11.78 11.8 27.7 18.33 44.37 18.33s32.58-6.529 44.37-18.33l42.49-42.57c12.66-12.56 19.3-30.01 18.3-47.85c17.8 1.006 35.22-5.65 47.75-18.33l42.48-42.45C393.4 314.6 400 298.6 400 281.9c0-16.58-6.643-32.65-18.42-44.46l-42.41-42.5l31.59-31.64c3-3.006 4.688-7.074 4.688-11.33s-1.688-8.328-4.688-11.33C358.7 128.5 352 112.4 352 95.26c0-17.12 6.656-33.22 18.75-45.33c24.19-24.23 66.31-24.23 90.5 0C473.3 62.04 480 78.13 480 95.26c0 17.12-6.656 33.21-18.75 45.33c-6.25 6.262-6.25 16.4 0 22.67s16.38 6.262 22.62 0C502 145.1 512 120.9 512 95.26C512 69.57 502 45.42 483.9 27.26zM250.4 412.3l-42.48 42.57c-11.91 11.93-31.36 11.96-43.36 0c-26.95-26.87-80.73-80.73-107.5-107.8c-11.93-12.03-11.91-31.52 0-43.45l42.48-42.57c11.91-11.93 31.36-11.96 43.36 0C169.8 288 223.6 341.9 250.4 368.9C262.3 380.9 262.3 400.4 250.4 412.3zM358.8 303.7l-42.36 42.45c-12.03 12.06-31.46 12.06-43.36 0L165.5 238.4c-12.03-11.93-12.03-31.4 0-43.45l42.36-42.45c12.03-12.05 31.46-12.05 43.49 0l107.4 107.6C370.8 272.2 370.8 291.7 358.8 303.7z"/>
</>],
['regular',<>
	<path d="M511.2 84.12c-3.875-29.75-21.12-55.75-47.5-71.25c-30.37-17.62-67.99-17.12-97.87 1.375c-42.62 26.75-58.12 79.75-35.87 124.6c1.5 2.875 2.25 7.125 0 9.5l-24.26 24.25l-31.87-31.87C246.3 113.2 201.2 113.2 173.6 140.7l-31.75 31.75C129.8 184.6 122.6 200.6 121.6 217.6c-16.1 1-32.1 8.25-45.12 20.25L44.72 269.6c-27.57 27.57-27.57 72.68 0 100.2l31.75 31.75l-69.41 69.35c-9.403 9.386-9.411 24.6-.0166 33.99c9.383 9.383 24.59 9.38 33.98 .0049l69.45-69.35l31.62 31.62c27.75 27.62 72.62 27.62 100.4 0l31.62-31.75c12.12-11.1 19.25-28.12 20.37-45.12c16.1-.1 32.1-8.25 45.12-20.25l31.62-31.75c27.75-27.62 27.75-72.62 0-100.2l-31.5-31.62l24.21-24.25c16.75-16.62 20.29-42.13 9.042-64.63c-9.625-19.5-6.001-48.25 19.62-63.37c14.12-8.5 31.62-8.708 45.87-.5833c14.25 7.1 23.33 21.08 25.21 36.46c1.37 10.33-.7733 20.99-5.978 30.09c-3.671 6.42-3.307 14.28 1.896 19.54l12.25 12.29c6.689 6.757 18.15 6.115 23.5-1.749C508.6 130.8 514.2 107.4 511.2 84.12zM240.1 401.6l-31.62 31.62c-8.1 8.1-23.5 8.1-32.37 0L78.72 335.1c-8.1-8.1-8.1-23.5 0-32.5L110.3 271.9c8.1-8.1 23.5-8.1 32.5 0l97.25 97.25C249.1 378.1 249.1 392.6 240.1 401.6zM337.2 304.5l-31.62 31.62c-8.1 8.1-23.5 8.1-32.5 0L175.8 238.9c-8.1-8.1-8.1-23.5 0-32.5L207.5 174.7c8.1-8.1 23.5-8.1 32.5 0l97.25 97.25c4.375 4.25 6.75 10.12 6.75 16.25C343.1 294.4 341.6 300.1 337.2 304.5z"/>
</>],
['solid',<>
	<path d="M126.5 255.6c-11.87-12-31.25-12-43.25 0l-42.25 42.25c-11.1 12-11.1 31.38 0 43.25l129.9 129.9c11.87 12 31.25 12 43.25 0l42.25-42.25c12-12 12-31.38 0-43.38L126.5 255.6zM7.054 470.1c-9.396 9.375-9.403 24.61-.0166 33.99c9.381 9.383 24.6 9.388 33.98 .0049l59.23-59.21l-33.87-34L7.054 470.1zM234.7 147.4c-11.87-12-31.37-12-43.25 0L149.1 189.6c-11.87 12-11.87 31.38 0 43.38L278.1 362.9c12 11.88 31.37 11.88 43.25 0l42.37-42.38c11.88-11.88 11.88-31.38 0-43.25L234.7 147.4zM511.2 84.12c-3.875-29.75-21.13-55.75-47.5-71.25c-30.37-17.62-67.1-17.13-97.87 1.375c-42.62 26.75-58.12 79.75-35.87 124.6c1.5 2.875 2.25 7.125 0 9.5l-24.49 24.5l33.1 33.88l24.45-24.5c16.62-16.75 20.29-42.13 9.042-64.63c-9.625-19.5-5.999-48.25 19.62-63.37c14.12-8.5 31.62-8.583 45.87-.5833c14.25 8 23.21 20.96 25.21 36.46c1.25 10.38-.855 20.96-5.978 30.09c-3.75 6.375-3.354 14.29 1.896 19.54l12.25 12.29c6.75 6.75 18.12 6.126 23.5-1.749C508.6 130.9 514.2 107.4 511.2 84.12z"/>
</>],
['thin',<>
	<path d="M132.2 249.1C124.1 242.7 115.3 238.6 105 238.6c-10.28 0-20.13 4.032-27.44 11.34L35.35 292.2C28 299.5 23.97 309.3 24 319.6c.0313 10.28 4.063 19.94 11.34 27.13l129.9 129.9c7.219 7.313 16.88 11.34 27.16 11.38c10.28 0 20.13-4.032 27.44-11.34l42.22-42.25c15.1-15.06 15.1-39.63 0-54.69L132.2 249.1zM250.7 423.1l-42.22 42.25c-4.282 4.282-10 6.657-16.03 6.657c-.0313 0 0 0 0 0c-6.001-.0313-11.66-2.375-15.91-6.657l-129.9-129.9c-4.25-4.219-6.594-9.845-6.626-15.85C39.97 313.5 42.35 307.8 46.66 303.5l42.25-42.25C93.2 256.1 98.92 254.6 104.9 254.6c.0313 0 0 0 0 0c6.001 0 11.66 2.375 15.88 6.626l129.9 129.8C259.6 399.9 259.6 414.2 250.7 423.1zM240.4 141.7c-7.219-7.313-16.92-11.34-27.24-11.34c-.0313 0 0 0 0 0c-10.34 0-20.08 4.032-27.3 11.34L143.5 183.1C128.5 199 128.5 223.5 143.5 238.6l129.9 129.9c7.532 7.469 17.44 11.19 27.28 11.19c9.907 0 19.75-3.719 27.25-11.22l42.38-42.38c15.03-15.03 15.03-39.53 0-54.57L240.4 141.7zM358.1 314.8l-42.38 42.38c-8.751 8.751-23.13 8.751-31.94 0L154.8 227.3C146.1 218.5 146.1 204.1 154.8 195.3L197.2 152.1c4.219-4.282 9.876-6.626 15.94-6.626c6.063 0 11.69 2.344 15.91 6.626l129.9 129.9C367.8 291.7 367.8 306 358.1 314.8zM483.9 28.08c-37.44-37.44-98.32-37.44-135.8 0c-35.53 35.53-37.35 92.2-5.438 129.9l-20.35 20.35c-3.125 3.125-3.125 8.188 0 11.31c1.563 1.563 3.594 2.344 5.657 2.344s4.094-.7813 5.657-2.344l25.78-25.78c3.125-3.125 3.125-8.188 0-11.31c-31.19-31.19-31.19-81.94 0-113.1s81.95-31.19 113.1 0s31.19 81.95 0 113.1c-3.125 3.125-3.125 8.188 0 11.31s8.188 3.125 11.31 0C521.4 126.4 521.4 65.52 483.9 28.08zM74.35 426.3l-72.01 72.01c-3.125 3.125-3.125 8.188 0 11.31C3.907 511.2 5.938 512 8.001 512s4.094-.7813 5.657-2.344l72.01-72.01c3.125-3.125 3.125-8.188 0-11.31S77.48 423.2 74.35 426.3z"/>
</>],

]);

const ShishKebab: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

ShishKebab.displayName = "ShishKebab";

export default ShishKebab;
