import { NodeToolbarButtonTypeToPlaygroundMode, PlaygroundMode } from '@/enums'

export default {
  state: {
    mouse: {
      x: 0,
      y: 0
    },
    mode: PlaygroundMode.Idle
  },
  getters: {
    mousePos: state => `(x: ${state.mouse.x}; y: ${state.mouse.y})`
  },
  mutations: {
    SET_MOUSE_POS (state, { x, y }) {
      state.mouse.x = x
      state.mouse.y = y
    },
    SET_MODE_BY_NODE_TOOLBAR (state, { btnType }) {
      const newMode = NodeToolbarButtonTypeToPlaygroundMode[btnType]

      if (state.mode === newMode) {
        state.mode = PlaygroundMode.Idle
      } else {
        state.mode = newMode
      }
    }
  },
  namespaced: true
}
