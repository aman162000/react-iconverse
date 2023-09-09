
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M375.2 172.8c-21.23-8.65-41.63-12.94-59.14-12.79C296.1 160.3 281.9 164.9 272 168.1v183c11.81-6.961 50.9-25.71 101.4-3.73C378.4 350.4 384 346.9 384 341.9v-156.3C384 180.1 380.6 174.1 375.2 172.8zM136.8 172.8C131.4 175 128 180.1 128 185.5v156.3c0 5.047 5.643 8.545 10.56 6.405C189.1 326.3 228.2 345 240 352V168.1C230.1 164.9 215 160.3 195.9 160C178.3 159.7 157.1 164.1 136.8 172.8z"/><path className="fa-secondary" d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM240 352c-11.81-6.959-50.92-25.71-101.4-3.734C133.6 350.4 128 346.9 128 341.9V185.5c0-5.455 3.379-10.54 8.752-12.74c21.22-8.676 41.57-13.11 59.14-12.79C215 160.3 230.1 164.9 240 168.1V352zM384 341.9c0 5.047-5.643 8.545-10.56 6.405C322.9 326.3 283.8 345 272 351.1V168.1c9.902-4.061 24.99-8.614 44.1-8.935c17.5-.1543 37.91 4.137 59.14 12.79C380.6 174.1 384 180.1 384 185.6V341.9z"/>
</>],
['light',<>
	<path d="M383.5 156.8C360.2 148.2 337.7 144.3 317.5 144C288 144.5 266.5 152.8 256 157.9C245.4 152.8 223.9 144.5 194.4 144c-20.25 0-42.95 4.32-65.87 12.74C118.4 160.5 112 170.6 112 181.4v151.4c0 7.328 3.438 14.03 9.445 18.4c4.016 2.9 8.729 4.395 13.55 4.395c2.271 0 4.564-.332 6.82-1.004c15.36-4.695 29.74-6.674 42.76-6.674c23.09 0 41.91 6.217 54.43 14.53c5.121 3.398 11.09 5.1 17.05 5.1c5.947 0 11.89-1.688 17-5.064c12.57-8.305 31.47-14.51 54.56-14.51c12.99 0 27.31 1.963 42.58 6.621c2.258 .6797 4.549 1.014 6.814 1.014c4.814 0 9.518-1.51 13.56-4.42C396.6 346.8 400 340.1 400 332.8V181.4C400 170.6 393.6 160.5 383.5 156.8zM240 326.9C223.6 319.8 204.5 315.9 184.6 315.9c-13.34 0-26.98 1.662-40.57 4.92V185.2C161.7 179.2 178.9 176 193.9 175.1C215.9 176.3 231.6 181.9 240 185.8V326.9zM368 320.8c-13.58-3.24-27.12-4.877-40.38-4.877c-20.25 0-39.6 3.922-55.62 11.18v-141.3c8.352-3.83 23.85-9.365 45.51-9.793C333.8 176.3 351.2 179.5 368 185.2V320.8zM256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM256 480c-123.5 0-224-100.5-224-224s100.5-224 224-224s224 100.5 224 224S379.5 480 256 480z"/>
</>],
['regular',<>
	<path d="M375.2 172.8c-21.23-8.648-41.63-12.94-59.14-12.79C296.1 160.3 281.9 164.9 272 168.1v183c11.81-6.961 50.9-25.71 101.4-3.73C378.4 350.4 384 346.9 384 341.9v-156.3C384 180.1 380.6 175 375.2 172.8zM136.8 172.8C131.4 174.1 128 180.1 128 185.5v156.3c0 5.047 5.643 8.545 10.56 6.405C189.1 326.3 228.2 345 240 352V168.1C230.1 164.9 215 160.3 195.9 160C178.3 159.7 157.1 164.1 136.8 172.8zM256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM256 464c-114.7 0-208-93.31-208-208S141.3 48 256 48s208 93.31 208 208S370.7 464 256 464z"/>
</>],
['solid',<>
	<path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM240 352c-11.81-6.959-50.92-25.71-101.4-3.734C133.6 350.4 128 346.9 128 341.9V185.5c0-5.455 3.379-10.54 8.752-12.74c21.22-8.676 41.57-13.11 59.14-12.79C215 160.3 230.1 164.9 240 168.1V352zM384 341.9c0 5.047-5.643 8.545-10.56 6.405C322.9 326.3 283.8 345 272 351.1V168.1c9.902-4.061 24.99-8.614 44.1-8.935c17.5-.1543 37.91 4.137 59.14 12.79C380.6 174.1 384 180.1 384 185.6V341.9z"/>
</>],
['thin',<>
	<path d="M387.1 156.8c-5.762-2.125-35.04-13.07-65.8-12.83C286.6 144.6 262.9 156.2 256 160C249.1 156.2 225.4 144.6 190.7 144c-29.83-.4766-60.25 10.78-65.8 12.83C117.2 159.7 112 167.2 112 175.6v163.1c0 10.45 10.1 18.44 20.62 15.22c16.43-5.09 31.84-7.037 45.81-7.037c44.95 0 74.9 20.15 75.29 20.41c1.418 .959 3.172 .9375 4.547 0c.3926-.2676 30.34-20.41 75.29-20.41c13.97 0 29.38 1.947 45.81 7.037C389.1 357.2 400 349.1 400 338.7V175.6C400 167.2 394.8 159.7 387.1 156.8zM248 346.2c-14.43-6.754-38.46-15.33-69.56-15.33c-16.94 0-33.95 2.609-50.44 7.818V175.6c0-1.688 1.006-3.236 2.461-3.771C151.5 164.1 172 160 190.5 160C221.2 160.5 242.1 170.6 248 173.9V346.2zM384 338.7c-16.49-5.209-33.49-7.818-50.44-7.818c-31.11 0-55.14 8.576-69.56 15.33V173.9C269.9 170.6 290.8 160.5 321.5 160c18.44 0 39.02 4.094 60.01 11.84C382.1 172.4 384 173.9 384 175.6V338.7zM256 0C114.6 0 0 114.6 0 256c0 141.4 114.6 256 256 256s256-114.6 256-256C512 114.6 397.4 0 256 0zM256 496c-132.3 0-240-107.7-240-240S123.7 16 256 16s240 107.7 240 240S388.3 496 256 496z"/>
</>],

]);

const CircleBookOpen: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

CircleBookOpen.displayName = "CircleBookOpen";

export default CircleBookOpen;