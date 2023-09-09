
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M384 0H64C28.65 0 0 28.65 0 64v400C0 490.4 21.6 512 48 512h352c26.4 0 48-21.6 48-48V64C448 28.65 419.3 0 384 0zM184 64C197.3 64 208 74.75 208 88S197.3 112 184 112S160 101.3 160 88S170.8 64 184 64zM64 88C64 74.75 74.75 64 88 64S112 74.75 112 88S101.3 112 88 112S64 101.3 64 88zM224 448c-79.5 0-143.1-64.5-143.1-144S144.5 160 224 160s143.1 64.5 143.1 144S303.5 448 224 448z"/><path className="fa-secondary" d="M216 272c0-22.62-12-34.63-20.75-43.38C189.5 222.9 186.1 219.3 184.8 214C183.9 210.5 180.6 208 177 208H160.8C158.4 208 156 209.1 154.5 210.9C153 212.8 152.3 215.1 152.8 217.5c2.75 16.62 12.5 26.38 19.87 33.88C180.5 259.1 184 263 184 272S180.5 284.9 172.8 292.8C164 301.5 152 313.4 152 336c0 22.75 12 34.63 20.75 43.38c5.75 5.75 9.125 9.375 10.5 14.5C184.1 397.5 187.4 400 191 400h16.38c2.375 0 4.625-1.125 6.125-2.875c1.625-1.875 2.25-4.25 1.875-6.625c-2.875-16.62-12.62-26.37-20-33.75C187.5 348.9 184 345 184 336c0-8.875 3.5-12.75 11.25-20.62C204 306.6 216 294.6 216 272zM264 336c0-8.875 3.5-12.75 11.25-20.62C284 306.6 296 294.6 296 272s-12-34.63-20.75-43.38C269.5 222.9 266.1 219.3 264.8 214C263.9 210.5 260.6 208 257 208h-16.25C238.4 208 236 209.1 234.5 210.9c-1.5 1.875-2.25 4.25-1.75 6.625c2.75 16.62 12.5 26.38 19.88 33.88C260.5 259.1 264 263 264 272s-3.5 12.88-11.25 20.75C244 301.5 232 313.4 232 336c0 22.75 12 34.63 20.75 43.38c5.75 5.75 9.125 9.375 10.5 14.5C264.1 397.5 267.4 400 271 400h16.38c2.375 0 4.625-1.125 6.125-2.875c1.5-1.875 2.125-4.25 1.75-6.625c-2.75-16.62-12.5-26.37-19.88-33.75C267.5 348.9 264 345 264 336zM184 112c13.25 0 24-10.75 24-24S197.3 64 184 64S160 74.75 160 88S170.8 112 184 112z"/>
</>],
['light',<>
	<path d="M352 0H96C42.98 0 0 42.98 0 96v352c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V96C448 42.98 405 0 352 0zM416 448c0 17.64-14.36 32-32 32H64c-17.64 0-32-14.36-32-32V96c0-35.29 28.71-64 64-64h256c35.29 0 64 28.71 64 64V448zM192.1 120C205.3 120 216 109.3 216 96S205.3 72 192.1 72C178.7 72 168 82.75 168 96S178.7 120 192.1 120zM120 96c0-13.25-10.69-24-24-24C82.82 72 72 82.75 72 96S82.82 120 96 120C109.3 120 120 109.3 120 96zM224 160C144.5 160 80.01 224.5 80.01 304S144.5 448 224 448s143.1-64.5 143.1-144S303.5 160 224 160zM224 416c-61.75 0-111.1-50.24-111.1-112S162.3 192 224 192c61.75 0 111.1 50.24 111.1 112S285.7 416 224 416zM212.6 350c-10.25-10.25-12.78-25.88-6.297-38.84c12.66-25.31 7.719-55.75-12.31-75.78L187.3 228.7c-6.25-6.25-16.38-6.25-22.62 0C158.4 234.1 158.4 245.1 164.7 251.3L171.4 258c10.25 10.25 12.78 25.88 6.297 38.84c-12.66 25.31-7.719 55.75 12.31 75.78l6.703 6.688C199.8 382.4 203.9 384 208 384s8.203-1.562 11.33-4.688c6.234-6.281 6.234-16.41-.0313-22.62L212.6 350zM276.6 350c-10.25-10.25-12.78-25.88-6.297-38.84c12.66-25.31 7.719-55.75-12.31-75.78l-6.703-6.688c-6.25-6.25-16.38-6.25-22.62 0c-6.234 6.281-6.234 16.41 .0313 22.62L235.4 258c10.25 10.25 12.78 25.88 6.297 38.84c-12.66 25.31-7.719 55.75 12.31 75.78l6.703 6.688C263.8 382.4 267.9 384 272 384s8.203-1.562 11.33-4.688c6.234-6.281 6.234-16.41-.0313-22.62L276.6 350z"/>
</>],
['regular',<>
	<path d="M368 0h-288C35.82 0 0 35.82 0 80V448c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V80C448 35.82 412.2 0 368 0zM400 448c0 8.824-7.178 16-16 16H64c-8.822 0-16-7.176-16-16V80c0-17.64 14.36-32 32-32h288c17.64 0 32 14.36 32 32V448zM128.1 104c0-13.25-10.83-24-24.02-24c-13.31 0-24.02 10.75-24.02 24S90.72 128 104 128C117.2 128 128.1 117.3 128.1 104zM184.1 128c13.19 0 23.89-10.75 23.89-24S197.2 80 184.1 80c-13.31 0-24.02 10.75-24.02 24S170.7 128 184.1 128zM224 160C148.8 160 87.98 220.9 87.98 296S148.8 432 224 432s136-60.88 136-136S299.2 160 224 160zM219.3 371.3C216.2 374.4 212.1 376 208 376s-8.172-1.562-11.3-4.688l-6.703-6.688c-20.03-20.03-24.97-50.47-12.31-75.78C184.2 275.9 181.6 260.3 171.4 250L164.7 243.3C158.4 237.1 158.4 226.1 164.7 220.7c6.25-6.25 16.38-6.25 22.62 0l6.703 6.688c20.03 20.03 24.97 50.47 12.31 75.78C199.8 316.1 202.4 331.8 212.6 342l6.688 6.688C225.6 354.9 225.6 365 219.3 371.3zM283.3 371.3C280.2 374.4 276.1 376 272 376s-8.172-1.562-11.3-4.688l-6.703-6.688c-20.03-20.03-24.97-50.47-12.31-75.78C248.2 275.9 245.6 260.3 235.4 250l-6.688-6.688c-6.266-6.219-6.266-16.34-.0313-22.62c6.25-6.25 16.38-6.25 22.62 0l6.703 6.688c20.03 20.03 24.97 50.47 12.31 75.78c-6.484 12.97-3.953 28.59 6.297 38.84l6.688 6.688C289.6 354.9 289.6 365 283.3 371.3z"/>
</>],
['solid',<>
	<path d="M384 0H64C28.65 0 0 28.65 0 64v400C0 490.4 21.6 512 48 512h352c26.4 0 48-21.6 48-48V64C448 28.65 419.3 0 384 0zM184 64C197.2 64 208 74.75 208 88S197.2 112 184 112S160 101.2 160 88S170.8 64 184 64zM64 88C64 74.75 74.75 64 88 64S112 74.75 112 88S101.2 112 88 112S64 101.2 64 88zM224 448c-79.5 0-143.1-64.5-143.1-144S144.5 160 224 160s143.1 64.5 143.1 144S303.5 448 224 448zM216 272c0-22.62-12-34.62-20.75-43.38C189.5 222.9 186.1 219.2 184.8 214C183.9 210.5 180.6 208 177 208H160.8C158.4 208 156 209.1 154.5 210.9C153 212.8 152.2 215.1 152.8 217.5c2.75 16.62 12.5 26.38 19.87 33.88C180.5 259.1 184 263 184 272S180.5 284.9 172.8 292.8C164 301.5 152 313.4 152 336c0 22.75 12 34.63 20.75 43.38c5.75 5.75 9.125 9.375 10.5 14.5C184.1 397.5 187.4 400 191 400h16.38c2.375 0 4.625-1.125 6.125-2.875c1.625-1.875 2.25-4.25 1.875-6.625c-2.875-16.62-12.62-26.38-20-33.75C187.5 348.9 184 345 184 336c0-8.875 3.5-12.75 11.25-20.62C204 306.6 216 294.6 216 272zM296 272c0-22.62-12-34.62-20.75-43.38C269.5 222.9 266.1 219.2 264.8 214C263.9 210.5 260.6 208 257 208h-16.25C238.4 208 236 209.1 234.5 210.9C233 212.8 232.2 215.1 232.8 217.5c2.75 16.62 12.5 26.38 19.88 33.88C260.5 259.1 264 263 264 272s-3.5 12.87-11.25 20.75C244 301.5 232 313.4 232 336c0 22.75 12 34.63 20.75 43.38c5.75 5.75 9.125 9.375 10.5 14.5C264.1 397.5 267.4 400 271 400h16.38c2.375 0 4.625-1.125 6.125-2.875c1.5-1.875 2.125-4.25 1.75-6.625c-2.75-16.62-12.5-26.38-19.88-33.75C267.5 348.9 264 345 264 336c0-8.875 3.5-12.75 11.25-20.62C284 306.6 296 294.6 296 272z"/>
</>],
['thin',<>
	<path d="M160 112c8.836 0 16-7.164 16-16c0-8.838-7.164-16-16-16S144 87.16 144 96C144 104.8 151.2 112 160 112zM112 96c0-8.838-7.164-16-16-16S80 87.16 80 96c0 8.836 7.164 16 16 16S112 104.8 112 96zM384 0H64C28.65 0 0 28.65 0 64v384c0 35.35 28.65 64 64 64h320c35.35 0 64-28.65 64-64V64C448 28.65 419.3 0 384 0zM432 448c0 26.47-21.53 48-48 48H64c-26.47 0-48-21.53-48-48V64c0-26.47 21.53-48 48-48h320c26.47 0 48 21.53 48 48V448zM224 168c-75.11 0-136 60.89-136 136s60.89 136 136 136s136-60.89 136-136S299.1 168 224 168zM224 424c-66.17 0-120-53.83-120-120S157.8 184 224 184s120 53.83 120 120S290.2 424 224 424zM265.1 310.2C273.5 303.2 284 294.4 284 277.4c0-17.09-10.47-25.81-18.88-32.84c-6.287-5.232-10.53-9.02-12.26-14.46C251.8 226.6 248.9 224 245.3 224H244.9c-5.152 0-8.975 4.951-7.57 9.908c3.076 10.85 10.95 17.41 17.55 22.94C263.3 263.8 268 268.2 268 277.4c0 9.125-4.75 13.53-13.12 20.5C246.5 304.9 236 313.6 236 330.7s10.47 25.81 18.88 32.81c6.281 5.227 10.52 8.994 12.25 14.4C268.2 381.4 271.1 384 274.7 384h.3652c5.154 0 8.98-4.955 7.57-9.912c-3.078-10.82-10.95-17.38-17.55-22.87C256.8 344.3 252 339.8 252 330.7C252 321.6 256.8 317.2 265.1 310.2zM193.1 310.2C201.5 303.2 212 294.4 212 277.4c0-17.09-10.47-25.81-18.88-32.84C186.8 239.3 182.6 235.5 180.9 230.1C179.8 226.6 176.9 224 173.3 224H172.9C167.7 224 163.9 228.1 165.3 233.9c3.076 10.85 10.95 17.41 17.55 22.94C191.3 263.8 196 268.2 196 277.4c0 9.125-4.75 13.53-13.12 20.5C174.5 304.9 164 313.6 164 330.7s10.47 25.81 18.88 32.81c6.281 5.227 10.52 8.994 12.25 14.4C196.2 381.4 199.1 384 202.7 384h.3652c5.154 0 8.98-4.955 7.57-9.912c-3.078-10.82-10.95-17.38-17.55-22.87C184.8 344.3 180 339.8 180 330.7C180 321.6 184.8 317.2 193.1 310.2z"/>
</>],

]);

const DryerHeat: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

DryerHeat.displayName = "DryerHeat";

export default DryerHeat;
