
import { forwardRef, ReactElement } from "react";
import { IconWeight, Icon, BaseIcon} from "../lib";

const weights = new Map<IconWeight, ReactElement>([
    ['duotone',<>
	<path className="fa-primary" d="M281.6 228.8L281.6 228.8L281.4 228.5C281.2 228.3 281 228 280.7 227.6C280 226.8 279.1 225.7 277.9 224.3C275.4 221.4 271.9 217.7 267.7 213.1C258.9 206.2 248.8 200 240 200C231.2 200 221.1 206.2 212.3 213.1C208.1 217.7 204.6 221.4 202.1 224.3C200.9 225.7 199.1 226.8 199.3 227.6C198.1 228 198.8 228.3 198.6 228.5L198.4 228.8L198.4 228.8C196.3 231.6 192.7 232.7 189.5 231.6C186.2 230.5 184 227.4 184 224C184 206.1 190.7 188.4 200.6 175.2C210.4 162.2 224.5 152 240 152C255.5 152 269.6 162.2 279.4 175.2C289.3 188.4 296 206.1 296 224C296 227.4 293.8 230.5 290.5 231.6C287.3 232.7 283.7 231.6 281.6 228.8V228.8zM91.31 276.7L170.3 355.7C175.4 360.8 184 357.2 184 350.1V330.4C184 319.4 192.1 310.4 204 310.4C215 310.4 224 319.4 224 330.4V416.8C224 469.4 181.4 512 128.8 512C103.6 512 79.34 501.1 61.49 484.1L4.686 427.3C-1.562 421.1-1.562 410.9 4.686 404.7C10.93 398.4 21.07 398.4 27.31 404.7L46.63 424C49.22 426.6 53.41 426.6 55.1 424C58.59 421.4 58.59 417.2 55.1 414.6L4.686 363.3C-1.562 357.1-1.562 346.9 4.686 340.7C10.93 334.4 21.07 334.4 27.31 340.7L78.63 392C81.22 394.6 85.41 394.6 87.1 392C90.59 389.4 90.59 385.2 87.1 382.6L20.69 315.3C14.44 309.1 14.44 298.9 20.69 292.7C26.93 286.4 37.06 286.4 43.31 292.7L110.6 360C113.2 362.6 117.4 362.6 119.1 360C122.6 357.4 122.6 353.2 119.1 350.6L68.69 299.3C62.44 293.1 62.44 282.9 68.69 276.7C74.93 270.4 85.06 270.4 91.31 276.7L91.31 276.7zM571.3 276.7C577.6 282.9 577.6 293.1 571.3 299.3L520 350.6C517.4 353.2 517.4 357.4 520 360C522.6 362.6 526.8 362.6 529.4 360L596.7 292.7C602.9 286.4 613.1 286.4 619.3 292.7C625.6 298.9 625.6 309.1 619.3 315.3L552 382.6C549.4 385.2 549.4 389.4 552 392C554.6 394.6 558.8 394.6 561.4 392L612.7 340.7C618.9 334.4 629.1 334.4 635.3 340.7C641.6 346.9 641.6 357.1 635.3 363.3L584 414.6C581.4 417.2 581.4 421.4 584 424C586.6 426.6 590.8 426.6 593.4 424L612.7 404.7C618.9 398.4 629.1 398.4 635.3 404.7C641.6 410.9 641.6 421.1 635.3 427.3L578.5 484.1C560.7 501.1 536.4 512 511.2 512C458.6 512 416 469.4 416 416.8V330.4C416 319.4 424.1 310.4 436 310.4C447 310.4 456 319.4 456 330.4V350.1C456 357.2 464.6 360.8 469.7 355.7L548.7 276.7C554.9 270.4 565.1 270.4 571.3 276.7L571.3 276.7zM441.6 228.8L441.4 228.5C441.2 228.3 441 228 440.7 227.6C440 226.8 439.1 225.7 437.9 224.3C435.4 221.4 431.9 217.7 427.7 213.1C418.9 206.2 408.8 200 400 200C391.2 200 381.1 206.2 372.3 213.1C368.1 217.7 364.6 221.4 362.1 224.3C360.9 225.7 359.1 226.8 359.3 227.6C358.1 228 358.8 228.3 358.6 228.5L358.4 228.8L358.4 228.8C356.3 231.6 352.7 232.7 349.5 231.6C346.2 230.5 344 227.4 344 224C344 206.1 350.7 188.4 360.6 175.2C370.4 162.2 384.5 152 400 152C415.5 152 429.6 162.2 439.4 175.2C449.3 188.4 456 206.1 456 224C456 227.4 453.8 230.5 450.5 231.6C447.3 232.7 443.7 231.6 441.6 228.8L441.6 228.8z"/><path className="fa-secondary" d="M228.9 495.3C245.9 473.7 256 446.4 256 416.8V386C274.1 394.4 295.4 400 319.1 400C344.6 400 365.9 394.4 384 386V416.8C384 446.4 394.1 473.7 411.1 495.3C382.8 506.1 352.1 512 319.1 512C287.9 512 257.2 506.1 228.9 495.3V495.3zM64.34 242.6C71.31 107.5 183.1 0 319.1 0C456.9 0 568.7 107.5 575.7 242.6C558.9 236.8 539.5 240.6 526.1 254.1L478.1 301.1C469.6 287.4 453.9 278.4 436 278.4C407.3 278.4 384 301.7 384 330.4V349.6C367.2 360.3 345.9 368 319.1 368C294.1 368 272.8 360.3 256 349.6V330.4C256 301.7 232.7 278.4 204 278.4C186.1 278.4 170.4 287.4 161 301.1L113.9 254.1C100.5 240.6 81.15 236.8 64.34 242.6L64.34 242.6zM290.5 231.6C293.8 230.5 295.1 227.4 295.1 224C295.1 206.1 289.3 188.4 279.4 175.2C269.6 162.2 255.5 152 239.1 152C224.5 152 210.4 162.2 200.6 175.2C190.7 188.4 183.1 206.1 183.1 224C183.1 227.4 186.2 230.5 189.5 231.6C192.7 232.7 196.3 231.6 198.4 228.8L198.4 228.8L198.6 228.5C198.8 228.3 198.1 228 199.3 227.6C199.1 226.8 200.9 225.7 202.1 224.3C204.6 221.4 208.1 217.7 212.3 213.1C221.1 206.2 231.2 200 239.1 200C248.8 200 258.9 206.2 267.7 213.1C271.9 217.7 275.4 221.4 277.9 224.3C279.1 225.7 280 226.8 280.7 227.6C281 228 281.2 228.3 281.4 228.5L281.6 228.8L281.6 228.8C283.7 231.6 287.3 232.7 290.5 231.6V231.6zM441.6 228.8C443.7 231.6 447.3 232.7 450.5 231.6C453.8 230.5 456 227.4 456 224C456 206.1 449.3 188.4 439.4 175.2C429.6 162.2 415.5 152 400 152C384.5 152 370.4 162.2 360.6 175.2C350.7 188.4 344 206.1 344 224C344 227.4 346.2 230.5 349.5 231.6C352.7 232.7 356.3 231.6 358.4 228.8L358.4 228.8L358.6 228.5C358.8 228.3 358.1 228 359.3 227.6C359.1 226.8 360.9 225.7 362.1 224.3C364.6 221.4 368.1 217.7 372.3 213.1C381.1 206.2 391.2 200 400 200C408.8 200 418.9 206.2 427.7 213.1C431.9 217.7 435.4 221.4 437.9 224.3C439.1 225.7 440 226.8 440.7 227.6C441 228 441.2 228.3 441.4 228.5L441.6 228.8L441.6 228.8z"/>
</>],
['light',<>
	<path d="M90.24 184.6C81.1 181.4 77.89 172.1 81.07 163.9C118 68.05 211.1 0 319.1 0C428.9 0 521.1 68.05 558.9 163.9C562.1 172.1 558 181.4 549.8 184.6C541.5 187.8 532.2 183.7 529.1 175.4C496.7 91.49 415.3 32 319.1 32C224.7 32 143.3 91.49 110.9 175.4C107.7 183.7 98.49 187.8 90.24 184.6H90.24zM319.1 480C330.1 480 340.1 479.3 349.9 478C358.6 476.9 366.7 483 367.9 491.8C369 500.5 362.9 508.6 354.1 509.7C342.9 511.2 331.6 512 319.1 512C308.4 512 297.1 511.2 285.9 509.7C277.1 508.6 270.1 500.5 272.1 491.8C273.3 483 281.4 476.9 290.1 478C299.9 479.3 309.9 480 319.1 480H319.1zM287.5 396.6C281.5 461.3 227.1 512 160.8 512C127.1 512 94.72 498.6 70.86 474.7L14.06 417.9C-4.052 399.8-4.665 370.8 12.22 352C-4.665 333.2-4.052 304.2 14.06 286.1C15.1 285 16.18 284 17.29 283.1C13.59 267.4 17.84 250.3 30.06 238.1C42.28 225.8 59.44 221.6 75.1 225.3C76.03 224.2 77.02 223.1 78.06 222.1C96.8 203.3 127.2 203.3 145.9 222.1L193 269.1C202.4 255.4 218.1 246.4 236 246.4C264.7 246.4 288 269.7 288 298.4V363.8C297.8 366.5 308.4 368 319.1 368C331.6 368 342.2 366.5 352 363.8V298.4C352 269.7 375.3 246.4 404 246.4C421.9 246.4 437.6 255.4 446.1 269.1L494.1 222.1C512.8 203.3 543.2 203.3 561.9 222.1C562.1 223.1 563.1 224.2 564.9 225.3C580.6 221.6 597.7 225.8 609.9 238.1C622.2 250.3 626.4 267.4 622.7 283.1C623.8 284 624.9 285 625.9 286.1C644.1 304.2 644.7 333.2 627.8 352C644.7 370.8 644.1 399.8 625.9 417.9L569.1 474.7C545.3 498.6 512.9 512 479.2 512C412.9 512 358.5 461.3 352.5 396.6C342.4 398.8 331.6 400 319.1 400C308.4 400 297.6 398.8 287.5 396.6H287.5zM546.5 452.1L603.3 395.3C608.9 389.7 609.5 381 605.1 374.8C604.6 374.1 603.1 373.3 603.3 372.7C597.1 366.4 586.9 366.4 580.7 372.7L561.4 392C558.8 394.6 554.6 394.6 552 392C549.4 389.4 549.4 385.2 552 382.6L603.3 331.3C608.9 325.7 609.5 317 605.1 310.8C604.6 310.1 603.1 309.3 603.3 308.7C597.1 302.4 586.9 302.5 580.7 308.7L529.4 360C526.8 362.6 522.6 362.6 520 360C517.4 357.4 517.4 353.2 520 350.6L587.3 283.3C590.4 280.2 592 276.1 592 272C592 267.9 590.4 263.8 587.3 260.7C584.2 257.6 580.1 256 576 256C571.9 256 567.8 257.6 564.7 260.7L497.4 328C494.8 330.6 490.6 330.6 488 328C485.4 325.4 485.4 321.2 488 318.6L539.3 267.3C545.6 261.1 545.6 250.9 539.3 244.7C538.7 244 537.9 243.4 537.2 242.9C530.1 238.5 522.3 239.1 516.7 244.7L437.7 323.7C432.6 328.8 424 325.2 424 318.1V298.4C424 297.4 423.9 296.4 423.8 295.4C423.7 294.6 423.5 293.7 423.2 292.9C420.8 284.5 413.1 278.4 404 278.4C392.1 278.4 384 287.4 384 298.4V384.8C384 437.4 426.6 480 479.2 480C504.4 480 528.7 469.1 546.5 452.1L546.5 452.1zM152 318.6C154.6 321.2 154.6 325.4 152 328C149.4 330.6 145.2 330.6 142.6 328L75.31 260.7C72.19 257.6 68.1 256 64 256C59.91 256 55.81 257.6 52.69 260.7C49.56 263.8 48 267.9 48 272C48 276.1 49.57 280.2 52.69 283.3L120 350.6C122.6 353.2 122.6 357.4 120 360C117.4 362.6 113.2 362.6 110.6 360L59.31 308.7C53.07 302.4 42.94 302.4 36.69 308.7C36.02 309.3 35.43 310.1 34.91 310.8C30.51 317 31.11 325.7 36.7 331.3L88 382.6C90.59 385.2 90.59 389.4 88 392C85.41 394.6 81.22 394.6 78.63 392L59.31 372.7C53.07 366.4 42.94 366.4 36.69 372.7C36.02 373.3 35.43 374.1 34.91 374.8C30.51 381 31.1 389.7 36.69 395.3L93.49 452.1C111.3 469.1 135.6 480 160.8 480C213.4 480 256 437.4 256 384.8V298.4C256 287.4 247 278.4 236 278.4C226.9 278.4 219.2 284.5 216.8 292.9C216.5 293.7 216.3 294.6 216.2 295.4C216.1 296.4 216 297.4 216 298.4V318.1C216 325.2 207.4 328.8 202.3 323.7L123.3 244.7C117.7 239.1 109 238.5 102.8 242.9C102.1 243.4 101.3 244 100.7 244.7C94.44 250.9 94.44 261.1 100.7 267.3L152 318.6zM220.5 178.5C214.2 185.7 209.7 195.3 207.5 203.9C205.4 212.5 196.7 217.7 188.1 215.5C179.5 213.4 174.3 204.7 176.5 196.1C179.7 183.4 186.3 169 196.3 157.5C206.4 145.9 221.2 136 239.1 136C258.8 136 273.6 145.9 283.7 157.5C293.7 169 300.3 183.4 303.5 196.1C305.7 204.7 300.5 213.4 291.9 215.5C283.3 217.7 274.6 212.5 272.5 203.9C270.3 195.3 265.8 185.7 259.5 178.5C253.4 171.4 246.8 168 240 168C233.2 168 226.6 171.4 220.5 178.5H220.5zM348.1 215.5C339.5 213.4 334.3 204.7 336.5 196.1C339.7 183.4 346.3 169 356.3 157.5C366.4 145.9 381.2 136 400 136C418.8 136 433.6 145.9 443.7 157.5C453.7 169 460.3 183.4 463.5 196.1C465.7 204.7 460.5 213.4 451.9 215.5C443.3 217.7 434.6 212.5 432.5 203.9C430.3 195.3 425.8 185.7 419.5 178.5C413.4 171.4 406.8 168 400 168C393.2 168 386.6 171.4 380.5 178.5C374.2 185.7 369.7 195.3 367.5 203.9C365.4 212.5 356.7 217.7 348.1 215.5H348.1z"/>
</>],
['regular',<>
	<path d="M319.1 352C347.4 352 368.6 342.6 384 331.1V386.5C365.1 394.6 344.6 400 319.1 400C295.4 400 274 394.6 255.1 386.5V331.1C271.4 342.6 292.6 352 319.1 352zM64.34 242.6C71.31 107.5 183.1 0 319.1 0C456.9 0 568.7 107.5 575.7 242.6C559.6 237.1 541.3 240.3 527.1 252.3C525.1 139.1 433.6 48 319.1 48C206.4 48 114 139.1 112 252.3C98.73 240.3 80.37 237.1 64.34 242.6H64.34zM319.1 464C344.2 464 367.4 459.9 389 452.3C393.6 468.1 401.2 482.7 411.1 495.3C382.8 506.1 352.1 512 320 512C287.9 512 257.2 506.1 228.9 495.3C238.8 482.7 246.4 468.1 250.1 452.3C272.6 459.9 295.8 464 320 464H319.1zM281.6 228.8L281.6 228.8L281.4 228.5C281.2 228.3 281 228 280.7 227.6C280 226.8 279.1 225.7 277.9 224.3C275.4 221.4 271.9 217.7 267.7 213.1C258.9 206.2 248.8 200 239.1 200C231.2 200 221.1 206.2 212.3 213.1C208.1 217.7 204.6 221.4 202.1 224.3C200.9 225.7 199.1 226.8 199.3 227.6C198.1 228 198.8 228.3 198.6 228.5L198.4 228.8L198.4 228.8C196.3 231.6 192.7 232.7 189.5 231.6C186.2 230.5 183.1 227.4 183.1 224C183.1 206.1 190.7 188.4 200.6 175.2C210.4 162.2 224.5 152 239.1 152C255.5 152 269.6 162.2 279.4 175.2C289.3 188.4 295.1 206.1 295.1 224C295.1 227.4 293.8 230.5 290.5 231.6C287.3 232.7 283.7 231.6 281.6 228.8V228.8zM441.6 228.8L441.4 228.5C441.2 228.3 441 228 440.7 227.6C440 226.8 439.1 225.7 437.9 224.3C435.4 221.4 431.9 217.7 427.7 213.1C418.9 206.2 408.8 200 400 200C391.2 200 381.1 206.2 372.3 213.1C368.1 217.7 364.6 221.4 362.1 224.3C360.9 225.7 359.1 226.8 359.3 227.6C358.1 228 358.8 228.3 358.6 228.5L358.4 228.8L358.4 228.8C356.3 231.6 352.7 232.7 349.5 231.6C346.2 230.5 344 227.4 344 224C344 206.1 350.7 188.4 360.6 175.2C370.4 162.2 384.5 152 400 152C415.5 152 429.6 162.2 439.4 175.2C449.3 188.4 456 206.1 456 224C456 227.4 453.8 230.5 450.5 231.6C447.3 232.7 443.7 231.6 441.6 228.8L441.6 228.8zM520 350.6C517.4 353.2 517.4 357.4 520 360C522.6 362.6 526.8 362.6 529.4 360L596.7 292.7C602.9 286.4 613.1 286.4 619.3 292.7C625.6 298.9 625.6 309.1 619.3 315.3L552 382.6C549.4 385.2 549.4 389.4 552 392C554.6 394.6 558.8 394.6 561.4 392L612.7 340.7C618.9 334.4 629.1 334.4 635.3 340.7C641.6 346.9 641.6 357.1 635.3 363.3L584 414.6C581.4 417.2 581.4 421.4 584 424C586.6 426.6 590.8 426.6 593.4 424L612.7 404.7C618.9 398.4 629.1 398.4 635.3 404.7C641.6 410.9 641.6 421.1 635.3 427.3L578.5 484.1C560.7 501.1 536.4 512 511.2 512C458.6 512 416 469.4 416 416.8V330.4C416 319.4 424.1 310.4 436 310.4C447 310.4 456 319.4 456 330.4V350.1C456 357.2 464.6 360.8 469.7 355.7L548.7 276.7C554.9 270.4 565.1 270.4 571.3 276.7C577.6 282.9 577.6 293.1 571.3 299.3L520 350.6zM91.31 276.7L170.3 355.7C175.4 360.8 184 357.2 184 350.1V330.4C184 319.4 192.1 310.4 204 310.4C215 310.4 224 319.4 224 330.4V416.8C224 469.4 181.4 512 128.8 512C103.6 512 79.34 501.1 61.49 484.1L4.686 427.3C-1.562 421.1-1.562 410.9 4.686 404.7C10.93 398.4 21.07 398.4 27.31 404.7L46.63 424C49.22 426.6 53.41 426.6 55.1 424C58.59 421.4 58.59 417.2 55.1 414.6L4.686 363.3C-1.562 357.1-1.562 346.9 4.686 340.7C10.93 334.4 21.07 334.4 27.31 340.7L78.63 392C81.22 394.6 85.41 394.6 87.1 392C90.59 389.4 90.59 385.2 87.1 382.6L20.69 315.3C14.44 309.1 14.44 298.9 20.69 292.7C26.93 286.4 37.06 286.4 43.31 292.7L110.6 360C113.2 362.6 117.4 362.6 119.1 360C122.6 357.4 122.6 353.2 119.1 350.6L68.69 299.3C62.44 293.1 62.44 282.9 68.69 276.7C74.93 270.4 85.06 270.4 91.31 276.7L91.31 276.7z"/>
</>],
['solid',<>
	<path d="M411.1 495.3C382.8 506.1 352.1 512 319.1 512C287.9 512 257.2 506.1 228.9 495.3C245.9 473.7 255.1 446.4 255.1 416.8V386C274.1 394.4 295.4 400 319.1 400C344.6 400 365.9 394.4 384 386V416.8C384 446.4 394.1 473.7 411.1 495.3V495.3zM575.7 242.6C558.8 236.8 539.5 240.6 526.1 254.1L478.1 301.1C469.6 287.4 453.9 278.4 436 278.4C407.3 278.4 384 301.7 384 330.4V349.6C367.2 360.3 345.9 368 319.1 368C294.1 368 272.8 360.3 255.1 349.6V330.4C255.1 301.7 232.7 278.4 203.1 278.4C186.1 278.4 170.4 287.4 161 301.1L113.9 254.1C100.5 240.6 81.15 236.8 64.34 242.6C71.31 107.5 183.1 0 319.1 0C456.9 0 568.7 107.5 575.7 242.6V242.6zM281.6 228.8C283.7 231.6 287.3 232.7 290.5 231.6C293.8 230.5 295.1 227.4 295.1 224C295.1 206.1 289.3 188.4 279.4 175.2C269.6 162.2 255.5 152 239.1 152C224.5 152 210.4 162.2 200.6 175.2C190.7 188.4 183.1 206.1 183.1 224C183.1 227.4 186.2 230.5 189.5 231.6C192.7 232.7 196.3 231.6 198.4 228.8L198.4 228.8L198.6 228.5C198.8 228.3 198.1 228 199.3 227.6C199.1 226.8 200.9 225.7 202.1 224.3C204.6 221.4 208.1 217.7 212.3 213.1C221.1 206.2 231.2 200 239.1 200C248.8 200 258.9 206.2 267.7 213.1C271.9 217.7 275.4 221.4 277.9 224.3C279.1 225.7 280 226.8 280.7 227.6C281 228 281.2 228.3 281.4 228.5L281.6 228.8L281.6 228.8zM450.5 231.6C453.8 230.5 456 227.4 456 224C456 206.1 449.3 188.4 439.4 175.2C429.6 162.2 415.5 152 400 152C384.5 152 370.4 162.2 360.6 175.2C350.7 188.4 344 206.1 344 224C344 227.4 346.2 230.5 349.5 231.6C352.7 232.7 356.3 231.6 358.4 228.8L358.4 228.8L358.6 228.5C358.8 228.3 358.1 228 359.3 227.6C359.1 226.8 360.9 225.7 362.1 224.3C364.6 221.4 368.1 217.7 372.3 213.1C381.1 206.2 391.2 200 400 200C408.8 200 418.9 206.2 427.7 213.1C431.9 217.7 435.4 221.4 437.9 224.3C439.1 225.7 440 226.8 440.7 227.6C441 228 441.2 228.3 441.4 228.5L441.6 228.8L441.6 228.8C443.7 231.6 447.3 232.7 450.5 231.6V231.6zM68.69 299.3C62.44 293.1 62.44 282.9 68.69 276.7C74.93 270.4 85.06 270.4 91.31 276.7L170.3 355.7C175.4 360.8 184 357.2 184 350.1V330.4C184 319.4 192.1 310.4 204 310.4C215 310.4 224 319.4 224 330.4V416.8C224 469.4 181.4 512 128.8 512C103.6 512 79.34 501.1 61.49 484.1L4.686 427.3C-1.562 421.1-1.562 410.9 4.686 404.7C10.93 398.4 21.07 398.4 27.31 404.7L46.63 424C49.22 426.6 53.41 426.6 55.1 424C58.59 421.4 58.59 417.2 55.1 414.6L4.686 363.3C-1.562 357.1-1.562 346.9 4.686 340.7C10.93 334.4 21.07 334.4 27.31 340.7L78.63 392C81.22 394.6 85.41 394.6 87.1 392C90.59 389.4 90.59 385.2 87.1 382.6L20.69 315.3C14.44 309.1 14.44 298.9 20.69 292.7C26.93 286.4 37.06 286.4 43.31 292.7L110.6 360C113.2 362.6 117.4 362.6 119.1 360C122.6 357.4 122.6 353.2 119.1 350.6L68.69 299.3zM520 350.6C517.4 353.2 517.4 357.4 520 360C522.6 362.6 526.8 362.6 529.4 360L596.7 292.7C602.9 286.4 613.1 286.4 619.3 292.7C625.6 298.9 625.6 309.1 619.3 315.3L552 382.6C549.4 385.2 549.4 389.4 552 392C554.6 394.6 558.8 394.6 561.4 392L612.7 340.7C618.9 334.4 629.1 334.4 635.3 340.7C641.6 346.9 641.6 357.1 635.3 363.3L584 414.6C581.4 417.2 581.4 421.4 584 424C586.6 426.6 590.8 426.6 593.4 424L612.7 404.7C618.9 398.4 629.1 398.4 635.3 404.7C641.6 410.9 641.6 421.1 635.3 427.3L578.5 484.1C560.7 501.1 536.4 512 511.2 512C458.6 512 416 469.4 416 416.8V330.4C416 319.4 424.1 310.4 436 310.4C447 310.4 456 319.4 456 330.4V350.1C456 357.2 464.6 360.8 469.7 355.7L548.7 276.7C554.9 270.4 565.1 270.4 571.3 276.7C577.6 282.9 577.6 293.1 571.3 299.3L520 350.6z"/>
</>],
['thin',<>
	<path d="M319.1 16C203.4 16 106.1 99.23 84.49 209.5C83.64 213.9 79.44 216.7 75.1 215.9C70.77 215 67.94 210.8 68.79 206.5C91.87 88.78 195.6 0 320 0C444.4 0 548.1 88.78 571.2 206.5C572.1 210.8 569.2 215 564.9 215.9C560.6 216.7 556.4 213.9 555.5 209.5C533.9 99.23 436.6 16 320 16H319.1zM249.5 493.1C250.7 489.7 255 487.1 259.3 488.3C278.7 493.3 299 496 319.1 496C340.1 496 361.3 493.3 380.7 488.3C384.1 487.1 389.3 489.7 390.5 493.1C391.6 498.3 389 502.6 384.7 503.7C364.1 509.1 342.4 512 319.1 512C297.6 512 275.9 509.1 255.3 503.7C250.1 502.6 248.4 498.3 249.5 493.1H249.5zM320 384C344.1 384 366.3 376.1 384 364.5V314.4C384 294.5 400.1 278.4 420 278.4C439.9 278.4 456 294.5 456 314.4V314.7L521.4 249.4C533.9 236.9 554.1 236.9 566.6 249.4C570.1 252.9 572.7 257 574.2 261.4C586.6 253.1 603.6 254.4 614.6 265.4C625.6 276.4 626.9 293.4 618.6 305.8C622.1 307.3 627.1 309.9 630.6 313.4C643.1 325.9 643.1 346.1 630.6 358.6L619.2 370C623.4 371.6 627.3 374 630.6 377.4C643.1 389.9 643.1 410.1 630.6 422.6L573.8 479.4C552.1 500.3 524.7 512 495.2 512C433.8 512 384 462.2 384 400.8V383.2C365.9 393.4 344.6 400 320 400C295.4 400 274.1 393.4 256 383.2V400.8C256 462.2 206.2 512 144.8 512C115.3 512 87.03 500.3 66.18 479.4L9.372 422.6C-3.124 410.1-3.124 389.9 9.372 377.4C12.72 374 16.61 371.6 20.77 370L9.372 358.6C-3.124 346.1-3.124 325.9 9.372 313.4C12.88 309.9 17.01 307.3 21.4 305.8C13.06 293.4 14.38 276.4 25.37 265.4C36.36 254.4 53.36 253.1 65.8 261.4C67.34 257 69.86 252.9 73.37 249.4C85.87 236.9 106.1 236.9 118.6 249.4L183.1 314.7V314.4C183.1 294.5 200.1 278.4 219.1 278.4C239.9 278.4 255.1 294.5 255.1 314.4V364.5C273.7 376.1 295 384 319.1 384H320zM59.31 276.7C53.07 270.4 42.93 270.4 36.69 276.7C30.44 282.9 30.44 293.1 36.69 299.3L103.1 366.6C106.6 369.2 106.6 373.4 103.1 376C101.4 378.6 97.22 378.6 94.63 376L43.31 324.7C40.96 322.3 38.07 320.9 35.03 320.3C29.1 319.3 24.59 320.8 20.69 324.7C14.44 330.9 14.44 341.1 20.69 347.3L71.1 398.6C74.59 401.2 74.59 405.4 71.1 408C69.41 410.6 65.22 410.6 62.63 408L43.31 388.7C40.96 386.3 38.07 384.9 35.03 384.3C29.1 383.3 24.59 384.8 20.69 388.7C14.44 394.9 14.44 405.1 20.69 411.3L77.49 468.1C95.34 485.1 119.6 496 144.8 496C197.4 496 239.1 453.4 239.1 400.8V314.4C239.1 303.4 231 294.4 219.1 294.4C208.1 294.4 199.1 303.4 199.1 314.4V334.1C199.1 341.2 191.4 344.8 186.3 339.7L107.3 260.7C101.1 254.4 90.93 254.4 84.69 260.7C80.79 264.6 79.32 269.1 80.29 275C80.87 278.1 82.34 280.1 84.69 283.3L135.1 334.6C138.6 337.2 138.6 341.4 135.1 344C133.4 346.6 129.2 346.6 126.6 344L59.31 276.7zM513.4 344C510.8 346.6 506.6 346.6 504 344C501.4 341.4 501.4 337.2 504 334.6L555.3 283.3C557.7 280.1 559.1 278.1 559.7 275C560.7 269.1 559.2 264.6 555.3 260.7C549.1 254.4 538.9 254.4 532.7 260.7L453.7 339.7C448.6 344.8 440 341.2 440 334.1V314.4C440 303.4 431 294.4 420 294.4C408.1 294.4 400 303.4 400 314.4V400.8C400 453.4 442.6 496 495.2 496C520.4 496 544.7 485.1 562.5 468.1L619.3 411.3C625.6 405.1 625.6 394.9 619.3 388.7C615.4 384.8 610 383.3 604.1 384.3C601.9 384.9 599 386.3 596.7 388.7L577.4 408C574.8 410.6 570.6 410.6 568 408C565.4 405.4 565.4 401.2 568 398.6L619.3 347.3C625.6 341.1 625.6 330.9 619.3 324.7C615.4 320.8 610 319.3 604.1 320.3C601.9 320.9 599 322.3 596.7 324.7L545.4 376C542.8 378.6 538.6 378.6 536 376C533.4 373.4 533.4 369.2 536 366.6L603.3 299.3C609.6 293.1 609.6 282.9 603.3 276.7C597.1 270.4 586.9 270.4 580.7 276.7L513.4 344zM190.3 231.9C185.1 231 183.1 226.9 183.1 222.5C186.8 207.5 192.7 190.5 201.5 176.1C210.2 163.7 222.1 152 239.8 152C256.6 152 269.4 163.7 278.1 176.1C286.1 190.5 292.9 207.5 295.7 222.5C296.5 226.9 293.6 231 289.3 231.9C284.9 232.7 280.8 229.8 279.1 225.5C277.4 212 272.1 197.1 264.7 185.7C257.1 174.1 248.6 168 239.8 168C231 168 222.5 174.1 214.9 185.7C207.5 197.1 202.2 212 199.7 225.5C198.9 229.8 194.7 232.7 190.3 231.9V231.9zM374.9 185.7C367.5 197.1 362.2 212 359.7 225.5C358.9 229.8 354.7 232.7 350.3 231.9C345.1 231 343.1 226.9 343.1 222.5C346.8 207.5 352.7 190.5 361.5 176.1C370.2 163.7 382.1 152 399.8 152C416.6 152 429.4 163.7 438.1 176.1C446.1 190.5 452.9 207.5 455.7 222.5C456.5 226.9 453.6 231 449.3 231.9C444.9 232.7 440.8 229.8 439.1 225.5C437.4 212 432.1 197.1 424.7 185.7C417.1 174.1 408.6 168 399.8 168C391 168 382.5 174.1 374.9 185.7V185.7z"/>
</>],

]);

const FaceSmilingHands: Icon = forwardRef((props, ref) => (
<BaseIcon viewBoxWidth={640} viewBoxHeight={512} ref={ref} {...props} weights={weights} />
));

FaceSmilingHands.displayName = "FaceSmilingHands";

export default FaceSmilingHands;
