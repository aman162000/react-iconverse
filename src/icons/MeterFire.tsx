
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M568.9 252.8c-11.5 10.53-22.2 21.75-32.1 33.76C520 263.1 500.9 242.1 480 224c-56.2 51.28-96 118.1-96 158.4C384 454 441.3 512 512 512s128-57.98 128-129.6C640 352.4 610.3 290.6 568.9 252.8zM560 447.3c-13.5 9.352-29.7 14.27-46.3 14.27c-43.3 0-78.5-28.15-78.5-73.91c0-22.84 14.6-42.91 43.7-77.27c4.1 4.723 59.3 74.02 59.3 74.02l35.2-39.47c2.5 4.035 4.699 7.969 6.699 11.81C596.5 387.6 589.6 426.1 560 447.3z"/><path className="fa-secondary" d="M458.4 200.4l21.52-19.66l21.56 19.59c1.947 1.766 3.596 3.801 5.512 5.598C483.7 88.52 380.2 0 256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256c46.48 0 89.94-12.58 127.5-34.23C363.1 450.1 352 418.2 352 382.4C352 332.4 395.8 257.5 458.4 200.4zM192 208C192 216.8 184.8 224 176 224h-32C135.2 224 128 216.8 128 208v-64C128 135.2 135.2 128 144 128h32C184.8 128 192 135.2 192 144V208zM288 208C288 216.8 280.8 224 272 224h-32C231.2 224 224 216.8 224 208v-64C224 135.2 231.2 128 240 128h32C280.8 128 288 135.2 288 144V208zM320 208v-64C320 135.2 327.2 128 336 128h32C376.8 128 384 135.2 384 144v64C384 216.8 376.8 224 368 224h-32C327.2 224 320 216.8 320 208zM580.1 356.8c-2-3.844-4.199-7.777-6.699-11.81l-35.2 39.47c0 0-55.2-69.29-59.3-74.02c-29.1 34.35-43.7 54.43-43.7 77.27c0 45.77 35.2 73.91 78.5 73.91c16.6 0 32.8-4.918 46.3-14.27C589.6 426.1 596.5 387.6 580.1 356.8z"/>
</>],
['light',<>
	<path d="M144 144v64C144 216.8 151.2 224 160 224s16-7.156 16-16v-64C176 135.2 168.8 128 160 128S144 135.2 144 144zM240 144v64C240 216.8 247.2 224 256 224s16-7.156 16-16v-64C272 135.2 264.8 128 256 128S240 135.2 240 144zM336 144v64c0 4.656 2.055 8.762 5.227 11.68C348.1 208.9 357.8 197.7 368 186.1V144C368 135.2 360.8 128 352 128S336 135.2 336 144zM544 186.5c-12.75 11.5-21.88 19.5-35.38 34c-26.38-32.25-51-53.88-64.63-66C325.6 261.5 320 336 320 352c0 88.25 71.75 160 160 160s160-71.75 160-160C640 275.1 551.8 193.4 544 186.5zM480 480c-70.63-.125-127.9-57.38-128-128c0-38.25 38.88-102.8 92-154.1c18.5 17.62 35.63 36.75 51 57.13l12.12 16.25l13-15.5c7.5-9 15.5-17.5 23.75-25.62C583.4 271 608 327.8 608 352C607.9 422.6 550.6 479.9 480 480zM524.1 289l-26 28.75C481 296.5 486.8 303.5 458.3 271.4c-40.88 47.63-59.63 66.5-59.63 97.63c0 45 35.5 79 82.5 79c17 0 33.63-5 47.75-14.62C560.8 411.8 570.8 369 552 334.3C548.8 328.3 548.6 328.4 524.1 289zM481.1 416c-27.88 0-50.5-17.88-50.5-47c0-14.5 9.375-27.25 28.12-49c2.625 3 38.13 47 38.13 47l22.62-25.12C546.3 385 513.1 416 481.1 416zM315.7 471.9C296.4 477.3 276.3 480 256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224c63.63 0 124.5 27.22 166.1 74.66c5.859 6.594 16 7.125 22.59 1.281c6.578-5.906 7.141-16.03 1.25-22.59C398.3 31.09 328.7 0 256 0C114.8 0 0 114.8 0 256s114.8 256 256 256c23.17 0 46.14-3.094 68.27-9.188c8.516-2.375 13.52-11.19 11.16-19.69C333.1 474.6 324.3 469.7 315.7 471.9z"/>
</>],
['regular',<>
	<path d="M328 128c-8.836 0-16 7.164-16 16v64c0 8.836 7.164 16 16 16h16c8.836 0 16-7.164 16-16v-64c0-8.836-7.164-16-16-16H328zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48c94.71 0 174.7 63.7 199.7 150.5c.8691-.8164 1.646-1.707 2.523-2.52l21.7-20.12l21.73 20.06c1.402 1.293 2.586 2.785 3.971 4.094C480.1 85.57 378.1 0 256 0C114.6 0 0 114.6 0 256s114.6 256 256 256c46.68 0 90.3-12.69 127.1-34.52c-9.41-12.93-16.8-27.26-22.18-42.72C330.8 453.2 294.7 464 256 464zM168 128c-8.836 0-16 7.164-16 16v64c0 8.836 7.164 16 16 16h16c8.836 0 16-7.164 16-16v-64c0-8.836-7.164-16-16-16H168zM248 128c-8.836 0-16 7.164-16 16v64c0 8.836 7.164 16 16 16h16c8.836 0 16-7.164 16-16v-64c0-8.836-7.164-16-16-16H248zM568.9 248.7c-11.5 10.7-22.2 22.1-32.1 34.3C520 260 500.9 238.7 480 219.4c-56.2 52.1-96 120-96 160.9C383.1 453.1 441.3 512 512 512c70.7 0 128-58.9 128-131.7C640 349.9 610.3 287.1 568.9 248.7zM560 446.3c-13.5 9.5-29.7 14.5-46.3 14.5c-43.3 0-78.5-28.6-78.5-75.1c0-23.2 14.6-43.6 43.7-78.5C483 312 538.2 382.4 538.2 382.4l35.2-40.1c2.5 4.102 4.699 8.102 6.699 12C596.5 385.6 589.6 425.6 560 446.3z"/>
</>],
['solid',<>
	<path d="M458.4 200.4l21.52-19.66l21.56 19.59c1.947 1.766 3.596 3.801 5.512 5.598C483.7 88.52 380.2 0 256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256c46.48 0 89.94-12.58 127.5-34.23C363.1 450.1 352 418.2 352 382.4C352 332.4 395.8 257.5 458.4 200.4zM192 208C192 216.8 184.8 224 176 224h-32C135.2 224 128 216.8 128 208v-64C128 135.2 135.2 128 144 128h32C184.8 128 192 135.2 192 144V208zM288 208C288 216.8 280.8 224 272 224h-32C231.2 224 224 216.8 224 208v-64C224 135.2 231.2 128 240 128h32C280.8 128 288 135.2 288 144V208zM320 208v-64C320 135.2 327.2 128 336 128h32C376.8 128 384 135.2 384 144v64C384 216.8 376.8 224 368 224h-32C327.2 224 320 216.8 320 208zM568.9 252.8c-11.5 10.53-22.2 21.75-32.1 33.76C520 263.1 500.9 242.1 480 224c-56.2 51.28-96 118.1-96 158.4C384 454 441.3 512 512 512s128-57.98 128-129.6C640 352.4 610.3 290.6 568.9 252.8zM560 447.3c-13.5 9.352-29.7 14.27-46.3 14.27c-43.3 0-78.5-28.15-78.5-73.91c0-22.84 14.6-42.91 43.7-77.27c4.1 4.723 59.3 74.02 59.3 74.02l35.2-39.47c2.5 4.035 4.699 7.969 6.699 11.81C596.5 387.6 589.6 426.1 560 447.3z"/>
</>],
['thin',<>
	<path d="M381.2 141.3C377.2 133.5 369.3 128 360 128h-16C330.7 128 320 138.7 320 152v48c0 4.668 1.682 8.773 3.988 12.46C327.9 206.6 331.8 200.7 336 194.1V152c0-4.414 3.59-8 8-8h16c4.412 0 8 3.586 8 8v3.863C372.4 150.9 376.7 145.1 381.2 141.3zM248 128C234.7 128 224 138.7 224 152v48C224 213.3 234.7 224 248 224h16C277.3 224 288 213.3 288 200v-48C288 138.7 277.3 128 264 128H248zM272 152v48c0 4.41-3.588 8-8 8h-16C243.6 208 240 204.4 240 200v-48c0-4.414 3.59-8 8-8h16C268.4 144 272 147.6 272 152zM152 128C138.7 128 128 138.7 128 152v48C128 213.3 138.7 224 152 224h16C181.3 224 192 213.3 192 200v-48C192 138.7 181.3 128 168 128H152zM176 152v48c0 4.41-3.588 8-8 8h-16C147.6 208 144 204.4 144 200v-48c0-4.414 3.59-8 8-8h16C172.4 144 176 147.6 176 152zM552.1 188.5c-3.062-2.812-7.766-2.75-10.83 .0313c-11.47 10.56-22.31 21.78-32.34 33.38c-18.53-24.09-39.48-46.88-62.41-67.84c-3.031-2.812-7.734-2.812-10.8 0C369 216.1 320 298.2 320 349.2C320 438.9 391.8 512 480 512s160-73.06 160-162.8C640 311 604.3 235.7 552.1 188.5zM480 496c-79.41 0-144-65.88-144-146.8c0-44.88 45.2-120.5 106-178.2c22.56 21.22 43.06 44.25 61 68.59c1.469 2 3.766 3.188 6.234 3.25c2.312-.3125 4.828-1.031 6.391-2.938c9.781-11.94 20.48-23.47 31.89-34.41C591.7 248.8 624 315.7 624 349.2C624 430.1 559.4 496 480 496zM572.3 311.2c-2.594-5.031-5.438-10.22-8.672-15.5c-1.328-2.188-3.609-3.594-6.141-3.812c-2.547-.375-5 .75-6.703 2.688l-37.64 42.88c-16.95-21.59-64.06-81.59-68.39-86.66C443.2 249 440.1 248 438.6 248c-2.359 0-4.641 1.062-6.141 2.875C397.3 293 376 321 376 354.1C376 413.2 420.6 456 482.1 456c22.67 0 44.28-6.781 62.48-19.59C583.5 409.2 595.4 355.3 572.3 311.2zM535.4 423.3C535.4 423.3 535.4 423.3 535.4 423.3C519.9 434.2 501.5 440 482.1 440C429.1 440 392 404.7 392 354.1c0-24.09 13.81-45.72 46.53-85.47c14.08 17.69 48.44 61.44 67.92 86.28c1.469 1.875 3.703 3 6.078 3.062c2.391 .125 4.656-.9375 6.234-2.719l36.63-41.72c.9062 1.688 1.797 3.344 2.641 5.031C577.5 355.7 567.7 400.7 535.4 423.3zM317.9 487.9C297.8 493.3 277 496 256 496c-132.3 0-240-107.7-240-240S123.7 16 256 16c70.78 0 137.6 31.03 183.4 85.16c2.875 3.406 7.891 3.844 11.28 .9375c3.375-2.844 3.797-7.875 .9375-11.25C402.8 33.09 331.5 0 256 0C114.8 0 0 114.8 0 256s114.8 256 256 256c22.39 0 44.61-2.906 66.06-8.625c4.266-1.125 6.812-5.5 5.672-9.781C326.6 489.4 322.3 486.8 317.9 487.9z"/>
</>],

]);

const MeterFire: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

MeterFire.displayName = "MeterFire";

export default MeterFire;