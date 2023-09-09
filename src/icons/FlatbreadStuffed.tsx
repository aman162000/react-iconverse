
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M456.7 76.63c-11.83-15.53-34.88-16.94-48.68-3.139L73.49 408.1c-13.8 13.8-12.38 36.85 3.141 48.68c106.3 81.02 258.8 72.96 355.9-24.18C529.7 335.4 537.8 182.9 456.7 76.63zM240 448C231.2 448 224 440.8 224 432c0-8.838 7.165-16 16-16S256 423.2 256 432C256 440.8 248.8 448 240 448zM272 384c-8.836 0-16-7.164-16-16c0-8.838 7.165-16 16-16S288 359.2 288 368C288 376.8 280.8 384 272 384zM304 448c-8.836 0-16-7.164-16-16c0-8.838 7.165-16 16-16S320 423.2 320 432C320 440.8 312.8 448 304 448z"/><path className="fa-secondary" d="M137.1 201.1C107.6 230.6 104.2 276.3 126.7 309.6L245.6 190.7C231.2 180.9 214.5 176 197.8 176C175.8 176 153.9 184.4 137.1 201.1zM341.2 44.9c-10.54 2.701-21.43 5.576-28.83 4.27c-7.926-1.307-18.03-7.75-27.79-14.02C269.4 25.3 251.9 14.1 232.9 16.27C213.4 18.54 200.1 33.76 188.5 47.17C181.5 55.18 174.2 63.54 167.4 66.68C160.8 69.82 149.8 70.17 139.2 70.52C100 71.82 72.87 74.79 70.6 139.1C70.17 149.6 69.82 160.8 66.77 167.3C63.46 174.1 55.19 181.3 47.08 188.4C33.67 200 18.54 213.2 16.28 232.9C14.1 251.8 25.31 269.2 35.15 284.6c6.27 9.756 12.71 19.69 14.11 27.7c1.307 7.402-1.568 18.29-4.355 28.74c-4.352 16.8-9.193 35.77-1.553 53.72c2.242-3.289 4.662-6.479 7.52-9.336l53.14-53.14C88.69 311.1 80 287.6 80 261.8c0-31.46 12.25-61.03 34.5-83.28C136.7 156.3 166.3 144 197.8 144c25.87 0 50.22 8.688 70.52 24.01l117.1-117.1c2.877-2.875 6.014-5.393 9.301-7.641C376.9 35.74 357.9 40.47 341.2 44.9z"/>
</>],
['light',<>
	<path d="M468.8 86.78c-9.541-14.95-25.54-22.79-41.66-22.79c-12.44 0-24.96 4.655-34.63 14.33l-16.36 16.36c-13.84-9.17-30.27-14.71-48.1-14.71c-48.53 0-87.1 39.47-87.1 88.01c0 17.83 5.531 34.26 14.72 48.09l-123.3 123.3c-11.9-13.93-19.47-31.62-19.47-51.34c0-44.11 35.88-80.01 79.1-80.01c8.844 0 16-7.156 16-16c0-8.846-7.156-16-16-16c-61.75 0-111.1 50.25-111.1 112c0 28.54 11.21 54.17 28.87 73.95l-30.52 30.52c-22.22 22.22-18.05 59.39 8.438 76.3C131.1 497.6 183.7 512 235.4 512c70.79 0 141.6-26.1 195.6-81.02C524.5 337.5 537 193.8 468.8 86.78zM328 111.1c8.938 0 17.26 2.305 24.75 6.059l-74.62 74.63c-3.773-7.467-6.125-15.76-6.125-24.69C272 137.1 297.1 111.1 328 111.1zM408.4 408.4c-46.2 46.2-107.6 71.65-172.1 71.65c-46.78 0-92.22-13.22-131.4-38.22c-6.088-3.887-7.562-9.658-7.9-12.75c-.334-3.055-.1426-8.926 4.871-13.94l314.1-314.1c4.113-4.113 8.801-4.977 12.01-4.977c5.996 0 11.48 2.992 14.68 8.006C502.9 199.8 488.9 327.8 408.4 408.4zM240 383.1c-8.836 0-16 7.164-16 16c0 8.836 7.161 16.01 15.1 16.01s16-7.17 16-16.01C256 391.2 248.8 383.1 240 383.1zM304 383.1c-8.838 0-16 7.164-16 16c0 8.836 7.159 16.01 15.1 16.01c8.836 0 16-7.17 16-16.01C320 391.2 312.8 383.1 304 383.1zM272 319.1c-8.836 0-16 7.164-16 16c0 8.836 7.161 16.01 15.1 16.01s16-7.173 16-16.01C288 327.2 280.8 319.1 272 319.1zM65.04 309.6C63.13 298.6 56.01 287.5 48.44 275.7C39.69 261.1 30.66 247.8 32.2 234.7c1.531-13.47 13.62-24 25.4-34.27c9.25-8.047 18.81-16.38 23.69-26.41c4.281-9.172 4.75-21.31 5.312-34.39c1.812-51.39 16.81-51.91 53.09-53.13c12.22-.3906 24.88-.7969 34.41-5.297c9.967-4.609 18.34-14.24 26.44-23.56c10.25-11.77 20.84-23.92 34.16-25.47c13.56-1.453 27.56 7.578 41.25 16.44c11.09 7.109 22.56 14.48 33.69 16.33c10.69 1.875 22.87-1.266 35.69-4.562c11.59-3.078 24.78-6.547 36.03-4.656c8.656 1.453 16.97-4.375 18.44-13.13c1.469-8.719-4.406-16.97-13.12-18.44c-18.09-2.984-35.5 1.578-50.25 5.469c-7 1.781-17.78 4.359-21.38 3.766c-4.779-.7969-15.03-7.359-21.75-11.69c-16.66-10.77-37.5-24.02-62.25-21.31C205.4 3.324 189.3 21.76 176.4 36.64C171.9 41.78 164.4 50.41 160.6 52.19C156.9 53.91 145.9 54.25 138.6 54.5C94.22 55.98 57.29 63.33 54.57 139.6c-.2813 6.969-.7187 17.52-2.156 20.61C50.51 164.2 42.47 171.2 36.51 176.4C21.73 189.2 3.352 205.2 .3828 231C-2.43 255.4 10.82 276.2 22.16 293.1c4.688 7.328 10.53 16.44 11.34 21.14c.6875 3.953-2.281 15.14-4.156 22.17c-3.625 14.05-8.188 31.53-5.062 49.46c1.344 7.783 8.094 13.27 15.72 13.27c.9062 0 1.844-.0781 2.75-.2344c8.719-1.516 14.56-9.799 13.03-18.5c-1.906-11.11 1.375-23.74 4.594-36.11C63.6 333 66.94 320.4 65.04 309.6z"/>
</>],
['regular',<>
	<path d="M240 376c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24s24-10.75 24-24C264 386.7 253.3 376 240 376zM336 344c-13.25 0-24 10.74-24 24c0 13.25 10.75 24 24 24s24-10.75 24-24C360 354.7 349.3 344 336 344zM468.8 86.78c-9.541-14.95-25.54-22.79-41.66-22.79c-2.604 0-5.2 .3389-7.782 .751c-6.09-8.76-13.33-16.66-23.31-21.15c-18.2-8.273-37.71-3.221-54.79 1.309c-10.54 2.701-21.43 5.576-28.83 4.27c-7.926-1.307-18.03-7.75-27.79-14.02C269.4 25.3 251.9 14.1 232.9 16.27C213.4 18.54 200.1 33.76 188.5 47.17C181.5 55.18 174.2 63.54 167.4 66.68C160.8 69.82 149.8 70.17 139.2 70.52C100 71.82 72.87 74.79 70.6 139.1C70.17 149.6 69.82 160.8 66.77 167.3C63.46 174.1 55.19 181.3 47.08 188.4C33.67 200 18.54 213.2 16.28 232.9C14.1 251.8 25.31 269.2 35.15 284.6c6.27 9.756 12.71 19.69 14.11 27.7c1.307 7.402-1.568 18.29-4.355 28.74c-4.443 17.16-9.582 36.58-1.223 54.87c4.498 9.996 12.4 17.26 21.17 23.36c-2.988 18.59 4.569 38.38 21.95 49.47C131.1 497.6 183.7 512 235.4 512c70.79 0 141.6-27 195.6-81.02C524.5 337.5 537 193.8 468.8 86.78zM192 192c11.51 0 22.39 2.355 32.61 6.068C224.5 196 224 194.1 224 192c0-53.02 42.98-96 96-96c15.88 0 30.52 4.305 43.6 11.21l-24.31 24.31C333.2 129.5 326.8 128 320 128c-35.29 0-64 28.71-64 64c0 6.812 1.475 13.18 3.52 19.29L120.1 350.7C105.4 333.9 96 312.2 96 288C96 234.1 138.1 192 192 192zM397 397C353.9 440.2 296.5 464 235.4 464c-43.73 0-86.51-14.24-123.1-37.6l314.1-314.1C426.6 112.1 426.7 112 427.1 112l1.197 .6152C485.4 202.2 472.3 321.8 397 397z"/>
</>],
['solid',<>
	<path d="M137.1 201.1C107.6 230.6 104.2 276.3 126.7 309.6L245.6 190.7C231.2 180.9 214.5 176 197.8 176C175.8 176 153.9 184.4 137.1 201.1zM80 261.8c0-31.46 12.25-61.03 34.5-83.28C136.7 156.3 166.3 144 197.8 144c25.87 0 50.22 8.688 70.52 24.01l117.1-117.1c2.877-2.875 6.014-5.393 9.301-7.641C376.9 35.74 357.9 40.47 341.2 44.9c-10.54 2.701-21.43 5.576-28.83 4.27c-7.926-1.307-18.03-7.75-27.79-14.02C269.4 25.3 251.9 14.1 232.9 16.27C213.4 18.54 200.1 33.76 188.5 47.17C181.5 55.18 174.2 63.54 167.4 66.68C160.8 69.82 149.8 70.17 139.2 70.52C100 71.82 72.87 74.79 70.6 139.1C70.17 149.6 69.82 160.8 66.77 167.3C63.46 174.1 55.19 181.3 47.08 188.4C33.67 200 18.54 213.2 16.28 232.9C14.1 251.8 25.31 269.2 35.15 284.6c6.27 9.756 12.71 19.69 14.11 27.7c1.307 7.402-1.568 18.29-4.355 28.74c-4.352 16.8-9.193 35.77-1.553 53.72c2.242-3.289 4.662-6.479 7.52-9.336l53.14-53.14C88.69 311.1 80 287.6 80 261.8zM456.7 76.63c-11.83-15.53-34.88-16.94-48.68-3.139L73.49 408.1c-13.8 13.8-12.38 36.85 3.141 48.68c106.3 81.02 258.8 72.96 355.9-24.18C529.7 335.4 537.8 182.9 456.7 76.63zM240 448C231.2 448 224 440.8 224 432c0-8.838 7.165-16 16-16S256 423.2 256 432C256 440.8 248.8 448 240 448zM272 384c-8.836 0-16-7.164-16-16c0-8.838 7.165-16 16-16S288 359.2 288 368C288 376.8 280.8 384 272 384zM304 448c-8.836 0-16-7.164-16-16c0-8.838 7.165-16 16-16S320 423.2 320 432C320 440.8 312.8 448 304 448z"/>
</>],
['thin',<>
	<path d="M24.22 233.8C26.13 217.4 39.47 205.8 52.41 194.5c8.25-7.172 17.59-15.28 21.53-23.72C77.75 162.7 78.13 150.9 78.5 139.4c1.219-36.63 1.969-58.75 62-60.86c11-.4531 22.41-.9219 30.28-4.609c8.312-4.031 16.09-12.97 23.62-21.62c11.19-12.88 22.78-26.19 39.38-28.09c16.12-1.891 31.31 7.953 47.19 18.09c10.09 6.469 20.53 13.17 29.94 14.8c9.219 1.594 20.91-1.484 32.56-4.594c16.44-4.297 33.44-8.75 49.13-1.578c3.938 1.797 8.75 .0625 10.59-3.953s.0625-8.766-3.969-10.61c-20.66-9.438-42.34-3.859-60.25 .7813c-8.688 2.328-19.53 5.203-25.28 4.203c-6.25-1.094-15.31-6.906-25.09-13.16c-16.41-10.5-35.16-22.2-56.63-19.89c-22.78 2.625-37.66 19.75-49.63 33.5C176.2 48.92 169.2 56.95 163.9 59.52C159.1 61.78 148.8 62.2 138.8 62.61C70.28 65.03 63.94 95.75 62.5 139C62.19 148.3 61.84 158.9 59.44 164c-2.5 5.375-10.84 12.61-17.56 18.45c-13.78 12-30.94 26.92-33.53 49.52c-2.531 21.94 10 41.36 20.06 56.95c5.562 8.641 11.84 18.44 12.88 24.86c.9687 5.5-1.625 15.62-4.094 25.39c-4.656 17.45-10.41 39.19-.875 60.14C37.66 402.3 40.56 404 43.59 404c1.125 0 2.25-.2344 3.312-.7187c4.031-1.828 5.812-6.578 3.969-10.59c-7.156-15.75-2.438-33.64 2-50.38C55.69 331.3 58.63 319.9 57.06 311.1C55.5 301.5 48.59 290.7 41.88 280.3C32.72 266.1 22.38 250 24.22 233.8zM456.7 76.63C450.4 68.27 440.7 64 431 64c-8.293 0-16.62 3.129-22.99 9.496l-42.6 42.6C345.4 98.18 320.1 88 293.1 88c-29.12 0-56.53 11.34-77.13 31.95c-41.05 41.05-42.04 106.7-3.82 149.5L73.49 408.1c-13.8 13.8-12.38 36.85 3.141 48.68C124.1 493.6 182.9 512 240.8 512c69.42 0 138.8-26.48 191.8-79.44C529.7 335.4 537.8 182.9 456.7 76.63zM227.3 131.3C244.8 113.7 268.2 104 293.1 104c22.8 0 44.1 8.512 61.07 23.42L223.4 258.1C191.5 221.6 192.4 166.1 227.3 131.3zM421.2 421.2C373 469.5 308.9 496 240.8 496c-55.6 0-110.4-18.46-154.4-51.99c-3.736-2.85-5.973-7.049-6.293-11.83c-.3223-4.791 1.416-9.461 4.77-12.81L419.4 84.81C422.5 81.71 426.6 80 431 80c5.172 0 9.896 2.307 12.96 6.334C520.1 187.3 511.2 331.3 421.2 421.2zM240 415.1C231.2 415.1 224 423.2 224 432C224 440.8 231.2 448 240 448s16-7.164 16-16C256 423.2 248.8 415.1 240 415.1zM304 415.1C295.2 415.1 288 423.2 288 432c0 8.836 7.164 16 16 16s16-7.164 16-16C320 423.2 312.8 415.1 304 415.1zM272 351.1C263.2 351.1 256 359.2 256 368c0 8.836 7.164 16 16 16s16-7.164 16-16C288 359.2 280.8 351.1 272 351.1zM139.2 205.1C143.3 204.2 145.1 199.5 143.3 195.5c-1.781-4.031-6.375-5.891-10.56-4.125C100.7 205.3 80 237 80 272c0 19.25 6.094 37.52 17.62 52.81C99.19 326.9 101.6 328 104 328c1.688 0 3.375-.5313 4.812-1.609c3.531-2.656 4.25-7.672 1.562-11.2C100.1 302.7 96 287.8 96 272C96 243.4 112.1 217.5 139.2 205.1z"/>
</>],

]);

const FlatbreadStuffed: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FlatbreadStuffed.displayName = "FlatbreadStuffed";

export default FlatbreadStuffed;
