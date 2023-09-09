
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M200 125.3L240.3 85c4.623-4.75 4.623-12.25 0-17l-8.5-8.5c-4.75-4.75-12.38-4.75-17 0L200 74.25V44c0-6.625-5.375-12-12-12h-23.1c-6.625 0-12 5.375-12 12v30.25L137.3 59.5c-4.75-4.75-12.38-4.75-16.1 0L111.8 68c-4.75 4.75-4.75 12.25 0 17L151.9 125.3v56.88L101.6 153l-15-55.75C84.89 90.75 78.27 87 71.77 88.75L60.02 91.88c-6.5 1.75-10.25 8.375-8.625 14.88l5.5 20.5L30.27 111.9C24.52 108.5 17.14 110.5 13.77 116.3l-12.12 21C-1.73 143.1 .2695 150.5 6.018 153.9l26.62 15.38l-20.38 5.5c-6.5 1.625-10.37 8.375-8.625 14.88l3.125 11.62c1.625 6.5 8.375 10.38 14.88 8.625L77.27 195L127.5 224L77.27 253L21.64 238c-6.5-1.75-13.12 2.125-14.88 8.625L3.643 258.3c-1.748 6.5 2.125 13.12 8.625 15l20.38 5.5l-26.5 15.38C.2695 297.5-1.73 304.9 1.77 310.8l11.1 21c3.5 5.75 10.88 7.75 16.62 4.375l26.62-15.38l-5.5 20.5c-1.75 6.5 2.125 13 8.625 14.88l11.62 3.125c6.5 1.625 13.12-2.125 15-8.625L101.6 295l50.37-29.12v56.88L111.8 363c-4.625 4.75-4.625 12.25 0 17l8.5 8.5c4.748 4.75 12.37 4.75 16.1 0l14.88-14.75V404c0 6.625 5.375 12 12 12h23.1c6.625 0 12-5.375 12-12v-30.25L214.9 388.5c4.75 4.75 12.38 4.75 17 0L240.4 380c4.748-4.75 4.748-12.25 0-17l-40.38-40.25V265.9l68.26 39.55c5.125-13 11.49-25.7 19.74-37.57l-.0036-7.058L224.6 224l63.37-36.73l.0078-56.08L200 182.1V125.3zM448 322.9V304c0-8.75-7.251-16-16-16c-8.748 0-15.1 7.25-15.1 16v18.88c-18.62 6.625-32 24.25-32 45.13c0 26.5 21.5 48 47.1 48c26.5 0 48-21.5 48-48C480 347.1 466.6 329.5 448 322.9z"/><path className="fa-secondary" d="M544 278.5V112c0-61.88-50.13-112-111.1-112s-111.1 50.13-111.1 112v166.5c-19.75 24.62-31.1 55.5-31.1 89.5c0 79.5 64.5 143.1 143.1 143.1S576 447.5 576 368C576 334 563.8 303.1 544 278.5zM432 448c-44.12 0-79.99-35.87-79.99-79.1c0-25.5 12.25-48.88 31.1-63.75v-192.2c0-26.5 21.5-48 47.1-48s47.1 21.5 47.1 48v192.2c19.75 14.75 31.1 38.25 31.1 63.75C512 412.1 476.1 448 432 448z"/>
</>],
['light',<>
	<path d="M317.8 200.6c-4.508-7.625-14.26-10.09-21.89-5.656l-55.78 33.01V134.6l43.25-43.31c6.24-6.25 6.24-16.38 0-22.62s-16.35-6.25-22.59 0L240.1 89.38V48c0-8.844-7.146-16-15.98-16S208.2 39.16 208.2 48v41.38L187.5 68.69c-6.242-6.25-16.35-6.25-22.59 0c-6.242 6.25-6.242 16.38 0 22.62l43.25 43.31v93.33L126.7 179.8L111.3 122.3c-2.293-8.5-10.98-13.41-19.56-11.31C83.25 113.3 78.18 122 80.47 130.6L87.41 156.5l-30.89-18.28c-7.615-4.438-17.38-1.969-21.89 5.656C30.16 151.5 32.67 161.3 40.27 165.8l34.05 20.15L43.84 194.1C35.32 196.4 30.27 205.2 32.55 213.7c1.902 7.156 8.361 11.88 15.41 11.88c1.373 0 2.762-.1875 4.15-.5313l60.73-16.3L192.7 256L112.8 303.3L52.11 286.1C43.59 284.9 34.84 289.8 32.55 298.3c-2.279 8.531 2.777 17.28 11.29 19.59l30.47 8.162l-34.05 20.15c-7.598 4.5-10.11 14.31-5.633 21.91C37.63 373.2 42.95 376 48.41 376c2.762 0 5.553-.7187 8.113-2.219l30.89-18.28l-6.939 25.9c-2.293 8.562 2.777 17.31 11.3 19.62c1.389 .3438 2.777 .5313 4.15 .5313c7.051 0 13.5-4.719 15.41-11.84l15.38-57.48l81.44-48.2v93.33l-43.25 43.31c-6.242 6.25-6.242 16.38 0 22.62c6.24 6.25 16.35 6.25 22.59 0l20.66-20.69V464c0 8.844 7.146 16 15.98 16s15.98-7.156 15.98-16v-41.38l20.66 20.69C263.9 446.4 267.1 448 272.1 448s8.176-1.562 11.29-4.688c6.24-6.25 6.24-16.38 0-22.62l-43.25-43.31V284.1l55.78 33.01c2.559 1.5 5.352 2.219 8.113 2.219c5.459 0 10.78-2.812 13.78-7.875C322.3 303.8 319.7 294 312.1 289.5L255.5 256l56.61-33.5C319.7 218 322.3 208.2 317.8 200.6zM448 354.9V336c0-8.75-7.25-16-16-16S416 327.3 416 336v18.88C397.4 361.5 384 379.1 384 400c0 26.5 21.5 48 48 48S480 426.5 480 400C480 379.1 466.6 361.5 448 354.9zM512 321.9V80c0-44.13-35.87-79.1-79.1-79.1S352 35.88 352 80v241.9C331.8 342.8 320 370.8 320 400c0 61.75 50.25 112 112 112S544 461.8 544 400C544 370.8 532.3 342.6 512 321.9zM432 480c-44.13 0-80-35.88-80-80c0-25.5 12.25-48.88 32-63.75V80C384 53.5 405.5 32 432 32S480 53.5 480 80v256.3C499.8 351 512 374.5 512 400C512 444.1 476.1 480 432 480z"/>
</>],
['regular',<>
	<path d="M268.5 304.9c5.098-12.9 11.32-25.43 19.53-37.09l-.0036-7.058L223.1 223.1l64.87-36.73L288 131.1L199.1 182.4V124.3l30.14-30.13c7.812-7.812 7.812-20.5 0-28.31s-20.47-7.812-28.28 0L199.1 67.71V56c0-13.25-10.75-24-24-24s-24 10.75-24 24v11.71L149.3 65.84c-7.812-7.812-20.47-7.812-28.28 0s-7.812 20.5 0 28.31l30.14 30.13v58.15L100.8 153.4L89.75 112.2C86.89 101.5 75.97 95.19 65.27 98.03c-10.67 2.844-17 13.81-14.14 24.5l.6855 2.559L41.64 119.2C30.2 112.6 15.47 116.5 8.859 128C2.234 139.5 6.156 154.2 17.64 160.8l10.18 5.875L25.25 167.3c-10.66 2.844-16.98 13.81-14.12 24.5c2.391 8.938 10.47 14.81 19.3 14.81c1.719 0 3.469-.2187 5.203-.6875L76.78 194.9L127.1 223.1L78.51 252.1L37.36 241C26.8 238.2 15.72 244.5 12.86 255.2C10 265.8 16.33 276.8 26.98 279.7l2.566 .6875L19.38 286.2C7.891 292.8 3.969 307.5 10.59 319c4.438 7.688 12.52 12 20.8 12c4.078 0 8.203-1.031 11.98-3.219l10.17-5.871l-.6855 2.559C50 335.2 56.33 346.1 67 348.1c1.734 .4687 3.469 .6875 5.188 .6875c8.828 0 16.91-5.875 19.3-14.81l11.04-41.21l48.62-28.07v50.15L121 345.8c-7.812 7.812-7.812 20.5 0 28.31s20.47 7.812 28.28 0l1.859-1.861V392c0 13.25 10.75 24 24 24s24-10.75 24-24v-19.71L201 374.2C204.9 378.1 210 380 215.1 380s10.23-1.938 14.14-5.844c7.812-7.812 7.812-20.5 0-28.31L199.1 315.7V265.6L268.5 304.9zM544 278.5V112c0-61.87-50.12-112-111.1-112s-111.1 50.13-111.1 112v166.5c-19.75 24.62-31.1 55.5-31.1 89.5c0 79.5 64.5 143.1 143.1 143.1S576 447.5 576 368C576 334 563.8 303.1 544 278.5zM432 464c-52.88 0-96-43.13-96-96c0-27 11.75-47.25 21.5-59.5L368 295.4V112c0-35.25 28.75-64 64-64s64 28.75 64 64v183.3l10.5 13.12C516.3 320.8 528 341 528 368C528 420.9 484.9 464 432 464zM448 322.9V304c0-8.75-7.251-16-16-16s-15.1 7.25-15.1 16v18.88c-18.62 6.625-32 24.25-32 45.13c0 26.5 21.5 48 47.1 48s48-21.5 48-48C480 347.1 466.6 329.5 448 322.9z"/>
</>],
['solid',<>
	<path d="M544 278.5V112c0-61.87-50.13-112-111.1-112s-111.1 50.13-111.1 112v166.5c-19.75 24.62-31.1 55.5-31.1 89.5c0 79.5 64.5 143.1 143.1 143.1C511.5 512 576 447.5 576 368C576 334 563.7 303.1 544 278.5zM432 448c-44.12 0-79.99-35.87-79.99-79.1c0-25.5 12.25-48.88 31.1-63.75v-192.2c0-26.5 21.5-48 47.1-48c26.5 0 47.1 21.5 47.1 48v192.2c19.75 14.75 31.1 38.25 31.1 63.75C512 412.1 476.1 448 432 448zM448 322.9V304c0-8.75-7.251-16-16-16c-8.748 0-15.1 7.25-15.1 16v18.88c-18.62 6.625-32 24.25-32 45.13c0 26.5 21.5 48 47.1 48c26.5 0 48-21.5 48-48C480 347.1 466.6 329.5 448 322.9zM268.3 305.4C273.4 292.3 279.7 279.7 288 267.9l.0072-6.397L223.1 223.1l64.88-37.46l-.0029-55.35L199.1 182.4V124.3l30.14-30.13c7.812-7.812 7.812-20.5 0-28.31s-20.47-7.812-28.28 0L199.1 67.71V56c0-13.25-10.75-24-24-24s-24 10.75-24 24v11.71L149.3 65.84c-7.812-7.812-20.47-7.812-28.28 0s-7.812 20.5 0 28.31l30.14 30.13v58.15L100.8 153.4L89.75 112.2C86.89 101.5 75.97 95.19 65.27 98.03c-10.67 2.844-17 13.81-14.14 24.5l.6855 2.559L41.64 119.2C30.2 112.6 15.47 116.5 8.859 128C2.234 139.5 6.156 154.2 17.64 160.8l10.18 5.875L25.25 167.3c-10.66 2.844-16.98 13.81-14.12 24.5c2.391 8.938 10.47 14.81 19.3 14.81c1.719 0 3.469-.2187 5.203-.6875L76.78 194.9L127.1 223.1L78.51 252.1L37.36 241C26.8 238.2 15.72 244.5 12.86 255.2C10 265.8 16.33 276.8 26.98 279.7l2.566 .6875L19.38 286.2C7.891 292.8 3.969 307.5 10.59 319c4.438 7.688 12.52 12 20.8 12c4.078 0 8.203-1.031 11.98-3.219l10.17-5.871l-.6855 2.559C50 335.2 56.33 346.1 67 348.1c1.734 .4687 3.469 .6875 5.188 .6875c8.828 0 16.91-5.875 19.3-14.81l11.04-41.21l48.62-28.07v50.15L121 345.8c-7.812 7.812-7.812 20.5 0 28.31s20.47 7.812 28.28 0l1.859-1.861V392c0 13.25 10.75 24 24 24s24-10.75 24-24v-19.71L201 374.2C204.9 378.1 210 380 215.1 380s10.23-1.938 14.14-5.844c7.812-7.812 7.812-20.5 0-28.31L199.1 315.7V265.6L268.3 305.4z"/>
</>],
['thin',<>
	<path d="M440 352.8V296c0-4.422-3.592-8-7.998-8S424 291.6 424 296v56.81C401.3 356.6 384 376.2 384 400c0 26.51 21.49 48 48 48S480 426.5 480 400C480 376.2 462.7 356.6 440 352.8zM432 432c-17.64 0-32-14.36-32-32s14.36-32 32-32s32 14.36 32 32S449.6 432 432 432zM512 322.5V80c0-44.18-35.81-79.1-79.1-79.1S352 35.82 352 80v242.5C332.4 342.6 320 369.7 320 400c0 61.86 50.15 112 112 112S544 461.9 544 400C544 369.7 531.6 342.6 512 322.5zM432 496c-52.94 0-96-43.07-96-96c0-24.57 9.756-48.14 27.47-66.35L368 328.1V80c0-35.29 28.71-64 64-64s64 28.71 64 64v248.1l4.529 4.658C518.2 351.9 528 375.4 528 400C528 452.9 484.9 496 432 496zM244 175.5L183.1 210.1v-94.83l45.66-45.66c3.125-3.125 3.125-8.188 0-11.31s-8.188-3.125-11.31 0L183.1 92.69V40c0-4.406-3.594-8-8-8s-8 3.594-8 8v52.69L133.7 58.34c-3.125-3.125-8.188-3.125-11.31 0s-3.125 8.188 0 11.31L167.1 115.3v94.83L85.87 162.7L69.16 100.4C68.02 96.09 63.63 93.56 59.36 94.71C55.1 95.85 52.56 100.2 53.71 104.5L66.28 151.4L20.65 125.1C16.83 122.9 11.92 124.2 9.721 128s-.8867 8.725 2.928 10.93L58.28 165.3L11.36 177.8C7.096 178.1 4.564 183.4 5.707 187.6c1.145 4.27 5.529 6.801 9.797 5.656l62.37-16.71L160 224L77.87 271.4L15.5 254.7c-4.268-1.145-8.652 1.387-9.797 5.656c-1.143 4.27 1.389 8.652 5.656 9.797L58.28 282.7L12.65 309.1C8.834 311.3 7.518 316.2 9.721 320c2.203 3.816 7.113 5.133 10.93 2.93L66.28 296.6L53.71 343.5c-1.143 4.268 1.389 8.652 5.656 9.797c4.27 1.143 8.654-1.389 9.797-5.656l16.71-62.37L167.1 237.9v94.83l-45.66 45.66c-3.125 3.125-3.125 8.188 0 11.31s8.188 3.125 11.31 0l34.34-34.34V408c0 4.406 3.594 8 8 8s8-3.594 8-8v-52.69l34.34 34.34C219.9 391.2 221.9 392 223.1 392s4.094-.7813 5.656-2.344c3.125-3.125 3.125-8.188 0-11.31L183.1 332.7v-94.83L244 272.5C249.3 275.6 256 271.7 256 265.6c0-2.859-1.523-5.5-4-6.93L192 224l60-34.64C254.5 187.9 256 185.3 256 182.4C256 176.3 249.3 172.4 244 175.5z"/>
</>],

]);

const TemperatureSnow: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

TemperatureSnow.displayName = "TemperatureSnow";

export default TemperatureSnow;
