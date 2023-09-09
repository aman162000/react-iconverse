
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M253.9 173.1C236.3 144.9 205.8 128 172.5 128H147.5C114.2 128 83.75 144.9 66.06 173.1L4.873 271C-4.502 286 .0605 305.8 15.03 315.1c15.03 9.375 34.75 4.812 44.1-10.19l32.62-52.19L47.1 384h40v96c0 17.67 14.33 32 31.1 32s32-14.33 32-32v-96h16v96c0 17.67 14.32 32 31.1 32s32-14.33 32-32v-96H271.1L228.2 252.7l32.63 52.22C266.9 314.7 277.4 320 288 320c5.781 0 11.66-1.562 16.94-4.859c14.97-9.375 19.53-29.11 10.16-44.09L253.9 173.1zM635.1 271l-61.19-97.95C556.3 144.9 525.8 128 492.5 128h-25.06c-33.28 0-63.72 16.86-81.41 45.13l-61.19 97.92c-9.375 14.98-4.812 34.72 10.16 44.09c15.03 9.375 34.75 4.812 44.09-10.19l32.62-52.19L368 384H408v96c0 17.67 14.33 32 32 32S472 497.7 472 480v-96h16v96c0 17.67 14.33 32 32 32s31.1-14.33 31.1-32v-96h40l-43.76-131.3l32.63 52.22C586.9 314.7 597.4 320 608 320c5.781 0 11.66-1.562 16.94-4.859C639.9 305.8 644.5 286 635.1 271z"/><path className="fa-secondary" d="M159.1 0c-26.5 0-48 21.5-48 48S133.5 96 159.1 96s48-21.5 48-48S186.5 0 159.1 0zM480 0c-26.5 0-47.1 21.5-47.1 48S453.5 96 480 96s48-21.5 48-48S506.5 0 480 0z"/>
</>],
['light',<>
	<path d="M479.1 112c30.88 0 55.1-25.12 55.1-56S510.9 0 480 0c-30.87 0-56 25.12-56 56S449.1 112 479.1 112zM479.1 32c13.22 0 24 10.77 24 24s-10.78 24-24 24s-24-10.77-24-24S466.8 32 479.1 32zM534.3 248.8c-3.969-7.922-13.53-11.09-21.47-7.156c-7.906 3.953-11.09 13.56-7.156 21.47L558.1 368h-156.2l52.44-104.8c3.938-7.906 .75-17.52-7.154-21.47c-7.906-3.906-17.47-.7344-21.47 7.156l-63.1 128c-2.469 4.953-2.219 10.84 .6875 15.56C365.3 397.1 370.5 400 375.1 400h39.1v96c0 8.844 7.156 16 16 16s16-7.156 16-16v-96h63.1v96c0 8.844 7.154 16 15.1 16s16-7.156 16-16v-96h39.1c5.531 0 10.69-2.875 13.62-7.594c2.906-4.719 3.156-10.61 .6875-15.56L534.3 248.8zM613.1 280.2l-61.72-111.1C538.2 143.8 511.4 128 482.3 128h-4.688c-29.03 0-55.84 15.77-69.94 41.16L345.1 280.2c-4.281 7.719-1.5 17.45 6.219 21.75c7.625 4.25 17.44 1.547 21.78-6.219l61.72-111.1C444.2 169.5 460.2 160 477.7 160h4.688c17.44 0 33.5 9.453 41.94 24.69l61.72 111.1C588.9 301 594.4 304 599.1 304c2.656 0 5.312-.6406 7.781-2.016C615.5 297.7 618.3 287.1 613.1 280.2zM246.3 248.8C242.3 240.9 232.8 237.8 224.8 241.7C216.9 245.6 213.8 255.3 217.7 263.2L270.1 368H113.9l52.44-104.8c3.938-7.906 .75-17.52-7.156-21.47C151.3 237.8 141.7 240.1 137.7 248.8l-63.1 128c-2.469 4.953-2.219 10.84 .6875 15.56C77.32 397.1 82.48 400 88.01 400h39.1v96c0 8.844 7.156 16 16 16s15.1-7.156 15.1-16v-96h63.1v96c0 8.844 7.156 16 16 16s16-7.156 16-16v-96h39.1c5.531 0 10.69-2.875 13.62-7.594c2.906-4.719 3.156-10.61 .6875-15.56L246.3 248.8zM192 112c30.87 0 55.1-25.12 55.1-56S222.9 0 192 0c-30.88 0-55.1 25.12-55.1 56S161.1 112 192 112zM192 32c13.22 0 24 10.77 24 24s-10.78 24-24 24s-24-10.77-24-24S178.8 32 192 32zM264.3 169.2C250.2 143.8 223.4 128 194.3 128H189.7C160.6 128 133.8 143.8 119.7 169.2L58.01 280.2c-4.281 7.719-1.5 17.45 6.219 21.75C71.85 306.2 81.67 303.5 86.01 295.8l61.72-111.1C156.2 169.5 172.2 160 189.7 160h4.688c17.44 0 33.5 9.453 41.94 24.69L298 295.8C300.9 301 306.4 304 312 304c2.656 0 5.312-.6406 7.781-2.016c7.719-4.297 10.5-14.03 6.219-21.75L264.3 169.2z"/>
</>],
['regular',<>
	<path d="M606.2 278.9l-43.75-106.3C551.3 145.5 525.2 128 495.8 128H464.2c-29.31 0-55.44 17.5-66.59 44.58l-43.75 106.3c-5.062 12.27 .7813 26.28 13.06 31.33c2.877 1.205 5.846 1.771 8.764 1.771c7.957 0 15.57-4.205 20.09-11.14L368 384h48.01v104c0 13.25 10.74 24 23.99 24s24.01-10.75 24.01-24V384h31.1v104c0 13.25 10.74 24 23.1 24c13.25 0 24-10.75 24-24V384h47.1l-27.42-82.26C569.1 308.1 576.3 312 584 312c3.062 0 6.156-.5781 9.125-1.812C605.4 305.1 611.3 291.1 606.2 278.9zM434.6 336l45.4-136.2L525.4 336H434.6zM480 96c26.5 0 48-21.5 48-48S506.5 0 480 0c-26.5 0-47.1 21.5-47.1 48S453.5 96 480 96zM242.4 172.6C231.3 145.5 205.2 128 175.8 128H144.2C114.8 128 88.71 145.5 77.56 172.6L33.81 278.9C28.75 291.1 34.59 305.1 46.87 310.2c2.877 1.205 5.846 1.771 8.764 1.771c7.957 0 15.57-4.205 20.09-11.14L47.1 384h47.1v104c0 13.25 10.75 24 24 24s23.1-10.75 23.1-24V384h31.1v104c0 13.25 10.75 24 24 24c13.25 0 23.99-10.75 23.99-24V384H271.1L244.6 301.7C249.1 308.1 256.3 312 263.1 312c3.062 0 6.156-.5781 9.125-1.812c12.28-5.047 18.12-19.06 13.06-31.33L242.4 172.6zM114.6 336l45.4-136.2L205.4 336H114.6zM159.1 96c26.5 0 48-21.5 48-48S186.5 0 159.1 0c-26.5 0-48 21.5-48 48S133.5 96 159.1 96z"/>
</>],
['solid',<>
	<path d="M159.1 96c26.5 0 48-21.5 48-48S186.5 0 159.1 0S111.1 21.5 111.1 48S133.5 96 159.1 96zM253.9 173.1C236.3 144.9 205.8 128 172.5 128H147.5C114.2 128 83.75 144.9 66.06 173.1L4.873 271C-4.502 286 .0605 305.8 15.03 315.1c15.03 9.375 34.75 4.812 44.1-10.19l32.62-52.19L47.1 384h40v96c0 17.67 14.33 32 31.1 32s32-14.33 32-32v-96h16v96c0 17.67 14.32 32 31.1 32s32-14.33 32-32v-96H271.1L228.2 252.7l32.63 52.22C266.9 314.7 277.4 320 288 320c5.781 0 11.66-1.562 16.94-4.859c14.97-9.375 19.53-29.11 10.16-44.09L253.9 173.1zM480 96c26.5 0 48-21.5 48-48S506.5 0 480 0s-47.1 21.5-47.1 48S453.5 96 480 96zM635.1 271l-61.19-97.95C556.3 144.9 525.8 128 492.5 128h-25.06c-33.28 0-63.72 16.86-81.41 45.13l-61.19 97.92c-9.375 14.98-4.812 34.72 10.16 44.09c15.03 9.375 34.75 4.812 44.09-10.19l32.62-52.19L368 384H408v96c0 17.67 14.33 32 32 32S472 497.7 472 480v-96h16v96c0 17.67 14.33 32 32 32s31.1-14.33 31.1-32v-96h40l-43.76-131.3l32.63 52.22C586.9 314.7 597.4 320 608 320c5.781 0 11.66-1.562 16.94-4.859C639.9 305.8 644.5 286 635.1 271z"/>
</>],
['thin',<>
	<path d="M480 104c28.71 0 52-23.29 52-52C532 23.29 508.7 0 480 0c-28.71 0-52 23.29-52 51.1C428 80.71 451.3 104 480 104zM480 16c19.85 0 36 16.15 36 35.1C516 71.85 499.9 88 480 88c-19.85 0-36-16.15-36-36C444 32.15 460.2 16 480 16zM567.3 173.8C556.5 145.1 530.2 128 500.3 128h-40.63c-29.84 0-56.19 17.97-67.03 45.75l-56.09 143.3c-1.625 4.125 .4062 8.766 4.531 10.38c4 1.609 8.75-.4062 10.34-4.531l56.09-143.3C416 157.1 436.5 144 459.7 144h40.63c23.22 0 43.69 13.97 52.16 35.59l56.09 143.3C609.8 326.1 612.8 328 616 328c.9687 0 1.969-.1719 2.906-.5469c4.125-1.609 6.156-6.25 4.531-10.38L567.3 173.8zM536.8 208.1c-1.562-4.125-6.156-6.297-10.31-4.672c-4.125 1.547-6.219 6.156-4.688 10.3L579.7 368h-199.3l57.88-154.3c1.531-4.141-.5625-8.75-4.688-10.3c-4.219-1.625-8.75 .5469-10.31 4.672l-61.91 165.1c-.9062 2.453-.5625 5.219 .9375 7.375C363.7 382.7 366.2 384 368.8 384H408v96c0 17.67 14.33 32 32 32C457.7 512 472 497.7 472 480v-96h16v96c0 17.67 14.33 32 32 32c17.67 0 31.1-14.33 31.1-32v-96h39.19c2.625 0 5.094-1.281 6.562-3.438c1.5-2.156 1.844-4.922 .9375-7.375L536.8 208.1zM456 480c0 8.822-7.178 16-16 16s-16-7.178-16-16v-96h32V480zM536 480c0 8.822-7.178 16-16 16s-16-7.178-16-16v-96h32V480zM180.3 128H139.7C109.8 128 83.5 145.1 72.66 173.8L16.56 317.1c-1.625 4.125 .4062 8.766 4.531 10.38c4 1.609 8.75-.4062 10.34-4.531l56.1-143.3C96 157.1 116.5 144 139.7 144h40.63c23.22 0 43.69 13.97 52.16 35.59l56.09 143.3C289.8 326.1 292.8 328 296 328c.9687 0 1.969-.1719 2.906-.5469c4.125-1.609 6.156-6.25 4.531-10.38L247.3 173.8C236.5 145.1 210.2 128 180.3 128zM216.8 208.1C215.2 203.9 210.6 201.8 206.5 203.4C202.3 204.9 200.3 209.5 201.8 213.7L259.7 368H60.35L118.2 213.7C119.8 209.5 117.7 204.9 113.5 203.4C109.3 201.8 104.8 203.9 103.2 208.1l-61.91 165.1c-.9062 2.453-.5625 5.219 .9375 7.375C43.72 382.7 46.19 384 48.81 384h39.19v96c0 17.67 14.33 32 31.1 32c17.67 0 32-14.33 32-32v-96h16v96c0 17.67 14.33 32 31.1 32c17.67 0 32-14.33 32-32v-96h39.19c2.625 0 5.094-1.281 6.562-3.438c1.5-2.156 1.844-4.922 .9375-7.375L216.8 208.1zM136 480c0 8.822-7.178 16-16 16s-16-7.178-16-16v-96h32V480zM216 480c0 8.822-7.178 16-16 16s-16-7.178-16-16v-96h32V480zM160 104c28.71 0 52-23.29 52-52C212 23.29 188.7 0 159.1 0C131.3 0 108 23.29 108 51.1C108 80.71 131.3 104 160 104zM160 16c19.85 0 36 16.15 36 35.1c0 19.85-16.15 36-36 36s-36-16.15-36-36C124 32.15 140.2 16 160 16z"/>
</>],

]);

const PeopleDress: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PeopleDress.displayName = "PeopleDress";

export default PeopleDress;
