
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M196.6 195.9c-8.375-25-25.38-46-48.12-59.38c-17.25-10-37.63-11.25-56.12-3.25c-18.88 8-32.88 24.88-37.5 44.88l-18.37 80.13c-4.625 20 .7506 41.25 14.37 56.75l67.25 75.88l10.12 92.63C130 499.8 143.8 512 160 512c1.25 0 2.25-.125 3.5-.25c17.62-1.875 30.25-17.62 28.25-35.25l-10-92.75c-1.5-13-7-25.12-15.62-35l-43.37-49l17.62-70.38l6.876 20.38c4 12.5 11.87 23.5 24.5 32.63l51 32.5C223.1 315.1 223.6 315.2 224 315.4l.001-75.38l-16.12-10.25L196.6 195.9zM46.26 358.1l-44 110c-6.5 16.38 1.5 35 17.88 41.63c16.75 6.5 35.12-1.75 41.62-17.88l27.62-69.13l-2-18.25L46.26 358.1zM603.5 258.3l-18.5-80.13c-4.625-20-18.62-36.88-37.5-44.88c-18.5-8-38.1-6.75-56.12 3.25c-22.62 13.38-39.62 34.5-48.12 59.38l-11.25 33.88l-15.1 10.25L416 315.4c.3711-.1992 .9043-.2949 1.246-.5078l51-32.5c12.62-9.125 20.5-20 24.5-32.63l6.875-20.38l17.63 70.38l-43.37 49c-8.625 9.875-14.12 22-15.62 35l-10 92.75c-2 17.62 10.75 33.38 28.25 35.25C477.7 511.9 478.7 512 479.1 512c16.12 0 29.1-12.12 31.75-28.5l10.12-92.63L589.1 315C602.7 299.5 608.1 278.3 603.5 258.3zM637.7 468.1l-43.1-110l-41.13 46.38l-2 18.25l27.62 69.13C583.2 504.4 595.2 512 607.1 512c3.998 0 7.998-.75 11.87-2.25C636.2 503.1 644.2 484.5 637.7 468.1z"/><path className="fa-secondary" d="M128 0C101.5 0 80.01 21.5 80.01 47.1s21.5 47.1 47.1 47.1s47.1-21.5 47.1-47.1S154.5 0 128 0zM511.1 0c-26.5 0-48 21.5-48 47.1s21.5 47.1 47.1 47.1s47.1-21.5 47.1-47.1S538.5 0 511.1 0zM415.1 144c0-8.75-7.25-16-16-16H240c-8.75 0-16 7.25-16 16L224 315.4C228.6 317.9 235.3 319.5 240 319.9h159.1C404.7 319.5 411.4 317.9 416 315.4L415.1 144z"/>
</>],
['light',<>
	<path d="M503.1 112c30.88 0 56-25.12 56-56S534.9 0 503.1 0C473.1 0 448 25.12 448 56S473.1 112 503.1 112zM503.1 32c13.23 0 24 10.77 24 24s-10.77 24-24 24S480 69.23 480 56S490.8 32 503.1 32zM87.94 370.1c-7.703-4.453-17.47-1.734-21.83 5.953l-64 112c-4.391 7.672-1.719 17.45 5.953 21.83C10.57 511.3 13.3 512 15.99 512c5.562 0 10.95-2.891 13.91-8.062l63.1-112C98.28 384.3 95.61 374.5 87.94 370.1zM136 112C166.9 112 192 86.88 192 56S166.9 0 136 0c-30.88 0-56 25.12-56 56S105.1 112 136 112zM136 32C149.2 32 160 42.77 160 56S149.2 80 136 80s-24-10.77-24-24S122.8 32 136 32zM637.9 488.1l-64-112c-4.357-7.688-14.12-10.41-21.83-5.953c-7.672 4.375-10.34 14.16-5.953 21.83l63.1 112C613.1 509.1 618.4 512 624 512c2.688 0 5.422-.6719 7.922-2.109C639.6 505.5 642.3 495.7 637.9 488.1zM591.9 286.2l-12.09-107.9C576.6 149.6 552.4 128 523.5 128c-23.3 0-43.94 13.97-52.59 35.61l-26.22 57.72C437.8 236.4 427.8 249.3 416 260.1V176C416 149.5 394.5 128 368 128h-96C245.5 128 224 149.5 224 176v84.14c-11.83-10.83-21.85-23.72-28.7-38.81L169.1 163.6C160.4 141.1 139.8 128 116.5 128C87.63 128 63.43 149.6 60.19 178.3l-12.09 107.9C47.57 291 49.25 295.9 52.69 299.3l92.23 92.23l15.23 106.7C161.3 506.3 168.1 512 175.1 512c.75 0 1.516-.0469 2.281-.1562c8.75-1.25 14.83-9.359 13.58-18.11l-16-112c-.5-3.422-2.078-6.594-4.531-9.047L80.77 282.1L92 181.9C93.39 169.4 103.9 160 116.5 160c10.12 0 19.11 6.078 23.17 16.16l26.51 58.39C195.1 298.3 258.1 320 272 320h96c13.95 0 76.89-21.67 105.8-85.45l26.51-58.39C504.4 166.1 513.4 160 523.5 160c12.56 0 23.09 9.406 24.48 21.89l11.23 100.2l-90.54 90.56c-2.453 2.453-4.031 5.625-4.531 9.047l-16 112c-1.25 8.75 4.828 16.86 13.58 18.11C462.5 511.1 463.3 512 464 512c7.844 0 14.69-5.75 15.83-13.73l15.23-106.7l92.23-92.23C590.7 295.9 592.4 291 591.9 286.2zM384 272C384 280.8 376.8 288 368 288h-96C263.2 288 256 280.8 256 272v-96c0-8.828 7.175-16 16-16h95.1C376.8 159.1 384 167.2 384 176V272z"/>
</>],
['regular',<>
	<path d="M128 95.1c26.5 0 47.1-21.5 47.1-47.1S154.5 0 128 0S80.01 21.5 80.01 47.1S101.5 95.1 128 95.1zM511.1 95.1c26.5 0 47.1-21.5 47.1-47.1S538.5 0 511.1 0s-48 21.5-48 47.1S485.5 95.1 511.1 95.1zM599.1 250.6l-18.1-78.37c-4.25-17.37-16.75-31.1-33.5-39.37c-16.87-7.375-35.75-6.5-51.37 2.375c-25.62 14.37-40.37 47.5-46.87 66.12l-12.12 34.75c-.6249 1.625-1.75 3.125-3.375 4.25l-17.75 10.12V127.1c0-8.75-7.249-15.1-15.1-15.1H240c-8.749 0-15.1 7.25-15.1 15.1v122.5L206.3 240.4C204.6 239.2 203.4 237.7 202.8 236.1L190.6 201.4C184.1 182.7 169.4 149.6 143.8 135.2c-15.62-8.875-34.5-9.75-51.37-2.375C75.78 140.2 63.28 154.9 58.9 172.2L40.03 250.7C34.9 271.7 42.03 293.9 58.28 308.2l68.74 59.1c6.249 5.5 10.25 13.12 10.87 21.5l7.999 100.1c.8749 9.125 8.874 23.37 25.87 21.1c13.12-1.125 22.1-12.62 21.1-25.75l-8.749-109.2c-1.25-15.12-8.249-29.12-19.75-39.12L113.1 292.2L137.9 200.1c2.75 5.25 19.62 51.75 19.62 51.75c3.875 11.25 11.25 20.75 22.1 28.87l36.87 19.5c4.625 2.375 9.749 3.625 14.87 3.625h175.5c5.249 0 10.37-1.25 14.1-3.625l36.87-19.5c11.75-8.125 19.12-17.62 22.1-28.87c0 0 16.87-46.62 19.62-51.75l24.75 92.12l-52.24 45.5c-11.37 9.1-18.5 23.1-19.62 39.12l-8.874 109.1c-.9999 13.25 8.874 24.75 21.1 25.75c16.1 1.375 25.12-12.62 25.87-21.1l7.999-100.1c.625-8.375 4.625-16.12 10.87-21.5l68.74-59.87C597.1 293.9 604.1 271.7 599.1 250.6zM367.1 255.1H272L272 159.1h95.1L367.1 255.1zM638.2 478.9l-53.74-130.7l-38.25 33.37l47.5 115.6c4.999 12.12 18.87 18.12 31.25 13.12C637.3 505.2 643.2 491.2 638.2 478.9zM1.783 478.9c-4.999 12.37 .8749 26.37 13.12 31.37c12.37 4.1 26.37-.1 31.37-13.12l47.37-115.6l-38.25-33.37L1.783 478.9z"/>
</>],
['solid',<>
	<path d="M128 95.1c26.5 0 47.1-21.5 47.1-47.1S154.5 0 128 0S80.01 21.5 80.01 47.1S101.5 95.1 128 95.1zM511.1 95.1c26.5 0 47.1-21.5 47.1-47.1S538.5 0 511.1 0c-26.5 0-48 21.5-48 47.1S485.5 95.1 511.1 95.1zM603.5 258.3l-18.5-80.13c-4.625-20-18.62-36.88-37.5-44.88c-18.5-8-38.1-6.75-56.12 3.25c-22.62 13.38-39.62 34.5-48.12 59.38l-11.25 33.88l-15.1 10.25L415.1 144c0-8.75-7.25-16-16-16H240c-8.75 0-16 7.25-16 16L224 239.1l-16.12-10.25l-11.25-33.88c-8.375-25-25.38-46-48.12-59.38c-17.25-10-37.63-11.25-56.12-3.25c-18.88 8-32.88 24.88-37.5 44.88l-18.37 80.13c-4.625 20 .7506 41.25 14.37 56.75l67.25 75.88l10.12 92.63C130 499.8 143.8 512 160 512c1.25 0 2.25-.125 3.5-.25c17.62-1.875 30.25-17.62 28.25-35.25l-10-92.75c-1.5-13-7-25.12-15.62-35l-43.37-49l17.62-70.38l6.876 20.38c4 12.5 11.87 23.5 24.5 32.63l51 32.5c4.623 2.875 12.12 4.625 17.25 5h159.1c5.125-.375 12.62-2.125 17.25-5l51-32.5c12.62-9.125 20.5-20 24.5-32.63l6.875-20.38l17.63 70.38l-43.37 49c-8.625 9.875-14.12 22-15.62 35l-10 92.75c-2 17.62 10.75 33.38 28.25 35.25C477.7 511.9 478.7 512 479.1 512c16.12 0 29.1-12.12 31.75-28.5l10.12-92.63L589.1 315C602.7 299.5 608.1 278.3 603.5 258.3zM46.26 358.1l-44 110c-6.5 16.38 1.5 35 17.88 41.63c16.75 6.5 35.12-1.75 41.62-17.88l27.62-69.13l-2-18.25L46.26 358.1zM637.7 468.1l-43.1-110l-41.13 46.38l-2 18.25l27.62 69.13C583.2 504.4 595.2 512 607.1 512c3.998 0 7.998-.75 11.87-2.25C636.2 503.1 644.2 484.5 637.7 468.1z"/>
</>],
['thin',<>
	<path d="M384 128H256C238.3 128 224 142.3 224 160v128c0 17.67 14.33 32 32 32h128c17.67 0 32-14.33 32-32V160C416 142.3 401.7 128 384 128zM400 288c0 8.822-7.178 16-16 16H256C247.2 304 240 296.8 240 288V160c0-8.822 7.178-16 16-16h128c8.822 0 16 7.178 16 16V288zM512 104c28.71 0 52-23.29 52-52S540.7 0 511.1 0c-28.71 0-51.99 23.29-51.99 52S483.3 104 512 104zM512 16c19.85 0 36 16.15 36 36s-16.15 36-36 36c-19.85 0-36-16.15-36-36S492.2 16 512 16zM603.5 258.3l-18.5-80.13c-4.625-20-18.62-36.88-37.5-44.88c-26.92-11.64-48.97-.9277-56.12 3.25c-22.62 13.38-39.62 34.5-48.12 59.38l-8.721 26.28c-1.393 4.189 .875 8.717 5.064 10.11c4.193 1.396 8.729-.873 10.12-5.068l8.684-26.15c7.307-21.38 21.91-39.42 41.05-50.73c21.37-12.47 41.24-2.582 41.81-2.336c14.13 5.988 24.66 18.61 28.16 33.74l18.5 80.13c3.475 15.02-.5664 30.94-10.76 42.53l-67.25 75.88c-2.197 2.479-3.57 5.576-3.93 8.869l-10.13 92.67C494.1 489.9 488.2 496 480 496l-1.795-.1582c-4.23-.4531-8.027-2.533-10.69-5.855c-2.65-3.309-3.848-7.459-3.357-11.77l9.986-92.63c1.115-9.664 5.189-18.76 11.71-26.23l43.38-49c3.498-3.951 4.822-9.375 3.541-14.49l-16.75-66.88c-1.557-6.221-5.584-11.71-11.38-14.45c-2.893-1.363-4.594-1.188-6.752-1.121c-5.867 .1816-11.06 3.83-12.93 9.391L477.5 244.9c-3.051 9.627-9.143 17.64-17.84 23.96l-23.95 15.26c-2.307 1.469-3.701 4.012-3.701 6.746c0 6.314 6.973 10.14 12.3 6.746l23.94-15.26c12.62-9.125 20.5-20 24.5-32.63l6.875-20.38l17.63 70.38l-43.37 49c-8.625 9.875-14.12 22-15.62 35l-10 92.75c-2 17.62 10.75 33.38 28.25 35.25C477.7 511.9 478.7 512 479.1 512c16.12 0 29.1-12.12 31.75-28.5l10.12-92.63L589.1 315C602.7 299.5 608.1 278.3 603.5 258.3zM637.6 464.5l-46.13-115.5c-1.641-4.109-6.346-6.109-10.39-4.453c-4.094 1.625-6.094 6.281-4.453 10.39l46.11 115.5c3.781 9.516-.9062 20.39-10.33 24.22c-9.641 3.703-20.53-.9844-24.2-10.14l-28.63-79.25c-1.516-4.156-6.141-6.266-10.25-4.812c-4.156 1.516-6.314 6.094-4.812 10.25l28.73 79.52c5.422 13.45 18.53 21.69 32.38 21.69c4.219 0 8.516-.7656 12.67-2.375C635.9 502.4 644.6 482.2 637.6 464.5zM181.1 269.4C171.7 262.6 165.6 254.6 162.4 244.6L154.3 220.6c-1.525-4.523-5.893-7.318-10.66-7.193C134.3 213.6 126.2 220.1 123.9 229.2L107.2 295.9C105.9 300.1 107.3 306.4 110.8 310.4l43.3 48.92c6.592 7.547 10.67 16.64 11.77 26.19l10.01 92.84c.4844 4.262-.707 8.424-3.355 11.72c-2.643 3.297-6.438 5.359-10.59 5.803C161.9 495.8 160 495.1 160 496c-8.158 0-14.97-6.111-15.84-14.24l-10.12-92.63c-.3594-3.295-1.734-6.395-3.932-8.875L62.89 304.4c-10.24-11.65-14.27-27.57-10.79-42.61l18.37-80.1c3.504-15.14 14.03-27.76 28.26-33.79C99.29 147.7 118.1 137.9 140.4 150.3C159.7 161.7 174.3 179.7 181.4 200.9l8.73 26.28C191.6 231.4 196.1 233.7 200.3 232.3s6.463-5.92 5.07-10.11L196.6 195.9c-8.377-25-25.38-46-48.12-59.38c-7.24-4.195-29.25-14.88-56.12-3.25c-18.88 8-32.88 24.88-37.5 44.88l-18.37 80.13c-4.625 20 .7487 41.25 14.37 56.75l67.25 75.88l10.12 92.63C130 499.8 143.8 512 160 512c1.25 0 2.25-.125 3.5-.25c17.62-1.875 30.25-17.62 28.25-35.25l-10-92.75c-1.5-13-7-25.12-15.62-35l-43.37-49l17.62-70.38l6.876 20.38c4 12.5 11.87 23.5 24.5 32.63l23.96 15.27C201 301 207.1 297.2 207.1 290.9c0-2.732-1.396-5.275-3.701-6.742L181.1 269.4zM90.71 400.5c-4.141-1.438-8.734 .6719-10.25 4.812L51.95 484.3c-3.812 9.469-14.72 14.16-24.21 10.44c-9.531-3.859-14.22-14.73-10.45-24.23l46.13-115.5c1.641-4.109-.3594-8.766-4.453-10.39c-4.094-1.641-8.766 .3438-10.39 4.453l-46.14 115.5c-7 17.66 1.658 37.84 19.42 45.03c4.109 1.594 8.344 2.359 12.53 2.359c13.85 0 27-8.297 32.52-21.97l28.62-79.25C97.02 406.6 94.87 401.1 90.71 400.5zM127.1 104c28.71 0 52-23.29 52-52S156.7 0 128 0S75.99 23.29 75.99 52S99.28 104 127.1 104zM127.1 16c19.85 0 36 16.15 36 36s-16.15 36-36 36c-19.85 0-36-16.15-36-36S108.1 16 127.1 16z"/>
</>],

]);

const PeopleCarryBox: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

PeopleCarryBox.displayName = "PeopleCarryBox";

export default PeopleCarryBox;
