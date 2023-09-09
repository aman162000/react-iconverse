
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M271.7 0C298.4 0 320 21.63 320 48.32V65.6C314.8 64.55 309.5 64 304 64H80C74.52 64 69.17 64.55 64 65.6V48.32C64 21.63 85.63 0 112.3 0L271.7 0zM64 464V446.4C69.17 447.4 74.52 448 80 448H304C309.5 448 314.8 447.4 320 446.4V464C320 490.5 298.5 512 272 512H112C85.49 512 64 490.5 64 464zM180.9 333.3L100.8 256.1C80.72 236.7 80.72 204.5 100.8 185C119.1 166.6 150.3 166.6 169.4 185L192 206.9L214.6 185C233.7 166.6 264 166.6 283.2 185C303.3 204.5 303.3 236.7 283.2 256.1L203.1 333.3C196.9 339.3 187.1 339.3 180.9 333.3V333.3z"/><path className="fa-secondary" d="M304 64C348.2 64 384 99.82 384 144V368C384 412.2 348.2 448 304 448H80C35.82 448 0 412.2 0 368V144C0 99.82 35.82 64 80 64H304zM203.1 333.3L283.2 256.1C303.3 236.7 303.3 204.5 283.2 185C264 166.6 233.7 166.6 214.6 185L192 206.9L169.4 185C150.3 166.6 119.1 166.6 100.8 185C80.72 204.5 80.72 236.7 100.8 256.1L180.9 333.3C187.1 339.3 196.9 339.3 203.1 333.3V333.3z"/>
</>],
['light',<>
	<path d="M288.6 269.1L214.2 340.8C201.8 352.8 182.2 352.8 169.8 340.8L95.44 269.1C70.04 244.6 70.04 203.9 95.44 179.5C119.6 156.2 157.8 156.2 181.9 179.5L192 189.2L202.1 179.5C226.2 156.2 264.4 156.2 288.6 179.5C313.1 203.9 313.1 244.6 288.6 269.1H288.6zM192 233.7L159.7 202.5C147.1 191.2 129.4 191.2 117.7 202.5C105.3 214.4 105.3 234.2 117.7 246.1L192 317.8L266.3 246.1C278.7 234.2 278.7 214.4 266.3 202.5C254.6 191.2 236 191.2 224.3 202.5L192 233.7zM64 65.6V48C64 21.49 85.49 0 112 0H272C298.5 0 320 21.49 320 48V65.6C356.5 73.01 384 105.3 384 144V368C384 406.7 356.5 438.1 320 446.4V464C320 490.5 298.5 512 272 512H112C85.49 512 64 490.5 64 464V446.4C27.48 438.1 0 406.7 0 368V144C0 105.3 27.48 73.01 64 65.6zM96 64H288V48C288 39.16 280.8 32 272 32H112C103.2 32 96 39.16 96 48V64zM112 480H272C280.8 480 288 472.8 288 464V448H96V464C96 472.8 103.2 480 112 480zM32 144V368C32 394.5 53.49 416 80 416H304C330.5 416 352 394.5 352 368V144C352 117.5 330.5 96 304 96H80C53.49 96 32 117.5 32 144z"/>
</>],
['regular',<>
	<path d="M180.9 325.3L112.2 259.1C94.63 242.1 94.63 213.9 112.2 196.9C128.1 180.8 155.5 180.8 172.2 196.9L192 216L211.8 196.9C228.5 180.8 255 180.8 271.8 196.9C289.4 213.9 289.4 242.1 271.8 259.1L203.1 325.3C196.9 331.3 187.1 331.3 180.9 325.3V325.3zM271.7 0C298.4 0 320 21.63 320 48.32V65.6C356.5 73.01 384 105.3 384 144V368C384 406.7 356.5 438.1 320 446.4V464C320 490.5 298.5 512 272 512H112C85.49 512 64 490.5 64 464V446.4C27.48 438.1 0 406.7 0 368V144C0 105.3 27.48 73.01 64 65.6V48.32C64 21.63 85.63 0 112.3 0L271.7 0zM304 112H80C62.33 112 48 126.3 48 144V368C48 385.7 62.33 400 80 400H304C321.7 400 336 385.7 336 368V144C336 126.3 321.7 112 304 112z"/>
</>],
['solid',<>
	<path d="M64 48C64 21.49 85.49 0 112 0H272C298.5 0 320 21.49 320 48H64zM320 464C320 490.5 298.5 512 272 512H112C85.49 512 64 490.5 64 464H320zM0 160C0 115.8 35.82 80 80 80H304C348.2 80 384 115.8 384 160V352C384 396.2 348.2 432 304 432H80C35.82 432 0 396.2 0 352V160zM100.8 264.1L180.9 341.3C187.1 347.3 196.9 347.3 203.1 341.3L283.2 264.1C303.3 244.7 303.3 212.5 283.2 193C264 174.6 233.7 174.6 214.6 193L192 214.9L169.4 193C150.3 174.6 119.1 174.6 100.8 193C80.72 212.5 80.72 244.7 100.8 264.1V264.1z"/>
</>],
['thin',<>
	<path d="M288.7 261.9L208.7 339C199.4 348 184.6 348 175.3 339L95.3 261.9C71.9 239.3 71.9 201.8 95.3 179.3C117.5 157.9 152.7 157.9 174.9 179.3L192 195.7L209.1 179.3C231.3 157.9 266.5 157.9 288.7 179.3C312.1 201.8 312.1 239.3 288.7 261.9zM192 217.1L163.8 190.8C147.8 175.3 122.4 175.3 106.4 190.8C89.53 207.1 89.53 234.1 106.4 250.3L186.4 327.5C189.5 330.5 194.5 330.5 197.6 327.5L277.6 250.3C294.5 234.1 294.5 207.1 277.6 190.8C261.6 175.3 236.2 175.3 220.2 190.8L192 217.1zM64 65.6V40C64 17.91 81.91 0 104 0H280C302.1 0 320 17.91 320 40V65.6C356.5 73.01 384 105.3 384 144V368C384 406.7 356.5 438.1 320 446.4V472C320 494.1 302.1 512 280 512H104C81.91 512 64 494.1 64 472V446.4C27.48 438.1 0 406.7 0 368V144C0 105.3 27.48 73.01 64 65.6zM80 64H304V40C304 26.75 293.3 16 280 16H104C90.75 16 80 26.75 80 40V64zM104 496H280C293.3 496 304 485.3 304 472V448H80V472C80 485.3 90.75 496 104 496zM368 368V144C368 108.7 339.3 80 304 80H80C44.65 80 16 108.7 16 144V368C16 403.3 44.62 431.1 79.94 432H304C339.3 432 368 403.3 368 368z"/>
</>],

]);

const WatchFitness: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={384} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

WatchFitness.displayName = "WatchFitness";

export default WatchFitness;