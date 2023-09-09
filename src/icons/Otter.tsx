
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M474.4 64.12C466.8 63.07 460 69.07 460 76.73c0 5.959 4.188 10.1 9.991 12.36C514.2 99.46 544 160 544 192v112c0 8.844-7.156 16-16 16S512 312.8 512 304V212c0-14.87-15.65-24.54-28.94-17.89c-28.96 14.48-47.83 42.99-50.51 74.88C403.7 285.6 384 316.3 384 352v32H224c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32H132.4c-14.46 0-27.37-9.598-31.08-23.57C97.86 283.5 96 269.1 96 256V254.4C101.1 255.3 106.3 256 111.7 256c10.78 0 21.45-2.189 31.36-6.436L160 242.3l16.98 7.271C186.9 253.8 197.6 256 208.3 256c7.176 0 14.11-.9277 20.83-2.426C241.7 292 277.4 320 320 320l36.56-.0366C363.1 294.7 377.1 272.7 396.2 256H320c0-25.73 17.56-31.61 32.31-32C369.8 223.8 384 209.6 384 192c0-17.67-14.31-32-32-32c-15.09 0-32.99 4.086-49.28 13.06C303.3 168.9 304 164.7 304 160.3v-16c0-1.684-.4238-3.248-.4961-4.912C313.2 133.9 320 123.9 320 112C320 103.2 312.8 96 304 96H292.7C274.6 58.26 236.3 32 191.7 32H128.3C83.68 32 45.44 58.26 27.33 96H16C7.164 96 0 103.2 0 112c0 11.93 6.816 21.93 16.5 27.43C16.42 141.1 16 142.7 16 144.3v16c0 19.56 5.926 37.71 16 52.86V256c0 123.7 100.3 224 224 224h160c123.9-1.166 224-101.1 224-226.2C639.9 156.9 567.8 76.96 474.4 64.12zM64 160.3v-16C64 108.9 92.86 80 128.3 80h63.32C227.1 80 256 108.9 256 144.3v16C256 186.6 234.6 208 208.3 208c-4.309 0-8.502-.8608-12.46-2.558L162.1 191.4c2.586-.3066 5.207-.543 7.598-1.631l8.314-3.777C186.9 182.3 192 174.9 192 166.7V160c0-6.723-5.996-12.17-13.39-12.17H141.4C133.1 147.8 128 153.3 128 160v6.701c0 8.15 5.068 15.6 13.09 19.25l8.314 3.777c2.391 1.088 5.012 1.324 7.598 1.631l-32.88 14.08C120.2 207.1 115.1 208 111.7 208C85.38 208 64 186.6 64 160.3z"/><path className="fa-secondary" d="M124.1 205.4l32.88-14.08C154.4 191.1 151.8 190.8 149.4 189.7l-8.314-3.777C133.1 182.3 128 174.9 128 166.7V160c0-6.723 5.996-12.17 13.39-12.17h37.21C186 147.8 192 153.3 192 160v6.701c0 8.15-5.068 15.6-13.09 19.25l-8.314 3.777c-2.391 1.088-5.012 1.324-7.598 1.631L195.9 205.4C199.8 207.1 204 208 208.3 208C234.6 208 256 186.6 256 160.3v-16C256 108.9 227.1 80 191.7 80H128.3C92.86 80 64 108.9 64 144.3v16C64 186.6 85.38 208 111.7 208C115.1 208 120.2 207.1 124.1 205.4zM224 128c8.836 0 16 7.162 16 16C240 152.8 232.8 160 224 160S208 152.8 208 144C208 135.2 215.2 128 224 128zM96 160C87.16 160 80 152.8 80 144C80 135.2 87.16 128 96 128s16 7.162 16 16C112 152.8 104.8 160 96 160zM356.6 319.1L320 320c-42.56 0-78.32-27.99-90.83-66.43C222.4 255.1 215.5 256 208.3 256C197.6 256 186.9 253.8 176.1 249.6L160 242.3L143 249.6C133.1 253.8 122.4 256 111.7 256C106.3 256 101.1 255.3 96 254.4V256c0 13.98 1.863 27.52 5.297 40.43C105 310.4 117.9 320 132.4 320H224c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32h128v-32C352 340.1 353.6 330.3 356.6 319.1C356.5 320 356.6 319.9 356.6 319.1z"/>
</>],
['light',<>
	<path d="M224 160c8.836 0 16-7.164 16-16C240 135.2 232.8 128 224 128S208 135.2 208 144C208 152.8 215.2 160 224 160zM141.1 182.1l8.314 3.777c6.668 3.029 14.52 3.029 21.18 0l8.314-3.777C186.9 178.5 192 171 192 162.9V156.2C192 149.4 186 144 178.6 144H141.4C133.1 144 128 149.4 128 156.2v6.701C128 171 133.1 178.5 141.1 182.1zM96 160c8.836 0 16-7.164 16-16C112 135.2 104.8 128 96 128S80 135.2 80 144C80 152.8 87.16 160 96 160zM474.4 64.12C473.8 64.04 473.2 64 472.6 64C465.8 64 460 69.65 460 76.73c0 5.959 4.188 10.1 9.991 12.36c44.73 10.49 77.5 51.87 73.71 100.6C542.4 205.9 536.6 221.6 528 235.1V208c0-11.17-5.688-21.34-15.19-27.22c-9.438-5.891-21.06-6.375-31.12-1.406C452.2 194.1 433.9 223.3 432.5 256h-63.75C394.9 255.6 416 234.3 416 208C416 181.5 394.5 160 368 160c-20.64 0-45.43 7.074-66.65 21.89C302.1 174.9 304 167.8 304 160.3v-16c0-1.684-.4238-3.248-.4961-4.912C313.2 133.9 320 123.9 320 112C320 103.2 312.8 96 304 96H292.7C274.6 58.26 236.3 32 191.7 32H128.3C83.68 32 45.44 58.26 27.33 96H16C7.164 96 0 103.2 0 112c0 11.93 6.816 21.93 16.5 27.43C16.42 141.1 16 142.7 16 144.3v16c0 19.56 5.926 37.71 16 52.86V256c0 123.7 100.3 224 224 224h157.9C538.8 480 640 378.8 640 253.8C639.9 156.9 567.8 76.96 474.4 64.12zM368 192C376.8 192 384 199.2 384 208c0 8.812-7.125 15.95-15.91 16c-6.918 .0801-36.74 2.842-45.19 32H320C308.7 256 299.3 249.9 293.6 241.1C307.5 203.4 345.6 192 368 192zM48 144.3C48 100 84.04 64 128.3 64h63.32C235.1 64 272 100 272 144.3v16C272 195.4 243.4 224 208.3 224C201.9 224 195.5 222.7 189.6 220.2L160 207.5L130.4 220.2C124.5 222.7 118.1 224 111.7 224C76.56 224 48 195.4 48 160.3V144.3zM111.7 256c10.78 0 21.45-2.189 31.36-6.436L160 242.3l16.98 7.271C186.9 253.8 197.6 256 208.3 256c18.59 0 35.63-5.723 50.3-14.91C266.2 268 290.7 288 320 288h56.91C361.6 305 352 327.3 352 352H269.1C270.8 346.1 272 341.6 272 336C272 309.5 250.5 288 224 288H112c-25.45 0-46.13-19.96-47.71-45.01C78.32 251 94.34 256 111.7 256zM416 447.9L256 448c-87.61 0-161.5-59.05-184.5-139.4C83.43 315.7 97.16 320 112 320l111.1 0c7.979 0 15.39 5.437 16.68 13.31C241.4 343.3 233.7 352 224 352l-63.17 0c-7.969 0-15.35 5.455-16.62 13.32C142.6 375.4 150.3 384 160 384h224v-32c0-35.35 28.65-64 64-64h16V259.8c0-22.08 12.25-41.91 32-51.78V336c0 22.31-15.3 41.12-35.96 46.47C452.1 384.3 448 390.6 448 397.9c0 10.67 10.18 18.15 20.49 15.42C502.7 404.3 528 373 528 336V282.5c1.369-.8613 2.906-1.408 4.137-2.49c24.63-21.66 40.88-54.49 43.47-87.81c1-12.88 .0859-25.47-2.525-37.49C594.9 182.2 607.1 216.8 608 253.8C608 360.2 522.1 446.7 416 447.9z"/>
</>],
['regular',<>
	<path d="M224 160c8.836 0 16-7.164 16-16C240 135.2 232.8 128 224 128S208 135.2 208 144C208 152.8 215.2 160 224 160zM474.4 64.12C473.8 64.04 473.2 64 472.6 64C465.8 64 460 69.65 460 76.73c0 5.959 4.186 10.1 9.991 12.36c44.73 10.49 77.5 51.87 73.71 100.6c-.8086 10.4-3.742 20.51-7.726 30.12c-.0547-15.3-7.836-29.24-20.85-37.28C502 174.5 486 173.8 472.3 180.7C439.4 197.1 418.1 223.9 410.1 256H320c0-25.73 17.56-31.61 32.31-32C369.8 223.8 384 209.6 384 192c0-17.67-14.31-32-32-32c-15.16 0-33.08 4.221-49.32 13.39C303.3 169.1 304 164.8 304 160.3v-16c0-1.684-.4219-3.248-.4961-4.912C313.2 133.9 320 123.9 320 112C320 103.2 312.8 96 304 96H292.7c-18.11-37.74-56.35-64-101-64H128.3C83.68 32 45.44 58.26 27.33 96H16C7.164 96 0 103.2 0 112c0 11.93 6.816 21.93 16.5 27.43C16.42 141.1 16 142.7 16 144.3v16c0 19.56 5.926 37.71 16 52.86V256c0 123.7 100.3 224 224 224h160c.7344 0 1.414-.2031 2.145-.2168C541 477.5 640 377.3 640 253.8C639.9 156.9 567.8 76.96 474.4 64.12zM64 160.3v-16C64 108.9 92.86 80 128.3 80h63.32C227.1 80 256 108.9 256 144.3v16C256 186.6 234.6 208 208.3 208C204 208 199.8 207.1 195.9 205.4L162.1 191.4c2.586-.3066 5.207-.543 7.598-1.631l8.314-3.777C186.9 182.3 192 174.9 192 166.7V160c0-6.723-5.996-12.17-13.39-12.17H141.4C133.1 147.8 128 153.3 128 160v6.701c0 8.15 5.07 15.6 13.09 19.25l8.314 3.777c2.391 1.088 5.012 1.324 7.598 1.631l-32.88 14.08C120.2 207.1 115.1 208 111.7 208C85.38 208 64 186.6 64 160.3zM80 257.1C80 256.7 80 250.2 80 250.2C89.95 253.7 100.5 256 111.7 256c10.79 0 21.45-2.189 31.36-6.436L160 242.3l14.06 6.023c9.586 4.105 25.98 7.896 36.41 7.658c11.98-.2715 23.38-2.834 33.88-7.113C254.9 280.8 284.6 304 320 304h38.97C354.6 313.8 352 324.6 352 336H251.1c4.18-7.037 6.695-15.13 3.379-24.94C249.7 296.8 235.4 288 220.4 288H112C94.76 288 80.13 274.3 80 257.1zM488 360c0 38.96-31.17 70.61-69.84 71.78C416.7 431.8 415.3 432 413.9 432H256c-46.62 0-88.96-18.29-120.5-48H376c13.25 0 24-10.75 24-24V336c0-17.67 14.33-32 32-32c13.25 0 24-10.75 24-24c0-27.58 16.25-43.89 32-53.23V360zM533 385.9C534.9 377.5 536 368.9 536 360V297.9l6.703-5.896c21.53-18.94 37.36-45.44 44.71-73.87C590.4 229.6 591.1 241.6 592 253.8C592 306.2 569.1 353.3 533 385.9zM96 128C87.16 128 80 135.2 80 144C80 152.8 87.16 160 96 160s16-7.164 16-16C112 135.2 104.8 128 96 128z"/>
</>],
['solid',<>
	<path d="M224 160c8.836 0 16-7.164 16-16C240 135.2 232.8 128 224 128S208 135.2 208 144C208 152.8 215.2 160 224 160zM96 128C87.16 128 80 135.2 80 144C80 152.8 87.16 160 96 160s16-7.164 16-16C112 135.2 104.8 128 96 128zM474.4 64.12C466.8 63.07 460 69.07 460 76.73c0 5.959 4.188 10.1 9.991 12.36C514.2 99.46 544 160 544 192v112c0 8.844-7.156 16-16 16S512 312.8 512 304V212c0-14.87-15.65-24.54-28.94-17.89c-28.96 14.48-47.83 42.99-50.51 74.88C403.7 285.6 384 316.3 384 352v32H224c17.67 0 32-14.33 32-32c0-17.67-14.33-32-32-32H132.4c-14.46 0-27.37-9.598-31.08-23.57C97.86 283.5 96 269.1 96 256V254.4C101.1 255.3 106.3 256 111.7 256c10.78 0 21.45-2.189 31.36-6.436L160 242.3l16.98 7.271C186.9 253.8 197.6 256 208.3 256c7.176 0 14.11-.9277 20.83-2.426C241.7 292 277.4 320 320 320l36.56-.0366C363.1 294.7 377.1 272.7 396.2 256H320c0-25.73 17.56-31.61 32.31-32C369.8 223.8 384 209.6 384 192c0-17.67-14.31-32-32-32c-15.09 0-32.99 4.086-49.28 13.06C303.3 168.9 304 164.7 304 160.3v-16c0-1.684-.4238-3.248-.4961-4.912C313.2 133.9 320 123.9 320 112C320 103.2 312.8 96 304 96H292.7C274.6 58.26 236.3 32 191.7 32H128.3C83.68 32 45.44 58.26 27.33 96H16C7.164 96 0 103.2 0 112c0 11.93 6.816 21.93 16.5 27.43C16.42 141.1 16 142.7 16 144.3v16c0 19.56 5.926 37.71 16 52.86V256c0 123.7 100.3 224 224 224h160c123.9-1.166 224-101.1 224-226.2C639.9 156.9 567.8 76.96 474.4 64.12zM64 160.3v-16C64 108.9 92.86 80 128.3 80h63.32C227.1 80 256 108.9 256 144.3v16C256 186.6 234.6 208 208.3 208c-4.309 0-8.502-.8608-12.46-2.558L162.1 191.4c2.586-.3066 5.207-.543 7.598-1.631l8.314-3.777C186.9 182.3 192 174.9 192 166.7V160c0-6.723-5.996-12.17-13.39-12.17H141.4C133.1 147.8 128 153.3 128 160v6.701c0 8.15 5.068 15.6 13.09 19.25l8.314 3.777c2.391 1.088 5.012 1.324 7.598 1.631l-32.88 14.08C120.2 207.1 115.1 208 111.7 208C85.38 208 64 186.6 64 160.3z"/>
</>],
['thin',<>
	<path d="M224 160c8.836 0 16-7.164 16-16C240 135.2 232.8 128 224 128S208 135.2 208 144C208 152.8 215.2 160 224 160zM474.4 64.12C473.8 64.04 473.2 64 472.6 64C465.8 64 460 69.65 460 76.73c0 5.959 4.186 10.1 9.991 12.36c44.73 10.49 77.5 51.87 73.71 100.6C542.4 205.9 536.6 221.6 528 235.1V208c0-8.375-4.25-16-11.38-20.41c-7.188-4.438-15.88-4.828-23.34-1.062C466.5 199.9 449.9 226.4 448.5 256h-108.7c5.785-11.9 17.66-15.71 28.49-16C385.8 239.8 400 225.6 400 208c0-17.67-14.31-32-32-32c-25.93 0-60.21 11.7-80 40.65v-26.61C292.4 180.3 294.8 169.7 295.5 158.5C309.4 155.1 320 143 320 128c0-8.838-7.164-16-16-16H292.4C280.7 66.1 239.4 32 189.9 32H130.1C80.56 32 39.3 66.1 27.62 112H16C7.164 112 0 119.2 0 128c0 15.02 10.57 27.05 24.53 30.49C25.19 169.7 27.64 180.3 32 190V256c0 123.7 100.3 224 224 224h157.9C538.8 480 640 378.8 640 253.8C639.9 156.9 567.8 76.96 474.4 64.12zM304 128c0 5.846-3.305 10.75-8 13.54V138.1C296 134.6 295.3 131.4 294.1 128H304zM24 138.1v3.441C19.31 138.7 16 133.8 16 128h9.018C24.69 131.4 24 134.6 24 138.1zM368 192C376.8 192 384 199.2 384 208c0 8.812-7.125 15.95-15.91 16c-6.918 .082-36.73 2.867-45.19 32H320C308.8 256 299.4 249.8 293.6 241.1C307.5 203.4 345.6 192 368 192zM40 138.1C40 88.42 80.42 48 130.1 48h59.8C239.6 48 280 88.42 280 138.1v15.11c0 40.99-33.35 74.34-74.34 74.34c-8.066 0-15.91-1.609-23.32-4.785L160 213.2L137.7 222.8C130.3 225.9 122.4 227.6 114.3 227.6C73.35 227.6 40 194.2 40 153.2V138.1zM48 214.1c16.52 17.98 40.01 29.44 66.34 29.44c10.18 0 20.26-2.066 29.62-6.076L160 230.6l16.04 6.869C185.4 241.5 195.5 243.6 205.7 243.6c26.34 0 49.83-11.46 66.34-29.44V224c0 26.47 21.53 48 48 48h75.05C369.1 289.2 352 318.6 352 352H255.2C260.4 345.2 264 337.2 264 328C264 305.9 246.1 288 224 288H88C65.94 288 48 270.1 48 248V214.1zM413.9 464H256c-103.2 0-188.8-75.62-205-174.3C60.88 298.5 73.75 304 88 304h135c11.61 0 22.29 7.822 24.5 19.22C250.5 338.5 238.8 352 224 352H168C163.6 352 160 355.6 160 360s3.582 8 8 8h200V352c0-44.11 35.89-80 80-80h3.797C458.5 272 464 266.5 464 259.8c0-25.12 13.97-47.7 36.41-58.94c3.625-1.859 6.656-.3594 7.781 .3594C509.3 201.9 512 204 512 208V344c0 30.88-25.12 56-56 56h-32c-4.406 0-8 3.578-8 8S419.6 416 424 416h32c39.69 0 72-32.3 72-72V261.1c17.74-18.71 29.62-44.01 31.66-70.08c3.188-41.03-15.85-78.78-47.95-100.7C577.8 115.1 623.9 180.5 624 253.8C624 369.7 529.7 464 413.9 464zM96 160c8.836 0 16-7.164 16-16C112 135.2 104.8 128 96 128S80 135.2 80 144C80 152.8 87.16 160 96 160zM136.4 191.7l10.39 4.723C150.9 198.3 155.5 199.2 160 199.2s9.074-.9473 13.24-2.84l10.39-4.723C193.7 187.1 200 177.8 200 167.6V159.2C200 150.8 192.5 144 183.3 144H136.7C127.5 144 120 150.8 120 159.2v8.377C120 177.8 126.3 187.1 136.4 191.7zM136 160h48v7.59c0 3.898-2.676 7.537-6.984 9.494l-10.39 4.723C164.6 182.7 162.3 183.2 160 183.2S155.4 182.7 153.4 181.8l-10.39-4.723C138.7 175.1 136 171.5 136 167.6V160z"/>
</>],

]);

const Otter: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Otter.displayName = "Otter";

export default Otter;