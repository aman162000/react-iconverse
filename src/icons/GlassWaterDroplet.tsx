
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M127.1 196C127.1 171.1 161.7 125.9 180.2 102.5C186.3 94.77 197.7 94.77 203.8 102.5C222.3 125.9 256 171.1 256 196C256 229.1 227.3 256 191.1 256C156.7 256 127.1 229.1 127.1 196V196zM288 304L300.1 297.5L290.2 448H93.79L83.05 297.5L95.1 304C116.1 314.1 139.9 314.1 159.1 304C180.1 293.9 203.9 293.9 224 304C244.1 314.1 267.9 314.1 288 304H288z"/><path className="fa-secondary" d="M383.9 33.1L351.1 482C350.8 498.9 336.8 512 319.1 512H64.03C47.16 512 33.17 498.9 32.04 482L.0518 34C-.448 25.13 2.675 16.5 8.673 10.13C14.8 3.625 23.19 0 32.07 0H351.9C360.8 0 369.2 3.625 375.3 10.13C381.3 16.5 384.4 25.12 383.9 33.1L383.9 33.1zM317.6 64H66.35L93.78 448H290.2L317.6 64z"/>
</>],
['light',<>
	<path d="M256 188C256 221.1 227.3 248 192 248C156.7 248 128 221.1 128 188C128 163.1 161.7 117.9 180.2 94.49C186.3 86.77 197.7 86.77 203.8 94.49C222.3 117.9 256 163.1 256 188zM223.1 187.9C223.9 187.3 223.4 184.6 221 179.1C218.4 173 214.5 165.8 209.6 157.8C204.1 148.9 197.1 139.1 192 131.8C186 139.1 179.9 148.9 174.4 157.8C169.5 165.8 165.6 173 162.1 179.1C160.6 184.6 160.1 187.4 160 187.9C160 188.1 160 188.1 160 188C160 201.5 172.4 216 192 216C211.7 216 224 201.5 224 188C224 188.1 223.1 188.1 223.1 187.9H223.1zM383.9 33.1L351.1 482C350.8 498.9 336.8 512 319.1 512H64.03C47.16 512 33.17 498.9 32.04 482L.0518 34C-.448 25.13 2.675 16.5 8.673 10.13C14.8 3.625 23.19 0 32.07 0H351.9C360.8 0 369.2 3.625 375.3 10.13C381.3 16.5 384.4 25.12 383.9 33.1L383.9 33.1zM329.9 340.9L319.9 345.1C289.5 361.2 253 357.3 226.5 336.1C206.3 319.9 177.7 319.9 157.5 336.1C131 357.3 94.53 361.2 64.12 345.1L54.12 340.9L64.03 479.8L319.1 480L329.9 340.9zM32.04 32L51.47 303.8L78.44 317.3C97.68 326.1 120.8 324.5 137.6 311.1C169.4 285.6 214.6 285.6 246.4 311.1C263.2 324.5 286.3 326.1 305.6 317.3L332.5 303.8L351.1 32L32.04 32z"/>
</>],
['regular',<>
	<path d="M128 196C128 171.1 161.7 125.9 180.2 102.5C186.3 94.77 197.7 94.77 203.8 102.5C222.3 125.9 256 171.1 256 196C256 229.1 227.3 256 192 256C156.7 256 128 229.1 128 196zM383.9 33.1L357.7 451.1C355.6 485.7 327.5 512 293.5 512H96.76C63.18 512 35.25 486.3 32.66 452.9L.0982 34.47C-1.347 15.88 13.34 0 32.07 0H351.9C370.5 0 385.1 15.58 383.9 33.1L383.9 33.1zM314.7 371C283.5 383.9 247.3 379 220.5 357.5C203.8 344.2 180.2 344.2 163.5 357.5C138.2 377.8 104.5 383.3 74.58 373L80.51 449.2C81.16 457.5 88.29 464 96.76 464H293.5C302.1 464 309.3 457.4 309.8 448.1L314.7 371zM49.3 48L70.26 317.4L82.81 324.3C99 333.3 119 331.6 133.5 320.1C167.7 292.7 216.3 292.7 250.5 320.1C264.1 331.6 284.1 333.3 301.2 324.3L318.2 314.9L334.1 48H49.3z"/>
</>],
['solid',<>
	<path d="M256 196C256 229.1 227.3 256 192 256C156.7 256 128 229.1 128 196C128 171.1 161.7 125.9 180.2 102.5C186.3 94.77 197.7 94.77 203.8 102.5C222.3 125.9 256 171.1 256 196V196zM352 0C360.9 0 369.4 3.692 375.4 10.19C381.5 16.69 384.6 25.42 383.9 34.28L355.1 437.7C352.1 479.6 317.3 512 275.3 512H108.7C66.72 512 31.89 479.6 28.9 437.7L.0813 34.28C-.5517 25.42 2.527 16.69 8.58 10.19C14.63 3.692 23.12 0 32 0L352 0zM96 304C116.1 314.1 139.9 314.1 160 304C180.1 293.9 203.9 293.9 224 304C244.1 314.1 267.9 314.1 288 304L300.1 297.5L317.6 64H66.37L83.05 297.5L96 304z"/>
</>],
['thin',<>
	<path d="M256 180C256 213.1 227.3 240 191.1 240C156.7 240 127.1 213.1 127.1 180C127.1 155.1 161.7 109.9 180.2 86.49C186.3 78.77 197.7 78.77 203.8 86.49C222.3 109.9 256 155.1 256 180zM235.7 164.8C232.7 157.8 228.3 149.8 223.2 141.4C213.2 125.2 201 108.8 191.1 97.36C182.1 108.8 170.8 125.2 160.8 141.4C155.7 149.8 151.3 157.8 148.3 164.8C145.1 172.2 143.1 177.2 143.1 180C143.1 203.3 164.5 224 191.1 224C219.5 224 240 203.3 240 180C240 177.2 238.9 172.2 235.7 164.8zM383.9 34L351.1 482C350.9 498.9 336.9 512 319.1 512H64.05C47.18 512 33.18 498.9 32.05 482L.0518 34C-.448 25.13 2.677 16.5 8.677 10.13C14.8 3.625 23.21 0 32.09 0H351.9C360.8 0 369.2 3.625 375.3 10.13C381.3 16.5 384.4 25.13 383.9 34H383.9zM347.6 319.2L327.9 328.1C297.1 343.9 262.3 340.1 235.2 321.3C209.5 302.6 174.5 302.6 148.8 321.3C121.7 340.1 86 343.9 56.11 328.1L36.46 319.2L48.01 480.9C48.58 489.4 55.62 496 64.05 496H319.1C328.4 496 335.4 489.4 336 480.9L347.6 319.2zM16.03 33.1L35.14 300.6L63.26 314.7C87.82 326.1 117.2 324.5 139.4 308.4C170.7 285.6 213.3 285.6 244.6 308.4C266.8 324.5 296.2 326.1 320.7 314.7L348.9 300.6L367.1 32.86C368.2 28.64 366.7 24.26 363.7 21.09C360.6 17.8 356.4 15.1 351.9 15.1H32.08C27.6 15.1 23.42 17.81 20.32 21.1C17.34 24.26 15.77 28.64 16.03 33.1V33.1z"/>
</>],

]);

const GlassWaterDroplet: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

GlassWaterDroplet.displayName = "GlassWaterDroplet";

export default GlassWaterDroplet;
