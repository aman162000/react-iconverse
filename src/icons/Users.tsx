
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352z"/><path className="fa-secondary" d="M128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192zM185.5 200.1C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5c-20.38-23.79-33.16-54.29-33.16-88C183.9 210.6 184.9 205.4 185.5 200.1z"/>
</>],
['light',<>
	<path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM319.9 144c39.68 0 71.96 32.3 71.96 72S359.5 288 319.9 288S247.9 255.7 247.9 216S280.2 144 319.9 144zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM160.2 480c3.021-53.41 51.19-96 109.1-96H369.9c58.78 0 106.9 42.59 109.1 96H160.2zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM512 32c26.47 0 48 21.53 48 48S538.5 128 512 128s-48-21.53-48-48S485.5 32 512 32zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM128 32c26.47 0 48 21.53 48 48S154.5 128 128 128S80 106.5 80 80S101.5 32 128 32zM561.1 192H496c-11.16 0-22.08 2.5-32.47 7.438c-7.984 3.797-11.39 13.34-7.594 21.31s13.38 11.39 21.31 7.594C483.3 225.5 489.6 224 496 224h65.08C586.1 224 608 246.7 608 274.7V288c0 8.844 7.156 16 16 16S640 296.8 640 288V274.7C640 229.1 604.6 192 561.1 192zM162.8 228.3c7.938 3.797 17.53 .375 21.31-7.594c3.797-7.969 .3906-17.52-7.594-21.31C166.1 194.5 155.2 192 144 192H78.92C35.41 192 0 229.1 0 274.7V288c0 8.844 7.156 16 16 16S32 296.8 32 288V274.7C32 246.7 53.05 224 78.92 224H144C150.4 224 156.7 225.5 162.8 228.3z"/>
</>],
['regular',<>
	<path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM319.9 160c30.85 0 55.96 25.12 55.96 56S350.7 272 319.9 272S263.9 246.9 263.9 216S289 160 319.9 160zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM178.1 464c10.47-36.76 47.36-64 91.14-64H369.9c43.77 0 80.66 27.24 91.14 64H178.1zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160z"/>
</>],
['solid',<>
	<path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 33.71-12.78 64.21-33.16 88h199.7C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192z"/>
</>],
['thin',<>
	<path d="M556.5 192H480c-5.969 0-11.97 .7031-17.84 2.094c-4.297 1.016-6.953 5.328-5.938 9.625C457.2 208 461.5 210.8 465.8 209.7C470.5 208.6 475.3 208 480 208h76.5C593.7 208 624 240.3 624 280C624 284.4 620.8 288 616.9 288H448c-4.422 0-8 3.578-8 8S443.6 304 448 304h168.9C629.6 304 640 293.2 640 280C640 231.5 602.5 192 556.5 192zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM512 16c35.29 0 64 28.71 64 64s-28.71 64-64 64s-64-28.71-64-64S476.7 16 512 16zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM128 16c35.29 0 64 28.71 64 64s-28.71 64-64 64s-64-28.71-64-64S92.71 16 128 16zM200 296C200 291.6 196.4 288 192 288H23.09C19.19 288 16 284.4 16 280c0-39.7 30.28-72 67.5-72H160c4.734 0 9.5 .5625 14.16 1.656C178.5 210.8 182.8 208 183.8 203.7c1.016-4.297-1.641-8.609-5.938-9.625C171.1 192.7 165.1 192 160 192H83.5C37.45 192 0 231.5 0 280C0 293.2 10.36 304 23.09 304H192C196.4 304 200 300.4 200 296zM319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM319.9 128c48.5 0 87.96 39.48 87.96 88S368.4 304 319.9 304S231.9 264.5 231.9 216S271.4 128 319.9 128zM369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h327.2C499.3 512 512 500.1 512 485.3C512 411.7 448.4 352 369.9 352zM483.6 496H156.4C149.6 496 144 491.2 144 485.3C144 420.6 200.6 368 270.1 368H369.9c69.54 0 126.1 52.63 126.1 117.3C496 491.2 490.4 496 483.6 496z"/>
</>],

]);

const Users: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Users.displayName = "Users";

export default Users;
