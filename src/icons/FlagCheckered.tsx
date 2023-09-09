
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M432 118.8V26.05c-48.43 12.27-80.11 3.695-112-6.801v84.8c30.2 7.961 60.4 15.92 96 15.92C420.8 119.1 426.2 119.5 432 118.8zM544 176V88c-35.87 14.48-80.42 27.22-112 30.84v88C463.6 203.2 508.1 190.5 544 176zM524.1 360.9C536.3 355.9 544 344.4 544 332.1V264c-35.87 14.48-80.42 27.22-112 30.84v88.55C458.8 381.6 488.8 375.1 524.1 360.9zM96 208V120c44.12-20.34 80.23-28.89 112-31.04V1.602C178.2 4.316 142.3 12.93 96 32.38V32c0-17.75-14.25-32-32-32S32 14.25 32 32L31.96 496c0 8.75 7.25 16 16 16H80C88.75 512 96 504.8 96 496V296c44.12-20.34 80.23-28.89 112-31.04v-88C176.2 179.1 140.1 187.7 96 208zM320 192v-88c-34.56-9.109-69.3-17.97-112-15.08v88C250.7 174.1 285.4 182.9 320 192zM416 207.1c-35.6 0-65.8-7.961-96-15.92v88c30.2 7.961 60.4 15.92 96 15.92c4.758 0 10.23-.4609 16-1.125v-88C426.2 207.5 420.8 207.1 416 207.1zM208 264.1v88.15c42.65-2.867 77.47 5.812 112 14.91V280C285.4 270.9 250.7 262.1 208 264.1z"/><path className="fa-secondary" d="M96 384c44.17-20.37 80.2-28.75 112-30.88V264.1C176.2 267.1 140.1 275.7 96 296V384zM96 120V208c44.12-20.34 80.23-28.89 112-31.04v-88C176.2 91.11 140.1 99.66 96 120zM208 176.1v88c42.7-2.887 77.44 5.973 112 15.08v-88C285.4 182.9 250.7 174.1 208 176.1zM320 104V19.25c-31.41-10.34-63.49-22.05-112-17.64v87.36C250.7 86.08 285.4 94.94 320 104zM320 280v87.98c34.62 9.125 69.24 18.23 112 15.36V294.8c-5.766 .6641-11.24 1.125-16 1.125C380.4 295.1 350.2 288 320 280zM416 119.1c-35.6 0-65.8-7.961-96-15.92v88c30.2 7.961 60.4 15.92 96 15.92c4.758 0 10.23-.4609 16-1.125v-88C426.2 119.5 420.8 119.1 416 119.1zM544 264V176c-35.87 14.48-80.42 27.22-112 30.84v88C463.6 291.2 508.1 278.5 544 264zM544 30.74c0-25-28.81-37.99-53.17-26.49C468.5 14.8 449.2 21.68 432 26.05v92.8C463.6 115.2 508.1 102.5 544 88V30.74z"/>
</>],
['light',<>
	<path d="M504.4 0c-7 0-14.25 1.5-21.25 4.625c-50.5 22.62-87.75 30.25-119 30.25c-66.13 0-104.5-34.5-180.9-34.5c-31.62 0-70.13 6.5-119.4 23.25V16c0-8.75-7.25-16-16-16s-16 7.25-16 16l.0833 480c0 8.797 7.199 16 16 16s15.92-7.203 15.92-16v-92.38c44.25-15.88 81.63-22 114.5-22C259.6 381.6 316.1 416 397.5 416c35.25 0 75.13-6.5 123.6-25C535.1 385.6 544 373.1 544 359.8V33.38C543.9 13 525.3 0 504.4 0zM496.1 33.75c9.375-4.125 15.62-.5 15.62 5.625v60.39C481.7 109.4 455.7 114.7 432 117.4V56.98C452.1 51.55 473.1 44.07 496.1 33.75zM511.8 187.8C481.7 197.4 455.7 202.7 432 205.4V149.7c23.75-2.562 49.85-7.523 79.75-16.52V187.8zM511.8 275.5C481.7 285.2 455.7 290.4 432 293.1v-55.39c23.75-2.562 49.85-7.523 79.75-16.52V275.5zM400 207.4c-35.51 .3828-65.9-5.281-96-12.23V140.2c28.62 6.516 59.24 12.03 96 11.52V207.4zM272 187.8c-29.19-6.516-60.04-11.67-96-11.27V120.5c35.51-.3594 65.88 5.328 96 12.29V187.8zM272 220.8v54.8c-29.19-6.516-60.04-11.67-96-11.27V208.5C211.5 208.1 241.9 213.8 272 220.8zM304 228.2c28.62 6.516 59.24 12.03 96 11.52V295.2c-35.51 .3828-65.9-5.281-96-12.23V228.2zM400 63.8v55.61c-35.51 .3828-65.9-5.281-96-12.23V58.69c18.09 4.648 37.33 8.188 60 8.188C375.7 66.88 387.7 65.66 400 63.8zM272 49.48v50.34c-29.19-6.516-60.04-11.67-96-11.27V32.79c2.332-.0781 4.842-.4141 7.125-.4141C217.7 32.38 244.7 40.9 272 49.48zM63.75 369.4V57.25C93.2 46.53 119.7 39.73 144 35.94v54.5C119.9 92.95 93.77 97.82 64 106.8v33.34c30.16-9.688 56.21-14.91 80-17.6v55.91C119.9 180.9 93.77 185.8 64 194.8v33.34c30.16-9.688 56.21-14.91 80-17.6v55.68C119.9 268.7 93.77 273.6 64 282.5v33.34c30.16-9.688 56.21-14.91 80-17.6v53.42C118.1 354.5 91.52 360.2 63.75 369.4zM178.3 349.6c-.7441 0-1.506 .0938-2.25 .1016V296.3c35.51-.3594 65.88 5.324 96 12.28v53.54C243.4 355.3 213.2 349.6 178.3 349.6zM397.4 384C364.1 384 334.3 377.3 304 369.8V315.9c28.62 6.516 59.24 12.03 96 11.52v56.41C399.1 383.9 398.3 384 397.4 384zM511.8 359.5C511.2 361.5 474.7 375.5 432 381.3v-55.87c23.75-2.562 49.85-7.523 79.75-16.52V359.5z"/>
</>],
['regular',<>
	<path d="M508.3 0c-6.365 0-13.04 1.35-19.37 4.232c-45.69 20.86-79.56 27.94-107.8 27.94c-59.96 0-94.8-31.86-163.9-31.87c-34.63 0-77.87 8.002-137.2 32.04V24C80 10.75 69.26 0 56 0S32 10.75 32 24v464C32 501.3 42.74 512 56 512s24-10.75 24-24v-104c53.59-23.86 96.02-31.81 132.8-31.81c73.63 0 124.9 31.78 198.6 31.78c31.91 0 68.02-5.973 111.1-23.09C536.1 355.8 544 344.4 544 332.1V30.74C544 12.01 527.3 0 508.3 0zM152 310.4C128.7 315 104.8 322 80 331.9V283.8l18.03-7.301C117.5 268.7 135.2 262.8 152 258.3V310.4zM152 208.6C130.8 213.7 107.3 221 80 232.1V187.8l18.03-7.301C117.5 172.7 135.2 166.8 152 162.3V208.6zM152 112.6C130.8 117.7 107.3 125 80 136.1V84.14l18.03-7.301C117.5 68.95 135.2 63.15 152 58.55V112.6zM272 309.7C253.7 306.4 234.1 304.2 212.8 304.2c-4.248 0-8.574 .5039-12.85 .6836V249.2C205.8 248.6 211.7 248 217.2 248C238.1 248 254.9 251.7 272 256.7V309.7zM272 207.1C255.7 203.1 238.1 200 217.2 200C211.8 200 205.8 200.6 200 201v-47.84C205.8 152.6 211.7 152 217.2 152C238.1 152 254.9 155.7 272 160.7V207.1zM272 111.1C255.7 107.1 238.1 104 217.2 104C211.8 104 205.8 104.6 200 105V49.47c5.826-.5195 11.74-1.172 17.21-1.172C238.1 48.3 254.9 51.98 272 57.02V111.1zM392 334.9c-23.25-2.121-45.17-7.555-68.04-13.37C322.7 321.2 321.3 320.9 320 320.6V271.2C338.1 276 357.9 279.9 381.1 279.9c3.592 0 7.283-.4766 10.91-.6523V334.9zM392 231.2c-3.627 .2227-7.457 .6992-10.91 .6992c-22.93 0-42.19-4.672-61.09-10.43V175.2C338.1 180 357.9 183.9 381.1 183.9c3.592 0 7.283-.4766 10.91-.6523V231.2zM392 135.2c-3.627 .2227-7.457 .6992-10.91 .6992c-22.93 0-42.19-4.672-61.09-10.43V71.48c18.07 4.82 37.91 8.684 61.09 8.684c3.592 0 7.283-.4766 10.91-.6523V135.2zM496 319.8c-19.64 7.012-38.14 11.46-56 13.89v-61.55c17.73-4.375 36.19-10.5 56-18.91V319.8zM496 201.6c-2.371 .6562-4.75 1.289-7.072 2.344C470.7 212.2 454.8 217.8 440 222.2V176.2c17.73-4.375 36.19-10.5 56-18.91V201.6zM496 105.6c-2.371 .6562-4.75 1.289-7.072 2.344C470.7 116.2 454.8 121.8 440 126.2V72.47c17.73-4.375 36.19-10.5 56-18.91V105.6z"/>
</>],
['solid',<>
	<path d="M509.5 .0234c-6.145 0-12.53 1.344-18.64 4.227c-44.11 20.86-76.81 27.94-104.1 27.94c-57.89 0-91.53-31.86-158.2-31.87C195 .3203 153.3 8.324 96 32.38V32c0-17.75-14.25-32-32-32S32 14.25 32 32L31.96 496c0 8.75 7.25 16 16 16H80C88.75 512 96 504.8 96 496V384c51.74-23.86 92.71-31.82 128.3-31.82c71.09 0 120.6 31.78 191.7 31.78c30.81 0 65.67-5.969 108.1-23.09C536.3 355.9 544 344.4 544 332.1V30.74C544 12.01 527.8 .0234 509.5 .0234zM480 141.8c-31.99 14.04-57.81 20.59-80 22.49v80.21c25.44-1.477 51.59-6.953 80-17.34V308.9c-22.83 7.441-43.93 11.08-64.03 11.08c-5.447 0-10.71-.4258-15.97-.8906V244.5c-4.436 .2578-8.893 .6523-13.29 .6523c-25.82 0-47.35-4.547-66.71-10.08v66.91c-23.81-6.055-50.17-11.41-80-12.98V213.1C236.2 213.7 232.5 213.3 228.5 213.3C208.8 213.3 185.1 217.7 160 225.1v69.1C139.2 299.4 117.9 305.8 96 314.4V250.7l24.77-10.39C134.8 234.5 147.6 229.9 160 225.1V143.4C140.9 148.5 120.1 155.2 96 165.3V101.8l24.77-10.39C134.8 85.52 147.6 80.97 160 77.02v66.41c26.39-6.953 49.09-10.17 68.48-10.16c4.072 0 7.676 .4453 11.52 .668V65.03C258.6 66.6 274.4 71.55 293.2 77.83C301.7 80.63 310.7 83.45 320 86.12v66.07c20.79 6.84 41.45 12.96 66.71 12.96c4.207 0 8.781-.4766 13.29-.8594V95.54c25.44-1.477 51.59-6.953 80-17.34V141.8zM240 133.9v80.04c18.61 1.57 34.37 6.523 53.23 12.8C301.7 229.6 310.7 232.4 320 235.1V152.2C296.1 144.3 271.6 135.8 240 133.9z"/>
</>],
['thin',<>
	<path d="M530.5 6.23C523.7 2.098 516.2 0 508.3 0c-6.637 0-13.29 1.459-19.37 4.232c-41.76 19.06-76.03 27.94-107.8 27.94c-28.96 0-51.76-7.326-75.9-15.09C279.5 8.836 252.1 .3105 217.2 .3066C189.1 .3066 151.7 3.289 64 38.84L48 45.32V8C48 3.582 44.42 0 40 0S32 3.582 32 8v496C32 508.4 35.59 512 40 512s8-3.594 8-8v-105.8l20.68-9.277c19.62-9.121 79.13-36.78 144.2-36.78c36.84 0 67.16 7.717 99.25 15.88c30.72 7.816 62.49 15.9 99.31 15.9c35.46 0 72.08-7.551 111.1-23.09c12.37-4.805 20.37-16.5 20.38-29.78L544 32.35C544 21.28 538.8 11.27 530.5 6.23zM527.8 262.1c-38.59 13.86-74.24 20.8-108.6 20.8c-1.09 0-2.09-.1445-3.172-.1562v-68c1.086 .0117 2.078 .1562 3.172 .1562c34.64 0 70.39-6.773 108.7-19.97L527.8 262.1zM288 177.2C264.1 172 239.9 168 212 168c-12.28 0-24.25 1.102-36 2.609V102.8C187.8 101.2 199.7 100 212 100c27.63 0 51.83 4.164 76 9.586V177.2zM304 113.3c3.289 .793 6.537 1.535 9.859 2.344C340.8 122.3 368.8 128.7 400 130.8v67.98c-29.51-2.094-56.43-8.348-82.67-14.76C312.8 182.1 308.4 181.1 304 180.9V113.3zM160 172.9c-47.97 8.598-88.74 26.55-112 36.95V143.3l5.016-2.207C74.88 131.3 114.2 113.9 160 105.2V172.9zM48 227.3l5.016-2.207C74.88 215.3 114.2 197.9 160 189.2v67.66c-47.97 8.598-88.74 26.55-112 36.95V227.3zM176 186.8C187.8 185.2 199.7 184 212 184c27.63 0 51.83 4.164 76 9.586v67.66C264.1 256 239.9 252 212 252c-12.28 0-24.25 1.102-36 2.609V186.8zM304 197.3c3.289 .793 6.537 1.535 9.859 2.344C340.8 206.3 368.8 212.7 400 214.8v67.98c-29.51-2.094-56.43-8.348-82.67-14.76C312.8 266.1 308.4 265.1 304 264.9V197.3zM527.9 178.1c-38.62 13.87-74.29 20.82-108.7 20.82c-1.09 0-2.09-.1445-3.172-.1562v-68c1.086 .0117 2.078 .1562 3.172 .1562c34.66 0 70.43-6.781 108.8-19.99L527.9 178.1zM495.6 18.8C499.5 16.99 504.1 16 508.4 16c4.994 0 9.529 1.281 13.87 3.914C525.7 22.04 528 26.92 528 32.34l-.0527 62.6c-38.65 13.89-74.34 20.84-108.8 20.84c-1.09 0-2.09-.1445-3.172-.1562v-70.95C440.3 40.45 466.1 32.23 495.6 18.8zM381.1 48.18c6.184 0 12.55-.6641 18.91-1.281v67.92c-29.51-2.094-56.43-8.348-82.67-14.76C312.8 98.97 308.4 97.95 304 96.9V33.48C327.1 40.89 351.2 48.18 381.1 48.18zM288 28.48v64.77C264.1 88.01 239.9 84 212 84c-12.28 0-24.25 1.102-36 2.609V20.07c17.16-3.09 30.1-3.754 41.21-3.754C245.1 16.32 266.6 21.85 288 28.48zM70.01 53.66C109.4 37.71 137.8 28.71 160 23.45v65.41c-47.97 8.598-88.74 26.55-112 36.95V62.58L70.01 53.66zM61.99 374.4L48 380.7V311.3l5.016-2.207C74.88 299.3 114.2 281.9 160 273.2v68.31C114.2 350.3 76.9 367.5 61.99 374.4zM176 339V270.8C187.8 269.2 199.7 268 212 268c27.63 0 51.83 4.164 76 9.586v68.12c-23.48-5.402-47.36-9.543-75.16-9.543C200.2 336.2 187.1 337.4 176 339zM304 349.6V281.3c3.289 .793 6.537 1.535 9.859 2.344C340.8 290.3 368.8 296.7 400 298.8v68.51c-30.14-1.469-57.53-8.078-83.96-14.8C311.1 351.5 308 350.6 304 349.6zM517.6 345.9C481.3 360.1 448 367.1 416 367.7V299.6c1.086 .0117 2.078 .1562 3.172 .1562c34.62 0 70.35-6.766 108.6-19.95l-.043 51.22C527.7 337.7 523.7 343.5 517.6 345.9z"/>
</>],

]);

const FlagCheckered: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FlagCheckered.displayName = "FlagCheckered";

export default FlagCheckered;