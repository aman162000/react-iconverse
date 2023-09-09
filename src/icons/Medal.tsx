
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M256 160c-97.25 0-176 78.75-176 176S158.8 512 256 512s176-78.75 176-176S353.3 160 256 160zM348.5 317.3l-37.88 37l8.875 52.25c1.625 9.25-8.25 16.5-16.63 12l-46.88-24.62L209.1 418.5c-8.375 4.5-18.25-2.75-16.63-12l8.875-52.25l-37.88-37C156.6 310.6 160.5 299 169.9 297.6l52.38-7.625L245.7 242.5c2-4.25 6.125-6.375 10.25-6.375S264.2 238.3 266.2 242.5l23.5 47.5l52.38 7.625C351.6 299 355.4 310.6 348.5 317.3z"/><path className="fa-secondary" d="M136.3 0H16.03c-12.95 0-20.53 14.58-13.1 25.18l130.3 184.8c28.74-27.99 67-46.13 109.5-49.3L149.1 7.77C147.1 2.949 141.9 0 136.3 0zM495.1 0H375.7c-5.621 0-10.83 2.949-13.72 7.77L269.2 160.7c42.5 3.168 80.76 21.31 109.5 49.3l130.3-184.8C516.5 14.58 508.9 0 495.1 0z"/>
</>],
['light',<>
	<path d="M300.4 275.4l-19.75-40c-4.742-9.422-14.69-14.14-24.62-14.14c-9.969 0-19.93 4.75-24.63 14.27L211.6 275.4l-44.13 6.5C157.1 283.4 148.6 290.5 145.4 300.5c-3.25 10.12-.625 20.88 6.875 28.25l32 31l-7.625 44c-3.063 17.98 11.36 32.21 27.23 32.21c4.215 0 8.531-1.004 12.65-3.207L256 412l39.5 20.75c4.022 2.117 8.276 3.086 12.45 3.086c15.8 0 30.49-13.89 27.43-32.09l-7.625-43.88l32-31.12c7.5-7.375 10.13-18.12 6.875-28.25c-3.25-10-11.75-17.12-22.13-18.62L300.4 275.4zM293.4 348.6l8.803 51.45l-46.22-24.32l-46.36 24.97l8.95-52.11l-37.38-36.45l51.66-7.576l23.13-46.82l23.13 46.82l51.66 7.576L293.4 348.6zM256 160c-97.2 0-176 78.8-176 176S158.8 512 256 512s176-78.8 176-176S353.2 160 256 160zM256 480c-79.4 0-144-64.6-144-144S176.6 192 256 192s144 64.6 144 144S335.4 480 256 480zM112 192c3.094 0 6.219-.875 8.969-2.75c7.313-4.938 9.25-14.91 4.281-22.22L33.85 31.97l98.78-1L196.7 137.8c4.563 7.594 14.47 10.12 21.94 5.5c7.594-4.531 10.06-14.38 5.5-21.94L160.1 14.56C154.7 5.562 144.9 0 134.4 0H29.94C18.75 0 8.596 6.156 3.408 16.09C-1.748 26-.9983 37.88 5.283 46.84l93.47 138.1C101.8 189.5 106.9 192 112 192zM508.6 16.09C503.4 6.156 493.3 0 482.1 0h-104.5c-10.47 0-20.31 5.562-25.66 14.53l-64.09 106.9c-4.563 7.562-2.094 17.41 5.5 21.94c7.531 4.625 17.41 2.094 21.94-5.5L377.6 32h100.5l-91.38 135c-4.969 7.312-3.031 17.28 4.281 22.22C393.8 191.1 396.9 192 400 192c5.125 0 10.16-2.469 13.25-7.031l93.35-137.9C513 37.88 513.8 26 508.6 16.09z"/>
</>],
['regular',<>
	<path d="M342.1 289.6L289.7 282l-23.5-47.5c-2-4.25-6.125-6.375-10.25-6.375S247.9 230.3 245.7 234.5L222.2 282l-52.37 7.625C160.5 291 156.6 302.6 163.5 309.3l37.87 37L192.5 398.5c-1.375 7.375 4.625 13.38 11.25 13.38c1.75 0 3.625-.375 5.375-1.375l46.87-24.62l46.87 24.62c1.75 1 3.625 1.375 5.375 1.375c6.625 0 12.62-6 11.25-13.5l-8.875-52.13l37.87-37C355.4 302.6 351.6 291 342.1 289.6zM256 144c-101.6 0-183.1 82.38-183.1 184S154.4 512 256 512s183.1-82.38 183.1-184S357.6 144 256 144zM256 464c-74.99 0-135.1-61.01-135.1-136S181 192 256 192s135.1 61.01 135.1 136S330.1 464 256 464zM135.9 148.5L68.84 48h69.22l44.13 77.22c15.49-5.641 31.73-9.672 48.65-11.63L172.8 12.09C168.6 4.625 160.6 0 152 0H24.01c-8.844 0-17.03 4.992-21.22 12.8C-1.4 20.59-.8741 29.94 4.032 37.31L99.07 179.9C110.2 168.1 122.4 157.5 135.9 148.5zM509.2 12.8C505 4.992 496.8 0 487.1 0h-127.1c-8.625 0-16.56 4.625-20.84 12.09l-57.99 101.5c16.91 1.961 33.16 5.992 48.65 11.63L373.9 48h69.22l-67.01 100.5c13.45 9.02 25.7 19.63 36.78 31.36l95.04-142.6C512.9 29.94 513.4 20.59 509.2 12.8z"/>
</>],
['solid',<>
	<path d="M223.7 130.8L149.1 7.77C147.1 2.949 141.9 0 136.3 0H16.03c-12.95 0-20.53 14.58-13.1 25.18l111.3 158.9C143.9 156.4 181.7 137.3 223.7 130.8zM256 160c-97.25 0-176 78.75-176 176S158.8 512 256 512s176-78.75 176-176S353.3 160 256 160zM348.5 317.3l-37.88 37l8.875 52.25c1.625 9.25-8.25 16.5-16.63 12l-46.88-24.62L209.1 418.5c-8.375 4.5-18.25-2.75-16.63-12l8.875-52.25l-37.88-37C156.6 310.6 160.5 299 169.9 297.6l52.38-7.625L245.7 242.5c2-4.25 6.125-6.375 10.25-6.375S264.2 238.3 266.2 242.5l23.5 47.5l52.38 7.625C351.6 299 355.4 310.6 348.5 317.3zM495.1 0H375.7c-5.621 0-10.83 2.949-13.72 7.77l-73.76 122.1c42 6.5 79.88 25.62 109.5 53.38l111.3-158.9C516.5 14.58 508.9 0 495.1 0z"/>
</>],
['thin',<>
	<path d="M256 160c-97.26 0-176 78.75-176 176S158.7 512 256 512s176-78.75 176-176S353.3 160 256 160zM256 496c-88.23 0-160-71.78-160-160S167.8 176 256 176s160 71.78 160 160S344.2 496 256 496zM509.2 12.8C505.1 4.836 496.1 0 487.1 0h-120.3c-8.344 0-16.25 4.453-20.6 11.66l-68.69 114.5c-2.25 3.781-1.031 8.703 2.75 10.97c3.813 2.281 8.719 1.047 11-2.75l68.66-114.5C362.3 17.45 364.9 16 367.7 16h120.3c3.031 0 5.688 1.609 7.094 4.312c1.406 2.688 1.188 5.797-.5626 8.281l-104.8 149.5c-2.531 3.625-1.656 8.609 1.969 11.14c5.327 3.729 10.09-.4341 11.16-1.953l104.8-149.5C512.8 30.42 513.4 20.77 509.2 12.8zM120.3 189.3c3.625-2.531 4.5-7.516 1.969-11.14L17.48 28.59C15.73 26.11 15.51 23 16.92 20.31C18.33 17.61 20.98 16 24.01 16h120.3c2.813 0 5.407 1.453 6.844 3.875l68.69 114.5C222.1 138.2 226.9 139.4 230.8 137.2C234.6 134.9 235.8 129.1 233.6 126.2L164.8 11.62C160.5 4.453 152.6 0 144.3 0H24.01c-8.969 0-17.06 4.836-21.22 12.8C-1.369 20.77-.8007 30.42 4.356 37.78l104.8 149.6C110.2 188.9 114.9 193 120.3 189.3zM342.1 297.6l-52.38-7.625L266.2 242.5c-2-4.25-6.125-6.375-10.25-6.375S247.7 238.3 245.7 242.5L222.2 290l-52.38 7.625C160.5 299 156.6 310.6 163.5 317.3l37.88 37L192.5 406.5c-1.283 7.309 4.61 13.37 11.27 13.37c1.77 0 3.594-.4258 5.35-1.371l46.88-24.62l46.88 24.62c1.758 .9453 3.581 1.371 5.35 1.371c6.665 0 12.56-6.062 11.27-13.37l-8.875-52.25l37.88-37C355.4 310.6 351.6 299 342.1 297.6zM293.4 348.6l8.803 51.45l-46.22-24.32L209.8 400.1l8.779-51.41l-37.38-36.45l51.66-7.576l23.13-46.82l23.13 46.82l51.66 7.576L293.4 348.6z"/>
</>],

]);

const Medal: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Medal.displayName = "Medal";

export default Medal;
