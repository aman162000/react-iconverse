
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M371.1 32C347.7 32 328 51.73 328 76.04S347.7 119.9 371.1 119.9S416 100.3 416 75.97S396.3 32 371.1 32zM215.1 271.1C193.9 271.1 176 289.9 176 312S193.9 352 216 352S256 334.1 256 312S238.1 271.1 215.1 271.1z"/><path className="fa-secondary" d="M554.1 394.2c-33.38 33.26-92.76 27.88-132.8-12.12c-26-26.01-38.63-89.65-44.13-130.9l-65.26-65.27l-.0039 96.38c28.38 32.63 72.01 89.18 72.01 127.3C383.1 466.2 340.1 512 287.1 512c-53.01 0-96.03-45.75-96.03-102.4c0-8.629 2.502-18.27 6.252-28.14c14.18 3.779 29.93 4.385 49.29-6.183c22.47-12.26 39.18-34.37 40.39-59.93c1.066-22.49-8.516-42.84-23.92-56.67v-72.89L198.7 251.1c-1 8.625-2.562 18.22-4.437 28.22c.0586-.0391-.0605 .0391 0 0C183.4 286.5 176 298.1 176 312c0 7.609 2.693 14.32 6.381 20.38c-.2773-.4609-.6816-.8281-.9414-1.297c-6.752 20.76-15.5 39.64-26.88 51.02c-39.88 40.01-99.38 45.38-132.8 12.12C-11.45 360.8-6.078 301.4 33.93 261.4c26-26.01 89.63-38.63 130.9-44.13L263.9 118.2l.0234-94.15C263.1 10.8 274.8 0 287.1 0c13.2 0 23.99 10.8 23.99 24l-.0215 8.256c-8.252 12.13-13.25 26.63-13.25 42.51c0 15.76 4.875 30.26 13.25 42.39l99.26 100.1c41.25 5.5 104.9 18.12 130.9 44.13C582.1 301.4 587.5 360.8 554.1 394.2z"/>
</>],
['light',<>
	<path d="M547.1 268.7c-29.34-29.3-115.9-41.16-140.6-43.99l-100.1-100c-.9785-.9785-2.174-1.527-3.312-2.199V16c0-8.844-7.18-16-16.03-16S271.1 7.156 271.1 16v105.4L168.6 224.7c-24.66 2.834-111.2 14.69-140.6 43.99c-35.45 35.47-37.57 91.06-4.719 123.9c15.6 15.59 36.35 23.31 57.61 23.31c23.51 0 47.7-9.406 66.33-28.03c6.252-6.25 6.252-16.38 0-22.62s-16.38-6.25-22.63 0C101.6 388.2 66.36 390.4 45.95 370c-20.38-20.38-18.25-55.66 4.721-78.66c12.78-12.78 50.18-22.93 85.03-29.31C130.8 269.5 127.1 278.4 127.1 288c0 26.51 21.49 48 48.01 48S223.1 314.5 223.1 288c0-19.84-12.04-36.85-29.21-44.17l77.22-77.21v108.1C244.7 307.8 191.1 376.7 191.1 416c0 53.02 42.95 96 95.98 96s96.04-42.98 96.04-96c0-39.31-52.71-108.2-80.01-141.2V166.6l80.74 80.73c2.836 24.66 14.69 111.2 44 140.6c18.63 18.62 42.79 28.03 66.33 28.03c21.25 0 42.01-7.719 57.61-23.31C585.5 359.8 583.4 304.2 547.1 268.7zM175.1 304C167.2 304 159.1 296.8 159.1 288s7.18-16 16-16S191.1 279.2 191.1 288S184.8 304 175.1 304zM288 480c-35.3 0-64.01-28.71-64.01-64c0-20.4 30.08-68.03 64.01-110.5c33.94 42.42 64.01 90.06 64.01 110.5C352 451.3 323.3 480 288 480zM530.1 370c-20.35 20.34-55.67 18.22-78.67-4.719c-15.32-15.35-26.99-66.23-32.75-105.5c.2187-.1973 .5039-.2637 .7148-.4746s.2773-.4961 .4746-.7148c39.27 5.762 90.16 17.43 105.5 32.75C548.3 314.3 550.4 349.6 530.1 370zM382.7 124c26.52 0 48.01-21.49 48.01-48s-21.49-48-48.01-48s-48.01 21.49-48.01 48S356.2 124 382.7 124zM382.7 60c8.824 0 16 7.178 16 16s-7.18 16-16 16s-16-7.178-16-16S373.9 60 382.7 60z"/>
</>],
['regular',<>
	<path d="M542.1 229.4c-26-26-89.63-38.63-130.9-44.13l-99.26-99.13l.0332-62.16C311.1 10.75 301.2 0 287.1 0S263.1 10.75 263.1 24l.0469 27.47C264 51.6 263.9 51.71 263.9 51.85v34.31L164.8 185.3c-41.25 5.5-104.9 18.12-130.9 44.13c-40 40-45.38 99.38-12.12 132.8c14.62 14.62 34.38 21.88 55.38 21.88c26.5 0 55-11.5 77.38-33.88c14.88-14.88 25.25-42 32.63-70.25c5.5 4.875 12.63 8.125 20.75 8.125c17.75 0 32-14.25 32-32s-14.25-32-32-32c-3.625 0-6.875 1-10.25 2.125c.5-2.375 .75-4.625 1-6.875l65.25-65.25v128.2c-28.38 32.88-72 89.23-72 127.4C191.9 466.2 234.1 512 287.1 512c53 0 95.99-45.77 95.99-102.4c0-38.13-43.63-94.56-72.01-127.3l-.0078-128.4l65.25 65.25c5.5 41.25 18.12 104.9 44.13 130.9c22.38 22.38 50.88 33.88 77.38 33.88c21 0 40.75-7.125 55.5-21.75C587.5 328.8 582.1 269.4 542.1 229.4zM120.7 316.2c-12.5 12.5-28.75 19.88-43.5 19.88c-6.252 0-15-1.375-21.5-7.75c-14-14.12-8.375-44.5 12.13-65c10.38-10.38 43.38-20.25 79.88-26.88C140.9 272.8 131.1 305.8 120.7 316.2zM335.9 409.6c0 30-21.5 54.38-48 54.38c-26.5 0-48-24.38-48-54.38c0-13.88 20.38-47.5 48-81.5C315.2 362 335.9 396 335.9 409.6zM520.2 328.3c-6.5 6.375-15.25 7.75-21.5 7.75c-14.75 0-31-7.375-43.38-19.88c-10.38-10.38-20.25-43.38-26.88-79.75c36.25 6.625 69.38 16.62 79.75 26.88C528.6 283.8 534.2 314.2 520.2 328.3zM352 64c0-17.67 14.33-32 32-32c17.67 0 32 14.33 32 32c0 17.67-14.33 32-32 32C366.3 96 352 81.67 352 64z"/>
</>],
['solid',<>
	<path d="M371.1 119.9C396.3 119.9 416 100.3 416 75.97C416 51.62 396.3 32 371.1 32C347.7 32 328 51.68 328 76.04C328 100.3 347.7 119.9 371.1 119.9zM542.1 261.4c-26-26.01-89.63-38.63-130.9-44.13l-99.26-100.1c-8.377-12.13-13.25-26.63-13.25-42.39c0-15.88 5-30.38 13.25-42.51l.0215-8.256C311.1 10.8 301.2 0 287.1 0C274.8 0 263.1 10.8 263.1 24L263.9 118.2L164.8 217.3c-41.25 5.5-104.9 18.12-130.9 44.13c-40 40.01-45.38 99.4-12.13 132.8c33.38 33.26 92.88 27.88 132.8-12.12c11.38-11.38 20.13-30.26 26.88-51.02c8.624 15.66 27.04 25.39 47.43 18.78c12.59-4.082 22.62-14.78 25.8-27.63c6.578-26.6-13.23-50.26-38.7-50.26c-8.25 0-15.34 3.062-21.72 7.316c1.875-10 3.437-19.6 4.437-28.22L263.9 185.8v72.89c15.41 13.83 24.99 34.18 23.92 56.67c-1.212 25.57-17.92 47.67-40.39 59.93c-19.36 10.57-35.11 9.962-49.29 6.183c-3.75 9.875-6.252 19.51-6.252 28.14C191.9 466.2 234.1 512 287.1 512c53 0 95.99-45.75 95.99-102.4c0-38.14-43.63-94.68-72.01-127.3l.0039-96.38l65.26 65.27c5.5 41.26 18.13 104.9 44.13 130.9c40 40.01 99.38 45.38 132.8 12.12C587.5 360.8 582.1 301.4 542.1 261.4z"/>
</>],
['thin',<>
	<path d="M550.2 233.5c-28.03-28.03-120.6-37.95-154-40.68L296 92.69v-84.34c0-4.168-3.037-7.898-7.188-8.312C284-.4336 280 3.309 280 8v84.69L179.8 192.9c-33.4 2.723-125.1 12.65-154 40.68c-34.42 34.43-34.42 90.23 0 124.6C43.02 375.4 65.58 384 88.13 384c22.55 0 45.11-8.602 62.32-25.81c7.131-7.133 13.06-18.48 18.01-31.96c1.504-4.09-.6396-8.59-4.687-10.21c-.0508-.0234 .0508 .0234 0 0C159.7 314.4 154.1 316.6 153.4 320.7c-4.189 11.55-8.943 20.8-14.3 26.16C125.5 360.5 107.4 368 88.13 368s-37.38-7.504-51.01-21.12c-28.12-28.12-28.12-73.89 0-102C56.03 225.1 122.1 214.2 171.1 209.7c15.61-2 15.28-1.695 20.05-5.477L280 115.3V264c0 .3203 .3047 .5117 .3418 .8203C257.7 291.3 191.1 372.1 191.1 416c0 53.02 42.96 96 95.98 96s96.04-42.98 96.04-96c0-43.92-65.74-124.7-88.35-151.2C295.7 264.5 296 264.3 296 264V115.3l88.87 88.87c2.721 33.41 12.65 125.1 40.68 154C442.8 375.4 465.3 384 487.9 384s45.11-8.602 62.32-25.81C584.6 323.8 584.6 267.1 550.2 233.5zM368 416c0 44.11-35.89 80-80 80c-44.11 0-80-35.89-80-80c0-30.5 45.06-94.14 80-135.6C322.9 321.9 368 385.5 368 416zM538.9 346.9C525.3 360.5 507.1 368 487.9 368s-37.38-7.504-51.01-21.12c-19.36-19.36-31.26-88.3-35.58-137.6c49.29 4.32 118.2 16.22 137.6 35.57C566.1 272.1 566.1 318.8 538.9 346.9zM376 112C398.1 112 416 94.09 416 72S398.1 32 376 32S336 49.91 336 72S353.9 112 376 112zM376 48c13.23 0 24 10.77 24 24S389.2 96 376 96C362.8 96 352 85.23 352 72S362.8 48 376 48zM224 264C224 241.9 206.1 224 184 224S144 241.9 144 264S161.9 304 184 304S224 286.1 224 264zM184 288C170.8 288 160 277.2 160 264S170.8 240 184 240c13.23 0 24 10.77 24 24S197.2 288 184 288z"/>
</>],

]);

const Mistletoe: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Mistletoe.displayName = "Mistletoe";

export default Mistletoe;