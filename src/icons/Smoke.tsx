
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M528 288c-18 0-34.75 4.625-49.75 12.12C453.1 254.1 406.8 224 352 224C311 224 274.3 241.3 248 268.8C221.8 241.3 185 224 144 224C64.5 224 0 288.5 0 368S64.5 512 144 512h384c61.88 0 112-50.13 112-112S589.9 288 528 288z"/><path className="fa-secondary" d="M320 96c26.25 0 52 6.75 75.13 19.25c9.25-10.25 20.12-18.5 31.62-25.88C403.8 54.88 364.6 32 320 32C288.4 32 259.9 43.88 237.6 62.75C215.3 25.25 174.8 0 128 0C57.25 0 0 57.25 0 128c0 38.25 17.12 72.13 43.75 95.63C72.25 203.8 106.8 192 144 192c9.875 0 19.5 .875 29.12 2.5C197.3 136.8 253.8 96 320 96zM512 96c-46.75 0-87.25 25.25-109.6 62.75C380.1 139.9 351.6 128 320 128C268.3 128 224.1 158.8 203.9 202.8C219.5 208.5 234.5 216.3 248 226.3C277.1 204 313.1 192 352 192c54.88 0 105.1 25.88 139 69.13C503.1 257.8 515.5 256 528 256c35.5 0 67.63 13.38 92.75 34.75C632.8 271.3 640 248.6 640 224C640 153.3 582.8 96 512 96z"/>
</>],
['light',<>
	<path d="M528 512h-384C64.59 512 0 447.4 0 368S64.59 224 144 224c39.38 0 76.97 16.42 104 44.76C275 240.4 312.6 224 352 224c52.84 0 101.5 29.81 126.4 75.78C493.8 292 510.7 288 528 288c61.75 0 112 50.25 112 112S589.8 512 528 512zM144 256C82.25 256 32 306.3 32 368S82.25 480 144 480h384c44.13 0 80-35.88 80-80S572.1 320 528 320c-16.88 0-33.16 5.438-47.16 15.72c-4.062 2.969-9.188 3.844-14 2.438s-8.656-5-10.44-9.688C439.7 284.4 398.8 256 352 256C316.1 256 282.1 273.6 261 303.2c-6.062 8.375-20 8.375-26.06 0C213.9 273.6 179.9 256 144 256zM621.7 258.1C633.7 238.2 640 215.3 640 192c0-70.59-57.41-128-128-128c-45.31 0-86.81 24.41-109.6 62.63C379.5 106.9 350.5 96 320 96C284.2 96 249.8 111.1 225.6 137.5C215 149.1 206.7 162.3 201 176.8C197.8 185 201.8 194.3 209.1 197.6c8.188 3.281 17.5-.75 20.78-8.969c4.281-10.84 10.5-20.75 18.47-29.47C267.4 139.3 293.2 128 320 128c28.84 0 56 13.22 74.53 36.28c3.625 4.5 9.406 6.719 15.09 5.75c5.719-.9687 10.47-4.906 12.44-10.38C435.8 121.6 471.9 96 512 96c52.94 0 96 43.06 96 96c0 17.5-4.75 34.63-13.72 49.5c-4.562 7.562-2.156 17.41 5.406 21.97c2.594 1.562 5.438 2.312 8.281 2.312C613.4 265.8 618.7 263 621.7 258.1zM56.41 215.6c6.5-6 6.906-16.12 .9375-22.62C41 175.2 32 152.2 32 128c0-52.94 43.06-96 96-96c33.91 0 64.63 17.69 82.25 47.34C216 89.03 232 89.03 237.8 79.34C255.4 49.69 286.1 32 320 32c28.16 0 54.81 12.31 73.16 33.78c5.75 6.781 15.91 7.531 22.53 1.781c6.719-5.719 7.531-15.81 1.781-22.53C393.1 16.41 357.5 0 320 0C282.6 0 248.1 16.06 224 43.88C199.9 16.06 165.4 0 128 0C57.41 0 0 57.41 0 128c0 32.19 12 62.97 33.78 86.66c3.156 3.406 7.469 5.156 11.78 5.156C49.44 219.8 53.31 218.4 56.41 215.6z"/>
</>],
['regular',<>
	<path d="M640 248C640 164.2 571.8 96 488 96c-14.38 0-28.38 2.75-42 6.75C418.2 60.25 370.5 32 316 32C296.2 32 276.8 35.88 257.9 43.75C229.6 15.75 191.9 0 152 0C68.25 0 0 68.25 0 152C0 189.8 14.25 224 37.38 250.5C14.38 278.2 0 313.2 0 352c0 88.25 71.75 160 160 160h352c70.63 0 128-57.38 128-128c0-23.75-7-45.88-18.38-65.13C633.1 297.8 640 273.8 640 248zM592 248c0 11.25-2.125 22.12-5.5 32.25C565.5 265.1 539.9 256 512 256c-21.62 0-42.38 5.375-61.13 15.88C423.8 241.5 385.2 224 344 224C319.9 224 296.8 230.1 275.6 241.8C268.8 234.4 261 228.1 252.9 222.2C268.8 194.8 297.1 176 332 176c15.62 0 30.75 4.25 45.25 12.5l17.63 10.12l12.88-15.87C427.9 158.2 457.1 144 488 144C545.3 144 592 190.8 592 248zM152 48c31.62 0 61.25 14.62 81.25 40l12.75 16.12l17.88-10C280.6 84.75 298.2 80 316 80c35.25 0 66.38 17.25 86.13 43.62c-6.375 4.5-12.88 9.125-18.5 14.62C367 131.4 349.8 128 332 128C279.2 128 233.8 157.6 209.9 200.9C193.9 195.5 177.2 192 160 192C127.8 192 97.75 201.8 72.5 218.2C57.25 200.2 48 177.2 48 152C48 94.75 94.75 48 152 48zM512 464H160c-61.75 0-112-50.25-112-112S98.25 240 160 240c36 0 70.12 17.75 91.25 47.38l14.5 20.38L285.5 292.4C302.8 279.1 323 272 344 272c33.13 0 63.38 17 81.25 45.38l14.5 23.38l21.12-17.63C471.2 314.4 488.5 304.1 512 304.1c44.13 0 80 35.88 80 80S556.1 464 512 464z"/>
</>],
['solid',<>
	<path d="M144 192c9.875 0 19.5 .875 29.12 2.5C197.3 136.8 253.8 96 320 96c26.25 0 52 6.75 75.13 19.25c9.25-10.25 20.12-18.5 31.62-25.88C403.8 54.88 364.6 32 320 32C288.4 32 259.9 43.88 237.6 62.75C215.3 25.25 174.8 0 128 0C57.25 0 0 57.25 0 128c0 38.25 17.12 72.13 43.75 95.63C72.25 203.8 106.8 192 144 192zM402.4 158.8C380.1 139.9 351.6 128 320 128C268.3 128 224.1 158.8 203.9 202.8C219.5 208.5 234.5 216.3 248 226.3C277.1 204 313.1 192 352 192c54.88 0 105.1 25.88 139 69.13C503.1 257.8 515.5 256 528 256c35.5 0 67.63 13.38 92.75 34.75C632.8 271.3 640 248.6 640 224c0-70.75-57.25-128-128-128C465.3 96 424.8 121.3 402.4 158.8zM528 288c-18 0-34.75 4.625-49.75 12.12C453.1 254.1 406.8 224 352 224C311 224 274.3 241.3 248 268.8C221.8 241.3 185 224 144 224C64.5 224 0 288.5 0 368S64.5 512 144 512h384c61.88 0 112-50.13 112-112S589.9 288 528 288z"/>
</>],
['thin',<>
	<path d="M32 206c1.688 0 3.375-.5313 4.844-1.625c3.5-2.656 4.188-7.688 1.531-11.22C23.75 173.9 16 151 16 127.1C16 65.81 65.81 16 127.1 16c39.19 0 74.75 20.38 95.09 54.47C223.4 72.5 225.4 73.88 227.7 74.28s4.719-.25 6.5-1.812C254.8 55 279.5 45.75 305.7 45.75c37.19 0 71.81 18.62 92.63 49.81c2.406 3.688 7.375 4.625 11.09 2.219c3.688-2.438 4.656-7.406 2.219-11.09c-23.78-35.66-63.38-56.94-105.9-56.94c-27.03 0-52.66 8.562-74.69 24.88C207.1 20.25 168.9 0 127.1 0C57 0 0 57 0 127.1c0 27.47 8.875 53.69 25.62 75.81C27.19 204.9 29.59 206 32 206zM240.7 186.7c-1.844 4-.0625 8.75 3.938 10.62c4.031 1.75 8.75 .0938 10.62-3.938c17.09-37.16 54.38-61.16 94.97-61.16c24.66 0 47.97 8.688 67.34 25.16l7.219 6.125l4.844-8.125C448.8 123.2 482.3 104 519.3 104C577 104 624 150.1 624 208.7c0 19.25-5.312 37.63-15.75 54.59c-2.312 3.75-1.156 8.688 2.625 11c1.312 .8125 2.75 1.188 4.188 1.188c2.688 0 5.312-1.344 6.812-3.812C633.7 252.4 640 230.6 640 208.7C640 142.1 585.9 88 519.3 88c-39.66 0-75.84 19.09-98.47 51.53C400 124.2 375.8 116.2 350.3 116.2C303.4 116.2 260.4 143.8 240.7 186.7zM522.8 272c-15.34 0-30.5 3.25-45.19 9.688C450.8 236 403 208 351.2 208c-38.03 0-73.72 14.62-101.4 41.34C222.2 222.6 186.4 208 148.4 208C66.56 208 0 276.2 0 360S66.56 512 148.4 512h374.4C587.4 512 640 458.2 640 392S587.4 272 522.8 272zM522.8 496H148.4C75.41 496 16 435 16 360S75.41 224 148.4 224c36.28 0 70.22 15 95.56 42.19L249.8 272.5l5.844-6.312C281 239 314.9 224 351.2 224c48.34 0 92.81 27.53 116 71.84l3.688 7.031l7.062-3.625C492.5 291.8 507.6 288 522.8 288C578.6 288 624 334.7 624 392S578.6 496 522.8 496z"/>
</>],

]);

const Smoke: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Smoke.displayName = "Smoke";

export default Smoke;