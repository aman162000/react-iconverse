
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M192 224c13.25 0 24-10.75 24-24v-112C216 74.75 205.3 64 192 64S168 74.75 168 88v112C168 213.3 178.8 224 192 224zM192 320c17.67 0 32-14.33 32-32s-14.33-32-32-32S160 270.3 160 288S174.3 320 192 320zM112.3 384l-.0906 70.35c0 6.297 1.886 12.43 5.355 17.68l17.08 25.69C139.8 505.6 151.8 512 161.2 512h61.67c9.438 0 21.36-6.395 26.61-14.27l17.34-25.7c2.938-4.438 5.097-12.35 5.097-17.68l.2156-70.35L112.3 384z"/><path className="fa-secondary" d="M191.5 .0127C89.47 .2627 16 82.1 16 175.1c0 44.38 16.52 84.89 43.52 115.8c16.62 18.88 42.36 58.23 52.24 91.48c0 .25 .1146 .5104 .1146 .7604l160.3 .0006c0-.25 .0833-.5111 .0833-.7611c9.875-33.25 35.61-72.61 52.24-91.48C351.5 260.9 368 220.4 368 175.1C368 78.62 288.8-.2373 191.5 .0127zM168 88C168 74.75 178.8 64 192 64s24 10.75 24 24v112C216 213.3 205.3 224 192 224S168 213.3 168 200V88zM192 320c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32S209.7 320 192 320z"/>
</>],
['light',<>
	<path d="M208 224V112C208 103.2 200.8 96 192 96S176 103.2 176 112V224c0 8.844 7.135 16 15.98 16S208 232.8 208 224zM168 288c0 13.25 10.75 24 24 24c13.26 0 24-10.75 24-24S205.3 264 192 264C178.7 264 168 274.7 168 288zM315.8 51.3c-33.33-33.22-78.19-52.47-124.3-51.28C94.73 .2939 16 79.89 16 177.4c0 42.91 15.47 84.34 43.55 116.6c13.33 15.31 35.84 49.59 43.73 76.02c1.078 8.688 8.844 14.62 17.64 13.71c8.703-.9687 14.98-8.965 14.11-17.65l-.6094-3.312c-10.31-34.97-36-72.84-50.73-89.77C60.67 246.5 48 212.6 48 177.4c0-81.24 63.05-145.1 143.5-145.3H192c38.13 0 74.05 14.88 101.2 41.94C320.8 101.5 336 138.2 336 177.4c0 35.19-12.67 69.15-35.67 95.62c-14.75 16.94-40.44 54.8-50.75 89.77l-.625 3.344c-1.047 8.75 4.938 17.59 13.67 18.68c.7813 .0938 1.531 .1562 2.281 .1562c7.797 0 14.36-5.121 15.36-13.12c8.344-28.25 30.86-62.53 44.2-77.84C352.5 261.7 368 220.3 368 177.4C368 129.7 349.5 84.89 315.8 51.3zM255.9 415.1H128.1c-8.846 0-15.98 7.18-15.97 16.03l-.0145 22.34c.0098 6.27 1.88 12.46 5.355 17.68l17.08 25.69C139.8 505.6 151.8 512 161.2 512h61.67c9.418 0 21.39-6.43 26.61-14.27l17.02-25.69c2.953-4.441 5.411-12.36 5.419-17.69l-.1144-22.34C271.8 423.2 264.7 415.1 255.9 415.1zM239.9 454.4l-16.11 24.45C223.3 479.3 222.1 479.1 222.9 480l-60.29 .1172c-.4238-.1016-1.138-.2773-1.423-.2773c-.1406 0-.1348-.2266 0 0l-17.1-25.48l-.0098-6.367h95.94l.0039 5.18C239.9 453.6 239.7 454.4 239.9 454.4C239.9 454.4 239.8 454.5 239.9 454.4z"/>
</>],
['regular',<>
	<path d="M192 0C90.02 .3203 16 82.98 16 175.1c0 44.38 16.4 84.82 43.52 115.8c16.53 18.84 42.36 58.26 52.24 91.48c.0313 .25 .0833 .4948 .1146 .7604l160.3 .0006c.0313-.2656 .0521-.4955 .0833-.7611c9.875-33.22 35.71-72.64 52.24-91.48C351.6 260.8 368 220.4 368 175.1C368 78.8 289.2 .0039 192 0zM288.4 260.1c-15.66 17.85-35.04 46.3-49.05 75.89h-94.61c-14.01-29.59-33.39-58.04-49.04-75.88C75.24 236.8 64 206.1 64 175.1C64 113.3 112.1 48.25 191.1 48C262.6 48 320 105.4 320 175.1C320 206.1 308.8 236.8 288.4 260.1zM112.2 454.4c0 6.297 1.886 12.43 5.355 17.68l17.08 25.69C139.8 505.6 151.8 512 161.2 512h61.67c9.438 0 21.36-6.395 26.61-14.27l17.02-25.69c2.938-4.438 5.419-12.36 5.419-17.69L272 415.1h-160L112.2 454.4zM191.1 240C174.3 240 160 254.3 160 272s14.33 32 32 32S224 289.7 224 272S209.7 240 191.1 240zM192 208c13.25 0 24-10.75 24-24v-80c0-13.25-10.78-23.1-24.03-23.1S168 90.75 168 104v80C168 197.3 178.8 208 192 208z"/>
</>],
['solid',<>
	<path d="M191.5 .0127C89.47 .2627 16 82.1 16 175.1c0 44.38 16.52 84.89 43.52 115.8c16.62 18.88 42.36 58.23 52.24 91.48c0 .25 .1146 .5104 .1146 .7604l160.3 .0006c0-.25 .0833-.5111 .0833-.7611c9.875-33.25 35.61-72.61 52.24-91.48C351.5 260.9 368 220.4 368 175.1C368 78.62 288.8-.2373 191.5 .0127zM168 88C168 74.75 178.8 64 192 64s24 10.75 24 24v112C216 213.3 205.3 224 192 224S168 213.3 168 200V88zM192 320c-17.67 0-32-14.33-32-32s14.33-32 32-32s32 14.33 32 32S209.7 320 192 320zM112.2 454.4c.125 6.25 1.855 12.43 5.355 17.68l17.08 25.69C140.6 506.6 150.6 512 161.2 512h61.67c10.75 0 20.73-5.395 26.61-14.27l17.02-25.69c3.5-5.25 5.419-11.44 5.419-17.69L272 415.1h-160L112.2 454.4z"/>
</>],
['thin',<>
	<path d="M199.9 232V88c0-4.406-3.562-8.001-7.969-8.001S183.9 83.6 183.9 88v144c0 4.406 3.635 7.998 8.042 7.998S199.9 236.4 199.9 232zM176 288c0 8.82 7.178 15.1 16 15.1s16-7.177 16-15.1S200.8 272 192 272S176 279.2 176 288zM316.3 51.53C283 18.28 238.9 0 192 0L191.5 .0127C94.74 .3096 16 79.55 16 176.7c0 42.78 15.47 84.06 43.59 116.2c13.51 15.45 38.54 52.09 48.01 84.05c.498 4.375 4.422 7.5 8.842 7c4.359-.5156 7.504-4.484 6.975-8.875l-.373-2.094c-10.37-34.98-37.08-74.17-51.5-90.64c-25.53-29.23-39.6-66.77-39.6-105.7c0-89.81 70.08-160.4 159.6-160.7h.5293c42.65 0 82.75 16.63 112.1 46.86c30.36 30.38 47.07 70.78 47.07 113.8c0 38.91-14.07 76.44-39.6 105.7c-14.41 16.47-41.13 55.66-51.81 92.16c0 .0313-.0625 .5625-.0625 .5782c-.5293 4.391 2.521 8.672 6.881 9.188c.3418 .0313 .6855 .0469 1.027 .0469c3.922 0 7.254-2.719 7.721-6.766c9.652-32.55 34.68-69.19 48.2-84.64C352.5 260.7 368 219.4 368 176.7C368 129.4 349.6 84.92 316.3 51.53zM255.9 415.1H128.1c-8.812 0-15.98 7.18-15.97 16.03l-.0145 22.34c.0098 6.324 1.863 12.42 5.355 17.68l17.08 25.69C139.8 505.6 151.8 512 161.2 512h61.67c9.4 0 21.4-6.418 26.61-14.27l17.02-25.69c2.92-4.406 5.411-12.4 5.419-17.69l-.1144-22.34C271.8 423.2 264.7 415.1 255.9 415.1zM255.7 454.4c-.0039 2.148-1.467 6.992-2.654 8.785l-17.03 25.68c-2.258 3.406-9.211 7.149-13.29 7.149H161.3c-4.076 0-11.03-3.738-13.29-7.141L130.1 463.2c-1.76-2.656-2.691-5.742-2.697-8.934l-.0371-22.32h127.5L255.7 454.4z"/>
</>],

]);

const LightbulbExclamation: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

LightbulbExclamation.displayName = "LightbulbExclamation";

export default LightbulbExclamation;
