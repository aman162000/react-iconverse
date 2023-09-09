
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M198.1 446.4c-96.37 12.69-184.7-55.07-197.4-151.4s55.14-184.8 151.5-197.5s184.8 55.14 197.5 151.5c7.619 57.84-13.92 115.6-57.5 154.3c-4.899-3.138-9.447-6.659-13.56-10.77c-11.8-11.74-19.61-26.9-22.32-43.33c42.66-44.79 40.92-115.7-3.869-158.3S137.6 149.1 94.91 194.8s-40.92 115.7 3.869 158.3c18.46 17.58 42.35 28.32 67.75 30.48C172.1 406.6 183.1 427.9 198.1 446.4z"/><path className="fa-secondary" d="M221 101.9l34.96-69.92L223.1 0h-95.1l-32 31.1l34.96 69.92C160.5 94.13 191.5 94.13 221 101.9zM473.1 225.6c-30.34-37.69-74.86-61.23-123.1-65.07c14.14 21.95 23.1 46.38 29.06 71.1c57.04 23.78 83.99 89.29 60.21 146.3c-23.78 57.03-89.29 83.99-146.3 60.21s-83.99-89.29-60.21-146.3c9.828-23.57 27.43-43.07 49.87-55.26c-1-3.1-2.133-6.147-3.398-9.139c-.3906-.9004-.8613-2-1.271-2.891c-.0469-.1172-.0996-.2305-.1582-.3399c-.4102-.9004-.8418-1.791-1.271-2.68c-.959-1.941-2.068-4.031-3.148-5.91c-.5-.8692-1-1.791-1.521-2.641c-.1094-.1797-.2187-.3594-.3398-.5391c-.4297-.7109-.8691-1.41-1.33-2.109c-.1289-.2109-.2695-.4219-.4102-.6309c-.459-.6992-.9199-1.391-1.398-2.07l-.3516-.5605c-1.199-1.719-2.445-3.385-3.738-4.998l-2.621-3.201c-.4492-.5293-2.09-2.41-2.09-2.41c-.4902-.5293-1-1.059-1.469-1.59l-.6602-.7187c-.7109-.75-1.441-1.5-2.17-2.24c-2.887-2.871-5.924-5.584-9.1-8.131c-68.42 40.7-101 122.2-79.62 198.9C170.6 397.1 176.4 411.8 184 424.7c.7402 1.273 1.492 2.529 2.26 3.77c.7598 1.24 1.539 2.491 2.34 3.71c-.002 .0195-.002-.0195 0 0c.7871 1.213 1.594 2.444 2.42 3.63c.8184 1.193 1.707 2.443 2.561 3.609c.8496 1.182 1.729 2.352 2.609 3.5c.8867 1.168 1.838 2.385 2.765 3.526c60.95 75.71 171.7 87.61 247.4 26.66C522.1 412.1 534 301.3 473.1 225.6z"/>
</>],
['light',<>
	<path d="M392.2 169.2c-8.344-2.75-17.41 1.688-20.25 10.06c-2.812 8.344 1.688 17.44 10.06 20.25C440.6 219.3 480 274.1 480 336c0 79.41-64.59 144-144 144S192 415.4 192 336c0-65.93 43.88-122.2 107.1-138.9c2.803 4.588 5.934 8.887 8.258 13.87c28.56 61.16 11.38 132.9-41.81 174.3c-6.969 5.438-8.219 15.5-2.781 22.47c5.406 6.938 15.47 8.188 22.47 2.781c65-50.69 86.03-138.3 51.13-213.1c-21.14-45.34-59.3-77.31-103.3-92.18l35.75-47.67c2.625-3.5 3.688-7.969 2.969-12.28c-.75-4.344-3.25-8.188-6.906-10.62l-48-32C214.3 .9375 211.2 0 208 0h-64C140.8 0 137.8 .9375 135.1 2.688l-48 32C83.53 37.09 81.03 40.84 80.25 45.13C79.47 49.38 80.47 53.78 82.97 57.28l34.82 48.79C112.7 107.9 107.5 109.9 102.5 112.3c-42.59 19.88-74.94 55.16-91 99.31c-16.09 44.19-14 91.97 5.875 134.6c29.16 62.56 91.59 101.7 159.4 101.7c6.531 0 13.12-.375 19.72-1.094c.8555-.0977 1.641-.4256 2.445-.6482C231.2 486.3 280.6 512 336 512c97.03 0 176-78.98 176-176C512 260.3 463.8 193.3 392.2 169.2zM148.2 93.53L118.6 52.16L148.8 32h54.31l29.91 19.94L198.9 97.41C182.9 95.35 166.5 95.44 150.1 97.95C149.6 96.43 149.1 94.9 148.2 93.53zM46.38 332.7C30.13 297.8 28.41 258.7 41.56 222.5C54.72 186.4 81.16 157.5 116 141.3c56.26-26.26 120.6-12.47 162.3 29.02C207.9 194.6 160 259.1 160 335.1c0 28.6 7.006 55.55 19.17 79.45C122.8 416.6 70.54 384.6 46.38 332.7z"/>
</>],
['regular',<>
	<path d="M371.9 147.7c10.13 18.5 17.75 38.37 22.38 59c41.13 21.25 69.63 63.75 69.63 113.2c0 70.75-57.25 128-128 128s-128-57.25-128-128c0-54.63 34.5-101.1 82.88-119.5c8.5 17.25 13 36.25 13.13 55.5c0 37.37-16.38 70.75-42 94.12c6.25 15.25 17.13 28.12 31 37c44.75-39.75 66.13-99.63 56.75-158.7c-9.375-59.25-48.25-109.5-103.1-133.5l41.38-66.25L232.4-16H119.4l-55.5 44.62l41.25 66.25C29.03 128.4-13.35 210.6 3.777 292.1s88.88 139.8 172.1 139.9c7.625-.125 15.25-.625 22.88-1.875c48.5 60.5 131 82.13 203 53.12c71.88-28.87 116.4-101.6 109.5-178.9S447.8 163.5 371.9 147.7zM127.9 39.37l8.5-7.375h79l8.5 7.375l-25.5 42.25c-14.88-2.125-30.13-2.125-45 0L127.9 39.37zM47.9 255.1c.125-70.62 57.38-127.9 128-128c33 0 62.88 12.88 85.63 33.5c-59.88 28-101.6 88-101.6 158.5c0 21.75 4.125 43.38 12 63.63C103.3 381.5 47.9 325.2 47.9 255.1z"/>
</>],
['solid',<>
	<path d="M351.2 160.7c14 22.12 23.75 46.62 28.63 72.24c51.63 21.1 79 78.74 64.13 132.7c-14.88 54.12-67.5 88.74-123 81.24C265.4 439.5 224 392.1 224 335.1c0-42.25 23.75-78.62 58.25-97.49C285.6 249.1 288 260.2 288 271.1c0 28.5-11 55.1-30.75 76.62c3.625 22.5 16.62 42.51 35.75 54.76C330.5 370.1 352 322.1 352 271.1c0-81.62-55.59-150.2-130.1-170.1l34.96-69.92L223.1 0h-95.1l-32 31.1l34.96 69.92C55.59 121.8 0 190.4 0 271.1c0 97.24 78.75 175.1 176 175.1c7.625 0 15.29-.7385 22.91-1.863c46.75 58.25 125.2 80.73 195.6 55.86C465 477.2 512 410.6 512 335.1C512 243.1 441.2 168.5 351.2 160.7zM64 271.1c.125-61.87 50.13-111.9 112-111.1c26.88 0 51.25 9.874 70.5 25.75C195 216.2 160 271.6 160 335.1c0 15.87 2.25 31.73 6.5 46.98C109.2 378.1 64 330.5 64 271.1z"/>
</>],
['thin',<>
	<path d="M159.6 431.2C77.75 422.9 16 354.4 16 272c0-88.22 71.78-160 160-160s160 71.78 160 160c0 58.75-32.11 112.7-83.81 140.8c-3.891 2.094-5.328 6.969-3.219 10.84C251.1 427.5 256 428.9 259.8 426.8C316.7 395.1 352 336.6 352 271.1c0-82.61-57.3-151.9-134.2-170.8l36.88-56.13c1.984-3.031 1.703-7-.6879-9.688L225.2 2.719C223.7 1 221.5 0 219.2 0H132.8c-2.297 0-4.484 1-6 2.719L97.1 35.41C95.61 38.09 95.33 42.06 97.31 45.09l36.88 56.13C57.3 120.1 0 189.4 0 271.1c0 90.69 67.94 165.9 158 175.1c.2813 .0313 .5469 .0313 .8281 .0313c4.047 0 7.531-3.062 7.938-7.188C167.2 435.5 164 431.6 159.6 431.2zM114 41.41L136.4 16h79.19l22.38 25.41L200.8 97.96C192.7 96.8 184.4 96 176 96S159.3 96.8 151.2 97.96L114 41.41zM386.3 167.3c-4.25-1.375-8.703 1.156-9.953 5.375s1.156 8.688 5.391 9.938C449 202.7 496 265.7 496 336c0 88.22-71.78 160-160 160s-160-71.78-160-160c0-59.91 33.05-114.3 86.22-141.1c3.922-2.032 5.453-6.875 3.406-10.78c-2.047-3.938-6.938-5.469-10.78-3.406C196.3 210.3 160 270.1 160 335.1C160 433.1 238.1 512 336 512s176-78.95 176-176C512 258.7 460.3 189.3 386.3 167.3z"/>
</>],

]);

const RingsWedding: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

RingsWedding.displayName = "RingsWedding";

export default RingsWedding;