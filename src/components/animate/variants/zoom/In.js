// ----------------------------------------------------------------------

const DISTANCE = 720
const IN = { scale: 1, opacity: 1 }
const OUT = { scale: 0, opacity: 0 }

const TRANSITION_ENTER = {
  duration: 0.64,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const TRANSITION_ENTER_SLOW = {
  duration: 1.5,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const TRANSITION_EXIT = {
  duration: 0.48,
  ease: [0.43, 0.13, 0.23, 0.96],
}

const TRANSITION_EXIT_SLOW = {
  duration: 1.5,
  ease: [0.43, 0.13, 0.23, 0.96],
}

export const varZoomIn = {
  initial: OUT,
  animate: { ...IN, transition: TRANSITION_ENTER },
  exit: { ...OUT, transition: TRANSITION_EXIT },
}
export const varZoomInSlow = {
  initial: OUT,
  animate: { ...IN, transition: TRANSITION_ENTER_SLOW },
  exit: { ...OUT, transition: TRANSITION_EXIT_SLOW },
}

export const varZoomInUp = {
  initial: { ...OUT, translateY: DISTANCE },
  animate: { ...IN, translateY: 0, transition: TRANSITION_ENTER },
  exit: { ...OUT, translateY: DISTANCE, transition: TRANSITION_EXIT },
}

export const varZoomInDown = {
  initial: { ...OUT, translateY: -DISTANCE },
  animate: { ...IN, translateY: 0, transition: TRANSITION_ENTER },
  exit: { ...OUT, translateY: -DISTANCE, transition: TRANSITION_EXIT },
}

export const varZoomInLeft = {
  initial: { ...OUT, translateX: -DISTANCE },
  animate: { ...IN, translateX: 0, transition: TRANSITION_ENTER },
  exit: { ...OUT, translateX: -DISTANCE, transition: TRANSITION_EXIT },
}

export const varZoomInRight = {
  initial: { ...OUT, translateX: DISTANCE },
  animate: { ...IN, translateX: 0, transition: TRANSITION_ENTER },
  exit: { ...OUT, translateX: DISTANCE, transition: TRANSITION_EXIT },
}
