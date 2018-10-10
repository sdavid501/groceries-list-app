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
export const bounceOutLeft = [
    style({opacity:1, transform: 'translate3d(20px,0,0)', offset: 0.2}),
    style({opacity: 0, transform: 'translate3d(-2000px,0,0)', offset: 1})
]


export const flipX = [
    style({transform: 'perspective(400px)', offset:0}),
    style({transform: 'perspective(400px) rotate3d(1, 0, 0, -20deg)', offset: 0.3, opacity:1}),
    style({transform: 'perspective(400px) rotate3d(1, 0, 0, 90deg)', offset: 1, opacity: 0})
]

export const bounceInRight = [
    style({transform: 'translate3d(3000px, 0, 0)', opacity:0, offset: 0}),
    style({transform: 'translate3d(-25px, 0, 0)', opacity:1, offset: 0.6}),
    style({transform: 'translate3d(10px, 0, 0)', opacity:1, offset: 0.75}),
    style({transform: 'translate3d(-5px, 0, 0)', opacity:1, offset: 0.9}),
    style({transform: 'translate3d(0, 0, 0)', opacity:1, offset: 1}),
]

export const bounceOutDown = [
    style({transform: 'translate3d(0, 10px, 0)', offset: 0.2}),
    style({transform: 'translate3d(0, -20px, 0)', opacity:1, offset: 0.4}),
    style({transform: 'translate3d(0, -20px, 0)', opacity:1, offset: 0.45}),
    style({transform: 'translate3d(0, 2000px, 0)', opacity:0, offset: 1})
]


