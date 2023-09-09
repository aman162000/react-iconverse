
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M384 32.01L159.1 32C71.62 32 0 103.6 0 191.1l.025 95.99l543.9-.0049l.0313-95.98C544 103.6 472.4 32.01 384 32.01zM176.3 170.4l-19.75 19.37l4.75 27.25c.7498 4.875-4.375 8.625-8.75 6.25l-24.5-12.87L103.5 223.2C99.27 225.6 94.02 221.9 94.77 216.1l4.75-27.25l-19.75-19.37C76.15 166.9 78.15 160.9 83.02 160.2L110.4 156.2l12.25-24.87c2.125-4.5 8.625-4.375 10.62 0L145.5 156.2L172.9 160.2C177.9 160.9 179.8 166.9 176.3 170.4zM320.3 170.4l-19.75 19.37l4.75 27.25c.7498 4.875-4.375 8.625-8.75 6.25L272 210.4l-24.5 12.87C243.3 225.6 238 221.9 238.8 216.1L243.5 189.7l-19.75-19.37c-3.625-3.5-1.625-9.498 3.25-10.12L254.4 156.2l12.25-24.87c2.125-4.5 8.625-4.375 10.62 0L289.5 156.2l27.37 4C321.9 160.9 323.8 166.9 320.3 170.4zM464.3 170.4l-19.75 19.37l4.75 27.25c.7498 4.875-4.375 8.625-8.75 6.25l-24.5-12.87l-24.5 12.87c-4.25 2.375-9.5-1.375-8.75-6.25l4.75-27.25l-19.75-19.37c-3.625-3.5-1.625-9.498 3.25-10.12l27.37-4l12.25-24.87c2.125-4.5 8.625-4.375 10.62 0l12.25 24.87l27.37 4C465.9 160.9 467.8 166.9 464.3 170.4z"/><path className="fa-secondary" d="M624 319.1L592 319.1c-8.799 0-15.1 7.199-15.1 15.1v63.99c0 8.748-7.25 15.1-15.1 15.1c-8.75 0-15.1-7.25-15.1-15.1l-.0313-111.1L.025 287.1v159.1c0 17.6 14.4 31.1 31.1 31.1L95.98 479.1c17.6 0 32.04-14.4 32.04-32v-63.98l191.1-.0169v63.99c0 17.6 14.36 32 31.96 32l64.04 .013c17.6 0 31.1-14.4 31.1-31.1l-.0417-96.01l32.04 .0006v43.25c0 41.79 29.91 80.03 71.48 84.35C599.3 484.5 640 446.9 640 399.1v-63.98C640 327.2 632.8 319.1 624 319.1z"/>
</>],
['light',<>
	<path d="M608 256h-32c-17.67 0-31.91 14.34-31.91 32.01L544 368c0 8.824-7.178 16-16 16S512 376.8 512 368V192c0-88.37-71.63-160-160-160L160.1 32.04c-88.37 0-160 71.63-160 159.1L0 416c0 35.29 28.71 64 64 64l32.08-.0078C131.4 479.1 160 451.3 160 416l.0625-31.98h128L288 416c0 35.29 28.79 63.99 64.08 63.99L384 480c26.96 0 50.09-16.76 59.5-40.41c18.17 21.92 43.93 36.87 72.93 39.82C520.3 479.8 524.2 480 527.1 480C589.8 480 640 429.8 640 368V288C640 270.3 625.7 256 608 256zM32 192c0-70.63 57.38-128 128-128h192c70.63 0 128 57.38 128 128v64H32V192zM608 368c0 44.12-35.88 80-80 80c-2.752 0-5.527-.1406-8.338-.4258C478 443.3 448 405.1 448 363.3l.0833-11.3L416 352v64c0 17.6-14.4 32-32 32h-32c-17.6 0-32-14.4-32-32v-64H128v64c0 17.6-14.4 32-32 32H64c-17.6 0-32-14.4-32-32V288h448v80c0 26.5 21.5 48 48 48s48-21.5 48-48V288h32V368zM176.1 160H160.1v-16c0-8.844-7.156-16-15.1-16s-15.1 7.156-15.1 16v16H112.1c-8.844 0-15.1 7.156-15.1 16s7.154 16 15.1 16h15.1v16c0 8.844 7.156 16 15.1 16s15.1-7.156 15.1-16v-16H176.1c8.842 0 15.1-7.156 15.1-16S184.1 160 176.1 160zM288.1 160h-15.1v-16c0-8.844-7.154-16-15.1-16c-8.842 0-15.1 7.156-15.1 16v16h-15.1c-8.842 0-15.1 7.156-15.1 16s7.154 16 15.1 16h15.1v16c0 8.844 7.154 16 15.1 16c8.844 0 15.1-7.156 15.1-16v-16h15.1c8.842 0 15.1-7.156 15.1-16S296.9 160 288.1 160zM400.1 160h-15.1v-16c0-8.844-7.156-16-15.1-16s-15.1 7.156-15.1 16v16h-15.1c-8.842 0-15.1 7.156-15.1 16s7.156 16 15.1 16h15.1v16c0 8.844 7.156 16 15.1 16s15.1-7.156 15.1-16v-16h15.1c8.844 0 15.1-7.156 15.1-16S408.9 160 400.1 160z"/>
</>],
['regular',<>
	<path d="M189 144.2L161.6 140.2L149.4 115.4c-2.125-4.375-8.5-4.5-10.62 0l-12.25 24.88L99.15 144.2c-4.875 .625-6.875 6.75-3.375 10.13l19.87 19.38L110.9 200.1c-.75 4.875 4.375 8.625 8.75 6.25l24.5-12.88l24.5 12.88c4.25 2.375 9.5-1.375 8.625-6.25l-4.625-27.25l19.75-19.38C195.8 150.9 193.9 144.9 189 144.2zM317 144.2L289.6 140.2L277.4 115.4c-2.125-4.375-8.5-4.5-10.62 0L254.5 140.2L227.1 144.2c-4.875 .625-6.875 6.75-3.375 10.13l19.87 19.38L238.9 200.1c-.75 4.875 4.375 8.625 8.75 6.25l24.5-12.88l24.5 12.88c4.25 2.375 9.5-1.375 8.625-6.25L300.6 173.7l19.75-19.38C323.8 150.9 321.9 144.9 317 144.2zM445 144.2L417.6 140.2l-12.25-24.88c-2.125-4.375-8.5-4.5-10.62 0l-12.25 24.88l-27.37 4c-4.875 .625-6.875 6.75-3.375 10.13l19.87 19.38l-4.75 27.25c-.75 4.875 4.375 8.625 8.75 6.25l24.5-12.88l24.5 12.88c4.25 2.375 9.5-1.375 8.625-6.25l-4.625-27.25l19.75-19.38C451.8 150.9 449.9 144.9 445 144.2zM624 319.1l-15.1 .0222c-8.75 0-15.1 7.25-15.1 16v72c0 13.25-10.75 24-23.1 24c-13.25 0-23.1-10.75-23.1-24v-216c0-88.38-71.62-159.1-159.1-159.1L159.1 32C71.62 32 0 103.6 0 191.1l.025 255.1c0 17.75 14.25 31.1 31.1 31.1L128 480c17.75 0 31.1-14.25 31.1-32l-.0625-64.02H287.1l.0625 64.02C288 465.7 302.3 480 320 480l95.1-.0339c17.75 0 31.1-14.25 31.1-31.1v-63.97h47.1v19.75c0 37.5 26.1 72 64.37 75.88C562.9 479.9 565.5 480 568 480C607.8 480 640 447.7 640 407.1v-72.02C640 327.2 632.8 319.1 624 319.1zM496 335.1h-63.1c-17.75 0-31.1 14.25-31.1 32v64H336v-64c0-17.75-14.25-32-31.1-32H144c-17.75 0-31.1 14.26-31.1 32.01v63.99H48.02V287.1h447.1V335.1zM496 239.1H48.02V191.1c0-61.88 50.12-112 111.1-112h223.1c61.75 0 111.1 50.25 111.1 112V239.1z"/>
</>],
['solid',<>
	<path d="M544 191.1c0-88.37-71.62-159.1-159.1-159.1L159.1 32C71.62 32 0 103.6 0 191.1l.025 63.98h543.1V191.1zM176.3 170.4l-19.75 19.37l4.75 27.25c.7498 4.875-4.375 8.625-8.75 6.25l-24.5-12.87L103.5 223.2C99.27 225.6 94.02 221.9 94.77 216.1l4.75-27.25l-19.75-19.37C76.15 166.9 78.15 160.9 83.02 160.2L110.4 156.2l12.25-24.87c2.125-4.5 8.625-4.375 10.62 0L145.5 156.2L172.9 160.2C177.9 160.9 179.8 166.9 176.3 170.4zM320.3 170.4l-19.75 19.37l4.75 27.25c.7498 4.875-4.375 8.625-8.75 6.25L272 210.4l-24.5 12.87C243.3 225.6 238 221.9 238.8 216.1L243.5 189.7l-19.75-19.37c-3.625-3.5-1.625-9.498 3.25-10.12L254.4 156.2l12.25-24.87c2.125-4.5 8.625-4.375 10.62 0L289.5 156.2l27.37 4C321.9 160.9 323.8 166.9 320.3 170.4zM464.3 170.4l-19.75 19.37l4.75 27.25c.7498 4.875-4.375 8.625-8.75 6.25l-24.5-12.87l-24.5 12.87c-4.25 2.375-9.5-1.375-8.75-6.25l4.75-27.25l-19.75-19.37c-3.625-3.5-1.625-9.498 3.25-10.12l27.37-4l12.25-24.87c2.125-4.5 8.625-4.375 10.62 0l12.25 24.87l27.37 4C465.9 160.9 467.8 166.9 464.3 170.4zM624 319.1L592 319.1c-8.799 0-15.1 7.199-15.1 15.1v63.99c0 8.748-7.25 15.1-15.1 15.1c-8.75 0-15.1-7.25-15.1-15.1l-.0313-111.1L.025 287.1v159.1c0 17.6 14.4 31.1 31.1 31.1L95.98 479.1c17.6 0 32.04-14.4 32.04-32v-63.98l191.1-.0169v63.99c0 17.6 14.36 32 31.96 32l64.04 .013c17.6 0 31.1-14.4 31.1-31.1l-.0417-96.01l32.04 .0006v43.25c0 41.79 29.91 80.03 71.48 84.35C599.3 484.5 640 446.9 640 399.1v-63.98C640 327.2 632.8 319.1 624 319.1z"/>
</>],
['thin',<>
	<path d="M176 167.1H152V143.1c0-4.406-3.594-8-7.1-8c-4.406 0-7.1 3.594-7.1 8v24H112c-4.406 0-7.1 3.594-7.1 8s3.594 8 7.1 8h23.1v24c0 4.406 3.594 8 7.1 8c4.406 0 7.1-3.594 7.1-8V183.1h23.1c4.406 0 7.1-3.594 7.1-8S180.4 167.1 176 167.1zM304 167.1H280V143.1c0-4.406-3.594-8-7.1-8S264 139.6 264 143.1v24H240c-4.406 0-7.1 3.594-7.1 8s3.594 8 7.1 8h23.1v24c0 4.406 3.594 8 7.1 8s7.1-3.594 7.1-8V183.1h23.1c4.406 0 7.1-3.594 7.1-8S308.4 167.1 304 167.1zM432 167.1h-23.1V143.1c0-4.406-3.594-8-7.1-8c-4.406 0-7.1 3.594-7.1 8v24h-23.1c-4.406 0-7.1 3.594-7.1 8s3.594 8 7.1 8h23.1v24c0 4.406 3.594 8 7.1 8c4.406 0 7.1-3.594 7.1-8V183.1h23.1c4.406 0 7.1-3.594 7.1-8S436.4 167.1 432 167.1zM632 319.1c-4.418 0-7.1 3.582-7.1 8v94.23c0 20.88-15.23 39.56-36.01 41.58c-23.84 2.316-43.98-16.43-43.98-39.81V191.1c0-88.36-71.64-159.1-159.1-159.1L159.1 32C71.63 32 0 103.6 0 191.1l.025 240c0 26.4 21.6 48 47.1 48h31.1c26.4 0 47.1-21.6 47.1-48v-48.02l223.1 .0339v47.99c0 26.4 21.6 48 47.1 48h31.1c26.4 0 47.1-21.6 47.1-48v-87.99c0-4.418-3.582-8-7.1-8s-7.1 3.582-7.1 8v87.99c0 17.67-14.33 32-31.1 32h-31.1c-17.67 0-31.1-14.33-31.1-32v-63.99l-255.1-.0059v63.99c0 17.67-14.33 32-31.1 32H48.02c-17.67 0-31.1-14.33-31.1-32V271.1h511.1v150c0 28.46 20.4 53.86 48.62 57.48C610.8 483.9 640 457.3 640 423.1v-96C640 323.6 636.4 319.1 632 319.1zM528 255.1H16.02V192c0-79.53 64.47-144 143.1-144h224c79.52 0 143.1 64.46 143.1 143.1V255.1z"/>
</>],

]);

const Republican: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Republican.displayName = "Republican";

export default Republican;