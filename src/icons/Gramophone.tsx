
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M384 463.1l-.0001 32c0 8.875-7.125 16-16 16h-352c-8.875 0-16-7.125-16-16l0-32c0-8.875 7.125-16 16-16l15.1 .0006L32 415.1c0-17.63 14.38-32 32-32h255.1c17.62 0 32 14.37 32 32l0 32l16-.0006C376.9 447.1 384 455.1 384 463.1z"/><path className="fa-secondary" d="M376 269.1c0 45.75-37.13 82.75-82.75 82.75l-69.25-.0009v32.14h-64l-.0002-56.14c0-13.25 10.75-24 24-24h109.2c19.12 0 34.75-15.5 34.75-34.75c0-12.13-8.125-22.75-19.88-25.88c-76.75-20.63-175.7 30.75-238.6 73.88c-18.12 12.38-42.5-4.5-36.63-26.13l73.13-273.3C111.8-3.656 141.3-6.527 150.9 13.6c32.13 67.25 92.25 162.5 169.7 183.3C353.3 205.6 376 235.2 376 269.1z"/>
</>],
['light',<>
	<path d="M368 480H352l0-64c0-17.6-14.4-32-32-32H64c-17.6 0-32 14.4-32 32L32 480H16c-8.8 0-15.1 7.199-15.1 15.1c0 8.8 7.2 16 16 16h352c8.8 0 16-7.2 16-16C384 487.2 376.8 480 368 480zM320 480H64v-64h256V480zM45.5 314.1C56.5 321.9 71 322 82.13 314.4c59.63-40.88 119.5-66.13 178-75C261.5 239.3 336 228.9 336 280c0 22.12-17.88 40-40 40H176C167.2 320 160 327.2 160 336C160 344.8 167.2 352 176 352h114.4c36.75 0 70.25-25.25 76.5-61.38c7.875-45.63-10.25-55.88-88.75-118.5C232 135.3 192.8 83.38 161.5 18.12C156.1 7.125 144.9 0 132.6 0c-1 0-2.137-.0625-3.137 .0625C116.1 1.312 105.1 10.75 101.6 23.75l-68.63 256C29.63 292.6 34.5 306.4 45.5 314.1zM132.6 32c33.37 69.63 75.63 125.1 125.5 165.1l11.38 9c-4.625 .375-9.375 1-14.25 1.625C192 217.4 127.8 244.4 64 288L132.6 32z"/>
</>],
['regular',<>
	<path d="M56.1 319.1c4.875 0 9.533-1.465 13.41-4.215c40.25-27.38 124.1-77.16 201.2-77.16c12.62-.125 25.25 1.497 37.38 4.622c11.75 3.125 19.88 13.75 19.88 25.88c0 19.25-15.62 34.75-34.75 34.75H184c-13.25 0-24 10.75-24 24s10.75 24 24 24l109.2-.0018c45.63 0 82.75-37 82.75-82.75c0-33.88-22.75-63.38-55.38-72.25C236.9 174.5 175.4 64.97 150.9 13.6C146.5 4.474 137-.8811 127 .1189c-10 .875-18.37 7.976-20.1 17.6L32.82 289.8C30.95 297 32.38 304.7 37 310.6C41.5 316.5 48.6 319.1 56.1 319.1zM136.8 88.75c21.75 36.5 50.5 76 86 106.8C176.5 204.5 131.5 224.7 94.88 244.1L136.8 88.75zM359.1 463.1L352 463.1l0-48c0-17.6-14.4-32-32-32H64c-17.6 0-32 14.4-32 32L32 463.1l-7.1-.0003C10.75 463.1 0 474.7 0 487.1S10.75 512 24 512h335.1C373.3 512 384 501.3 384 487.1C384 474.7 373.3 463.1 359.1 463.1zM304 463.1h-224v-32h224V463.1z"/>
</>],
['solid',<>
	<path d="M69.5 317.1c62.88-43.13 161.9-94.5 238.6-73.88c11.75 3.125 19.88 13.75 19.88 25.88c0 19.25-15.62 34.75-34.75 34.75H184c-13.25 0-24 10.75-24 24L160 351.9l133.3 .0009c45.63 0 82.75-37 82.75-82.75c0-33.88-22.75-63.5-55.38-72.25c-77.5-20.75-137.6-116-169.7-183.3C141.3-6.527 111.8-3.656 106 17.72L32.88 290.1C27 312.6 51.38 329.5 69.5 317.1zM368 447.1l-16 .0006l0-32c0-17.63-14.38-32-32-32H64c-17.62 0-32 14.37-32 32l0 32l-15.1-.0006c-8.875 0-16 7.125-16 16l0 32c0 8.875 7.125 16 16 16h352c8.875 0 16-7.125 16-16l.0001-32C384 455.1 376.9 447.1 368 447.1z"/>
</>],
['thin',<>
	<path d="M352 447.1l0-32c0-17.67-14.33-32-32-32H64c-17.67 0-32 14.33-32 32l0 32C14.33 447.1 0 462.3 0 480s14.33 32 32 32h320c17.67 0 32-14.33 32-32S369.7 447.1 352 447.1zM48 416c0-8.824 7.178-16 16-16h256c8.822 0 16 7.176 16 16v32h-288V416zM352 496H32c-8.822 0-16-7.176-16-16s7.178-16 16-16h320c8.822 0 16 7.176 16 16S360.8 496 352 496zM56.1 319.1c4.469 0 9.156-1.324 13.41-4.215c55.92-38.2 134.6-80.82 218.8-89.85l42.87 8.973C352.9 241.4 368 261.7 368 284.3c0 28.47-23.17 51.63-51.64 51.63l-148.3-.0938c-4.422 0-8 3.594-8 8s3.578 8 8 8l148.3 .0938C353.7 351.1 384 321.6 384 284.3c0-29.62-19.81-56.25-48.84-64.94l-46.51-9.777C226.5 169.1 178.5 71.22 150.9 13.6C146.5 4.419 138 .0625 129.5 .0625c-10.12 0-20.37 6.118-23.48 17.66L32.82 289.8C28.33 306.3 41.52 319.1 56.1 319.1zM121.5 21.84C122.1 16.28 128.3 16 129.3 16c2.266 0 5.342 .7773 7.117 4.473c25.98 54.16 69.64 145.2 128.9 192.3c-64.74 10.99-133.4 41.08-204.8 89.86C59.13 303.5 57.71 304 56.2 304c-2.498 0-5.135-1.34-6.721-3.418c-1.459-1.91-1.836-4.059-1.137-6.629L121.5 21.84z"/>
</>],

]);

const Gramophone: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Gramophone.displayName = "Gramophone";

export default Gramophone;
