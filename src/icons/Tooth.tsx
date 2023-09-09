
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-secondary" d="M394.1 212.8c-20.04 27.67-28.07 60.15-31.18 93.95c-3.748 41.34-8.785 82.46-17.89 122.8l-6.75 29.64c-2.68 12.14-13.29 20.78-25.39 20.78c-12 0-22.39-8.311-25.29-20.23l-29.57-121.2C254.1 322.6 240.1 311.4 224 311.4c-16.18 0-30.21 11.26-34.07 27.23l-29.57 121.2c-2.893 11.92-13.39 20.23-25.29 20.23c-12.21 0-22.71-8.639-25.5-20.78l-6.643-29.64c-9.105-40.36-14.14-81.48-17.1-122.8C81.93 272.1 73.9 240.5 53.86 212.8c-18.75-25.92-27.11-60.15-18.43-96.57c9.428-39.59 40.39-71.75 78.85-82.03c20.14-5.25 39.54-.4375 57.32 9.077l86.14 56.54c6.643 4.375 15.11 1.86 18.96-4.264c4.07-6.454 2.25-15.09-4.18-19.36l-24.21-15.86c3-1.531 6.215-2.735 9-4.813c22.39-16.84 48.75-28.65 76.39-21.33c38.46 10.28 69.43 42.43 78.85 82.03C421.2 152.7 412.9 187 394.1 212.8z"/>
</>],
['light',<>
	<path d="M392.9 225.3c-14.31 19.97-22.47 45.16-25.62 79.28c-2.875 31.81-7.374 73.81-16.72 116.1l-6.187 27.66C340.3 466.9 324.3 480 305.5 480c-18.62 0-34.56-12.84-38.75-31.22l-27.09-112.3c-1.875-7.656-8.312-13.03-15.65-13.03c-7.343 0-13.78 5.375-15.69 13.09l-27.09 112.5C176.9 467.2 160.9 480 142.5 480c-18.87 0-34.87-13.09-38.9-31.81L97.39 420.7c-9.343-42.28-13.84-84.28-16.72-116.1c-3.062-33.97-11.22-59.16-25.62-79.25c-21.09-29.59-28.03-66.06-19.5-102.7c10.03-42.53 42.87-77.06 83.74-87.1C145.5 27.73 173.3 34.92 201.7 56.07l.6874 .5c9.187 6.937 48.09 32.69 62.37 42.06c7.405 4.844 9.437 14.78 4.593 22.16c-4.875 7.406-14.9 9.406-22.15 4.594c-1.937-1.281-65.49-44.5-65.49-44.5C162.6 66.57 144.4 61.1 127.5 65.54C97.96 73.45 74.05 98.73 66.71 129.9C60.3 157.4 65.4 184.7 81.08 206.7c17.84 24.87 27.84 55.06 31.47 94.97c2.781 30.91 7.124 71.56 16.09 112l6.187 27.59c1.719 7.937 13.37 8.031 15.25 .2187l27.12-112.6c5.406-22.12 24.65-37.53 46.78-37.53s41.37 15.41 46.75 37.47l27.15 112.6c1.781 7.937 13.53 7.719 15.25-.0313l6.187-27.75c8.968-40.44 13.31-81.09 16.09-111.1c3.718-40.06 13.75-70.25 31.5-94.1c15.72-21.97 20.81-49.25 14.34-76.81c-7.437-31.19-31.34-56.47-60.93-64.34c-12.53-3.437-25.84-1.156-40.65 6.937c-7.749 4.187-17.47 1.344-21.72-6.406c-4.218-7.781-1.344-17.47 6.406-21.72c22.09-12.03 43.68-15.28 64.27-9.719c40.71 10.87 73.62 45.37 83.74 87.87C421 159.2 414.1 195.7 392.9 225.3z"/>
</>],
['regular',<>
	<path d="M428.1 115.7c-11-46.56-47.41-84.53-92.75-96.75c-30.13-7.1-61.66 .25-93.85 24.59c-1.75 1.312-10.56 7.1-16.63 12.37l-39.69-26.16c-24.78-13.34-49.13-16.97-72.53-10.81c-45.28 12.22-81.69 50.19-92.69 96.75c-9.5 40.15-1.875 80.18 21.53 112.7C55.83 248.3 63.86 273.3 66.86 307.2c3.344 35.87 8.063 78.37 17.72 121.4l6.406 28.69C96.17 480.1 115.8 496 138.8 496c22.66 0 42.22-15.59 47.53-37.84l28.38-116.9c2.188-9.25 16.31-9.187 18.66 .0625l28.31 116.8C267.1 480.4 286.6 496 309.3 496c22.75 0 42.84-16.34 47.75-38.75l6.469-28.62c9.875-44.03 14.59-88.09 17.63-121.5c3.125-33.94 11.22-58.97 25.47-78.72C429.6 196.4 437.5 155.4 428.1 115.7zM367.6 200.3c-19.47 27.06-30.38 59.59-34.34 102.5c-2.875 31.1-7.375 74.03-16.63 115.3l-8.313 28.75l-28.38-116.1c-6.469-26.19-29.5-44.47-55.94-44.47c-26.66 0-49.69 18.37-55.97 44.59l-30.25 116.8l-6.406-28.62c-9.063-40.47-13.56-81.06-16.75-115.3c-3.781-42.75-14.66-75.31-34.22-102.5C65.33 179.3 60.42 153.2 66.67 126.8C73.7 97.11 96.64 72.99 125 65.36c11.25-2.937 23.56-.8125 35.59 5.562l82.56 54.53c11.06 7.312 25.94 4.25 33.25-6.812s4.25-25.94-6.813-33.25l-2.063-1.344c.9375-.7187 1.906-1.437 2.906-2.187c20.13-15.19 37.28-20.62 52.47-16.53c28.53 7.656 51.47 31.78 58.5 61.44C387.7 153.2 382.8 179.4 367.6 200.3z"/>
</>],
['solid',<>
	<path d="M394.1 212.8c-20.04 27.67-28.07 60.15-31.18 93.95c-3.748 41.34-8.785 82.46-17.89 122.8l-6.75 29.64c-2.68 12.14-13.29 20.78-25.39 20.78c-12 0-22.39-8.311-25.29-20.23l-29.57-121.2C254.1 322.6 240.1 311.4 224 311.4c-16.18 0-30.21 11.26-34.07 27.23l-29.57 121.2c-2.893 11.92-13.39 20.23-25.29 20.23c-12.21 0-22.71-8.639-25.5-20.78l-6.643-29.64c-9.105-40.36-14.14-81.48-17.1-122.8C81.93 272.1 73.9 240.5 53.86 212.8c-18.75-25.92-27.11-60.15-18.43-96.57c9.428-39.59 40.39-71.75 78.85-82.03c20.14-5.25 39.54-.4375 57.32 9.077l86.14 56.54c6.643 4.375 15.11 1.86 18.96-4.264c4.07-6.454 2.25-15.09-4.18-19.36l-24.21-15.86c3-1.531 6.215-2.735 9-4.813c22.39-16.84 48.75-28.65 76.39-21.33c38.46 10.28 69.43 42.43 78.85 82.03C421.2 152.7 412.9 187 394.1 212.8z"/>
</>],
['thin',<>
	<path d="M393.5 219c-15.1 22.19-25.03 49.72-28.43 86.64c-2.969 32.94-7.623 76.32-17.28 119.5l-6.467 28.6C337.1 468.9 324.5 480 309.2 480c-15.21 0-28.37-10.55-31.99-25.66l-28.31-114.2c-2.967-11.89-13.18-20.19-24.9-20.19c-11.81 0-22.03 8.281-24.87 20.12l-28.37 114.3C167.2 469.5 154 480 138.8 480c-15.46 0-28.71-10.8-32.24-26.27l-6.375-28.61c-9.467-42.22-14.09-84.07-17.4-119.4C79.52 268.8 70.52 241.3 54.46 219C33.84 190.3 27.13 154.9 35.53 119.4C45.21 78.42 77.12 45.06 116.8 34.4c19.31-5.109 39.77-1.891 60.74 9.424l83.17 54.89c3.688 2.438 4.719 7.391 2.281 11.08c-2.5 3.719-7.467 4.688-11.09 2.266L169.4 57.54C152.4 48.46 136.4 45.79 120.9 49.85c-34.05 9.156-61.49 37.89-69.83 73.21c-7.312 30.97-1.5 61.74 16.37 86.61c17.81 24.72 27.74 54.77 31.24 94.57c3.248 34.81 7.811 76.04 17.09 117.4l6.373 28.6c1.844 8.094 8.686 13.77 16.62 13.77c7.779 0 14.56-5.5 16.44-13.38l28.37-114.3c4.531-19.02 21.15-32.35 40.4-32.35c19.09 0 35.71 13.3 40.43 32.35l28.31 114.2c1.906 7.938 8.686 13.44 16.46 13.44c7.842 0 14.78-5.781 16.53-13.75l6.469-28.63c9.467-42.22 14.03-84.93 16.96-117.4c3.686-39.89 13.65-69.94 31.37-94.55c17.9-24.8 23.71-55.57 16.37-86.61c-8.342-35.31-35.78-64.05-69.86-73.22c-20.46-5.438-42.02 .875-66.3 19.22c-3.498 2.656-8.529 1.984-11.19-1.547c-2.654-3.531-1.967-8.547 1.562-11.2c28.03-21.21 54.93-28.61 80.05-21.92c39.71 10.67 71.61 44.03 81.29 84.99C420.9 155 414.2 190.4 393.5 219z"/>
</>],

]);

const Tooth: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={448} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Tooth.displayName = "Tooth";

export default Tooth;