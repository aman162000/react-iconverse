
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M634.9 502.8c-8.125 10.41-23.19 12.28-33.69 4.078L9.189 42.89c-10.44-8.172-12.25-23.26-4.062-33.7C9.846 3.156 16.91 0 24.03 0c5.156 0 10.38 1.672 14.78 5.109l591.1 463.1C641.2 477.3 643.1 492.4 634.9 502.8z"/><path className="fa-secondary" d="M208 80C208 35.82 172.2 0 128 0C103.8 0 82.52 10.97 67.96 27.95l125.2 98.1C202.4 113.1 208 97.24 208 80zM423.8 216c0-57.44-46.54-104-103.1-104c-35.93 0-67.07 18.53-85.59 46.3l162.3 127.2C413.4 267.2 423.8 242.9 423.8 216zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM270.1 352C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2c11.62 0 21.54-6.583 25.95-15.96L325.7 352H270.1zM186.1 243.2L121.6 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C202.4 286.8 191.8 266.1 186.1 243.2zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"/>
</>],
['light',<>
	<path d="M319.9 144c39.68 0 71.96 32.3 71.96 72c0 4.799-.5176 9.477-1.416 14.02l26.88 21.22C421.3 240.2 423.8 228.4 423.8 216c0-57.44-46.54-104-103.1-104c-21.12 0-40.72 6.391-57.13 17.22l27.22 21.49C299.1 146.5 309.2 144 319.9 144zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM512 32c26.47 0 48 21.53 48 48S538.5 128 512 128s-48-21.53-48-48S485.5 32 512 32zM168.8 55.09l38.61 30.48C207.6 83.7 208 81.91 208 80C208 35.82 172.2 0 128 0C119.6 0 111.7 1.643 104.2 4.023l38.73 30.57C153.8 38.19 162.9 45.46 168.8 55.09zM25.92 3.42c-6.938-5.453-17-4.25-22.48 2.641c-5.469 6.938-4.281 17 2.641 22.48l608 480C617 510.9 620.5 512 623.1 512c4.734 0 9.422-2.094 12.58-6.078c5.469-6.938 4.281-17-2.641-22.49L25.92 3.42zM561.1 192H496c-11.16 0-22.08 2.5-32.47 7.438c-7.984 3.797-11.39 13.34-7.594 21.31s13.38 11.39 21.31 7.594C483.3 225.5 489.6 224 496 224h65.08C586.1 224 608 246.7 608 274.7V288c0 8.844 7.156 16 16 16S640 296.8 640 288V274.7C640 229.1 604.6 192 561.1 192zM135.7 192H78.92C35.41 192 0 229.1 0 274.7V288c0 8.844 7.156 16 16 16S32 296.8 32 288V274.7C32 246.7 53.05 224 78.92 224h97.26L135.7 192zM160.2 480c3.021-53.41 51.19-96 109.1-96H369.9c3.459 0 6.732 .6211 10.11 .9102L338.3 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2c14.47 0 25.94-10.3 27.72-23.42L500.4 480H160.2z"/>
</>],
['regular',<>
	<path d="M178.1 464c10.47-36.76 47.36-64 91.14-64H369.9c6.83 0 13.4 .873 19.82 2.133L325.7 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2c11.62 0 21.54-6.587 25.95-15.96L468.6 464H178.1zM396.6 285.5C413.4 267.2 423.8 242.9 423.8 216c0-57.44-46.54-104-103.1-104c-35.93 0-67.07 18.53-85.59 46.3L193.1 126.1C202.4 113.1 208 97.24 208 80C208 35.82 172.2 0 128 0C103.8 0 82.52 10.97 67.96 27.95L38.81 5.109C34.41 1.672 29.19 0 24.03 0C16.91 0 9.846 3.156 5.127 9.188C-3.061 19.62-1.248 34.72 9.189 42.89l591.1 463.1c10.5 8.203 25.56 6.328 33.69-4.078c8.188-10.44 6.375-25.53-4.062-33.7L396.6 285.5zM358.9 255.1L271.8 187.7C281.6 171.2 299.3 160 319.9 160c30.85 0 55.96 25.12 55.96 56C375.8 231.7 369.3 245.8 358.9 255.1zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM490.1 192c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192H490.1zM186.1 243.2L121.6 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C202.4 286.8 191.8 266.1 186.1 243.2z"/>
</>],
['solid',<>
	<path d="M512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM490.1 192c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192H490.1zM396.6 285.5C413.4 267.2 423.8 242.9 423.8 216c0-57.44-46.54-104-103.1-104c-35.93 0-67.07 18.53-85.59 46.3L193.1 126.1C202.4 113.1 208 97.24 208 80C208 35.82 172.2 0 128 0C103.8 0 82.52 10.97 67.96 27.95L38.81 5.109C34.41 1.672 29.19 0 24.03 0C16.91 0 9.846 3.156 5.127 9.188C-3.061 19.62-1.248 34.72 9.189 42.89l591.1 463.1c10.5 8.203 25.56 6.328 33.69-4.078c8.188-10.44 6.375-25.53-4.062-33.7L396.6 285.5zM270.1 352C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2c11.62 0 21.54-6.583 25.95-15.96L325.7 352H270.1zM186.1 243.2L121.6 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C202.4 286.8 191.8 266.1 186.1 243.2z"/>
</>],
['thin',<>
	<path d="M512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM512 16c35.29 0 64 28.71 64 64s-28.71 64-64 64s-64-28.71-64-64S476.7 16 512 16zM319.9 128c48.5 0 87.96 39.48 87.96 88c0 11.7-2.396 22.82-6.559 33.04l12.87 10.23C420.2 246.1 423.8 231.5 423.8 216c0-57.44-46.54-104-103.1-104c-23.94 0-45.72 8.424-63.29 22.03l12.78 10.15C283.7 134.1 301 128 319.9 128zM480 192c-5.969 0-11.97 .7031-17.84 2.094c-4.297 1.016-6.953 5.328-5.938 9.625C457.2 208 461.5 210.8 465.8 209.7C470.5 208.6 475.3 208 480 208h76.5C593.7 208 624 240.3 624 280C624 284.4 620.8 288 616.9 288h-166.6l20.13 16h146.5C629.6 304 640 293.2 640 280C640 231.5 602.5 192 556.5 192H480zM493.9 465.8C495 472.2 496 478.6 496 485.3C496 491.2 490.4 496 483.6 496H156.4C149.6 496 144 491.2 144 485.3C144 420.6 200.6 368 270.1 368H369.9c.3926 0 .7559 .1035 1.146 .1074L350.8 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3c0-1.938-.5195-3.738-.6074-5.654L493.9 465.8zM128 16c35.29 0 64 28.71 64 64c0 .8594-.2207 1.656-.2539 2.508l14.81 11.78C207.4 89.63 208 84.89 208 80C208 35.82 172.2 0 128 0C116.7 0 106 2.393 96.26 6.611l14.97 11.9C116.6 17.04 122.2 16 128 16zM200 296C200 291.6 196.4 288 192 288H23.09C19.19 288 16 284.4 16 280c0-39.7 30.28-72 67.5-72H160c3.768 0 7.531 .6211 11.27 1.318L149.5 192H83.5C37.45 192 0 231.5 0 280C0 293.2 10.36 304 23.09 304H192C196.4 304 200 300.4 200 296zM12.99 1.734c-1.463-1.164-3.217-1.73-4.963-1.73c-2.352 0-4.689 1.027-6.287 3.012c-2.75 3.469-2.172 8.5 1.281 11.25l623.1 496C628.5 511.4 630.2 512 631.1 512c2.344 0 4.688-1.031 6.266-3.016c2.75-3.469 2.172-8.5-1.281-11.25L12.99 1.734z"/>
</>],

]);

const UsersSlash: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

UsersSlash.displayName = "UsersSlash";

export default UsersSlash;
