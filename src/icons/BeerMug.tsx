
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M398.5 66.12c-4.861-23.15-23.39-42.46-46.36-48.12c-18.08-4.455-35.17-1.193-48.89 7.119c-13.33 8.072-29.44 7.051-40.82-3.598C248.2 8.178 229.1 0 207.1 0S167.8 8.178 153.5 21.52C142.2 32.17 126 33.19 112.7 25.12C98.99 16.8 81.9 13.54 63.82 17.1c-22.96 5.658-41.5 24.97-46.36 48.12C8.761 107.5 40.12 144 79.1 144c13.06 0 25.13-3.955 35.2-10.71c12.02-8.062 27.75-4.727 38.31 5.164C167.8 151.8 186.9 160 207.1 160s40.23-8.188 54.49-21.54c10.56-9.891 26.29-13.23 38.31-5.164C310.9 140 322.9 144 335.1 144C375.9 144 407.2 107.5 398.5 66.12zM143.1 224C135.1 224 127.1 231.1 127.1 240L128 432C128 440.9 135.1 448 143.1 448S160 440.9 160 432l-.0091-192C159.1 231.1 152.9 224 143.1 224zM207.1 224C199.1 224 191.1 231.1 191.1 240L192 432C192 440.9 199.1 448 207.1 448S224 440.9 224 432l-.0075-192C223.1 231.1 216.9 224 207.1 224zM271.1 224c-8.875 0-16 7.125-16 16L256 432c0 8.875 7.125 16 15.1 16S288 440.9 288 432l-.0058-192C287.1 231.1 280.9 224 271.1 224z"/><path className="fa-secondary" d="M432 160h-43.9C372.7 170 354.9 176 336 176c-18.12 0-35.66-5.094-50.92-14.76c-.2246 .1504-.4687 .3379-.7187 .5723C263.6 181.3 236.5 192 207.1 192S152.4 181.3 131.6 161.8C131.4 161.6 131.1 161.4 130.9 161.2C115.7 170.9 98.12 176 80 176C62.76 176 46.46 170.1 32 162.5L31.1 448c0 35.35 28.65 64 64 64h223.1c35.35 0 64-28.65 64-64l80.66-36.02C493.5 399.1 512 370.5 512 339V240C512 195.8 476.2 160 432 160zM160 432C160 440.9 152.9 448 143.1 448S128 440.9 128 432l-.0099-192c0-8.875 7.127-16 16-16s15.1 7.125 15.1 16L160 432zM224 432C224 440.9 216.9 448 207.1 448S192 440.9 192 432l-.0083-192c0-8.875 7.127-16 16-16s15.1 7.125 15.1 16L224 432zM288 432c0 8.875-7.125 16-16 16S256 440.9 256 432l-.0066-192c0-8.875 7.126-16 16-16s15.1 7.125 15.1 16L288 432zM448 339c0 6.25-3.75 12-9.5 14.62L384 377.9V224h48C440.9 224 448 231.1 448 240V339z"/>
</>],
['light',<>
	<path d="M256 208v192c0 8.844 7.156 16 16 16s16-7.156 16-16v-192C288 199.2 280.8 192 272 192S256 199.2 256 208zM115.2 133.3c13.07-8.768 28.93-3.621 38.31 5.164C167.8 151.8 186.9 160 207.1 160s40.23-8.188 54.49-21.54c9.393-8.793 25.28-13.91 38.31-5.164C310.9 140 322.9 144 335.1 144c39.88 0 71.24-36.47 62.54-77.88c-4.861-23.15-23.39-42.46-46.36-48.12C346.7 16.64 341.3 16 335.1 16c-11.1 0-23.17 3.338-32.71 9.117c-13.17 7.979-29.32 7.166-40.82-3.598C248.2 8.178 229.1 0 207.1 0S167.8 8.178 153.5 21.52C142 32.29 125.9 33.09 112.7 25.12C103.2 19.34 91.1 16 80 16c-5.25 0-10.68 .6426-16.18 1.998c-22.96 5.658-41.5 24.97-46.36 48.12C8.761 107.5 40.12 144 79.1 144C93.06 144 105.1 140 115.2 133.3zM48.78 72.69C53.18 51.75 77.84 41.4 96.14 52.49C106.9 59 119 62.45 131.2 62.45c16.4 0 32.09-6.236 44.19-17.56c18.36-17.18 46.85-17.19 65.21-.002c12.1 11.32 27.79 17.56 44.19 17.56c12.19 0 24.32-3.443 35.07-9.959c18.27-11.06 42.95-.7773 47.36 20.21c2.85 13.56-2.758 23.01-6.354 27.44c-23.71 29.21-45.94-3.365-75.1-3.365c-16.26 0-32.71 6.678-45.15 18.33c-18.38 17.21-46.87 17.2-65.23-.002C162.9 103.5 146.5 96.77 130.2 96.77c-11.8 0-23.16 3.439-32.86 9.947C74.22 122.3 42.63 101.9 48.78 72.69zM192 208v192C192 408.8 199.2 416 208 416S224 408.8 224 400v-192C224 199.2 216.8 192 207.1 192S192 199.2 192 208zM432 160h-64C359.2 160 352 167.2 352 176V416c0 35.35-28.65 64-64 64H128c-35.35 0-64-28.65-64-64V176C64 167.2 56.84 160 48 160S32 167.2 32 176V416c0 53.02 42.98 96 96 96h160c43.12 0 79.16-28.62 91.29-67.75L467.8 400C494.9 386.4 512 358.8 512 328.5V240C512 195.8 476.2 160 432 160zM480 328.5c0 18.3-10.16 34.73-26.53 42.92L384 406.1V192h48C458.5 192 480 213.5 480 240V328.5zM128 208v192C128 408.8 135.2 416 144 416S160 408.8 160 400v-192C160 199.2 152.8 192 144 192S128 199.2 128 208z"/>
</>],
['regular',<>
	<path d="M423.1 156.7h-40V144.1c13.61-18.82 19.01-42.45 14.25-65.9c-6.141-30.26-28.99-54.6-58.18-62.04c-21.27-5.447-43.1-2.119-61.4 9.354c-3.735 2.371-5.641 .5332-6.36-.1562C237.3-8.461 178.6-8.43 143.7 25.32C142.1 26.02 141.1 27.84 137.3 25.49C118.9 14.03 97.15 10.7 75.9 16.15C46.69 23.59 23.84 47.93 17.7 78.19C12.94 101.6 18.34 125.3 31.95 144.1V432c0 44.18 35.82 80 80.01 80h192c39.44 0 72.03-28.59 78.61-66.14l76.66-34.39C491.3 397.5 512 365.8 512 330.8V244.7C512 196.1 472.6 156.7 423.1 156.7zM335.1 432c0 17.67-14.33 32-32 32H111.1c-17.68 0-32-14.33-32-32V174.1c20.49 4.258 42.44 1.004 60.16-11.18c.6563 .0781 2.094 .6113 3.516 1.994C161.1 182.7 183.1 192 207.1 192c24.02 0 46.84-9.309 64.3-26.23c1.641-1.57 3.25-2.041 3.25-2.182c17.78 12.33 39.85 15.64 60.44 11.37V432zM344.3 117.5c-10.13 12.46-28.6 15.33-41.48 6.404c-19.36-13.47-45.6-10.52-63.84 7.141c-16.97 16.42-45.06 16.42-62.06 0C166.4 120.8 153.1 115.5 139.1 115.5c-9.438 0-18.77 2.762-26.88 8.381c-12.86 8.914-31.33 6.027-41.48-6.404C64.97 109.3 62.52 98.77 64.74 87.83C67.15 75.96 76.58 65.71 87.7 62.89c10.89-2.73 19.18 .4082 24.18 3.531c21.29 13.28 47.43 10.75 65.09-6.357c16.94-16.38 45.04-16.42 62.04 .0313c17.71 17.09 43.84 19.56 65.04 6.326c5.047-3.123 13.35-6.277 24.21-3.531c11.1 2.824 20.54 13.07 22.94 24.94C353.4 98.77 350.1 109.3 344.3 117.5zM463.1 330.8c0 15.89-9.407 30.28-23.97 36.66L383.1 392V204.7h40c22.06 0 40 17.94 40 40V330.8zM159.1 240l-.0274 168c0 8.844-7.157 16-16 16s-16-7.156-16-16L127.1 240c0-8.844 7.157-16 16-16C152.8 224 159.1 231.2 159.1 240zM223.1 240l-.0224 168c0 8.844-7.157 16-16 16s-16-7.156-16-16L191.1 240c0-8.844 7.157-16 16-16S223.1 231.2 223.1 240zM287.1 240l-.0174 168c0 8.844-7.157 16-16 16s-16-7.156-16-16L255.1 240c0-8.844 7.157-16 16-16S287.1 231.2 287.1 240z"/>
</>],
['solid',<>
	<path d="M115.2 133.3c12.02-8.062 27.75-4.727 38.31 5.164C167.8 151.8 186.9 160 207.1 160s40.23-8.188 54.49-21.54c10.56-9.891 26.29-13.23 38.31-5.164C310.9 140 322.9 144 335.1 144c39.88 0 71.24-36.47 62.54-77.88c-4.861-23.15-23.39-42.46-46.36-48.12c-18.08-4.455-35.17-1.193-48.89 7.119c-13.33 8.072-29.44 7.051-40.82-3.598C248.2 8.178 229.1 0 207.1 0S167.8 8.178 153.5 21.52C142.2 32.17 126 33.19 112.7 25.12C98.99 16.8 81.9 13.54 63.82 17.1c-22.96 5.658-41.5 24.97-46.36 48.12C8.761 107.5 40.12 144 79.1 144C93.06 144 105.1 140 115.2 133.3zM432 160h-43.9C372.7 170 354.9 176 336 176c-18.12 0-35.66-5.094-50.92-14.76c-.2246 .1504-.4687 .3379-.7187 .5723C263.6 181.3 236.5 192 207.1 192S152.4 181.3 131.6 161.8C131.4 161.6 131.1 161.4 130.9 161.2C115.7 170.9 98.12 176 80 176C62.76 176 46.46 170.1 32 162.5L31.1 448c0 35.35 28.65 64 64 64h223.1c35.35 0 64-28.65 64-64l80.66-36.02C493.5 399.1 512 370.5 512 339V240C512 195.8 476.2 160 432 160zM160 432C160 440.9 152.9 448 143.1 448S128 440.9 128 432l-.0099-192c0-8.875 7.127-16 16-16s15.1 7.125 15.1 16L160 432zM224 432C224 440.9 216.9 448 207.1 448S192 440.9 192 432l-.0083-192c0-8.875 7.127-16 16-16s15.1 7.125 15.1 16L224 432zM288 432c0 8.875-7.125 16-16 16S256 440.9 256 432l-.0066-192c0-8.875 7.126-16 16-16s15.1 7.125 15.1 16L288 432zM448 339c0 6.25-3.75 12-9.5 14.62L384 377.9V224h48C440.9 224 448 231.1 448 240V339z"/>
</>],
['thin',<>
	<path d="M115.2 133.3C119.8 130.2 125 128.8 130.2 128.8c8.338-.002 16.79 3.602 23.28 9.684C167.8 151.8 186.9 160 207.1 160s40.23-8.188 54.49-21.54c6.494-6.08 14.94-9.684 23.28-9.684c5.225 0 10.4 1.412 15.03 4.52C310.9 140 322.9 144 335.1 144c39.88 0 71.24-36.47 62.54-77.88c-4.861-23.15-23.39-42.46-46.36-48.12C346.7 16.64 341.3 16 335.1 16c-11.1 0-23.17 3.338-32.71 9.117c-5.84 3.537-12.22 5.328-18.49 5.328c-8.049 0-15.93-2.943-22.33-8.926C248.2 8.178 229.1 0 207.1 0S167.8 8.178 153.5 21.52C147.1 27.5 139.2 30.45 131.2 30.45c-6.277 0-12.65-1.791-18.49-5.328C103.2 19.34 91.1 16 80 16c-5.258-.002-10.67 .6406-16.18 1.998c-22.96 5.658-41.5 24.97-46.36 48.12C8.761 107.5 40.12 144 79.1 144C93.06 144 105.1 140 115.2 133.3zM33.12 69.4c3.625-17.26 17.5-31.68 34.53-35.87C71.78 32.52 75.93 31.1 80 32c8.629 0 17.07 2.352 24.42 6.803C112.7 43.8 121.9 46.45 131.2 46.45c12.32 0 24.13-4.703 33.26-13.24C176.3 22.11 191.8 16 207.1 16S239.7 22.11 251.5 33.2c9.125 8.541 20.94 13.24 33.26 13.24c9.264 0 18.53-2.643 26.78-7.643C318.9 34.35 327.4 32 335.1 32c4.068 0 8.225 .5156 12.35 1.533c17.03 4.195 30.9 18.61 34.53 35.87c3.121 14.86-.2832 29.35-9.588 40.82C364.1 121.5 350.5 128 335.1 128c-9.4 0-18.49-2.764-26.28-7.994c-7.053-4.732-15.33-7.232-23.95-7.232c-12.24 0-24.71 5.104-34.22 14.01C239.7 137.9 224.2 144 207.1 144s-31.7-6.117-43.55-17.22C154.9 117.9 142.5 112.8 130.2 112.8c-8.613 0-16.89 2.5-23.95 7.232C98.49 125.2 89.4 128 79.1 128C65.47 128 51.88 121.5 42.71 110.2C33.4 98.76 29.1 84.26 33.12 69.4zM135.1 232v208c0 4.422 3.579 8 8.001 8s7.999-3.578 7.999-8v-208c0-4.422-3.585-8-8.007-8S135.1 227.6 135.1 232zM439.1 160h-64c-4.418 0-8 3.582-8 8V448c0 26.51-21.49 48-48 48H95.1c-26.51 0-48-21.49-48-48V168c0-4.418-3.582-8-8-8s-8 3.582-8 8L31.1 448c0 35.35 28.65 64 64 64h223.1c35.35 0 64-28.65 64-64l-.0006-11.05l56.21-28.1c24.39-12.19 39.79-37.12 39.79-64.39V200C479.1 177.9 462.1 160 439.1 160zM463.1 344.5c0 21.34-11.86 40.53-30.95 50.08l-49.05 24.52V176h56c13.23 0 24 10.77 24 24V344.5zM199.1 232v208c0 4.422 3.579 8 8.001 8s7.999-3.578 7.999-8v-208c0-4.422-3.584-8-8.006-8S199.1 227.6 199.1 232zM263.1 232v208c0 4.422 3.579 8 8.001 8s7.999-3.578 7.999-8v-208c0-4.422-3.582-8-8.004-8S263.1 227.6 263.1 232z"/>
</>],

]);

const BeerMug: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

BeerMug.displayName = "BeerMug";

export default BeerMug;