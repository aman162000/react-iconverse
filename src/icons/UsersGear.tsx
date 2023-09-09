
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M597.3 415.8c1.953-10.42 1.953-21.22 0-31.64l19.17-11.17c2.234-1.209 3.256-3.814 2.512-6.326c-5.025-16.01-13.59-30.62-24.75-42.71c-1.674-1.861-4.467-2.326-6.699-1.023l-19.17 11.07c-8.096-6.887-17.4-12.28-27.45-15.82V295.1c0-2.514-1.861-4.746-4.281-5.213c-16.56-3.723-33.5-3.629-49.32 0C484.9 291.2 483.1 293.5 483.1 295.1v22.24c-10.05 3.537-19.36 8.932-27.45 15.82l-19.26-11.07c-2.139-1.303-4.932-.8379-6.697 1.023c-11.17 12.1-19.73 26.71-24.66 42.71c-.7441 2.512 .2793 5.117 2.42 6.326l19.17 11.17c-1.859 10.42-1.859 21.21 0 31.64l-19.17 11.17c-2.234 1.209-3.164 3.816-2.42 6.328c4.932 16.01 13.49 30.52 24.66 42.71c1.766 1.863 4.467 2.328 6.697 1.025l19.26-11.07c8.094 6.887 17.4 12.28 27.45 15.82v22.24c0 2.514 1.77 4.746 4.188 5.211c16.66 3.723 33.5 3.629 49.32 0c2.42-.4648 4.281-2.697 4.281-5.211v-22.24c10.05-3.535 19.36-8.932 27.45-15.82l19.17 11.07c2.141 1.303 5.025 .8379 6.699-1.025c11.17-12.1 19.73-26.7 24.75-42.71c.7441-2.512-.2773-5.119-2.512-6.328L597.3 415.8zM512 432c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32s32 14.33 32 32C544 417.7 529.7 432 512 432z"/><path className="fa-secondary" d="M183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM368 400c0-16.69 3.398-32.46 8.619-47.36C374.3 352.5 372.2 352 369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h266.1C389.5 485.6 368 445.5 368 400zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 21.47-5.625 41.38-14.65 59.34C462.2 263.4 486.1 256 512 256c42.48 0 80.27 18.74 106.6 48h3.756C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM319.9 112c-57.41 0-103.1 46.56-103.1 104c0 57.44 46.55 104 103.1 104c57.41 0 103.1-46.56 103.1-104C423.8 158.6 377.3 112 319.9 112z"/>
</>],
['light',<>
	<path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM319.9 144c39.68 0 71.96 32.3 71.96 72S359.5 288 319.9 288S247.9 255.7 247.9 216S280.2 144 319.9 144zM496 192c-10.8 0-21.38 2.342-31.47 6.971c-7.74 3.551-12.13 12.51-9.143 20.48c3.336 8.883 13.51 12.88 21.86 8.889C483.3 225.5 489.6 224 496 224h65.08c16.65 0 31.24 9.439 39.55 23.6C603.6 252.7 608.8 256 614.7 256c12.42 0 19.93-13.48 13.7-24.22C614.5 207.1 589.6 192 561.1 192H496zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM512 32c26.47 0 48 21.53 48 48S538.5 128 512 128s-48-21.53-48-48S485.5 32 512 32zM624.5 397.2l-10.02-5.828c.3594-4.891 .3594-9.781 0-14.66l9.531-5.562c8.844-4.766 13.17-15.28 10.2-25.22c-5.672-18.02-15.44-34.89-28.08-48.55c-6.703-7.516-17.92-9.266-26.64-4.25l-9.984 5.766c-4.047-2.734-8.266-5.172-12.64-7.297V279.1c0-10.19-7.234-18.98-16.77-20.83c-18.61-4.188-38.11-4.156-55.88-.0938c-9.922 1.922-17.14 10.72-17.14 20.92v11.61c-4.375 2.125-8.609 4.562-12.66 7.297l-9.75-5.609c-8.547-5.156-19.73-3.578-26.75 3.859C405 311.1 395.3 328 389.7 346.1c-2.906 9.719 1.172 19.94 9.688 24.73l10.06 5.859c-.3281 4.859-.3281 9.734 0 14.59L399.9 396.9c-8.953 4.812-13.12 15.09-10.14 25.12c5.484 17.81 15.22 34.7 28.31 48.97c6.859 7.281 17.73 8.906 26.31 3.938l10.09-5.797c4.031 2.734 8.266 5.172 12.64 7.297v11.61c0 10.2 7.219 19 16.7 20.83C493.2 510.1 502.7 512 512.2 512c9.375 0 18.68-1.016 27.49-3.047c9.969-1.938 17.2-10.73 17.2-20.92v-11.59c4.375-2.125 8.594-4.562 12.64-7.297l9.688 5.594c8.812 5.281 20.11 3.578 26.75-3.859c12.83-13.88 22.59-30.75 28.33-48.98C637.2 412.2 632.9 401.7 624.5 397.2zM581.6 371.2c1.578 8.406 1.578 17.28 0 25.69l-2.094 11.11l21.38 12.44c-3.297 7.953-7.672 15.48-12.98 22.38l-21.28-12.3l-8.609 7.312c-6.688 5.688-14.22 10.05-22.39 12.92l-10.69 3.766v24.67c-8.438 1.094-17.09 1.094-25.78-.0313v-24.62l-10.67-3.781c-8.172-2.875-15.72-7.234-22.39-12.92l-8.578-7.297l-21.38 12.3c-5.359-6.938-9.75-14.52-12.97-22.41L444.3 408l-1.969-11c-1.516-8.5-1.516-17.5 0-26L444.3 360l-21.22-12.38c3.25-7.984 7.641-15.58 12.94-22.42l21.41 12.31l8.578-7.297c6.672-5.688 14.22-10.05 22.39-12.92l10.67-3.781V288.9c8.406-1.156 17.06-1.141 25.78 .0469v24.62l10.69 3.766c8.172 2.875 15.7 7.234 22.39 12.92l8.609 7.312l21.3-12.3c5.297 6.859 9.688 14.42 12.97 22.36l-21.38 12.45L581.6 371.2zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM128 32c26.47 0 48 21.53 48 48S154.5 128 128 128S80 106.5 80 80S101.5 32 128 32zM384 480H160.2c3.021-53.41 51.19-96 109.1-96H336c8.836 0 16-7.164 16-16c0-8.838-7.164-16-16-16H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512H384c8.836 0 16-7.164 16-16C400 487.2 392.8 480 384 480zM512 336c-26.47 0-48 21.53-48 48s21.53 48 48 48s48-21.53 48-48S538.5 336 512 336zM512 400c-8.828 0-16-7.172-16-16s7.172-16 16-16s16 7.172 16 16S520.8 400 512 400zM162.8 228.3c7.938 3.797 17.53 .375 21.31-7.594c3.797-7.969 .3906-17.52-7.594-21.31C166.1 194.5 155.2 192 144 192H78.92C35.41 192 0 229.1 0 274.7V288c0 8.844 7.156 16 16 16S32 296.8 32 288V274.7C32 246.7 53.05 224 78.92 224H144C150.4 224 156.7 225.5 162.8 228.3z"/>
</>],
['regular',<>
	<path d="M319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM319.9 160c30.85 0 55.96 25.12 55.96 56S350.7 272 319.9 272S263.9 246.9 263.9 216S289 160 319.9 160zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 21.47-5.625 41.38-14.65 59.34C462.2 263.4 486.1 256 512 256c42.48 0 80.27 18.74 106.6 48h3.756C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192zM383.6 464H178.1c10.47-36.76 47.36-64 91.14-64H368c0-16.69 3.398-32.46 8.619-47.36C374.3 352.5 372.2 352 369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h266.1C406.3 499 393 482.8 383.6 464zM618.1 366.7c-5.025-16.01-13.59-30.62-24.75-42.71c-1.674-1.861-4.467-2.326-6.699-1.023l-19.17 11.07c-8.096-6.887-17.4-12.28-27.45-15.82V295.1c0-2.514-1.861-4.746-4.281-5.213c-16.56-3.723-33.5-3.629-49.32 0C484.9 291.2 483.1 293.5 483.1 295.1v22.24c-10.05 3.537-19.36 8.932-27.45 15.82l-19.26-11.07c-2.139-1.303-4.932-.8379-6.697 1.023c-11.17 12.1-19.73 26.71-24.66 42.71c-.7441 2.512 .2793 5.117 2.42 6.326l19.17 11.17c-1.859 10.42-1.859 21.21 0 31.64l-19.17 11.17c-2.234 1.209-3.164 3.816-2.42 6.328c4.932 16.01 13.49 30.52 24.66 42.71c1.766 1.863 4.467 2.328 6.697 1.025l19.26-11.07c8.094 6.887 17.4 12.28 27.45 15.82v22.24c0 2.514 1.77 4.746 4.188 5.211c16.66 3.723 33.5 3.629 49.32 0c2.42-.4648 4.281-2.697 4.281-5.211v-22.24c10.05-3.535 19.36-8.932 27.45-15.82l19.17 11.07c2.141 1.303 5.025 .8379 6.699-1.025c11.17-12.1 19.73-26.7 24.75-42.71c.7441-2.512-.2773-5.119-2.512-6.328l-19.17-11.17c1.953-10.42 1.953-21.22 0-31.64l19.17-11.17C618.7 371.8 619.7 369.2 618.1 366.7zM512 432c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32s32 14.33 32 32C544 417.7 529.7 432 512 432z"/>
</>],
['solid',<>
	<path d="M512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM368 400c0-16.69 3.398-32.46 8.619-47.36C374.3 352.5 372.2 352 369.9 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512h266.1C389.5 485.6 368 445.5 368 400zM183.9 216c0-5.449 .9824-10.63 1.609-15.91C174.6 194.1 162.6 192 149.9 192H88.08C39.44 192 0 233.8 0 285.3C0 295.6 7.887 304 17.62 304h199.5C196.7 280.2 183.9 249.7 183.9 216zM551.9 192h-61.84c-12.8 0-24.88 3.037-35.86 8.24C454.8 205.5 455.8 210.6 455.8 216c0 21.47-5.625 41.38-14.65 59.34C462.2 263.4 486.1 256 512 256c42.48 0 80.27 18.74 106.6 48h3.756C632.1 304 640 295.6 640 285.3C640 233.8 600.6 192 551.9 192zM618.1 366.7c-5.025-16.01-13.59-30.62-24.75-42.71c-1.674-1.861-4.467-2.326-6.699-1.023l-19.17 11.07c-8.096-6.887-17.4-12.28-27.45-15.82V295.1c0-2.514-1.861-4.746-4.281-5.213c-16.56-3.723-33.5-3.629-49.32 0C484.9 291.2 483.1 293.5 483.1 295.1v22.24c-10.05 3.537-19.36 8.932-27.45 15.82l-19.26-11.07c-2.139-1.303-4.932-.8379-6.697 1.023c-11.17 12.1-19.73 26.71-24.66 42.71c-.7441 2.512 .2793 5.117 2.42 6.326l19.17 11.17c-1.859 10.42-1.859 21.21 0 31.64l-19.17 11.17c-2.234 1.209-3.164 3.816-2.42 6.328c4.932 16.01 13.49 30.52 24.66 42.71c1.766 1.863 4.467 2.328 6.697 1.025l19.26-11.07c8.094 6.887 17.4 12.28 27.45 15.82v22.24c0 2.514 1.77 4.746 4.188 5.211c16.66 3.723 33.5 3.629 49.32 0c2.42-.4648 4.281-2.697 4.281-5.211v-22.24c10.05-3.535 19.36-8.932 27.45-15.82l19.17 11.07c2.141 1.303 5.025 .8379 6.699-1.025c11.17-12.1 19.73-26.7 24.75-42.71c.7441-2.512-.2773-5.119-2.512-6.328l-19.17-11.17c1.953-10.42 1.953-21.22 0-31.64l19.17-11.17C618.7 371.8 619.7 369.2 618.1 366.7zM512 432c-17.67 0-32-14.33-32-32c0-17.67 14.33-32 32-32s32 14.33 32 32C544 417.7 529.7 432 512 432z"/>
</>],
['thin',<>
	<path d="M512 160c44.18 0 80-35.82 80-80S556.2 0 512 0c-44.18 0-80 35.82-80 80S467.8 160 512 160zM512 16c35.29 0 64 28.71 64 64s-28.71 64-64 64s-64-28.71-64-64S476.7 16 512 16zM128 160c44.18 0 80-35.82 80-80S172.2 0 128 0C83.82 0 48 35.82 48 80S83.82 160 128 160zM128 16c35.29 0 64 28.71 64 64s-28.71 64-64 64s-64-28.71-64-64S92.71 16 128 16zM319.9 320c57.41 0 103.1-46.56 103.1-104c0-57.44-46.54-104-103.1-104c-57.41 0-103.1 46.56-103.1 104C215.9 273.4 262.5 320 319.9 320zM319.9 128c48.5 0 87.96 39.48 87.96 88S368.4 304 319.9 304S231.9 264.5 231.9 216S271.4 128 319.9 128zM200 296C200 291.6 196.4 288 192 288H23.09C19.19 288 16 284.4 16 280c0-39.7 30.28-72 67.5-72H160c4.734 0 9.5 .5625 14.16 1.656C178.5 210.8 182.8 208 183.8 203.7c1.016-4.297-1.641-8.609-5.938-9.625C171.1 192.7 165.1 192 160 192H83.5C37.45 192 0 231.5 0 280C0 293.2 10.36 304 23.09 304H192C196.4 304 200 300.4 200 296zM556.5 192H480c-5.969 0-11.97 .7031-17.84 2.094c-4.297 1.016-6.953 5.328-5.938 9.625c1.006 4.303 5.324 7.074 9.691 5.92C471.6 208.1 478 208 483.9 208h72.63c34.97 0 63.82 28.52 67.18 64.9C624 276.9 627.5 280 631.6 280c4.779 0 8.447-4.174 7.99-8.932C635.3 226.7 599.7 192 556.5 192zM392 496H156.4C149.6 496 144 491.2 144 485.3C144 420.6 200.6 368 270.1 368h87.69c4.365 0 7.926-3.502 7.998-7.867C365.9 355.7 362.3 352 357.8 352H270.1C191.6 352 128 411.7 128 485.3C128 500.1 140.7 512 156.4 512H392c4.418 0 8-3.582 8-8S396.4 496 392 496zM512 344c-26.51 0-48 21.49-48 48s21.49 48 48 48c26.51 0 48-21.49 48-48S538.5 344 512 344zM512 424c-17.64 0-32-14.36-32-32s14.36-32 32-32c17.65 0 32 14.36 32 32S529.6 424 512 424zM606 403.7c.9844-7.752 .9844-15.57 0-23.32l14.22-8.283c5.611-3.031 8.236-9.469 6.346-15.78c-5.314-16.89-14.47-32.71-26.41-45.63c-4.189-4.689-11.17-5.83-16.68-2.627l-14.44 8.346c-6.25-4.719-13.02-8.627-20.19-11.66V287.1c0-6.361-4.516-11.86-10.52-13.03c-17.42-3.875-35.71-3.891-52.6-.0469c-6.188 1.203-10.67 6.703-10.67 13.08v16.75c-7.172 3.031-13.92 6.939-20.19 11.66l-14.38-8.268c-5.314-3.25-12.33-2.234-16.72 2.455c-12.11 13.1-21.25 28.93-26.46 45.85c-1.812 6.111 .7187 12.52 6.062 15.52l14.49 8.455c-.9375 7.734-.9375 15.52 0 23.25l-14.25 8.312c-5.562 3-8.141 9.439-6.266 15.74c5.125 16.69 14.27 32.51 26.47 45.84c4.328 4.562 11.14 5.562 16.52 2.484l14.53-8.361c6.266 4.721 13.02 8.627 20.19 11.66v16.75c0 6.375 4.486 11.88 10.44 13.03C494.3 511 503.3 512 512.2 512c8.846 0 17.56-.9531 25.95-2.875c6.221-1.221 10.74-6.721 10.74-13.08v-16.75c7.172-3.031 13.94-6.938 20.19-11.66l14.3 8.268c5.439 3.312 12.53 2.25 16.72-2.453c12.03-13.02 21.19-28.83 26.55-45.85c1.844-6.188-.7813-12.63-6.158-15.52L606 403.7zM589.7 461.1l-22.25-12.86c-17.07 14.52-24.18 16.25-34.57 19.92V493.9c-13.49 2.814-27.8 2.814-41.79 0v-25.74c-7.809-2.762-16.77-4.795-34.55-19.92l-22.35 12.86c-9.422-10.69-16.63-23.16-20.92-36.24l22.19-12.94c-1.51-8.412-4.025-17.37 0-39.82l-22.19-12.94c4.359-13.25 11.56-25.72 20.92-36.24l22.35 12.86c17.06-14.53 24.16-16.25 34.55-19.93V290.1c13.52-2.812 27.8-2.797 41.79 .0156v25.74c7.807 2.762 16.79 4.789 34.57 19.93l22.25-12.86c9.33 10.5 16.55 22.97 21 36.19l-22.33 13.02c4.121 21.85 2.035 28.96 0 39.76l22.33 13.02C606.2 438.1 599.1 450.5 589.7 461.1z"/>
</>],

]);

const UsersGear: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

UsersGear.displayName = "UsersGear";

export default UsersGear;
