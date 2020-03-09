import { NodeToolbarButtonTypeToPlaygroundMode, PlaygroundMode } from '@/enums'

/**
 * @typedef {Object} PlaygroundStoreModule
 */

/**
 * @type {PlaygroundStoreModule}
 */
export default {
  state: {
    mouse: {
      x: 0,
      y: 0
    },
    mode: PlaygroundMode.Idle
  },
  getters: {
    /**
     * @alias playground/mousePos
     */
    mousePos: state => `(x: ${state.mouse.x}; y: ${state.mouse.y})`
  },
  mutations: {
    /**
     * @alias playground/SET_MOUSE_POS
     */
    SET_MOUSE_POS (state, { x, y }) {
      state.mouse.x = x
      state.mouse.y = y
    },
    /**
     * @alias playground/SET_MODE_BY_NODE_TOOLBAR
     */
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
