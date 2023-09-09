
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M300.9 261.4c1.086-1.688 1.791-3.705 2.637-5.662c3.527-8.154 8.357-19.32 19.26-28.11c10.9-8.789 23.24-11.12 31.4-12.66c2.037-.3848 4.117-.6172 5.105-.8711c1.596-1.006 3.018-2.424 4.537-3.744c6.369-5.539 15.99-13.91 29.89-17.06c3.744-.8496 7.66-1.279 11.64-1.279c9.029 0 16.92 2.215 22.69 3.834c1.889 .5293 3.734 1.184 4.5 1.393c1.004-.0938 2.021-.4473 3.031-.7168c.1387-6.984-.707-14.36 .7891-20.86c2.367-10.3 11.61-19.98 11.66-30.81c.0488-10.49-9.027-20.27-11.35-30.95c-2.322-10.68 1.84-23.47-2.561-32.95c-4.539-9.791-16.93-14.57-23.35-22.87c-6.525-8.437-8.227-21.83-16.35-28.5c-8.154-6.709-21.34-5.553-30.75-10.25c-9.359-4.678-16.55-16.03-26.8-18.49c-10.08-2.42-21.46 4.436-32.06 4.383c-10.27-.0508-21.56-7.096-32.02-4.727c-10.46 2.373-17.77 13.64-27.06 18.13c-9.586 4.635-22.73 3.348-30.87 9.904C206.6 35.19 204.8 48.58 198.2 56.87C191.7 65.2 179.2 69.86 174.6 79.46C170.1 89.03 174.1 101.9 171.7 112.3c-2.367 10.3-11.61 19.98-11.66 30.81C159.1 153.6 169 163.4 171.3 174.1c1.252 5.76 .6797 12.11 .5215 18.25c.127 0 .2266-.0352 .3535-.0352c4.146 0 8.211 .4707 12.09 1.4c13.71 3.291 23.18 11.73 29.45 17.32C215.3 212.4 216.7 213.9 217.5 214.5c1.812 .6777 3.84 .9316 5.834 1.33c8.17 1.629 20.52 4.092 31.38 13.03c10.73 8.824 15.45 19.98 18.89 28.13c.8438 1.998 1.541 4.068 2.152 5.166C277.1 263.5 278.8 264.7 280.4 265.9C282.5 267.5 285.1 269.6 287.6 271.8c3.188-2.853 6.324-5.332 8.916-7.266C298.2 263.3 299.1 262.2 300.9 261.4zM239.1 159.1c-8.836 0-15.1-7.164-15.1-15.1c0-8.838 7.166-16 16-16s15.1 7.164 15.1 16C255.1 152.8 248.8 159.1 239.1 159.1zM250.7 282.1c-6.525-8.437-8.227-21.83-16.35-28.5c-8.154-6.709-21.34-5.553-30.75-10.25c-9.359-4.678-16.55-16.03-26.8-18.49C166.8 222.4 155.4 229.3 144.8 229.2C134.5 229.2 123.2 222.1 112.8 224.5C102.3 226.9 94.1 238.1 85.71 242.6c-9.586 4.635-22.73 3.348-30.87 9.904c-8.264 6.664-10.07 20.06-16.61 28.35c-6.572 8.33-18.99 12.98-23.6 22.59c-4.58 9.56-.5645 22.42-2.973 32.88C9.295 346.6 .0508 356.3 0 367.2c-.0488 10.49 9.027 20.27 11.35 30.95c2.322 10.68-1.84 23.47 2.561 32.95c4.539 9.789 16.93 14.57 23.35 22.87c6.525 8.437 8.227 21.83 16.35 28.51c8.154 6.709 21.34 5.551 30.75 10.25c9.359 4.676 16.55 16.03 26.8 18.49c10.08 2.42 21.46-4.436 32.06-4.383c10.27 .0508 21.56 7.096 32.02 4.725c10.46-2.373 17.77-13.64 27.06-18.13c9.586-4.635 22.73-3.346 30.87-9.902c8.264-6.662 10.07-20.06 16.61-28.35c5.461-6.92 14.72-11.46 20.41-18.25c-2.727-9.601-2.496-18.58-2.211-25.52c.0918-2.211 .2285-5.553 .168-6.225c-.3184-1.07-1.818-4.016-2.811-5.965c-3.963-7.783-9.391-18.44-9.326-32.16c.0664-14.06 5.955-25.26 9.852-32.67c.9824-1.867 2.1-3.658 2.566-4.873c.2988-2.068 .0625-4.271-.002-6.471c-.1914-6.435-.375-14.63 1.838-23.43C264.5 293.1 255.8 288.7 250.7 282.1zM79.1 383.1c-8.836 0-15.1-7.164-15.1-15.1c0-8.838 7.166-16 16-16s15.1 7.164 15.1 16C95.1 376.8 88.84 383.1 79.1 383.1zM111.1 447.1c-8.836 0-15.1-7.164-15.1-15.1c0-8.836 7.166-15.1 16-15.1c8.836 0 15.1 7.164 15.1 15.1C127.1 440.8 120.8 447.1 111.1 447.1zM143.1 383.1c-8.836 0-16-7.164-16-15.1c0-8.838 7.166-16 16-16s15.1 7.164 15.1 16C159.1 376.8 152.8 383.1 143.1 383.1zM567.1 383.1h-.1211c-1.188 1.699-2.055 3.627-3.537 5.109c-24.21 24.21-78.19 9.492-120.6-32.88c-42.37-42.37-57.09-96.35-32.88-120.6c3.549-3.549 7.889-6.014 12.59-7.926c-7.557-1.938-15.34-4.918-22.71-3.246c-10.46 2.373-17.77 13.64-27.06 18.13c-9.586 4.635-22.73 3.348-30.87 9.904c-8.264 6.664-10.07 20.06-16.61 28.35c-6.572 8.33-18.99 12.98-23.6 22.59c-4.58 9.56-.5645 22.42-2.973 32.88c-2.367 10.3-11.61 19.98-11.66 30.81c-.0488 10.49 9.027 20.27 11.35 30.95c2.322 10.68-1.84 23.47 2.561 32.95c4.539 9.789 16.93 14.57 23.35 22.87c6.525 8.437 8.227 21.83 16.35 28.51c8.154 6.709 21.34 5.551 30.75 10.25c9.359 4.676 16.55 16.03 26.8 18.49c10.08 2.42 21.46-4.436 32.06-4.383c10.27 .0508 21.56 7.096 32.02 4.725c10.46-2.373 17.77-13.64 27.06-18.13c9.586-4.635 22.73-3.346 30.87-9.902c8.264-6.662 10.07-20.06 16.61-28.35c6.572-8.33 18.99-12.98 23.6-22.59c4.58-9.557 .5645-22.42 2.973-32.88C565.6 394.4 565.3 389.2 567.1 383.1zM367.1 384c-8.836 0-16-7.164-16-15.1c0-8.838 7.166-16 16-16s15.1 7.164 15.1 16C383.1 376.8 376.8 384 367.1 384zM399.1 448c-8.836 0-15.1-7.164-15.1-15.1c0-8.836 7.166-15.1 16-15.1c8.836 0 15.1 7.164 15.1 15.1C415.1 440.8 408.8 448 399.1 448z"/><path className="fa-secondary" d="M531.5 268.5c42.37 42.37 57.1 96.35 32.88 120.6c-24.21 24.21-78.19 9.492-120.6-32.88s-57.09-96.35-32.88-120.6S489.1 226.2 531.5 268.5z"/>
</>],
['light',<>
	<path d="M112.2 448c8.834 0 15.99-7.162 15.99-15.1s-7.158-16-15.99-16c-8.832 0-15.99 7.164-15.99 16S103.3 448 112.2 448zM128.2 368c0 8.832 7.162 15.1 15.99 15.1c8.834 0 15.99-7.164 15.99-15.1c0-8.838-7.158-16-15.99-16C135.3 352 128.2 359.2 128.2 368zM80.19 352c-8.834 0-15.1 7.164-15.1 16c0 8.832 7.16 15.1 15.99 15.1c8.832 0 15.99-7.164 15.99-15.1C96.18 359.2 89.02 352 80.19 352zM573.3 350.7C568.9 351.2 564.6 352 560 352C498.1 352 448 301.9 448 240c0-4.615 .8145-9.006 1.357-13.47C441.8 224.8 435.5 224 431.2 224H416c-6.146 .1699-11.69 .0469-15.21 .8438c-9.309 2.107-15.9 7.826-21.18 12.42c-2.342 2.031-4.748 4.141-6.309 4.891c-1.75 .8438-4.967 1.453-8.123 2.047c-6.748 1.281-15.15 2.859-22.37 8.719c-7.309 5.875-10.74 13.84-13.49 20.23c-1.281 2.953-2.592 6-3.779 7.5s-3.842 3.469-6.373 5.375c-5.561 4.125-12.43 9.25-16.49 17.72c-3.998 8.375-3.748 16.98-3.529 23.92c.0938 3.266 .1875 6.656-.25 8.594c-.4375 1.842-1.969 4.764-3.436 7.576c-3.25 6.188-7.311 13.89-7.342 23.38c-.0313 9.154 3.842 16.75 6.936 22.84c1.5 2.969 3.061 6.031 3.529 8.094c.4375 2.109 .3125 5.562 .1562 8.906c-.2813 6.873-.625 15.42 3.217 23.72c4 8.625 10.9 13.88 16.43 18.09c2.5 1.891 5.061 3.859 6.154 5.281c1.219 1.562 2.531 4.672 3.811 7.672c2.688 6.391 6.061 14.36 13.25 20.27c7.246 5.967 15.65 7.639 22.4 8.998c3.094 .6094 6.279 1.234 7.936 2.078c1.625 .8125 4.061 2.984 6.436 5.094c5.186 4.625 11.65 10.38 20.8 12.58c9.027 2.125 17.3-.0625 23.96-1.812c3.061-.8125 6.217-1.656 8.121-1.656c.0313 0 .0313 0 .0313 0c1.688 .0156 4.748 .8594 7.686 1.688C443.8 510.4 449.5 512 455.7 512c2.438 0 4.998-.2344 7.592-.8281c9.309-2.109 15.9-7.828 21.18-12.42c2.342-2.031 4.748-4.141 6.311-4.891c1.748-.8438 4.967-1.453 8.121-2.047c6.748-1.281 15.15-2.859 22.37-8.717c7.309-5.875 10.75-13.84 13.49-20.23c1.281-2.953 2.594-6 3.779-7.5c1.188-1.5 3.844-3.469 6.373-5.375c5.561-4.123 12.43-9.248 16.49-17.72c3.998-8.359 3.748-16.98 3.529-23.9c-.0938-3.281-.1875-6.672 .25-8.609c.4375-1.844 1.969-4.766 3.436-7.578C571.9 385.1 575.1 378.3 576 368.8C576 364.6 575.1 358.3 573.3 350.7zM534 392.6c-1.375 5.969-1.188 11.69-1.031 16.73c.0625 3.092 .2187 7.779-.4375 9.139c-.623 1.328-4.311 4.062-6.715 5.875c-4.029 3-8.592 6.391-12.4 11.2c-3.779 4.781-6.029 10.02-8.027 14.64c-1.219 2.828-3.062 7.094-4.217 8.016c-1.062 .8281-5.561 1.672-8.248 2.172c-4.936 .9375-10.53 2-16.09 4.688c-5.404 2.609-9.621 6.297-13.37 9.547c-2.312 2-5.779 5.031-7.248 5.359c-1.373 .4687-5.779-.9062-8.652-1.703c-4.811-1.359-11.03-2.688-16.37-2.891c-6.092 0-11.56 1.453-16.37 2.734c-2.779 .75-7.09 1.906-8.277 1.609c-1.344-.3438-4.842-3.469-6.967-5.344c-3.748-3.344-7.996-7.125-13.43-9.844c-5.467-2.734-11.03-3.844-15.93-4.828c-2.748-.5469-7.309-1.453-8.371-2.328c-1.094-.9219-2.969-5.359-4.092-8.016c-1.969-4.639-4.188-9.904-7.936-14.76c-3.717-4.781-8.184-8.188-12.12-11.19c-2.561-1.953-6.09-4.641-6.746-6.062c-.5938-1.297-.4062-6.109-.2813-8.967c.1875-5.109 .4375-10.91-.9062-17.02c-1.312-6.109-3.936-11.27-6.248-15.81c-1.404-2.701-3.467-6.795-3.467-8.232c0-1.625 2.125-5.625 3.654-8.547c2.312-4.406 4.936-9.391 6.311-15.33c1.375-5.969 1.188-11.69 1.031-16.73c-.0625-3.094-.2187-7.781 .4375-9.141c.625-1.328 4.311-4.062 6.715-5.875c4.031-3 8.592-6.391 12.4-11.2c3.779-4.779 6.029-10.01 8.027-14.64c1.219-2.828 3.062-7.094 4.219-8.016c1.061-.8281 5.559-1.672 8.246-2.172c4.936-.9375 10.53-2 16.09-4.688c5.404-2.609 9.621-6.297 13.37-9.545c2.312-2 5.779-5.031 7.248-5.359c.5547-.1172 4.561-.1543 9.764-.1562c7.162 64.05 55.93 115.3 118.9 125.7C535.3 387 534.3 391.4 534 392.6zM169.4 256.3C170.7 256.7 174.3 259.8 176.4 261.7C180.1 264.1 184.3 268.8 189.8 271.5c5.467 2.719 11.03 3.828 15.93 4.812c2.75 .5469 7.311 1.469 8.373 2.328C215.2 279.6 217 283.1 218.2 286.6C220.1 291.3 222.4 296.6 226.1 301.4c3.656 4.734 8.061 8.156 11.93 11.17C240.2 314.2 242.4 315.8 244.2 317.8C250 324.4 260.1 324.1 266.7 319.2C273.3 313.3 273.1 303.2 268.1 296.6c-2.998-3.391-6.654-6.359-10.4-9.266c-2.498-1.938-5.061-3.938-6.248-5.469C250.2 280.3 248.9 277.2 247.6 274.2C244.9 267.8 241.6 259.8 234.4 253.9C227.2 247.1 218.8 246.3 212 244.1c-3.092-.625-6.279-1.25-7.934-2.078C202.5 242.1 200 239.9 197.7 237.8C192.5 233.2 186 227.4 176.8 225.2C167.8 223 159.5 225.2 152.9 226.1C149.8 227.8 146.7 228.7 144.8 228.7c-.0313 0-.0313 0-.0313 0C143 228.6 139.1 227.8 137 226.1C130.4 225.1 121.1 222.7 112.6 224.8C103.4 226.1 96.78 232.7 91.53 237.3c-2.344 2.031-4.781 4.141-6.342 4.891C83.44 242.1 80.22 243.6 77.06 244.2C70.32 245.5 61.91 247.1 54.7 252.9C47.39 258.8 43.95 266.7 41.17 273.1c-1.279 2.953-2.592 6.016-3.779 7.516S33.58 284.1 31.02 286C25.49 290.2 18.62 295.3 14.56 303.7c-4 8.359-3.75 16.95-3.531 23.86c.0938 3.281 .1875 6.672-.2813 8.703c-.4375 1.842-1.967 4.764-3.436 7.576C4.063 350.1 .0313 357.7 0 367.1c-.0625 9.201 3.812 16.81 6.936 22.94c1.5 2.953 3.061 6 3.529 8.062c.4375 2.094 .3125 5.547 .1562 8.906c-.2813 6.857-.6562 15.4 3.219 23.76c3.998 8.594 10.9 13.83 16.4 18.03c2.5 1.906 5.092 3.875 6.186 5.297c1.219 1.562 2.531 4.672 3.812 7.672c2.686 6.391 6.059 14.36 13.21 20.25c7.248 5.967 15.65 7.654 22.43 8.998c3.061 .625 6.246 1.25 7.902 2.078c1.625 .8125 4.092 3 6.436 5.094c5.186 4.641 11.65 10.39 20.8 12.59c8.996 2.125 17.3-.0625 23.99-1.812c3.061-.8281 7.623-2.188 8.121-1.656c1.719 .0156 4.781 .8594 7.717 1.688C155.7 510.4 161.3 512 167.6 512c2.436 0 4.998-.2344 7.59-.8281c9.309-2.109 15.9-7.828 21.18-12.42c2.344-2.031 4.748-4.141 6.342-4.906c1.717-.8281 4.936-1.453 8.059-2.031c6.748-1.281 15.15-2.859 22.4-8.717c7.309-5.875 10.75-13.84 13.49-20.23c1.281-2.953 2.594-6 3.75-7.469c1.279-1.609 3.936-3.656 6.496-5.625c3.656-2.795 7.811-5.982 11.4-10.28c5.654-6.766 4.748-16.86-2-22.53c-6.746-5.672-16.84-4.75-22.55 2c-1.312 1.594-3.748 3.453-6.342 5.438c-3.904 3.016-8.34 6.422-12.09 11.14c-3.779 4.781-6.027 10.02-8.027 14.64c-1.219 2.828-3.061 7.094-4.186 8c-1.062 .8281-5.592 1.688-8.279 2.188c-4.936 .9375-10.53 2-16.09 4.688c-5.404 2.609-9.623 6.297-13.37 9.547c-2.311 2-5.779 5.031-7.246 5.359c-1.438 .4687-5.779-.9062-8.654-1.703c-4.779-1.344-10.15-2.859-16.18-2.891c-6.777-.5469-11.71 1.438-16.55 2.734c-2.781 .7344-6.779 2.031-8.279 1.609C117.1 479.4 113.6 476.2 111.5 474.3c-3.75-3.328-7.998-7.109-13.43-9.828c-5.467-2.734-11.06-3.844-15.96-4.828c-2.717-.5469-7.246-1.453-8.34-2.328c-1.094-.9219-2.967-5.359-4.092-8.016c-1.969-4.639-4.186-9.904-7.936-14.76c-3.717-4.781-8.184-8.188-12.15-11.2c-2.562-1.953-6.123-4.656-6.748-6.047c-.5938-1.297-.4062-6.078-.2813-8.936c.2187-5.125 .4687-10.92-.875-17.05c-1.311-6.109-3.936-11.27-6.279-15.81c-1.279-2.529-3.436-6.779-3.436-8.232c0-1.625 2.094-5.609 3.623-8.531c2.344-4.422 4.967-9.422 6.311-15.3c1.375-5.984 1.219-11.73 1.062-16.79C42.89 323.6 42.77 318.9 43.42 317.6c.625-1.344 4.311-4.078 6.717-5.875c4.029-3 8.559-6.406 12.37-11.2c3.748-4.779 6.029-9.998 8.029-14.61c1.217-2.828 3.092-7.109 4.248-8.047c1.062-.8281 5.561-1.672 8.246-2.172c4.936-.9375 10.53-2 16.09-4.688c5.404-2.609 9.652-6.312 13.4-9.561c2.281-2 5.748-5.031 7.186-5.344C121.2 255.6 125.5 256.1 128.4 257.8c4.779 1.328 10.15 2.844 16.15 2.875c6.092-.4375 11.75-1.453 16.59-2.734C163.9 257.2 168.2 256 169.4 256.3zM368.1 352c-8.834 0-15.1 7.164-15.1 16c0 8.832 7.16 15.1 15.99 15.1c8.832 0 15.99-7.164 15.99-15.1C384.1 359.2 376.9 352 368.1 352zM400.1 416c-8.832 0-15.1 7.164-15.1 16s7.162 15.1 15.99 15.1c8.834 0 15.99-7.162 15.99-15.1S408.9 416 400.1 416zM256.1 144c0-8.838-7.158-16-15.99-16c-8.834 0-15.1 7.164-15.1 16c0 8.834 7.16 15.1 15.99 15.1C248.1 160 256.1 152.9 256.1 144zM304.7 36.67c5.936 .3906 11.75-1.438 16.59-2.734c2.779-.7344 7.09-1.891 8.277-1.609c1.344 .3438 4.842 3.469 6.967 5.344c3.748 3.344 7.996 7.123 13.43 9.842c5.467 2.734 11.03 3.844 15.93 4.828c2.748 .5469 7.311 1.469 8.371 2.328c1.094 .9219 2.969 5.359 4.094 8.016c1.967 4.641 4.186 9.906 7.934 14.77c3.717 4.779 8.184 8.186 12.12 11.19c2.561 1.953 6.09 4.641 6.777 6.078c.5625 1.297 .375 6.094 .25 8.953c-.1875 5.109-.4375 10.91 .9062 17.01c1.312 6.109 3.936 11.27 6.248 15.81C414 139.2 416.1 143.3 416.1 144.7c0 1.625-2.123 5.625-3.654 8.545c-2.312 4.406-4.936 9.391-6.311 15.34c-1.375 5.969-1.25 11.73-1.125 16.81l.0313 4.936c-.1875 8.844 6.842 16.14 15.68 16.33h.3125c8.686 0 15.81-6.953 15.99-15.67l-.0625-6.279c-.0625-3.391-.125-6.906 .3438-8.953c.4375-1.859 1.969-4.781 3.436-7.594c3.25-6.188 7.311-13.89 7.342-23.37c.0313-9.156-3.842-16.75-6.936-22.84c-1.498-2.969-3.061-6.029-3.529-8.092c-.4375-2.109-.3125-5.562-.1562-8.922c.2813-6.859 .625-15.42-3.217-23.7c-4-8.623-10.9-13.87-16.43-18.09c-2.5-1.891-5.061-3.859-6.154-5.281c-1.219-1.562-2.529-4.672-3.811-7.672c-2.688-6.391-6.061-14.36-13.25-20.26c-7.246-5.953-15.65-7.641-22.4-8.984c-3.062-.6094-6.248-1.25-7.936-2.094C362.6 18.06 360.2 15.88 357.8 13.78c-5.186-4.625-11.65-10.37-20.8-12.58c-9.092-2.203-17.31 .0313-23.96 1.812c-3.123 .8281-7.684 1.859-8.152 1.656c-1.688-.0156-4.748-.8594-7.686-1.688C290.5 1.074 282.1-1.301 272.8 .8555C263.5 2.965 256.9 8.682 251.7 13.28C249.3 15.31 246.9 17.42 245.3 18.17C243.6 19.01 240.4 19.62 237.2 20.21C230.5 21.49 222.1 23.07 214.9 28.93C207.5 34.81 204.1 42.77 201.4 49.16c-1.281 2.953-2.592 6-3.779 7.5S193.7 60.13 191.2 62.04C185.6 66.16 178.8 71.29 174.7 79.76c-3.998 8.375-3.748 16.98-3.529 23.92C171.3 106.9 171.4 110.3 170.9 112.3C170.5 114.1 168.1 117 167.5 119.8C164.3 126 160.2 133.7 160.2 143.2C160.1 152.4 164 159.1 167.1 166.1c1.498 2.969 3.061 6.031 3.498 8.047c.4687 2.219 .375 5.609 .2187 9.188c0 .0625-.0938 3.25-.0938 3.328c-.1875 8.779 6.779 14.53 15.59 14.79C195.5 200.6 202.5 193.2 202.8 184.4c.1875-5.125 .375-10.92-.9375-17.08C200.5 161.3 197.9 156.1 195.6 151.6C194.2 148.8 192.1 144.8 192.1 143.3c0-1.625 2.123-5.625 3.654-8.547C198.1 130.4 200.7 125.4 202.1 119.4c1.375-5.967 1.188-11.69 1.031-16.73C203.1 99.62 202.9 94.93 203.6 93.57C204.2 92.24 207.9 89.51 210.3 87.69c4.031-3 8.592-6.391 12.4-11.2c3.779-4.781 6.029-10.02 8.027-14.64C231.9 59.02 233.8 54.76 234.9 53.84C236 53.01 240.5 52.16 243.2 51.66c4.936-.9375 10.53-2 16.09-4.688c5.404-2.609 9.621-6.295 13.37-9.545c2.312-2 5.779-5.031 7.248-5.359c1.375-.4687 5.779 .9062 8.652 1.719C293.3 35.12 298.7 36.63 304.7 36.67z"/>
</>],
['regular',<>
	<path d="M224 144C215.2 144 208 151.2 208 160C208 168.8 215.2 176 224 176s16-7.164 16-15.1C240 151.2 232.8 144 224 144zM128 400C119.2 400 112 407.2 112 416s7.164 16 16 16s16-7.164 16-16S136.8 400 128 400zM160 336C151.2 336 144 343.2 144 352C144 360.8 151.2 368 160 368s16-7.164 16-15.1C176 343.2 168.8 336 160 336zM96 336C87.17 336 80 343.2 80 352C80 360.8 87.16 368 96 368s16-7.164 16-15.1C112 343.2 104.8 336 96 336zM352 336C343.2 336 336 343.2 336 352C336 360.8 343.2 368 352 368s16-7.164 16-15.1C368 343.2 360.8 336 352 336zM384 432c8.836 0 16-7.164 16-16s-7.162-16-15.1-16S368 407.2 368 416S375.2 432 384 432zM507.8 411.5c-3.447 2.6-7.059 5.092-9.57 8.275c-5.088 6.449-6.492 16.87-12.92 22.05c-6.326 5.1-16.55 4.098-24.01 7.705c-7.227 3.492-12.91 12.26-21.04 14.1c-8.131 1.846-16.91-3.635-24.9-3.676c-8.248-.0391-17.09 5.291-24.94 3.412c-7.971-1.914-13.56-10.74-20.84-14.38c-7.32-3.658-17.57-2.756-23.92-7.973c-6.312-5.195-7.637-15.61-12.71-22.17c-4.996-6.459-14.63-10.18-18.16-17.79c-3.422-7.375-.1836-17.32-1.99-25.63C311 367.1 303.1 359.5 304 351.3c.041-8.422 7.229-15.95 9.07-23.96c1.873-8.139-1.25-18.14 2.311-25.57c3.582-7.473 13.25-11.09 18.36-17.57c5.088-6.449 6.492-16.87 12.92-22.05c6.326-5.1 16.55-4.1 24.01-7.705c5.801-2.805 10.67-8.848 16.55-12.14c3.111-11.61 8.422-22.13 16.71-30.42c7.881-7.881 17.65-13.21 28.61-16.34C436.6 184.9 447.9 171.8 448 160.9c.0547-11.66-10.03-22.53-12.61-34.38c-2.58-11.86 2.045-26.08-2.844-36.61c-5.045-10.88-18.81-16.19-25.95-25.41c-7.25-9.375-9.141-24.25-18.16-31.67c-9.061-7.453-23.71-6.17-34.17-11.39c-10.4-5.197-18.39-17.81-29.78-20.54c-11.2-2.688-23.84 4.93-35.62 4.871c-11.41-.0566-23.96-7.885-35.58-5.252C241.7 3.178 233.6 15.7 223.2 20.69c-10.65 5.15-25.26 3.721-34.3 11.01C179.8 39.1 177.7 53.98 170.5 63.19c-7.303 9.256-21.11 14.43-26.22 25.1C139.2 98.92 143.6 113.2 140.1 124.8C138.3 136.3 128.1 147 128 159.1C127.9 170.7 138 181.6 140.6 193.4c.0117 .0547-.002 .1172 .0098 .1719C135.5 192.3 130.3 191.4 125.3 192.5C113.7 195.2 105.6 207.7 95.23 212.7C84.58 217.8 69.97 216.4 60.94 223.7c-9.182 7.404-11.19 22.29-18.46 31.5c-7.303 9.256-21.11 14.43-26.22 25.1C11.17 290.9 15.63 305.2 12.96 316.8C10.33 328.3 .0566 339 0 351.1c-.0547 11.66 10.03 22.52 12.61 34.38c2.58 11.86-2.045 26.07 2.844 36.61c5.043 10.88 18.81 16.19 25.95 25.41c7.25 9.375 9.141 24.25 18.16 31.67c9.061 7.455 23.71 6.168 34.17 11.39c10.4 5.195 18.39 17.81 29.78 20.54c11.21 2.689 23.84-4.928 35.62-4.869c11.41 .0547 23.96 7.883 35.58 5.248c11.62-2.637 19.74-15.16 30.06-20.15c10.65-5.15 25.26-3.719 34.3-11c9.182-7.402 11.19-22.29 18.46-31.5c2.912-3.689 6.887-6.713 10.9-9.713c3.342 2.594 6.564 5.25 8.98 8.375c7.25 9.375 9.141 24.25 18.16 31.67c9.061 7.453 23.71 6.168 34.17 11.39c10.4 5.195 18.39 17.81 29.78 20.54c11.21 2.688 23.84-4.93 35.62-4.871c11.41 .0566 23.96 7.885 35.58 5.25c11.62-2.637 19.74-15.16 30.06-20.15c10.65-5.15 25.26-3.719 34.3-11c9.182-7.402 11.19-22.29 18.46-31.5c7.303-9.256 21.1-14.43 26.22-25.11c1.73-3.611 2.207-7.707 2.385-11.92C554.3 414.4 545.8 416 536.7 416C527.4 416 517.7 414.2 507.8 411.5zM262.9 376.6c-1.873 8.139 1.25 18.14-2.311 25.57c-3.582 7.475-13.25 11.1-18.36 17.57c-5.088 6.449-6.492 16.87-12.92 22.05c-6.326 5.1-16.55 4.098-24.01 7.705c-7.225 3.492-12.91 12.26-21.04 14.1C176.2 465.5 167.4 459.1 159.4 459.9c-8.248-.0391-17.09 5.291-24.93 3.412C126.5 461.4 120.9 452.6 113.6 448.1c-7.318-3.658-17.57-2.756-23.92-7.973c-6.314-5.195-7.639-15.61-12.71-22.17c-4.996-6.459-14.63-10.18-18.16-17.79c-3.424-7.375-.1855-17.32-1.992-25.63S47.96 359.5 48 351.3c.041-8.422 7.229-15.95 9.072-23.96C58.95 319.2 55.82 309.2 59.38 301.8C62.96 294.3 72.63 290.7 77.74 284.2c5.088-6.449 6.492-16.87 12.92-22.05C96.98 257.1 107.2 258.1 114.7 254.5C121.9 250.1 127.6 242.2 135.7 240.4C143.8 238.5 152.6 244 160.6 244.1c8.248 .041 17.09-5.291 24.94-3.41C193.5 242.6 199.1 251.4 206.4 255C213.7 258.7 223.1 257.8 230.3 262.1c6.312 5.195 7.637 15.61 12.71 22.17c4.996 6.457 14.63 10.17 18.16 17.79c3.422 7.377 .1836 17.32 1.99 25.63c.084 .3848 .293 .752 .3984 1.133C259.9 336.7 256 343.6 256 351.1c-.0352 7.695 4.301 15.06 8.025 22.58C263.7 374.6 263.2 375.6 262.9 376.6zM287.6 264.9C284.2 262.3 281 259.7 278.6 256.5C271.3 247.2 269.5 232.3 260.4 224.9c-9.061-7.453-23.71-6.168-34.17-11.39c-10.4-5.197-18.39-17.81-29.78-20.54C192.9 192.1 189.1 192.4 185.3 193.1c.1191-3.301 .1719-6.592-.4941-9.656C183 175.1 175.1 167.5 176 159.3C176 150.9 183.2 143.4 185.1 135.4C186.9 127.2 183.8 117.2 187.4 109.8C190.1 102.3 200.6 98.71 205.7 92.24c5.088-6.449 6.492-16.87 12.92-22.05C224.1 65.09 235.2 66.09 242.7 62.48C249.9 58.99 255.6 50.22 263.7 48.38C271.8 46.54 280.6 52.02 288.6 52.05c8.248 .041 17.09-5.291 24.93-3.41c7.971 1.914 13.57 10.74 20.85 14.38c7.318 3.654 17.57 2.756 23.92 7.973c6.314 5.195 7.639 15.61 12.71 22.17c4.996 6.457 14.63 10.17 18.16 17.79c3.424 7.377 .1855 17.32 1.992 25.63C392.1 144.9 400 152.5 400 160.7c-.041 8.422-7.229 15.95-9.072 23.96c-.5586 2.424-.6445 5.021-.625 7.658c-3.039-.3828-6.053-.4043-9.006 .2656c-11.62 2.637-19.74 15.16-30.06 20.15c-10.65 5.15-25.26 3.721-34.3 11.01c-9.182 7.404-11.19 22.29-18.46 31.5C295.6 258.9 291.6 261.9 287.6 264.9zM535.7 264.3c-38.35-38.35-87.21-51.68-109.1-29.76c-21.92 21.92-8.592 70.78 29.76 109.1c38.35 38.36 87.21 51.68 109.1 29.76C587.4 351.5 574 302.7 535.7 264.3z"/>
</>],
['solid',<>
	<path d="M250.7 282.1C244.2 273.6 242.5 260.2 234.4 253.6C226.2 246.9 213.1 248 203.6 243.3C194.3 238.6 187.1 227.3 176.8 224.8C166.8 222.4 155.4 229.3 144.8 229.2C134.5 229.2 123.2 222.1 112.8 224.5C102.3 226.9 95 238.1 85.71 242.6C76.13 247.3 62.98 245.1 54.84 252.5c-8.264 6.664-10.07 20.06-16.61 28.35C31.66 289.2 19.24 293.9 14.63 303.5c-4.58 9.561-.5645 22.42-2.973 32.88C9.295 346.6 .0508 356.3 0 367.2c-.0488 10.49 9.027 20.27 11.35 30.95c2.322 10.68-1.84 23.47 2.561 32.95c4.539 9.789 16.93 14.57 23.35 22.87c6.525 8.438 8.227 21.83 16.35 28.51c8.154 6.709 21.34 5.551 30.75 10.25c9.359 4.676 16.55 16.03 26.8 18.49c10.08 2.42 21.46-4.436 32.06-4.383c10.27 .0508 21.56 7.096 32.02 4.725c10.46-2.373 17.77-13.64 27.06-18.13c9.586-4.635 22.73-3.346 30.87-9.902c8.264-6.662 10.07-20.06 16.61-28.35c5.461-6.92 14.72-11.46 20.41-18.25c-2.727-9.602-2.496-18.58-2.211-25.52c.0918-2.211 .2285-5.553 .168-6.225c-.3184-1.07-1.818-4.016-2.811-5.965C261.4 391.4 255.9 380.7 256 367c.0664-14.06 5.955-25.26 9.852-32.67c.9824-1.867 2.1-3.658 2.566-4.873c.2988-2.068 .0625-4.271-.002-6.471C268.2 316.6 268 308.4 270.3 299.6C264.5 293.1 255.8 288.7 250.7 282.1zM80 384C71.16 384 64 376.8 64 368C64 359.2 71.17 352 80 352S96 359.2 96 368C96 376.8 88.84 384 80 384zM112 448C103.2 448 96 440.8 96 432S103.2 416 112 416S128 423.2 128 432S120.8 448 112 448zM144 384C135.2 384 128 376.8 128 368C128 359.2 135.2 352 144 352S160 359.2 160 368C160 376.8 152.8 384 144 384zM536.7 416c-33.38 0-71.88-18.58-102.1-49.69c-22.43-22.42-38.67-49.04-45.73-74.94c-6.365-23.34-4.758-45.13 3.967-62.53c-6.244 4.406-11.78 10.67-18.21 13.78c-9.586 4.635-22.73 3.348-30.87 9.904c-8.264 6.664-10.07 20.06-16.61 28.35c-6.572 8.33-18.99 12.98-23.6 22.59c-4.58 9.561-.5645 22.42-2.973 32.88C297.3 346.6 288.1 356.3 288 367.2c-.0488 10.49 9.027 20.27 11.35 30.95c2.322 10.68-1.84 23.47 2.561 32.95c4.539 9.789 16.93 14.57 23.35 22.87c6.525 8.438 8.227 21.83 16.35 28.51c8.154 6.709 21.34 5.551 30.75 10.25c9.359 4.676 16.55 16.03 26.8 18.49c10.08 2.42 21.46-4.436 32.06-4.383c10.27 .0508 21.56 7.096 32.02 4.725c10.46-2.373 17.77-13.64 27.06-18.13c9.586-4.635 22.73-3.346 30.87-9.902c8.264-6.662 10.07-20.06 16.61-28.35c6.572-8.33 18.99-12.98 23.6-22.59c2.965-6.186 2.371-13.74 2.205-21.15C555.3 414.3 546.4 416 536.7 416zM368 384c-8.836 0-16-7.164-16-15.1C352 359.2 359.2 352 368 352S384 359.2 384 368C384 376.8 376.8 384 368 384zM400 448c-8.836 0-16-7.164-16-16s7.166-16 16-16S416 423.2 416 432S408.8 448 400 448zM300.9 261.4c1.086-1.688 1.791-3.705 2.637-5.662c3.527-8.154 8.357-19.32 19.26-28.11c10.9-8.789 23.24-11.12 31.4-12.66c2.037-.3848 4.117-.6172 5.105-.8711c1.596-1.006 3.018-2.424 4.537-3.744c6.369-5.539 15.99-13.91 29.89-17.06C397.4 192.4 401.4 192 405.3 192c9.029 0 16.92 2.215 22.69 3.834c1.889 .5293 3.734 1.184 4.5 1.393c1.004-.0938 2.021-.4473 3.031-.7168c.1387-6.984-.707-14.36 .7891-20.86C438.7 165.4 447.9 155.7 448 144.8c.0488-10.49-9.027-20.27-11.35-30.95c-2.322-10.68 1.84-23.47-2.561-32.95c-4.539-9.791-16.93-14.57-23.35-22.87c-6.525-8.438-8.227-21.83-16.35-28.5c-8.154-6.709-21.34-5.553-30.75-10.25c-9.359-4.678-16.55-16.03-26.8-18.49c-10.08-2.42-21.46 4.436-32.06 4.383C294.5 5.162 283.2-1.883 272.8 .4863C262.3 2.859 255 14.13 245.7 18.62C236.1 23.26 222.1 21.97 214.8 28.53c-8.264 6.664-10.07 20.06-16.61 28.35C191.7 65.2 179.2 69.86 174.6 79.46C170.1 89.03 174.1 101.9 171.7 112.3C169.3 122.6 160.1 132.3 160 143.2c-.0488 10.49 9.027 20.27 11.35 30.95c1.252 5.76 .6797 12.11 .5215 18.25c.127 0 .2266-.0352 .3535-.0352c4.146 0 8.211 .4707 12.09 1.4c13.71 3.291 23.18 11.73 29.45 17.32C215.3 212.4 216.7 213.9 217.5 214.5c1.812 .6777 3.84 .9316 5.834 1.33C231.5 217.5 243.9 219.9 254.7 228.9c10.73 8.824 15.45 19.98 18.89 28.13c.8438 1.998 1.541 4.068 2.152 5.166c1.334 1.402 3.049 2.523 4.678 3.764c2.107 1.605 4.654 3.686 7.199 5.902c3.188-2.854 6.324-5.332 8.916-7.266C298.2 263.3 299.1 262.2 300.9 261.4zM240 160C231.2 160 224 152.8 224 144C224 135.2 231.2 128 240 128S256 135.2 256 144C256 152.8 248.8 160 240 160zM535.7 264.3c-38.35-38.35-87.21-51.68-109.1-29.76c-21.92 21.92-8.592 70.78 29.76 109.1c38.35 38.36 87.21 51.68 109.1 29.76C587.4 351.5 574 302.7 535.7 264.3z"/>
</>],
['thin',<>
	<path d="M184.4 248.3C188.2 251.6 192.1 255 196.8 257.4c4.75 2.375 9.781 3.391 14.69 4.359c5.125 1.016 9.969 1.984 12.81 4.328C227.2 268.5 229.1 273.1 231.2 278c1.969 4.656 4 9.469 7.25 13.7C241.7 295.9 245.8 299 249.7 302c4.25 3.234 8.25 6.297 9.906 9.828c1.844 4.016 6.562 5.75 10.62 3.875c4-1.859 5.75-6.625 3.875-10.62C270.8 297.1 264.8 293.3 259.4 289.3C256.2 286.8 253.1 284.4 251.2 281.1c-2-2.594-3.562-6.266-5.219-10.16C243.3 265.6 240.4 258.6 234.4 253.7c-5.969-4.891-13.34-6.359-19.84-7.656C210.6 245.3 206.8 244.5 203.9 243.1C201.1 241.7 198.2 239.1 195.1 236.3C190.1 231.9 184.4 226.8 176.9 225c-7.5-1.781-14.72 .1719-21.09 1.859C151.8 227.9 148.7 228.8 144.8 228.9C141.8 228.9 138.1 227.9 134.2 226.8C127.8 224.1 120.6 222.9 112.7 224.7C105.1 226.4 99.28 231.4 94.19 235.9c-3.094 2.656-6 5.188-8.75 6.516C82.53 243.8 78.69 244.5 74.59 245.3c-6.5 1.234-13.88 2.625-19.81 7.406C48.75 257.6 45.72 264.6 43.03 270.8C41.38 274.6 39.81 278.3 37.84 280.8c-2 2.531-5.156 4.875-8.469 7.359C24 292.1 17.94 296.6 14.59 303.6C11.28 310.5 11.5 318.1 11.72 324.8c.125 4.25 .2187 8.266-.5313 11.52c-.6875 3.109-2.531 6.578-4.438 10.27C3.594 352.6 .0625 359.3 0 367.2c-.0313 7.562 3.375 14.25 6.375 20.16c1.969 3.828 3.812 7.438 4.531 10.78c.7187 3.359 .5625 7.438 .375 11.73c-.2813 6.672-.5938 14.22 2.594 21.08c3.312 7.125 9.375 11.73 14.72 15.81c3.25 2.484 6.344 4.828 8.25 7.312c2 2.594 3.562 6.266 5.219 10.16c2.625 6.188 5.562 13.19 11.5 18.06c5.969 4.891 13.34 6.359 19.84 7.656c4.031 .8125 7.844 1.562 10.69 2.984c2.812 1.406 5.719 4.016 8.812 6.766c5 4.453 10.69 9.516 18.19 11.33c7.438 1.766 14.72-.1719 21.09-1.859c4-1.062 7.75-2.062 10.94-2.062h.0938c3.031 .0156 6.688 1.047 10.56 2.125C158.5 510.5 163.7 512 169.2 512c1.969 0 4-.1875 6.062-.6562c7.656-1.75 13.44-6.766 18.53-11.22c3.094-2.656 6-5.188 8.75-6.516c2.906-1.422 6.75-2.141 10.84-2.906c6.5-1.234 13.88-2.625 19.81-7.406c6.031-4.875 9.062-11.91 11.75-18.11c1.656-3.828 3.219-7.453 5.188-9.938c2-2.531 5.125-4.875 8.469-7.344c5.344-3.984 11.44-8.516 14.78-15.5c1.906-3.984 .2187-8.766-3.781-10.67c-3.906-1.875-8.719-.2187-10.66 3.766c-1.625 3.422-5.656 6.406-9.906 9.562c-4 2.984-8.156 6.078-11.47 10.28c-3.25 4.125-5.312 8.891-7.312 13.48c-2.125 4.953-4.156 9.625-7.125 12.02c-2.812 2.266-7.625 3.172-12.72 4.141c-4.938 .9219-10.03 1.875-14.88 4.219c-4.656 2.266-8.5 5.609-12.25 8.859c-4.031 3.516-7.844 6.828-11.56 7.688C168 496.6 163.2 495.3 158.1 493.8c-4.719-1.328-9.625-2.703-14.81-2.734H143.1c-5.281 0-10.25 1.312-15.03 2.594c-5.031 1.359-9.812 2.609-13.25 1.766c-3.594-.8594-7.344-4.188-11.28-7.719c-3.75-3.328-7.625-6.766-12.34-9.125c-4.75-2.375-9.781-3.391-14.69-4.359c-5.125-1.016-9.969-1.984-12.81-4.328c-2.875-2.359-4.844-7.016-6.938-11.94c-1.969-4.656-4-9.469-7.25-13.7C46.31 440.1 42.22 437 38.28 434c-4.25-3.234-8.25-6.297-9.906-9.828c-1.531-3.328-1.344-8.344-1.125-13.66c.2187-5.125 .4375-10.44-.7187-15.8s-3.562-10.08-5.875-14.64C18.25 375.4 16 370.9 16 367.3c.0313-3.938 2.406-8.453 4.906-13.22c2.312-4.422 4.719-9 5.875-14.12C28 334.7 27.84 329.4 27.72 324.3C27.56 318.1 27.41 313.9 29.03 310.5s5.656-6.391 9.906-9.562c4-2.984 8.156-6.078 11.47-10.28c3.25-4.125 5.312-8.891 7.312-13.48c2.125-4.953 4.156-9.625 7.125-12.02C67.66 262.9 72.47 261.1 77.56 261C82.5 260.1 87.59 259.1 92.44 256.8c4.656-2.266 8.5-5.609 12.25-8.859C108.7 244.4 112.5 241.1 116.3 240.3C120 239.5 124.8 240.8 129.9 242.2C134.6 243.5 139.5 244.9 144.7 244.9h.1562c5.281 0 10.25-1.312 15.03-2.594c5.031-1.359 9.812-2.609 13.25-1.766C176.8 241.4 180.5 244.8 184.4 248.3zM304.7 20.92h.1562c5.281 0 10.25-1.312 15.03-2.594c5.031-1.359 9.812-2.609 13.25-1.766c3.594 .8594 7.344 4.188 11.28 7.719c3.75 3.328 7.625 6.766 12.34 9.125c4.75 2.375 9.781 3.391 14.69 4.359c5.125 1.016 9.969 1.984 12.81 4.328c2.875 2.359 4.844 7.016 6.938 11.94c1.969 4.656 4 9.469 7.25 13.7C401.7 71.89 405.8 75 409.7 78c4.25 3.234 8.25 6.297 9.906 9.828c1.531 3.328 1.344 8.344 1.125 13.66c-.2187 5.125-.4375 10.44 .7187 15.8s3.562 10.08 5.875 14.64C429.8 136.6 432 141.1 432 144.8c-.0313 3.938-2.406 8.453-4.906 13.22c-2.312 4.422-4.719 9-5.875 14.11C420 177.3 420.2 182.5 420.3 187.5L420.4 192c0 4.422 3.594 8 8 8s8-3.578 8-8l-.0938-4.953c-.125-4.188-.2187-8.156 .5313-11.38c.6875-3.109 2.531-6.578 4.438-10.27C444.4 159.4 447.9 152.7 448 144.8c.0313-7.562-3.375-14.25-6.375-20.16c-1.969-3.828-3.812-7.438-4.531-10.78c-.7187-3.359-.5625-7.438-.375-11.73c.2813-6.672 .5938-14.22-2.594-21.08c-3.312-7.125-9.375-11.73-14.72-15.81c-3.25-2.484-6.344-4.828-8.25-7.312c-2-2.594-3.562-6.266-5.219-10.16c-2.625-6.188-5.562-13.19-11.5-18.06c-5.969-4.891-13.34-6.359-19.84-7.656c-4.031-.8125-7.844-1.562-10.69-2.984c-2.812-1.406-5.719-4.016-8.812-6.766c-5-4.453-10.69-9.516-18.19-11.33s-14.72 .1562-21.09 1.859c-4 1.062-7.75 2.062-10.94 2.062h-.0938c-3.031-.0156-6.688-1.047-10.56-2.141c-6.438-1.812-13.66-3.906-21.5-2.125C265.1 2.406 259.3 7.422 254.2 11.86c-3.094 2.672-6 5.203-8.75 6.531C242.5 19.81 238.7 20.53 234.6 21.3c-6.5 1.234-13.88 2.625-19.81 7.406C208.8 33.58 205.7 40.61 203 46.81C201.4 50.64 199.8 54.27 197.8 56.75c-2 2.531-5.156 4.875-8.469 7.359C184 68.09 177.9 72.61 174.6 79.59C171.3 86.52 171.5 94.11 171.7 100.8c.125 4.25 .2187 8.266-.5313 11.52C170.5 115.4 168.7 118.9 166.8 122.6C163.6 128.6 160.1 135.3 160 143.2C159.1 150.7 163.4 157.4 166.4 163.3c1.969 3.828 3.812 7.438 4.531 10.8C171.6 177.5 171.5 181.6 171.3 185.1C171.2 187.1 171.1 190 171.1 192c0 4.422 3.594 8 8 8s8-3.578 8-8c0-1.766 .0625-3.578 .1562-5.391c.2187-5.172 .4375-10.5-.75-15.89C185.4 165.4 182.1 160.6 180.7 156.1C178.3 151.4 176 146.9 176 143.3c.0313-3.938 2.406-8.453 4.906-13.22c2.312-4.422 4.719-9 5.875-14.12C188 110.7 187.8 105.4 187.7 100.3C187.6 94.98 187.4 89.91 189 86.5s5.656-6.391 9.906-9.562c4-2.984 8.156-6.078 11.47-10.28c3.25-4.125 5.312-8.891 7.312-13.48c2.125-4.953 4.156-9.625 7.125-12.02C227.7 38.89 232.5 37.98 237.6 37.02C242.5 36.09 247.6 35.14 252.4 32.8c4.656-2.266 8.5-5.609 12.25-8.859C268.7 20.42 272.5 17.11 276.3 16.25c3.781-.7344 8.531 .5156 13.66 1.938C294.6 19.52 299.5 20.89 304.7 20.92zM144 352C135.2 352 128 359.2 128 368C128 376.8 135.2 384 144 384S160 376.8 160 368C160 359.2 152.8 352 144 352zM80 352C71.17 352 64 359.2 64 368C64 376.8 71.16 384 80 384S96 376.8 96 368C96 359.2 88.84 352 80 352zM112 448C120.8 448 128 440.8 128 432S120.8 416 112 416S96 423.2 96 432S103.2 448 112 448zM256 144C256 135.2 248.8 128 240 128S224 135.2 224 144C224 152.8 231.2 160 240 160S256 152.8 256 144zM400 416C391.2 416 384 423.2 384 432s7.164 16 16 16s16-7.164 16-16S408.8 416 400 416zM368 352C359.2 352 352 359.2 352 368C352 376.8 359.2 384 368 384s16-7.164 16-15.1C384 359.2 376.8 352 368 352zM564.9 338.9c-5.969-21.92-20-44.75-39.53-64.28c-19.5-19.52-42.34-33.56-64.28-39.55c-7.18-1.969-4.678-.3027-29.28-6.391c-14.16-3.484-24-5.719-31.06-4.062c-7.656 1.75-13.44 6.766-18.53 11.22c-3.094 2.656-6 5.188-8.75 6.516c-2.906 1.422-6.75 2.141-10.84 2.906c-6.5 1.234-13.88 2.625-19.81 7.406c-6.031 4.875-9.062 11.91-11.75 18.11c-1.656 3.828-3.219 7.453-5.188 9.938c-2 2.531-5.156 4.875-8.469 7.359C312 292.1 305.9 296.6 302.6 303.6c-3.312 6.922-3.094 14.52-2.875 21.22c.125 4.25 .2187 8.266-.5313 11.52c-.6875 3.109-2.531 6.578-4.438 10.27C291.6 352.6 288.1 359.3 288 367.2c-.0313 7.562 3.375 14.25 6.375 20.16c1.969 3.828 3.812 7.438 4.531 10.78c.7187 3.359 .5625 7.438 .375 11.73c-.2813 6.672-.5938 14.22 2.594 21.08c3.312 7.125 9.375 11.73 14.72 15.81c3.25 2.484 6.344 4.828 8.25 7.312c2 2.594 3.562 6.266 5.219 10.16c2.625 6.188 5.562 13.19 11.5 18.06c5.969 4.891 13.34 6.359 19.84 7.656c4.031 .8125 7.844 1.562 10.69 2.984c2.812 1.406 5.719 4.016 8.812 6.766c5 4.453 10.69 9.516 18.19 11.33c7.5 1.766 14.72-.1719 21.09-1.859c4-1.062 7.75-2.062 10.94-2.062c3.344-.9844 6.75 1.031 10.66 2.125C446.5 510.5 451.7 512 457.2 512c1.969 0 4-.1875 6.062-.6562c7.656-1.75 13.44-6.766 18.53-11.22c3.094-2.656 6-5.188 8.75-6.516c2.906-1.422 6.75-2.141 10.84-2.906c6.5-1.234 13.88-2.625 19.81-7.406c6.031-4.875 9.062-11.91 11.75-18.11c1.656-3.828 3.219-7.453 5.188-9.938c2-2.531 5.125-4.875 8.469-7.344c5.344-3.984 11.44-8.516 14.78-15.5C564.1 426.9 572.1 365.5 564.9 338.9zM546.1 425.5c-1.625 3.422-5.656 6.406-9.906 9.562c-4 2.984-8.156 6.078-11.47 10.28c-3.25 4.125-5.312 8.891-7.312 13.48c-2.125 4.953-4.156 9.625-7.125 12.02c-2.812 2.266-7.625 3.172-12.72 4.141c-4.938 .9219-10.03 1.875-14.88 4.219c-4.656 2.266-8.5 5.609-12.25 8.859c-4.031 3.516-7.844 6.828-11.56 7.688c-3.75 .8125-8.531-.5-13.66-1.938c-4.719-1.328-9.625-2.703-14.81-2.734h-.1562c-5.281 0-10.25 1.312-15.03 2.594c-5.031 1.359-9.812 2.609-13.25 1.766c-3.594-.8594-7.344-4.188-11.28-7.719c-3.75-3.328-7.625-6.766-12.34-9.125c-4.75-2.375-9.781-3.391-14.69-4.359c-5.125-1.016-9.969-1.984-12.81-4.328c-2.875-2.359-4.844-7.016-6.938-11.94c-1.969-4.656-4-9.469-7.25-13.7C334.3 440.1 330.2 437 326.3 434c-4.25-3.234-8.25-6.297-9.906-9.828c-1.531-3.328-1.344-8.344-1.125-13.66c.2187-5.125 .4375-10.44-.7187-15.8s-3.562-10.08-5.875-14.64C306.3 375.4 304 370.9 304 367.3c.0313-3.938 2.406-8.453 4.906-13.22c2.312-4.422 4.719-9 5.875-14.12c1.219-5.234 1.062-10.48 .9375-15.56c-.1562-5.359-.3125-10.44 1.312-13.84s5.656-6.391 9.906-9.562c4-2.984 8.156-6.078 11.47-10.28c3.25-4.125 5.312-8.891 7.312-13.48c2.125-4.953 4.156-9.625 7.125-12.02c2.812-2.266 7.625-3.172 12.72-4.141c4.938-.9219 10.03-1.875 14.88-4.219c4.656-2.266 8.5-5.609 12.25-8.859c4.031-3.516 7.844-6.828 11.56-7.688c1.381-.3027 3.85-.0625 6.611 .3457c-2.012 1.4-4.211 2.543-5.955 4.295c-12.72 12.72-16.22 32.66-9.781 56.17c5.969 21.92 20 44.75 39.53 64.28c19.5 19.52 42.34 33.56 64.28 39.55c7.688 2.094 15.03 3.141 21.84 3.141c11.7 0 21.43-3.773 29.46-9.822C549.3 411.8 548.2 422.7 546.1 425.5zM543.8 383.8c-8.469 8.484-22.88 10.47-40.63 5.656c-19.31-5.266-39.63-17.84-57.19-35.42c-17.59-17.59-30.16-37.89-35.41-57.19c-4.844-17.72-2.844-32.16 5.656-40.64c5.469-5.453 13.38-8.234 23.06-8.234c5.344 0 11.25 .8594 17.56 2.578c19.31 5.266 39.63 17.84 57.19 35.42c17.59 17.59 30.16 37.89 35.41 57.19C554.3 360.9 552.3 375.3 543.8 383.8z"/>
</>],

]);

const Falafel: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={576} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

Falafel.displayName = "Falafel";

export default Falafel;
