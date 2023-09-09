
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M509.5 70.52l-40.01 63.99C465.1 141.4 458.3 146.5 450.4 148.5l-56.12 14.49l-99.64 99.63L249.4 217.4l99.64-99.63l14.5-56.1c2-8 7-14.75 14-19.12l64-40.11c6.375-3.875 14.51-2.998 19.76 2.252l46 46C512.6 56.03 513.5 64.15 509.5 70.52z"/><path className="fa-secondary" d="M294.6 262.6L249.4 217.4l25.13-25.13C90.39 190.6 46.01 240.1 30.76 256.2c-46.88 46.87-39.5 150.4 17.5 207.5c57.13 57.12 160.6 64.37 207.5 17.5c15.25-15.25 65.64-59.64 64.01-243.7L294.6 262.6zM208 351.1c-26.5 0-48-21.49-48-47.99c0-26.49 21.5-47.99 48-47.99s48 21.5 48 47.99C256 330.5 234.5 351.1 208 351.1z"/>
</>],
['light',<>
	<path d="M507.3 50.66l-46-46c-5.267-5.268-13.44-6.198-19.76-2.252l-69.45 43.4c-3.482 2.174-5.993 5.604-7.018 9.579l-23.9 92.74l-43.81 43.83h-31.25c-177.3 0-220.3 49.28-235.3 64.28c-46.87 46.88-39.49 150.4 17.5 207.5C80.25 495.6 126.8 512 169.7 512c33.74 0 65.38-10.15 86-30.77c15.5-15.63 67.96-63.24 64.21-257.3V214.6l43.83-43.84l92.66-23.89c3.958-1.022 7.378-3.52 9.553-6.983l43.51-69.35C513.5 64.2 512.6 55.94 507.3 50.66zM287.7 258.2c-1.1 147.9-39.87 185.9-52.99 198.8l-1.625 1.625c-13.62 13.63-36.74 21.38-63.36 21.38c-36.99 0-74.86-14.88-98.86-38.88C23.38 393.5 21.51 310.7 53.38 278.8l1.625-1.625C67.62 264.5 105.7 226.2 253.8 224.2l11.34-.084l-4.521 4.522c-6.249 6.251-6.249 16.38 0 22.63c3.124 3.125 7.217 4.688 11.31 4.688s8.186-1.563 11.31-4.688l4.507-4.508L287.7 258.2zM442.3 117.5l-62.44 16.1c-.2461-.2813-.3359-.6407-.6034-.9083c-.2715-.2715-.6347-.3633-.9198-.6114l16.09-62.46l53.24-33.25l27.99 28L442.3 117.5zM191.1 255.1c-35.29 0-63.99 28.71-63.99 64.01s28.7 64.01 63.99 64.01s63.99-28.71 63.99-64.01S227.3 255.1 191.1 255.1zM191.1 351.1c-17.64 0-31.99-14.36-31.99-32S174.3 287.1 191.1 287.1s31.99 14.36 31.99 32S209.6 351.1 191.1 351.1z"/>
</>],
['regular',<>
	<path d="M507.3 50.66l-46-46c-5.25-5.25-13.38-6.127-19.76-2.252l-64 40.11c-7 4.375-12 11.12-14 19.12l-18.38 71.38l-59.25 59.25C96.76 188.6 49.63 237.4 30.76 256.2c-46.88 46.87-39.5 150.4 17.5 207.5C80.26 495.6 126.7 512 169.7 512c33.75 0 65.38-10.15 86-30.77c15.5-15.62 67.76-61.1 64.01-255.1l59.25-59.25l71.38-18.38c7.875-2.125 14.75-7.124 19.12-13.1l40.01-63.99C513.5 64.15 512.6 56.03 507.3 50.66zM221.8 447.4c-10.38 10.37-29.88 16.62-52 16.62c-32.88 0-66.38-13.12-87.5-34.25c-39.75-39.75-43.62-113.5-17.62-139.5c47.88-48.37 156.5-48.1 172.9-49.62L188.3 289.8c-21.37-5.875-44 3.25-55.25 22.5c-11.12 19.12-8 43.37 7.625 59.12c15.75 15.62 40 18.75 59.13 7.625c19.25-11.25 28.37-33.87 22.5-55.25l49.13-49.25C270.9 289.5 270.3 399.1 221.8 447.4z"/>
</>],
['solid',<>
	<path d="M507.3 50.66l-46-46c-5.25-5.249-13.38-6.126-19.76-2.252l-64 40.11c-7 4.374-12 11.12-14 19.12l-14.5 56.1L274.5 192.2C90.38 190.6 46.01 240.1 30.76 256.2c-46.88 46.87-39.5 150.4 17.5 207.5c57.13 57.12 160.6 64.37 207.5 17.5c15.25-15.25 65.64-59.64 64.01-243.7l74.5-74.49l56.12-14.49c7.875-1.1 14.75-7.125 19.12-13.1l40.01-63.99C513.5 64.15 512.6 56.03 507.3 50.66zM208 351.1c-26.5 0-48-21.5-48-47.99c0-26.5 21.5-47.99 48-47.99c26.5 0 48 21.5 48 47.99C256 330.5 234.5 351.1 208 351.1z"/>
</>],
['thin',<>
	<path d="M327.4 255.1c-4.331 0-7.846 3.507-7.975 7.836c-4.367 147.3-45.59 188.3-59.82 202.4l-1.422 1.422c-44.28 44.27-143.2 35.44-196.2-17.5c-52.85-52.99-61.68-152-16.09-197.6c14.07-14.22 55.2-55.36 202.3-59.76c4.328-.1299 7.834-3.645 7.834-7.975c0-4.502-3.777-8.16-8.278-8.029C94.42 181.2 51.23 224.4 33.19 242.6c-50.73 50.75-42.06 159.1 17.5 218.9c33.1 33.12 81.24 50.52 126.4 50.52c36.21 0 70.54-11.16 93.72-34.37c16.99-16.81 60.12-59.81 64.56-213.4C335.5 259.8 331.9 255.1 327.4 255.1zM208.1 248c-30.87 0-55.99 25.13-55.99 56.02s25.12 56 55.99 56c30.87 0 55.99-25.12 55.99-56S238.9 248 208.1 248zM208.1 344.1c-22.06 0-39.99-17.95-39.99-39.1c0-22.07 17.94-40.01 39.99-40.01c22.06 0 39.99 17.94 39.99 40.01C248.1 326.1 230.1 344.1 208.1 344.1zM505.5 47.07l-40.63-40.64c-7.234-7.234-18.45-8.547-27.5-3l-65.73 43.45c-2.031 1.344-3.342 3.531-3.561 5.969l-7.744 87.57l-93.93 93.97c-3.125 3.129-3.125 8.191 0 11.32c1.562 1.562 3.609 2.344 5.656 2.344c2.045 0 4.092-.7813 5.654-2.344l93.93-93.98l87.56-7.742c2.438-.2187 4.625-1.531 5.969-3.562l43.43-65.88C514.1 65.71 512.8 54.41 505.5 47.07zM495.1 65.89l-41.2 62.5l-77.1 6.816l6.811-77.11l62.27-41.17c2.453-1.547 5.625-1.172 7.607 .8125l40.63 40.64C496.2 60.46 496.6 63.54 495.1 65.89z"/>
</>],

]);

const Mandolin: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Mandolin.displayName = "Mandolin";

export default Mandolin;
