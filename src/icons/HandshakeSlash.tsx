
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M38.81 5.109C34.41 1.672 29.19 0 24.03 0C16.91 0 9.846 3.156 5.127 9.187C-3.06 19.62-1.248 34.72 9.19 42.89l591.1 463.1c10.5 8.203 25.56 6.328 33.69-4.078c8.188-10.44 6.375-25.53-4.062-33.7L38.81 5.109z"/><path className="fa-secondary" d="M.0005 128.2v255.7l63.1 .0446c17.75 0 32-14.28 32-32.03L96 171.9l-55.77-43.71H.0005zM64 336c0 8.742-7.25 15.99-15.1 15.99s-15.1-7.251-15.1-15.99c0-8.875 7.25-15.1 15.1-15.1S64 327.2 64 336zM543.1 128.2l.0002 223.8c0 17.62 14.25 31.99 31.1 31.99h64V128.1L543.1 128.2zM591.1 352c-8.75 0-16-7.251-16-15.99c0-8.875 7.25-15.1 16-15.1s15.1 7.122 15.1 15.1C607.1 344.8 600.7 352 591.1 352zM289.1 64L282.5 64c-43.47 0-85.16 13.68-120.8 37.45l46.53 36.47L289.1 64zM348.8 64c-7.941 0-15.64 2.97-21.5 8.329L233.7 157.9L297.5 207.9l65.33-59.79c6.5-5.871 16.75-5.496 22.62 1c6 6.496 5.5 16.62-1 22.62l-26.12 23.87l145.6 118.1c2.875 2.496 5.5 4.996 7.875 7.742V127.1c-40.98-40.96-96.52-63.98-154.5-63.98H348.8zM128 351.8h18.25l90.5 81.85c27.5 22.37 67.75 18.12 89.1-9.25l18.12 15.25c15.88 12.1 39.37 10.5 52.37-5.371l13.02-16.03L128 196.1V351.8z"/>
</>],
['light',<>
	<path d="M258.3 97.89C267 96.63 273.1 88.5 271.8 79.77C270.6 71.02 262.5 64.84 253.7 66.23c-17.82 2.586-35.03 8.109-51.67 15.07l29.09 22.97C240 101.5 249.1 99.23 258.3 97.89zM350.1 149.8l-28.15 26.18l25.41 20.06l24.53-22.8c6.469-6.016 6.844-16.14 .8281-22.61C366.7 144.1 356.5 143.8 350.1 149.8zM286.4 147.9l51.28-47.99C340.5 97.36 343.9 96 347.4 96h8.172c49.13 0 98.47 21.58 135.4 59.2L495.7 160H528v178.7l32 25.26V160h64C632.8 160 640 152.8 640 144S632.8 128 624 128h-115c-42.33-40.75-97.86-64-153.4-64h-8.172c-11.52 0-22.64 4.359-31.47 12.42L260.1 127.8L286.4 147.9zM381 424.8c-6.797 8.281-19.05 9.594-26.89 3.188l-16.97-14.75l-12.62-8.312l-10.55 10.53c-7.531 9.281-18.22 15.06-30.09 16.28c-11.98 1.188-23.58-2.281-33.2-10.06L160.4 352H112V173.3L54.59 128H16C7.156 128 0 135.2 0 144S7.156 160 16 160h64v208c0 8.812-7.172 15.93-15.1 15.93L32 384c-8.844 0-16 7.156-16 16S23.16 416 32 416h32c20.83 0 38.43-13.42 45.05-32h40.43l81.33 62.75C244.7 458 261.6 464 279.1 464c2.672 0 5.344-.125 8.031-.4062c15.11-1.562 29.09-7.438 40.23-16.44l6.094 5.281c21.84 17.84 54.28 14.56 72.31-7.406l19.66-24.22l-25.11-19.82L381 424.8zM624 384h-38.56l40.13 31.68C633.6 414.9 640 408.3 640 400C640 391.2 632.8 384 624 384zM25.92 3.42c-6.938-5.453-17-4.25-22.48 2.641c-5.469 6.938-4.281 17 2.641 22.48l608 480C617 510.9 620.5 512 623.1 512c4.734 0 9.422-2.094 12.58-6.078c5.469-6.938 4.281-17-2.641-22.49L25.92 3.42z"/>
</>],
['regular',<>
	<path d="M575.1 384h64V128.1l-133.9-.1775c-17.97-20.17-61.46-61.65-122.7-71.1c-22.5-3.355-45.39 3.605-63.41 18.21C302 60.47 279.1 53.42 256.5 56.86c-39.95 6.168-72.08 25.95-94.79 44.59L38.81 5.109C34.41 1.672 29.19 0 24.03 0C16.91 0 9.846 3.156 5.127 9.187C-3.06 19.62-1.248 34.72 9.19 42.89l591.1 463.1c10.5 8.203 25.56 6.328 33.69-4.078c8.188-10.44 6.375-25.53-4.062-33.7l-291.2-228.2l33.95-33.95c9.375-9.375 9.375-24.56 0-33.94c-9.375-9.375-24.56-9.375-33.94 0L301.6 211.1l-27.86-21.83l73.42-74.9c7.812-7.846 18.53-11.75 28.94-10.03c59.75 9.221 100.2 62.73 100.6 63.29c3.088 4.154 7.264 6.945 11.84 8.377H544l-.0004 176.1C543.1 369.7 558.3 384 575.1 384zM591.1 320c8.75 0 15.1 7.12 15.1 15.1c0 8.742-7.25 15.99-15.1 15.99s-16-7.251-16-15.99C575.1 327.2 583.2 320 591.1 320zM235.7 159.4L200.6 131.9c16.63-12.16 38.03-23.73 63.2-27.62c7.457-.9609 14.98 .6699 21.56 4.484L235.7 159.4zM372.5 404.2c-2.344 2.875-5.344 3.562-6.906 3.719c-1.656 .1562-4.562 .125-6.812-1.719l-32.41-27.66l-15.75 13.75l-2.812 2.938c-5.844 7.158-14.09 11.66-23.28 12.6c-9.469 .8125-18.25-1.75-24.5-6.781L170.3 319.8H96l.0004-147.9l-55.77-43.71H.0005v255.7l63.1 .0446c11.74 0 21.57-6.701 27.14-16.13h60.64l77.06 69.66C243.7 449.6 261.9 456 280.8 456c2.875 0 5.781-.125 8.656-.4375c13.62-1.406 26.41-6.064 37.47-13.5l.9062 .8125c12.03 9.877 27.28 14.41 42.69 12.78c13.19-1.375 25.28-7.033 33.91-15.35c11.32 4.395 23.67 4.432 35.11 .9082l-58.63-45.96L372.5 404.2zM48 352c-8.75 0-15.1-7.251-15.1-15.99c0-8.877 7.25-15.1 15.1-15.1s15.1 7.12 15.1 15.1C64 344.8 56.75 352 48 352z"/>
</>],
['solid',<>
	<path d="M543.1 128.2l.0002 223.8c0 17.62 14.25 31.99 31.1 31.99h64V128.1L543.1 128.2zM591.1 352c-8.75 0-16-7.251-16-15.99c0-8.875 7.25-15.1 16-15.1c8.75 0 15.1 7.122 15.1 15.1C607.1 344.8 600.7 352 591.1 352zM.0005 128.2v255.7l63.1 .0446c17.75 0 32-14.28 32-32.03L96 171.9l-55.77-43.71H.0005zM64 336c0 8.742-7.25 15.99-15.1 15.99s-15.1-7.251-15.1-15.99c0-8.875 7.25-15.1 15.1-15.1S64 327.2 64 336zM128 351.8h18.25l90.5 81.85c27.5 22.37 67.75 18.12 89.1-9.25l18.12 15.25c15.87 12.1 39.37 10.5 52.37-5.371l13.02-16.03L128 196.1V351.8zM495.2 362.8c-.1875-9.101-3.824-18.05-11.44-24.24l-149.2-121.1l-11.47 10.51L297.5 207.9l65.33-59.79c6.5-5.871 16.75-5.496 22.62 1c5.1 6.496 5.5 16.62-1 22.62l-26.12 23.87l145.6 118.1c2.875 2.496 5.5 4.996 7.875 7.742V127.1c-40.98-40.96-96.52-63.98-154.5-63.98h-8.613c-7.941 0-15.64 2.97-21.5 8.329L233.7 157.9L208.3 137.9l80.85-73.92L282.5 64c-43.47 0-85.16 13.68-120.8 37.45L38.81 5.109C34.41 1.672 29.19 0 24.03 0C16.91 0 9.846 3.156 5.127 9.187C-3.06 19.62-1.248 34.72 9.19 42.89l591.1 463.1c10.5 8.203 25.56 6.328 33.69-4.078c8.187-10.44 6.375-25.53-4.062-33.7L495.2 362.8z"/>
</>],
['thin',<>
	<path d="M391.1 437.2c-4.953 6.031-11.97 9.812-19.75 10.62c-7.719 .7187-15.38-1.438-21.2-6.219l-24.3-19.53l-5.266 5.281c-9.438 11.59-22.8 18.81-37.66 20.34c-14.89 1.594-29.45-2.812-40.78-12l-92.78-83.91H104V176.3l-16-12.72V360c0 13.22-10.77 23.93-23.1 23.93L16 384V144l47.57 .1445L43.24 127.1L8 128C4.178 128 0 131 0 136v256c0 4.406 3.578 8 8 8H64c19.3 0 34.69-14.01 38.43-32.22h40.75l88.53 80.06C244.7 458.4 260.5 464 277 464c2.5 0 5.016-.125 7.547-.375c16.56-1.719 31.69-8.938 43.13-20.34l12.14 10.53c9.312 7.625 21.08 11.03 33.16 9.906c12-1.25 22.83-7.062 30.48-16.44l16.27-20.03l-12.52-9.951L391.1 437.2zM282.5 80c4.422 0 8-3.594 8-8S286.9 64 282.5 64c-25.24 0-49.74 4.328-72.97 12.22l15.04 11.96C243.2 82.88 262.6 80 282.5 80zM12.99 1.73C11.52 .5664 9.773 0 8.023 0C5.672 0 3.336 1.031 1.738 3.012c-2.75 3.469-2.172 8.5 1.281 11.25l623.1 496C628.5 511.4 630.2 512 631.1 512c2.344 0 4.688-1.031 6.266-3.016c2.75-3.469 2.172-8.5-1.281-11.25L12.99 1.73zM632 128l-116.7-.0313c-42.5-41.28-98.49-63.97-157.9-63.97h-8.613c-9.891 0-19.39 3.685-26.95 10.47l-53.2 48.72l12.74 10.12l51.21-46.97C337.1 82.25 342.9 80 348.9 80h8.609c56.23 0 109.1 21.88 148.9 61.63l2.344 2.344H536v191.7l16 12.72V144.2L624 144V384h-27.25l20.13 16H632c4.422 0 8-3.594 8-8v-256C640 131.6 636.4 128 632 128zM369 150.7c-2.969-3.219-8.016-3.5-11.3-.5l-25.65 23.43l12.66 10.06l23.77-21.68C371.8 159 372 153.1 369 150.7z"/>
</>],

]);

const HandshakeSlash: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

HandshakeSlash.displayName = "HandshakeSlash";

export default HandshakeSlash;