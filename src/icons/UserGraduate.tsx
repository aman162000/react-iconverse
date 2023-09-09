
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M359.2 312.8l-103.2 103.2l-103.2-103.2c-69.93 22.3-120.8 87.2-120.8 164.5C32 496.5 47.53 512 66.67 512h378.7C464.5 512 480 496.5 480 477.3C480 400 429.1 335.1 359.2 312.8zM45.63 79.75L52 81.25v58.5C45 143.9 40 151.3 40 160c0 8.375 4.625 15.38 11.12 19.75L35.5 242C33.75 248.9 37.63 256 43.13 256h41.75c5.5 0 9.375-7.125 7.625-13.1L76.88 179.8C83.38 175.4 88 168.4 88 160c0-8.75-5-16.12-12-20.25V87.13L128 99.63l.001 60.37h255.1L384 99.62l82.25-19.87c18.25-4.375 18.25-27 0-31.5l-190.4-46c-13-3-26.62-3-39.63 0l-190.6 46C27.5 52.63 27.5 75.38 45.63 79.75z"/><path className="fa-secondary" d="M384 159.1c0 70.75-57.25 128-127.1 128S128 230.7 128 159.1H384z"/>
</>],
['light',<>
	<path d="M359.2 312.8l-103.2 103.2l-103.2-103.2c-69.93 22.31-120.8 87.19-120.8 164.5C32 496.5 47.53 512 66.67 512h378.7C464.5 512 480 496.5 480 477.3C480 400 429.1 335.1 359.2 312.8zM445.3 479.1H66.66c-1.469 0-2.664-1.197-2.664-2.668c0-55.04 31.85-104 80.95-127.1L233.4 438.6c6.248 6.248 14.44 9.373 22.63 9.373c8.189 0 16.38-3.125 22.63-9.373l88.43-88.43c49.09 23.08 80.95 72.09 80.95 127.1C448 478.8 446.8 479.1 445.3 479.1zM44.41 79.59L64 84.11v89.31L32.83 266.9C31.19 271.8 32.02 277.2 35.02 281.4c3.016 4.172 7.844 6.641 12.98 6.641H112c5.141 0 9.969-2.469 12.98-6.641c2.1-4.172 3.828-9.547 2.187-14.42L96 173.4V91.49L128 98.88l.0016 29.12c0 5.734 3.076 11.05 8.061 13.89l64.37 36.78c17.14 9.797 36.34 14.69 55.56 14.69c19.22 0 38.42-4.891 55.56-14.69l64.37-36.78c4.984-2.844 8.063-8.156 8.063-13.89L384 98.88l83.59-19.29c7.266-1.672 12.39-8.141 12.39-15.59s-5.126-13.92-12.39-15.59l-207.1-48c-2.344-.5313-4.844-.5313-7.187 0L44.41 48.4C37.14 50.07 31.99 56.56 31.99 64.01S37.14 77.92 44.41 79.59zM352 118.7l-56.31 32.17c-24.47 13.97-54.91 13.97-79.37 0L160 118.7V106.3l92.41 21.32c1.172 .2656 2.33 .4063 3.533 .4063s2.483-.1406 3.654-.4063l92.41-21.32V118.7zM256 32.41l136.8 31.58l-136.8 31.58L119.2 63.99L256 32.41zM80 226.6l9.797 29.41H70.2L80 226.6zM368 159.1c-8.844 0-16 7.157-16 16c0 52.94-43.06 96-95.1 96S160 228.9 160 175.1c0-8.844-7.155-16-15.1-16S128 167.2 128 175.1c0 70.58 57.42 128 127.1 128s127.1-57.42 127.1-128C384 167.2 376.8 159.1 368 159.1z"/>
</>],
['regular',<>
	<path d="M480 464c2.742-87.55-59.6-160.1-142.2-176L256 397.1L174.2 288c-82.6 15-144.6 88.45-141.9 176c0 26.51 21.18 48 47.69 48h352C458.5 512 480 490.5 480 464zM80.34 464l-.0469-1.504c-1.656-52.91 28.88-99.34 75.41-119.2L246.2 464H80.34zM431.7 464h-165.9l90.51-120.7c46.53 19.83 77.06 66.26 75.41 119.2L431.7 464zM45.63 79.75L52 81.25v58.5C45 143.9 40 151.3 40 160c0 8.375 4.625 15.38 11.12 19.75L35.5 242C33.75 248.9 37.63 256 43.13 256h41.75c5.5 0 9.375-7.125 7.625-13.1L76.88 179.8C83.38 175.4 88 168.4 88 160c0-8.75-5-16.12-12-20.25V87.13L128 99.63V144c0 70.75 57.25 127.1 128 127.1S384 214.8 384 144V99.62l82.25-19.87c18.25-4.375 18.25-27 0-31.5l-190.4-46C269.4 .75 262.7 0 256.1 0S242.8 .75 236.3 2.25l-190.6 46C27.5 52.63 27.5 75.38 45.63 79.75zM176 111.2l60.08 14.52c13 3 26.62 3 39.63 0L336 111.2V144C336 188.1 300.1 224 256 224S176 188.1 176 144V111.2z"/>
</>],
['solid',<>
	<path d="M45.63 79.75L52 81.25v58.5C45 143.9 40 151.3 40 160c0 8.375 4.625 15.38 11.12 19.75L35.5 242C33.75 248.9 37.63 256 43.13 256h41.75c5.5 0 9.375-7.125 7.625-13.1L76.88 179.8C83.38 175.4 88 168.4 88 160c0-8.75-5-16.12-12-20.25V87.13L128 99.63l.001 60.37c0 70.75 57.25 128 128 128s127.1-57.25 127.1-128L384 99.62l82.25-19.87c18.25-4.375 18.25-27 0-31.5l-190.4-46c-13-3-26.62-3-39.63 0l-190.6 46C27.5 52.63 27.5 75.38 45.63 79.75zM359.2 312.8l-103.2 103.2l-103.2-103.2c-69.93 22.3-120.8 87.2-120.8 164.5C32 496.5 47.53 512 66.67 512h378.7C464.5 512 480 496.5 480 477.3C480 400 429.1 335.1 359.2 312.8z"/>
</>],
['thin',<>
	<path d="M376 151.1c-4.406 0-8.001 3.594-8.001 8c0 61.75-50.25 112-111.1 112c-61.75 0-111.1-50.25-111.1-112c0-4.406-3.592-8-7.998-8s-8.003 3.598-8.003 8.004c0 70.6 57.41 128 128 128c70.59 0 127.1-57.4 127.1-128C384 155.6 380.4 151.1 376 151.1zM381.3 323.2c-4.527-2.141-9.379-3.188-14.19-3.188c-8.385 0-16.64 3.186-22.82 9.316l-88.26 87.51l-88.26-87.51C161.6 323.2 153.3 319.1 144.9 319.1c-4.809 0-9.66 1.049-14.19 3.189c-58.65 27.74-99.2 86.81-98.72 155.7C32.14 497.3 48.05 512 66.67 512h378.7c18.62 0 34.53-14.7 34.66-33.15C480.5 409.1 439.9 350.9 381.3 323.2zM248 496h-181.3c-10.05 0-18.59-7.906-18.66-17.27c-.4219-59.77 34.73-115.2 89.56-141.1c2.318-1.098 4.789-1.654 7.344-1.654c4.412 .002 8.518 1.664 11.56 4.68l91.53 90.75V496zM445.3 496h-181.3v-64.58l91.53-90.75c3.043-3.018 7.148-4.68 11.56-4.68c2.555 0 5.025 .5547 7.346 1.652c54.83 25.93 89.98 81.31 89.56 141.1C463.9 488.1 455.4 496 445.3 496zM102.6 252.6c1.5-2.156 1.844-4.875 .9687-7.312L76.18 170c2.283-2.766 3.826-6.176 3.826-10.04c0-5.859-3.303-10.76-7.998-13.55V90.09l55.1 12.28L128 127.1c0 4.406 3.595 8 8.002 8s8-3.594 8-8v-22.11l91.16 19.99C241.9 127.3 248.1 127.1 255.9 127.1c7 0 13.94-.7187 20.78-2.156l91.28-19.98v22.14c0 4.406 3.594 8 8 8s7.999-3.594 7.999-8l.0009-25.64l76.59-16.77c11.59-2.531 19.39-11.22 19.39-21.59c0-10.31-7.827-18.97-19.45-21.59l-183.7-40.28C263.2-.6953 248.8-.7266 235.2 2.148L51.41 42.4C39.79 44.93 31.99 53.6 31.99 64.01C32.05 74.32 39.85 82.99 51.44 85.59l4.562 1v59.86c-4.697 2.787-8 7.688-8 13.55c0 3.865 1.549 7.275 3.83 10.04L24.47 245.3C23.6 247.7 23.94 250.4 25.44 252.6C26.94 254.7 29.38 255.1 32.01 255.1h63.1C98.63 255.1 101.1 254.7 102.6 252.6zM54.91 69.96C50.66 69.02 47.97 66.71 47.97 63.99c0-2.75 2.625-5.062 6.844-5.969l183.7-40.22c5.75-1.219 11.62-1.812 17.53-1.812c5.844 0 11.69 .5938 17.34 1.781l183.6 40.25c4.188 .9375 6.906 3.281 6.906 5.969c0 2.719-2.656 5.062-6.812 5.969l-183.8 40.22c-11.5 2.438-23.56 2.406-34.88 .0313L54.91 69.96zM43.41 239.1l20.59-56.6l20.59 56.6H43.41z"/>
</>],

]);

const UserGraduate: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

UserGraduate.displayName = "UserGraduate";

export default UserGraduate;
