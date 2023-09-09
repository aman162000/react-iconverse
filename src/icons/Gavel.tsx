
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M512 216.3c0-6.125-2.344-12.25-7.031-16.93L482.3 176.8c-4.688-4.686-10.84-7.028-16.1-7.028s-12.31 2.343-16.1 7.028l-5.625 5.625L329.6 69.28l5.625-5.625c4.687-4.688 7.03-10.84 7.03-16.1s-2.343-12.31-7.03-16.1l-22.62-22.62C307.9 2.344 301.8 0 295.7 0s-12.15 2.344-16.84 7.031L154.2 131.5C149.6 136.2 147.2 142.3 147.2 148.5s2.344 12.25 7.031 16.94l22.62 22.62c4.688 4.688 10.84 7.031 16.1 7.031c6.156 0 12.31-2.344 16.1-7.031l5.625-5.625l113.1 113.1l-5.625 5.621c-4.688 4.688-7.031 10.84-7.031 16.1s2.344 12.31 7.031 16.1l22.62 22.62c4.688 4.688 10.81 7.031 16.94 7.031s12.25-2.344 16.94-7.031l124.5-124.6C509.7 228.5 512 222.5 512 216.3z"/><path className="fa-secondary" d="M214.6 342.6c6.25 6.251 9.374 14.44 9.374 22.62c0 8.187-3.125 16.37-9.376 22.62l-114.7 114.7C93.62 508.9 85.43 512 77.25 512s-16.37-3.125-22.62-9.375l-45.25-45.25c-6.25-6.248-9.375-14.43-9.375-22.62s3.125-16.37 9.375-22.62L124.1 297.4c6.25-6.248 14.44-9.372 22.62-9.372S163.1 291.1 169.4 297.4l81.06-81.06l45.25 45.25L214.6 342.6z"/>
</>],
['light',<>
	<path d="M512 208.3c0-9.103-7.43-16-15.99-16c-4.091 0-8.183 1.562-11.31 4.688l-12.7 12.7L302.4 40l12.68-12.69C318.2 24.19 319.8 20.09 319.8 16c0-9.103-7.43-16-15.99-16c-4.091 0-8.183 1.562-11.31 4.688l-143.9 144C145.5 151.8 143.9 155.9 143.9 160c0 9.103 7.43 16 15.99 16c4.091 0 8.183-1.562 11.31-4.688l12.68-12.69l73.39 73.44l-75.46 78.11L172.4 300.7c-8.456-8.437-19.56-12.67-30.64-12.67c-11.13 0-22.26 4.234-30.73 12.67l-98.31 98.38C4.232 407.6 0 418.7 0 429.8s4.232 22.23 12.7 30.7l38.76 38.78C59.65 507.5 70.55 512 82.14 512c11.6 0 22.5-4.5 30.69-12.72l98.31-98.34c8.464-8.469 12.7-19.59 12.7-30.7S219.6 348 211.1 339.5l-6.711-6.719l75.47-78.12l73.56 73.6l-12.66 12.67c-3.123 3.125-4.685 7.219-4.685 11.31c0 9.103 7.43 16 15.99 16c4.092 0 8.183-1.562 11.31-4.688l143.9-144C510.4 216.5 512 212.4 512 208.3zM191.9 370.2c0 2.922-1.113 5.844-3.338 8.078l-98.32 98.34c-2.139 2.156-5.095 3.234-8.054 3.234c-2.959 0-5.923-1.078-8.078-3.234l-38.76-38.78c-2.225-2.234-3.338-5.156-3.338-8.078s1.113-5.844 3.338-8.078l98.31-98.38c2.218-2.219 5.138-3.312 8.074-3.312c2.92 0 5.856 1.094 8.089 3.344l38.74 38.78C190.7 364.4 191.9 367.3 191.9 370.2zM206.5 136l73.33-73.38l169.6 169.7l-73.33 73.38L206.5 136z"/>
</>],
['regular',<>
	<path d="M512 216c0-9.079-7.009-23.88-23.72-23.88c-5.738 0-11.49 2.064-16.09 6.142l-158.5-158.5c4.078-4.593 6.143-10.35 6.143-16.09C319.9 7.028 305.2 0 296 0c-6.141 0-12.48 2.344-17.17 7.031l-127.8 128C146.3 139.7 144 145.9 144 152c0 12.79 10.3 24 24 24c5.689 0 11.27-2.234 15.8-6.258L246.1 232L175 303L169.4 297.4C163.1 291.1 154.9 288 146.7 288S130.4 291.1 124.1 297.4l-114.7 114.7c-6.25 6.248-9.375 14.43-9.375 22.62s3.125 16.37 9.375 22.62l45.25 45.25C60.87 508.9 69.06 512 77.25 512s16.37-3.125 22.62-9.375l114.7-114.7c6.25-6.25 9.376-14.44 9.376-22.62c0-8.185-3.125-16.37-9.374-22.62l-5.656-5.656L280 265.9l62.26 62.26c-4.078 4.593-6.143 10.35-6.143 16.09C336.1 360.1 350.8 368 360 368c6.141 0 12.28-2.344 16.97-7.031l128-127.8C509.7 228.5 512 222.1 512 216zM376 294.1L217.9 136L280 73.94L438.1 232L376 294.1z"/>
</>],
['solid',<>
	<path d="M512 216.3c0-6.125-2.344-12.25-7.031-16.93L482.3 176.8c-4.688-4.686-10.84-7.028-16.1-7.028s-12.31 2.343-16.1 7.028l-5.625 5.625L329.6 69.28l5.625-5.625c4.687-4.688 7.03-10.84 7.03-16.1s-2.343-12.31-7.03-16.1l-22.62-22.62C307.9 2.344 301.8 0 295.7 0s-12.15 2.344-16.84 7.031L154.2 131.5C149.6 136.2 147.2 142.3 147.2 148.5s2.344 12.25 7.031 16.94l22.62 22.62c4.688 4.688 10.84 7.031 16.1 7.031c6.156 0 12.31-2.344 16.1-7.031l5.625-5.625l113.1 113.1l-5.625 5.621c-4.688 4.688-7.031 10.84-7.031 16.1s2.344 12.31 7.031 16.1l22.62 22.62c4.688 4.688 10.81 7.031 16.94 7.031s12.25-2.344 16.94-7.031l124.5-124.6C509.7 228.5 512 222.5 512 216.3zM227.8 238.1L169.4 297.4C163.1 291.1 154.9 288 146.7 288S130.4 291.1 124.1 297.4l-114.7 114.7c-6.25 6.248-9.375 14.43-9.375 22.62s3.125 16.37 9.375 22.62l45.25 45.25C60.87 508.9 69.06 512 77.25 512s16.37-3.125 22.62-9.375l114.7-114.7c6.25-6.25 9.376-14.44 9.376-22.62c0-8.185-3.125-16.37-9.374-22.62l58.43-58.43L227.8 238.1z"/>
</>],
['thin',<>
	<path d="M512 232.5c0-4.599-3.758-7.999-7.994-7.999c-2.051 0-4.101 .7822-5.66 2.341l-11.91 11.91l-213.2-213.2l11.91-11.91c1.56-1.56 2.342-3.609 2.342-5.659c0-4.599-3.758-7.999-7.994-7.999c-2.051 0-4.101 .7822-5.66 2.341L138.1 138.1C136.5 139.7 135.7 141.7 135.7 143.8c0 4.244 3.411 7.996 7.996 7.996c2.05 0 4.099-.7822 5.658-2.342l10.74-10.73l100.9 100.9L186.3 314.3l11.31 11.31l74.71-74.71l100.9 100.9l-10.74 10.74c-1.56 1.56-2.342 3.609-2.342 5.658c0 4.601 3.766 7.997 7.996 7.997c2.05 0 4.099-.7822 5.658-2.342l135.8-135.8C511.2 236.6 512 234.5 512 232.5zM171.4 127.4l90.51-90.51l20.93 20.93L192.4 148.3L171.4 127.4zM203.7 159.6l90.51-90.51l148.7 148.7l-90.51 90.51L203.7 159.6zM384.6 340.6l-20.93-20.93l90.51-90.51l20.93 20.93L384.6 340.6zM169.4 297.4C163.1 291.1 154.9 288 146.7 288c-8.186 0-16.37 3.126-22.62 9.372l-114.7 114.7c-6.25 6.248-9.375 14.43-9.375 22.62s3.125 16.37 9.375 22.62l45.25 45.25C60.87 508.9 69.06 512 77.25 512s16.37-3.125 22.62-9.375l114.7-114.7c6.25-6.25 9.376-14.44 9.376-22.62c0-8.185-3.125-16.37-9.374-22.62L169.4 297.4zM207.1 365.3c0 4.096-1.559 8.191-4.676 11.31l-114.7 114.7C85.53 494.3 81.52 496 77.25 496c-4.271 0-8.287-1.664-11.31-4.688l-45.25-45.25c-3.023-3.02-4.688-7.035-4.688-11.3s1.664-8.285 4.689-11.31l114.7-114.7C138.5 305.7 142.5 304 146.7 304c4.271 0 8.287 1.664 11.31 4.684l45.25 45.25C206.4 357.1 207.1 361.2 207.1 365.3z"/>
</>],

]);

const Gavel: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Gavel.displayName = "Gavel";

export default Gavel;