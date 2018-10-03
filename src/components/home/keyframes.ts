import { keyframes, style } from '@angular/animations';



export const swing = [
    style({transform: 'rotate3d(0,0,1, 15deg)', offset: .2}),
    style({transform: 'rotate3d(0,0,1, -10deg)', offset: .4}),
    style({transform: 'rotate3d(0,0,1, 5deg)', offset: .6}),
    style({transform: 'rotate3d(0,0,1, -5deg)', offset: .8}),
    style({transform: 'none', offset: 1})
]
export const flipIn = [
    style({transform: 'rotate3d(0,1,0, 90deg)', offset: 0}),
    style({transform: 'rotate3d(0,1,0, -20deg)', offset: .4}),
    style({transform: 'rotate3d(0,1,0, 10deg)', offset: .6}),
    style({transform: 'rotate3d(0,1,0, -5deg)', offset: .8}),
    style({transform: 'none', offset: 1})
]