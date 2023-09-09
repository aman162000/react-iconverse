
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M312.1 232.1l-272 272C36.28 509.7 30.14 512 23.1 512s-12.28-2.344-16.97-7.031c-9.375-9.375-9.375-24.56 0-33.94l272-272c9.375-9.375 24.56-9.375 33.94 0S322.3 223.6 312.1 232.1z"/><path className="fa-secondary" d="M498 232.8c-6.246 6.75-14.62 11.76-22.62 16.63c-12.62 7.871-25.62 14.98-39.86 23.11c4.457 5.469 8.092 9.71 11.44 13.85c22.32 27.61 15.85 65.11-15.49 81.78c-22.07 11.74-45.52 10.24-69.42 7.221c-12.75-1.625-25.74-2.625-42.24-4.375c4.248 6.125 6.246 8.624 7.748 11.25c14.99 26.11 4.246 55.37-24.62 63.23c-11.87 3.129-25.62 3.497-37.61 .7513c-17.24-3.875-33.36-12.87-50.61-17.5c-20.68-5.783-30.03-.5801-35.67 1.266c-19.51 6.422-40 3.705-57.74-5.345l191.7-191.7c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0l-191.7 191.7c-9.049-17.74-11.72-38.21-5.298-57.71c1.857-5.646 7.077-14.9 1.265-35.67C78.71 280.1 69.71 263.9 65.84 246.7c-2.748-12-2.374-25.75 .7506-37.62C74.46 180.2 103.7 169.5 129.8 184.5c2.625 1.5 5.124 3.501 11.25 7.747C139.3 175.7 138.3 162.7 136.7 149.1C133.7 126.1 132.2 102.6 143.9 80.54c16.67-31.34 54.17-37.82 81.78-15.49C229.8 68.39 234.1 72.03 239.5 76.48c8.121-14.25 15.24-27.24 23.11-39.86c4.871-7.996 9.872-16.38 16.62-22.62c23.74-22.12 59.1-17.36 77.85 9.624c6.799 10.37 10.35 25.29 26.87 20.5c32.99-9.742 57.02-2.832 71.52 12.41c15.24 14.5 22.14 38.52 12.39 71.5c-4.738 16.34 9.73 19.8 20.5 26.87C515.4 173.6 520.1 209 498 232.8z"/>
</>],
['light',<>
	<path d="M479.6 213.2c-3.609-32.92-32.6-47.47-39.05-51.41c12.47-42.66-3.938-66.28-14.22-76.12c-2.993-3.159-26.01-28.87-76.13-14.22c-3.939-6.453-18.49-35.44-51.41-39.05C259.1 28.04 242.9 57.63 223.8 91.5c-6.509-5.259-26.22-20.19-50.97-15.42c-64.54 12.8-48.57 103-47.59 112.1c-32.32-9.037-64.76 12.05-64.76 57.2c0 33.8 25.16 63.77 18.71 80.72c-11.28 31.27-9.918 59.61 2.525 80.66l-45.04 45.04c-6.25 6.25-6.25 16.37 0 22.62C39.81 478.4 43.91 480 47.1 480c4.094 0 8.188-1.562 11.31-4.687l45.08-45.08c11.28 6.646 24.52 10.31 39.34 10.31c12.84 0 26.74-2.561 41.25-7.789c17.39-6.605 46.34 18.7 80.73 18.7c47.04 0 65.74-34.23 57.21-64.75c3.422 .3379 16.34 2.447 32.33 2.447c30.53 0 72.27-7.682 80.67-50.03c1.203-6.234 4.375-26.47-15.42-50.97C452.6 270.1 484.1 253.7 479.6 213.2zM407.6 258.7c-3.804 2.138 1.969-1.112-35.8 20.16l23.79 29.43c5.035 6.232 10.67 15.59 8.924 24.63c-1.316 6.633-4.811 24.25-49.28 24.25c-11.05 0-20.46-1.205-25.51-1.853c-5.059-.6052 2.392 .1605-50.24-5.045c13.15 47.03 16.77 52.22 10.31 60.74c-4.143 5.459-12.7 8.465-24.1 8.465c-10.86 0-23.17-4.875-35.07-9.59c-15.01-5.945-36.3-14.93-56.51-7.217c-29.24 10.54-44.79 3.756-45.64 3.49l186.8-186.8c6.25-6.25 6.25-16.37 0-22.62s-16.38-6.25-22.62 0l-186.9 186.9c-3.912-12.27-2.938-27.91 3.287-45.19c7.637-20.06-.1523-39.71-7.021-57.04c-4.717-11.9-9.592-24.2-9.592-35.06c0-9.967 2.359-17.94 6.645-22.45c9.461-9.967 22.57-2.514 62.56 8.666C154.9 164.1 146.1 113.1 178.9 107.5C189.1 105.4 200.8 114 203.7 116.4l29.43 23.77c21.27-37.76 18.02-31.99 20.16-35.8c17.3-30.77 24.79-40.36 37.93-40.35c16.06 0 23.53 10.47 31.62 24.15l12.77 20.92l23.52-6.875c27.25-7.965 39.15 .4779 45.03 6.621c5.4 5.17 13.31 17.77 5.637 44.03l-6.879 23.53c23.65 14.43 19.97 12.2 23.17 14.09c9.924 5.781 20.26 13.42 21.67 26.29C449.5 232.1 443.1 238.8 407.6 258.7z"/>
</>],
['regular',<>
	<path d="M480.3 144.7c-.1562-.0938-1.422-.9375-1.594-1.062c-1.922-1.25-3.859-2.5-5.797-3.656c10.78-44.72-7.344-70.48-19.55-82.11c-.0156-.0313 0 0 0 0c-11.98-12.22-37.56-29.33-81.28-18.73c-1.391-2.312-2.953-4.75-4.719-7.406c-12.3-17.72-31.11-29.12-51.61-31.34C295.5-1.594 276 4.875 260.8 19.06c-8.344 7.75-13.89 16.84-19.11 25.41C238.1 48.75 236.4 53.09 233.8 57.5c-15.89-9.375-34.19-12.69-51.7-9.125C161.4 52.59 143.6 66.22 133.2 85.75C119.5 111.6 121 138.2 123.8 161.2C114.7 160.6 105.3 162.1 96.77 165.6C79.39 172.8 66.42 187.9 61.13 207.4c-3.844 14.59-4.156 31.22-.8906 45.44c2.297 10.22 5.922 19.38 9.438 28.22C72.13 287.2 74.63 293.4 76.39 299.1c2.547 9.094 1.438 12.12-.8281 18.38c-7.672 23.25-5.625 48.47 5.734 70.97c.8066 1.59 1.986 2.951 3.125 4.328l-77.39 77.39c-9.375 9.375-9.375 24.56 0 33.94C11.72 509.7 17.86 512 23.1 512s12.28-2.344 16.97-7.031l77.34-77.33c1.35 1.117 2.664 2.285 4.229 3.084c22.55 11.47 47.84 13.53 73.92 4.875c3.359-1.25 6.578-2.406 15.92 .2187C218.7 437.5 224.9 440 231 442.5c8.828 3.5 17.95 7.125 28.06 9.375c6.672 1.562 13.7 2.312 20.78 2.312c8.375 0 16.86-1.062 24.97-3.219c19.27-5.25 34.42-18.22 41.61-35.56c3.547-8.594 5-17.81 4.391-27.09c23.06 2.812 49.61 4.344 75.45-9.406c19.52-10.38 33.13-28.19 37.34-48.88c3.578-17.53 .2656-35.84-9.125-51.78c4.547-2.625 9.078-5.344 13.72-8.219c7.969-4.875 17.02-10.41 24.66-18.66c14.25-15.28 20.91-34.84 18.73-55.06C509.4 175.8 497.1 157 480.3 144.7zM457.7 218.7c-3.172 3.406-8.953 6.938-15.59 11c-8.766 5.469-17.73 10.53-27.3 15.91l-8 4.531c-6.141 3.5-10.42 9.5-11.73 16.47c-1.297 6.938 .5313 14.09 4.984 19.56l10.31 12.5c5.484 6.781 7.688 14.5 6.203 21.75c-1.375 6.812-5.828 12.38-12.86 16.09c-12.77 6.781-27.5 6.594-48.59 3.938c-7.219-.9062-14.52-1.625-22.56-2.406l-16.2-1.625c-9.453-1.125-18.42 3.562-23.19 11.66c-4.797 8.062-4.422 18.19 .9375 25.91l3.562 5.062c1.062 1.5 1.781 2.406 2.344 3.375c2.984 5.219 3.734 10.53 2.047 14.62c-1.891 4.562-6.406 6.656-9.688 7.562c-7.203 1.875-15.61 2.062-22.69 .4687c-7.156-1.625-14.03-4.469-20.95-7.219c-7.891-3.125-15.81-6.219-23.69-8.312c-8.594-2.438-15.95-3.312-22.2-3.312c-11.27 0-19 2.844-24.09 4.719c-7.713 2.555-15.9 2.105-23.93 .1602l158.1-158.1c9.375-9.375 9.375-24.56 0-33.94s-24.56-9.375-33.94 0l-158 158c-1.891-8.059-2.252-16.39 .5645-24.86c2.516-6.844 7.781-21.09 1.109-44.91C120.5 279.2 117.4 271.2 114.3 263.3C111.5 256.4 108.7 249.5 107 242.3C105.5 235.3 105.6 226.9 107.5 219.8c.9375-3.469 3.031-7.969 7.594-9.875c4.047-1.594 9.406-.9062 14.75 2.125C130.8 212.6 131.6 213.3 133 214.3l5.141 3.625c7.75 5.375 17.88 5.719 25.92 .9062c8.078-4.781 12.61-13.84 11.61-23.16c0 0-3.109-31.56-4.016-38.75C169 135.8 168.8 121.1 175.6 108.3c3.734-7.031 9.312-11.47 16.11-12.88C198.1 94 206.7 96.16 213.4 101.6l12.42 10.28c5.484 4.469 12.67 6.406 19.59 5.031c6.953-1.281 12.98-5.562 16.48-11.72l4.859-8.594c5.281-9.344 10.23-18.12 16.19-27.72c3.438-5.625 6.969-11.41 10.48-14.66c6.328-5.938 12.83-6.5 17.17-6.156c6.734 .75 12.88 4.625 17.55 11.41c1.375 2.094 2.891 4.125 4.125 7.062c7.672 17.09 27.61 25.94 46.5 20.44c12.56-3.688 29.61-5.938 39.88 4.062c.5 .5625 1.031 1.125 1.594 1.656c.2656 .25 .5469 .5 .8281 .75c9.844 10.38 7.609 27.28 3.859 39.94c-5.422 18.75 3.391 38.69 21.14 46.63c2.25 .9062 4.203 2.375 6.203 3.688c0 0 .4844 .3125 .8125 .5625c6.234 4.406 10.06 10.47 10.78 17.12C464.3 205.8 463.7 212.3 457.7 218.7z"/>
</>],
['solid',<>
	<path d="M488.4 154.9c-4-2.625-7.999-5.339-12.5-7.214c-7.248-3.25-10.25-11.9-7.999-19.65c9.746-32.1 2.855-57-12.39-71.5c-14.5-15.25-38.53-22.16-71.52-12.41c-7.748 2.25-16.37-.7408-19.62-7.991c-1.875-4.5-4.619-8.507-7.244-12.51c-18.74-26.1-54.1-31.75-77.85-9.624c-6.748 6.25-11.75 14.62-16.62 22.62C254.8 49.24 247.6 62.23 239.5 76.48C234.1 72.03 229.8 68.39 225.7 65.05C198.1 42.71 160.6 49.19 143.9 80.54C132.2 102.6 133.7 126.1 136.7 149.1C138.3 162.7 139.3 175.7 141.1 192.2c-6.123-4.25-8.624-6.247-11.25-7.747c-26.12-14.1-55.36-4.255-63.23 24.62C63.46 220.1 63.09 234.7 65.84 246.7c3.873 17.25 12.87 33.36 17.5 50.61c5.802 20.74 .6115 29.97-1.265 35.67c-6.426 19.53-4.186 40.39 4.789 58.2l-79.83 79.85c-9.373 9.375-9.373 24.56 0 33.94C11.72 509.7 17.84 512 23.1 512s12.28-2.344 16.97-7.031l79.75-79.78c17.85 9.074 38.73 11.24 58.34 4.79c5.646-1.861 15.03-7.047 35.67-1.266c17.25 4.625 33.36 13.62 50.61 17.5c11.1 2.75 25.74 2.374 37.61-.7513c28.87-7.875 39.61-37.11 24.62-63.23c-1.502-2.625-3.5-5.124-7.748-11.25c16.49 1.75 29.49 2.75 42.24 4.375c23.91 3.023 47.35 4.525 69.42-7.221c31.34-16.68 37.82-54.17 15.49-81.78c-3.346-4.141-6.983-8.378-11.44-13.85c14.25-8.125 27.24-15.23 39.86-23.11c7.996-4.875 16.37-9.885 22.62-16.63C520.1 209 515.4 173.7 488.4 154.9zM347.2 187.3L219.2 315.3c-3.125 3.125-7.217 4.688-11.31 4.688c-4.094 0-8.186-1.562-11.31-4.688c-6.248-6.25-6.248-16.37 0-22.62l127.1-127.1c6.248-6.25 16.37-6.25 22.62 0S353.5 181.1 347.2 187.3z"/>
</>],
['thin',<>
	<path d="M512 198.1c0-16.33-8.167-32.5-23.62-43.23c-11.54-7.57-25.19-10.67-20.5-26.87c3.109-10.5 4.522-20.11 4.522-28.77c0-18.54-6.523-32.85-16.91-42.73c-9.883-10.39-24.22-16.94-42.76-16.94c-8.662 0-18.26 1.415-28.76 4.524c-16.2 4.695-19.3-8.962-26.87-20.5C346.4 8.167 330.2 0 313.9 0c-12.19 0-24.45 4.544-34.6 13.1c-8.609 7.976-15.33 19.67-39.74 62.49C234.1 72.03 229.8 68.39 225.7 65.05C214.7 56.16 202.1 51.82 189.9 51.82c-18.42 0-35.98 9.859-46.01 28.72C132.2 102.6 133.7 126.1 136.7 149.1c1.621 12.75 2.626 25.74 4.374 42.24c-6.125-4.246-8.62-6.247-11.25-7.747c-7.961-4.578-16.22-6.767-24.07-6.767c-17.89 0-33.69 11.32-39.16 31.39c-3.123 11.87-3.497 25.62-.7506 37.62c3.873 17.24 12.87 33.36 17.5 50.61c5.808 20.77 .5983 30-1.265 35.67c-8.18 24.86-2.264 51.55 13.96 71.62l-93.69 93.73c-3.123 3.125-3.117 8.186 .0098 11.31c.002 0-.0039 0 0 0c.002 0-.002 0 0 0c3.125 3.125 8.191 3.13 11.31 .0091l93.73-93.69c20.08 16.23 46.8 22.18 71.66 14c5.672-1.859 14.9-7.074 35.67-1.266c17.25 4.625 33.37 13.62 50.61 17.5c11.1 2.742 25.74 2.37 37.61-.7513c20.06-5.469 31.37-21.31 31.37-39.2c.002-7.855-2.168-16.07-6.747-24.03c-1.498-2.625-3.502-5.124-7.748-11.25c16.5 1.75 29.49 2.75 42.24 4.375c23.91 3.016 47.35 4.521 69.42-7.221c18.86-10.03 28.71-27.63 28.71-46.05c0-12.2-4.329-24.73-13.22-35.73c-3.35-4.137-6.985-8.378-11.44-13.85c42.81-24.41 54.5-31.13 62.48-39.74C507.5 222.6 512 210.3 512 198.1zM486.3 221.8c-4.207 4.539-8.32 8.246-58.7 36.75c-8.545 4.867-10.75 16.3-4.48 23.1c10.84 13.12 21.06 22.69 21.06 39.5c-.002 13.43-7.365 25.05-20.22 31.89c-18.29 9.726-38.78 8.137-59.91 5.469c-7.945-1.012-36.21-3.734-42.55-4.406c-13.69-1.457-22.56 13.89-14.83 25.03c11.67 16.52 11.65 20.94 11.64 26.19c0 11.51-7.314 20.37-19.58 23.72c-22.31 5.867-39.61-1.906-54.59-7.863C236.1 418.9 227.8 415.6 218.9 413.2c-26.02-7.281-39.99-.0703-44.82 1.523c-19.14 6.297-39.5 2.102-55.35-10.06l231.1-231.1c3.123-3.152 3.105-8.233-.0182-11.33c-.0078-.0078 .0059 .0078 0 0c-.0078-.0078 .0059 .0039 0 0c-3.096-3.121-8.175-3.142-11.33-.0169l-231.1 231.1c-12.16-15.84-16.36-36.21-10.06-55.35c1.59-4.832 8.803-18.8 1.52-44.82c-2.391-8.898-5.697-17.23-8.9-25.27C83.94 252.9 76.16 235.6 82.03 213.3c3.344-12.27 12.21-19.58 23.72-19.58C111 193.7 115.4 193.7 131.9 205.3C143.1 213.1 158.4 204.2 156.1 190.5C156.3 184.2 153.6 155.9 152.6 147.1c-2.668-21.13-4.262-41.62 5.471-59.91c6.838-12.86 18.45-20.22 31.88-20.23c16.82 .0039 26.39 10.22 39.5 21.06c7.695 6.269 19.13 4.062 24-4.484c28.5-50.37 32.2-54.49 36.74-58.69c6.814-6.351 15.01-9.703 23.69-9.703c11.74 0 22.72 6.101 30.65 17.58c4.975 7.551 14.71 34.37 43.1 25.88c8.681-2.57 16.83-3.867 24.22-3.867c4.191 0 19.94 1.766 31.36 12.32c10.55 11.41 12.32 27.16 12.32 31.36c0 7.391-1.299 15.53-3.865 24.22c-8.498 29.28 18.33 39.02 25.87 43.99c11.48 7.937 17.59 18.91 17.58 30.66C496 206.8 492.6 215 486.3 221.8z"/>
</>],

]);

const LeafOak: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={512} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

LeafOak.displayName = "LeafOak";

export default LeafOak;